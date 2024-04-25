import { Routes } from '@angular/router';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';

export const routes: Routes = [
  {path:'', redirectTo:'rxjs-concept',pathMatch:'full'},
  {path:'rxjs-concept',component:RxjsLearnComponent}
];
