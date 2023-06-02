import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CaptainCoasterInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Inside interceptor');
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', `${environment.coasterApiKey}`),
    });

    return next.handle(clonedRequest);
  }
}
