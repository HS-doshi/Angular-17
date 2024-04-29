import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokoService {

  // constructor(private http:HttpClient) { }
  constructor(private http:HttpClient){}
  getjoke(){
    return  this.http.get('https://api.chucknorris.io/jokes/categories')
  }
}
