import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinct, elementAt, filter, first, from, last, of, skip, take, takeLast, takeWhile } from 'rxjs';

function TransformValue(value:string){
  return 'Hii '+ value.split(' ').map(upper=>upper.charAt(0).toUpperCase()+ upper.slice(1)).join(' ')
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
  name!:FormControl;
  compant =['Wellnest','RoyalNest','Royal','Cheese','RoyalNest','Royal','WellCheese']
  company$ :Observable<string> = from(this.compant)

  // Input decorator useful for recieve data from parent to child!
  // @output decorator will useful for pass data from child to parent!

  // alias is used for as we given another name of in our parent component! -we pass here for access those data.
  @Input({alias:'userName',transform:TransformValue}) names =''
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
    {name:'Heet',role:'Frontend Developer', employ : 'Internship'},
    {name:'Prince',role:'Backend Developer', employ : 'Internship'},
    {name:'Meet',role:'Frontend Developer', employ : 'Internship'},
    {name:'Dev',role:'Testing', employ : 'Internship'},
  ]
}
