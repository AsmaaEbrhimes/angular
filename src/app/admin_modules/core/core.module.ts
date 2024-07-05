import { errorInterceptor } from './error.interceptor';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { loderInterceptor } from './loder.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: loderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:errorInterceptor ,
      multi: true
    },
  ]
})
export class CoreModule { }
