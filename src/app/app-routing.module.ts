import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavFooterComponent } from './app_layout/pages/nav-footer/nav-footer.component';


const routes: Routes = [
  {
    path: '',
    component: NavFooterComponent,
    children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () => import('./admin_modules/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

