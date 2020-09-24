import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from './data.service';

@Injectable()
export class OrderService extends DataService {

  constructor(
    http: HttpClient
  ) {
    super('/api/orders', http);
  }

  /*
  getOrders() {
    return this.http.get('/api/orders').subscribe
      .map(response => response.json());
  }
  */

  getOrders() {
    return this.getAll();
  }
}
