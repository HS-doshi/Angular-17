import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [],
  // providers:[CounterService],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {

  constructor(private counService : CounterService){}

  getCount(){
    return this.counService.getCounter()
  }
  getIncrement(){
    return this.counService.increment()
  }
}
