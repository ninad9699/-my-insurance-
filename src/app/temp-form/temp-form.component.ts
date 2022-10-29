import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  courses:any =['BE','BCA','BCOM','BSC'];
  fn:any;

  constructor() { }

  ngOnInit(): void {
  }
  // onSubmitForm(frm:any){
  //   console.log(frm.value);
  // }
  onSubmitForm(frm:any)
{
  console.log(frm.value);
}}
