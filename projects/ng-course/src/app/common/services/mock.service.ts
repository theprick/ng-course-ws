import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService extends DataService {
  constructor(
    http: HttpClient
  ) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

  mockErrorResponse(status: number, statusText: string) {
     return throwError(new HttpErrorResponse({ status: status, statusText: statusText }))
      .pipe(catchError(this.handleError)
    );
    
  }
}
