import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  constructor(private counService : CounterService){}

  getCount(){
    return this.counService.getCounter()
  }
  getIncrement(){
    return this.counService.increment()
  }
  doubleCount(){
    return this.counService.doubleCount();
  }
}
