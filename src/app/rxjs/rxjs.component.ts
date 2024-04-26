import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { join } from 'path';
import { Observable, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit{
  // use $ sign while use as a observable, it's good coding sign.
  InternList$ = ['Heet','Prince','Meet','Dev','vansh']

  Intern$ :Observable<string[]> = of(this.InternList$)
  InternData$:any

  @ViewChild('validate')
  validate!:ElementRef

  @ViewChild('getLink')
  getlink!:ElementRef
  constructor(){}

  ngOnInit(): void {
    this.Intern$.subscribe(data=>{
      this.InternData$ = data
    })
  }

  rxjsEventObservable(){
    const btnObservable$  = fromEvent(this.validate?.nativeElement , 'focus')

    btnObservable$.subscribe((data)=>{
      console.log(data)
    })
  }
  getEventObservable(){
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click')

    btnObservable$.subscribe(data=>{
      console.log(data)
    })
  }
}
