import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  // providers:[CounterService],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  constructor(private counService : CounterService){}

  getCount(){
    return this.counService.getCounter()
  }
  getIncrement(){
    return this.counService.increment()
  }
}
