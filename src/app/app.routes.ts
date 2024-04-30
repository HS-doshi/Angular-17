import { Routes } from '@angular/router';
import { LoginComponent } from './project/components/login/login.component';
import { SignUpComponent } from './project/components/sign-up/sign-up.component';
import { NotFoundComponent } from './project/components/not-found/not-found.component';
import { AboutComponent } from './project/components/about/about.component';
import { CreateBinComponent } from './project/components/create-bin/create-bin.component';

export const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'create', component:CreateBinComponent},
  {path:'about', loadComponent:()=>import('./project/components/about/about.component')
    .then(m=>m.AboutComponent)
  },
  {path:'**', component:NotFoundComponent},
];
