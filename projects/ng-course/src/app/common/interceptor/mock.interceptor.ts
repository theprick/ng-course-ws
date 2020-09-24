import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA'; 

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //
    // Fake implementation of /api/authenticate
    //
    if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
      let body = JSON.parse(req.body);

      if (body.email === 'mosh@domain.com' && body.password === '1234') {
        return of(new HttpResponse({
          status: 200,
          body: { token: this.token }
        }));
      }
    }

    //
    // Fake implementation of /api/orders
    //
    if (req.url.endsWith('/api/orders') && req.method === 'GET') {
      if (req.headers.get('Authorization') === 'Bearer ' + this.token) {
        return of(new HttpResponse({
          status: 200,
          body: [1, 2, 3]
        }));
      } else {
        return of(new HttpResponse({
          status: 401
        }));
      }
    }

    return next.handle(req);
  }  
}
