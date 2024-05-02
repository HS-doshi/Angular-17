import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent implements OnInit{

  codeSnippet = {
    title:'',
    code:''
  }
  constructor(private dbService : DbService,private route: ActivatedRoute){}

  ngOnInit(): void {
    const docId = this.route.snapshot.paramMap.get('id')
    this.dbService.getSnippetById(docId!).then((data:any)=>{
      this.codeSnippet = data;
    })
  }
}
