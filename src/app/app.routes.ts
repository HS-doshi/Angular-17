import { Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {path:'', redirectTo:'rxjs-search',pathMatch:'full'},
  {path:'rxjs-concept',component:RxjsComponent},
  {path:'rxjs-search' , component:SearchComponent}
];
