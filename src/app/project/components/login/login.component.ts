import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email  = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
  loginForm = new FormGroup({
    email : this.email,
    password : this.password
  })
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      alert('Login Successfully!')
    }
    else{
      alert('Please Enter Valid Details!')
    }
  }
  reset(){
    this.loginForm.reset();
  }
}
