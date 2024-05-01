import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = () => {

  // In authguard we can't create constructor or private access modifier or any services,
  // we can inject method! & do it!
  const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isAuthenticated()){
    return true;
  }else{
    alert('Please login & then create it!')
    router.navigate(['login'])
    return false;
  }
};
