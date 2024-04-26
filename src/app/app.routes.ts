import { Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
  {path:'', redirectTo:'rxjs-concept',pathMatch:'full'},
  {path:'rxjs-concept',component:RxjsComponent}
];
