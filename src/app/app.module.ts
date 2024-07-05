import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet } from '@angular/router';
import { NavbarFooterProfileComponent } from './app_layout/pages/navbar-footer-profile/navbar-footer-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { CoreModule } from './admin_modules/core/core.module';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarFooterProfileComponent,
  ],
  imports: [
    CoreModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient){
return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}





















