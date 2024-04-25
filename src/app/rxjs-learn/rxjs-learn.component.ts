import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './rxjs-learn.component.html',
  styleUrl: './rxjs-learn.component.css'
})
export class RxjsLearnComponent implements OnInit {

  agents?: Observable<string>
  agentName?:string

  ngOnInit(): void {
      this.agents = new Observable(
        function(observer){
          try{
            observer.next('Wellnest')
            observer.next('Royal Cheese')
            observer.next('Royal Nest')
          }
          catch(e){
            observer.error(e)
          }
        }
      );
      this.agents.subscribe((data)=>{
        this.agentName = data
      })
  }
}
