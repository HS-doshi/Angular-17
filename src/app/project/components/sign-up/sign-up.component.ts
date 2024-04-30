import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private router:Router,
              private authLogin : AuthService){}

  register(regForm:NgForm){
    this.authLogin.registerUser(regForm.value.email, regForm.value.password)
    console.log(regForm.value)
    alert('Sign up Successfully!')
    this.router.navigate(['login'])
  }
  reset(resetForm: NgForm){
    resetForm.reset();
  }
}
