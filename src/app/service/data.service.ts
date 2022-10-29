import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public data1 ="this is sample message";
  constructor(private http: HttpClient) { }
 
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getDataRealTimeData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPromData(){
    return this.http.get('https://dummyjson.com/products/categories').toPromise();
   }
}
