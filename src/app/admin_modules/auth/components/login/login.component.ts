import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from '../../services/auth-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private servicesAuth: AuthServicesService,
    private tostar: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService

  ) { }
  loginForm!: FormGroup
  ngOnInit(): void {
    this.creatformslogin()
  }

  creatformslogin() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      role: ['admin']
    })
  }

  Login() {
    this.servicesAuth.login(this.loginForm.value).subscribe(res => {
      localStorage.setItem('token', res.token)
      this.tostar.success("Success", "Login Success")
    
      this.router.navigate(['/auth/task'])
    }
    )
  }
}
