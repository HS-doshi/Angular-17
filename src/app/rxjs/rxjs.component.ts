import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit{

  @ViewChild('validate')
  validate!:ElementRef
  constructor(){}
  ngOnInit(): void {

  }
  rxjsEventObservable(){
    const btnObservable$  = fromEvent(this.validate?.nativeElement , 'focus')

    btnObservable$.subscribe((data)=>{
      console.log(data)
    })
  }
}
