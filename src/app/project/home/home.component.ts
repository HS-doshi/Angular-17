import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit{

  constructor(private dbService : DbService){}
  items :{id:string,title:string}[]=[];
  ngOnInit(): void {
    this.dbService.getAllSnippets().then((data:any)=>{
      console.log('item  id : ',data)
      this.items = data
      console.log(this.items)
    })
  }
}
