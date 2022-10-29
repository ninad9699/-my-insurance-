import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})
export class LiveFormComponent implements OnInit {
  myForm:any;
  public student:any=[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
     this.myForm =this.fb.group({
       fname:[''],
       lname:[''],
       age:[''],
       course:[''],
       education:['']


     });
    // this.myform=this.fb.group({
    //   fullname:[''],
    //   age:[''],
    //   Qualifaction:['']
     
    // });
  }
  get function1() {
    return this.myForm.controls;
   // return this.myform.controls;
    
  }
  onSubmitLiveForm(){
    alert("Data saved successfully");
    console.log(this.myForm.value);
    this.student.push(this.myForm.value);
    console.log(this.student);
 }
//  onSubmitform(){
//   alert("Data saved successfully");
//   console.log(this.myform.value);
//    this.student.push(this.myForm.value);
//    console.log(this.student);

   get data(){
     return this.student;
   }

   onDelete(i:any){
     this.student.splice(this.student.indexOf(i),1);
 }
}
