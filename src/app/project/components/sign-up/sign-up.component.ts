import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private router:Router){}

  register(regForm:NgForm){
    console.log(regForm.value)
    alert('Sign up Successfully!')
    this.router.navigate(['login'])
  }
  reset(resetForm: NgForm){
    resetForm.reset();
  }
}
