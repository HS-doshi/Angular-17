import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService  : AuthService){}
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
  // ! -  is used for it's email & password fill definately exists.
  // when we use ? - it mean it may have null value,  so it's considered as a null or undefined.
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.loginService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
    }
    else{
      alert('Please Enter Valid Details!')
    }
  }
  reset(){
    this.loginForm.reset();
  }
}
