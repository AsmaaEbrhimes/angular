import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthServicesService } from '../../services/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private service: AuthServicesService) { }
  registerForm!: FormGroup

  ngOnInit(): void {
    this.createFormRegister()
  }
  register() {
    const model = this.registerForm.value

    this.service.register(model).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
    console.log(this.registerForm.value)
  }

  createFormRegister() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['user'],
    },{validator: this.checkPassword })
  }
  

  checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let password = group.get('password')?.value
    let confarmepass = group.get('confirmPassword')?.value
    return password === confarmepass ? null : { notSame: true }
  }
}


