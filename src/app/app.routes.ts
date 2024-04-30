import { Routes } from '@angular/router';
import { LoginComponent } from './project/components/login/login.component';
import { SignUpComponent } from './project/components/sign-up/sign-up.component';
import { NavbarComponent } from './project/components/navbar/navbar.component';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
];
