import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
const httpLoaderFactory=(http:HttpClient)=>new TranslateHttpLoader(http,'assets/i18n/','.json')
const translateCompilerFaactory=()=>new TranslateMessageFormatCompiler()
const translateLoder:Provider={
  provide:TranslateLoader,
  useFactory:httpLoaderFactory,
  deps:[HttpClient]
}

const translatecompiler:Provider={
  provide:TranslateCompiler,
  useFactory:translateCompilerFaactory
}
@NgModule()
export class AppTranslateModule {

  static forRoot():ModuleWithProviders<AppTranslateModule>{
    return TranslateModule.forRoot({
      loader:translateLoder,
      compiler:translatecompiler
    })
  }

  static forChild():ModuleWithProviders<AppTranslateModule>{
    return TranslateModule.forRoot({
      loader:translateLoder,
      compiler:translatecompiler,
      isolate:false
    })
  }
 }
