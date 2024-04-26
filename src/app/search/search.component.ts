import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  constructor( private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name : new FormControl('Start Search!')
    })
    this.searchForm.get('name')?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(data=>{
      console.log(data)
    })
  }
  readValue(){

  }
}
