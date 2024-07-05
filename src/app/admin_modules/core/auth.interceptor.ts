

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newRequest = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
    return next.handle(newRequest);
  }
}

