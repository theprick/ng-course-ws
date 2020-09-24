import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { NotFoundError } from '../model/not-found.error';
import { AppError } from '../model/app.error';
import { BadInputError } from '../model/bad-request.error';
import { Response } from 'selenium-webdriver/http';
import { ProxyService } from './proxy/proxy.service';


export class DataService {

  private proxy: ProxyService;

  constructor(        
    private url: string,      
    private http: HttpClient,    
    private useProxy: boolean = true
  ) {
    this.proxy = new ProxyService(http);
  }

  getAll(): Observable<any> {
    console.debug(this.url);
    return this.useProxy ? this.proxy.do(this.url) : this.http.get(this.url).pipe(
      map((response: Response) => response),
      catchError(this.handleError)
    );
  }

  create(resource: any): Observable<any> {
    return this.useProxy ? this.proxy.do(this.url, "POST", resource) : this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    var deleteUrl = this.url + '/' + id;
    return this.useProxy ? this.proxy.do(deleteUrl, "DELETE") : this.http.delete(deleteUrl)
      .pipe(catchError(this.handleError));
  }

  update(id, resource: any): Observable<any> {
    var updateUrl = this.url + '/' + id;
    return this.useProxy ? this.proxy.do(updateUrl, "UPDATE", resource) : this.http.put(updateUrl, resource)
      .pipe(catchError(this.handleError));
  }

  handleError(error: Response) {
    console.debug('Caught error: ', error);
    if (error.status == 400) {
      return throwError(new BadInputError());
    } else if (error.status == 404) {
      return throwError(new NotFoundError());
    } else {
      return throwError(new AppError(error));
    }
  }
}
