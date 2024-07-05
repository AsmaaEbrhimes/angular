import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TasksComponent } from './components/tasks/tasks.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AuthServicesService } from './services/auth-services.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateTasksComponent,
    TasksComponent
  ],
  imports: [

    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    TableModule,
    MatButtonToggleModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    CalendarModule,
    FloatLabelModule,
    PaginatorModule  
  ]
  ,
  providers: [
    AuthServicesService,
    ConfirmationService,
    MessageService,
    provideNativeDateAdapter()
  ]
})
export class AuthModule { }
