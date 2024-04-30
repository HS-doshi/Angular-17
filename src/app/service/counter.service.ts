import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count=signal(0);
  doubleCount :Signal<number> = computed(()=>this.count()*2)

  constructor(){
    effect(()=>{
      console.log('Count : ',this.count(),'Double count : ',this.doubleCount())
    })
  }
  getCounter(){
    return this.count();
  }
  increment(){
    this.count.update((oldv)=>{
      return oldv+2;
    })
  }

}
