import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, booleanAttribute} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinct, elementAt, filter, first, from, last, of, skip, take, takeLast, takeWhile } from 'rxjs';
import { User } from '../models/user';

function TransformValue(value:string){
  return value;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{
  searchForm!:FormGroup;
  compant =['Wellnest','RoyalNest','Royal','Cheese','RoyalNest','Royal','WellCheese']
  company$ :Observable<string> = from(this.compant)

  // Input decorator useful for recieve data from parent to child!
  // @output decorator will useful for pass data from child to parent!

  // alias is used for as we given another name of in our parent component! -we pass here for access those data.
  @Input({alias:'userName',transform:TransformValue}) name =''
  @Input({transform:booleanAttribute}) fe!:boolean
  @Input() salary!:number

  @Output() myEvent = new EventEmitter<User>()

  constructor( private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name : new FormControl('Start Search!')
    })
    this.searchForm.get('name')?.valueChanges.pipe()
    .subscribe(data=>{
      this.company$.pipe(distinct(),skip(3)).subscribe(data=>{
        console.log(data)
      })
      // distinct will give only unique values.
    })
  }
  checkChar(v:any){
    return v.length < 10 ? true : false
  }
  checkCondition(v:any){
    return v.length > 5 ? false:true
  }
  readValue(){

  }
  users=[
    {name:'Heet',role:'Frontend Developer', employ : 'Internship',FE:true , salary:45000},
    {name:'Prince',role:'Backend Developer', employ : 'Internship',FE:true, salary:44000},
    {name:'Meet',role:'Frontend Developer', employ : 'Internship',FE:true , salary:40000},
    {name:'Dev',role:'Testing', employ : 'Internship',FE:false, salary:40000},
  ];
  sendData(){
    this.myEvent.emit({name: this.name, newSalary : 500000})
  }
}
