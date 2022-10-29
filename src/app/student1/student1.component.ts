import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component implements OnInit {
public text:string = "";
public link:string ="";
public form:string="";
  constructor() { }

  ngOnInit(): void {
    this.text="this is coading section";
    this.link="https://www.facebook.com/login/";
    this.form="ninad mali";
  }


clickheare(){
    console.log("hello cts batch");
}
}