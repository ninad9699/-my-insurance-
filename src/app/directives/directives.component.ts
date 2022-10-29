import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  age:number=19;
  age1:number=11;
  showData:boolean= false ;
  stud:any=['vikas','ninad','suraj'];
  salary:any=[1000,2000,3000];
  num:any=50;
  ngClass:any;
  ts2:any ;

  constructor() { }

  ngOnInit(): void {
    this.ngClass="ts2"

    
  }
  

}
