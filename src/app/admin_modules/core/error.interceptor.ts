import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable()
export class errorInterceptor implements HttpInterceptor {
  constructor(private toster: ToastrService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toster.error(err.error.message)
        if (err.error.message == 'jwt expired') {
          this.router.navigate(['/auth/login'])
          localStorage.removeItem('token')
        }
        throw err
      })
    )
  }
}

