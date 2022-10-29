import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   myForm:any;
   isFormSubmitted:boolean=false;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:['', [Validators.required]],
      lname:['', [Validators.required]],
      //date:['', Validators.required],
      pass:[''],
      email:['',[Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    })

  }
  get f(){
    return this.myForm.controls;
  }
    onSubmitReactiveForm(){
      // console.log("hello");
      console.log(this.myForm.value);
      //this.isFormSubmitted= true;
   }
}
