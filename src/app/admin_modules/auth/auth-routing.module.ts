import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "login",
    component: LoginComponent,
    title: "login page"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "register page"
  },

  {
    path: 'task',
    component: TasksComponent,
    data: { title: 'Tasks Page' }
  },
  {
    path: 'create',
    component: CreateTasksComponent,
    data: { title: 'create Page' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
