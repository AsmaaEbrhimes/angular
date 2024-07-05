import { TranslateService } from '@ngx-translate/core';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
constructor(private translate:TranslateService){
  this.translate.setDefaultLang('en')
 }

switchLanguage(language:string){

this.translate.use(language)
}
  title = 'my-crud';
  ngOnInit(): void {
  }
}



