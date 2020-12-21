import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { NotFoundError } from '../../model/not-found.error';
import { AppError } from '../../model/app.error';
import { BadInputError } from '../../model/bad-request.error';
import { Response } from 'selenium-webdriver/http';
import { ProxyRequest } from './proxy.request';

export class ProxyService {
  private proxyURL: string = "http://localhost:8080/do";

  constructor(
    private http: HttpClient
  ) { }

  do(url: string, method: string = "GET", requestBody?: any, headers?: Map<string, string>): Observable<any>  {
    console.debug(`calling proxy with the folloing params: ${url}, ${method}, ${requestBody}, ${headers}`);
    return this.http.put(this.proxyURL, new ProxyRequest(method, url, requestBody, headers))
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
