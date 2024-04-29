import { Component, OnInit } from '@angular/core';
import { JokoService } from '../service/joko.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit{

  joke='loading'
  constructor(private jokeService: JokoService){}

  ngOnInit() {
   this.getAnotherJoke()
  }
  getAnotherJoke(){
    this.jokeService.getjoke().subscribe({
      next:(data:any)=>this.joke = data.value
    })
  }
}

