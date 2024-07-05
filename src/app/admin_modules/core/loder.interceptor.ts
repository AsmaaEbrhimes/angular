import { NgxSpinnerService } from 'ngx-spinner';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize } from 'rxjs';

@Injectable()
export class loderInterceptor implements HttpInterceptor {
  constructor(private spinner:NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   this.spinner.show()
    return next.handle(req).pipe(finalize(()=>{
      this.spinner.hide()
    }))
  }
}

