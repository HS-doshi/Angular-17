import { Routes } from '@angular/router';
import { LoginComponent } from './project/components/login/login.component';
import { SignUpComponent } from './project/components/sign-up/sign-up.component';
import { NotFoundComponent } from './project/components/not-found/not-found.component';
import { AboutComponent } from './project/components/about/about.component';
import { CreateBinComponent } from './project/components/create-bin/create-bin.component';
import { authGuard } from './project/components/auth.guard';
import { HomeComponent } from './project/home/home.component';
import { ViewSnippetComponent } from './project/view-snippet/view-snippet.component';

export const routes: Routes = [
// Important Note  : Type 'CanActivateFn' is not assignable to type 'any[]'.ts(2322)
// index.d.ts(2586, 5): The expected type comes from property 'canActivate' which is declared here on type 'Route'

// authguard have a syntax of [authguard]  - we can canActive & pass authguard as a array!
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'create',  component:CreateBinComponent,canActivate:[authGuard]},
  {path:'about', loadComponent:()=>import('./project/components/about/about.component')
  .then(m=>m.AboutComponent)
  },
  {path:'snippet/:id', component:ViewSnippetComponent},
  {path:'**', component:NotFoundComponent},
];
