import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Task1Service {

  constructor(private http : HttpClient ) { }
 getUserdAta(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
 getPostData(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
 }
}
