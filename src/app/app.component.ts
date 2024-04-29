import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Event, RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { User } from './models/user';
import { JokeComponent } from './joke/joke.component';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';
import { CComponent } from './component/c/c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchComponent,JokeComponent, AComponent, BComponent, CComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rxjs';

  users=[
    {name:'Heet',role:'Frontend Developer', employ : 'Internship',FE:true ,  salary:45000},
    {name:'Prince',role:'Backend Developer', employ : 'Internship',FE:true, salary:44000},
    {name:'Meet',role:'Frontend Developer', employ : 'Internship',FE:true, salary:40000},
    {name:'Dev',role:'Testing', employ : 'Internship',FE:false, salary:40000},
  ]
  recieveData(e:User){
    console.log(e)

    const findName =  this.users.findIndex(user=>user.name == e.name)
    this.users[findName].salary = e.newSalary
  }
}
