import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-livecoading',
  templateUrl: './livecoading.component.html',
  styleUrls: ['./livecoading.component.css']
})
export class LivecoadingComponent implements OnInit {

  myForm:any;

  //  headers=["ID","NAME","AGE","GENDER","COUNTRY"];

   //rows=[
    //  {
    //  "ID" : "1",
    //  "NAME" : "NINAD",
    //  "AGE" : "23",
    //  "GENDER":"MALE",
    //  "COUNTRY" : "INDIA"
  
        // "ID" : "2",
//     "NAME" : "VIVEK",
//     "AGE" : "23",
//     "GENDER":"MALE",
//     "COUNTRY" : "INDIA"

  
//     "ID" : "3",
//     "NAME" : "VIKAS",
//     "AGE" : "23",
//     "GENDER":"MALE",
//     "COUNTRY" : "INDIA"
  
  
//     "ID" : "4",
//     "NAME" : "SATISH",
//     "AGE" : "23",
//     "GENDER":"MALE",
//     "COUNTRY" : "INDIA"
 //}

 // ]

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:['',],
      lname:['',],
      age:[],
      pass:[]

    })
  //   console.table(this.rows);
  //   this.test.forEach(item => {

  //   console.log(item);
  //   if (item['age']>=45){
  //     console.log('age is above 45')
  //   }
  //   else{
  //     console.log('age is below 45')
  //   }
  // });
}
get f(){
  return this.myForm.controls;
}
   onSubmitReactiveForm(){
    console.log(this.myForm.value)
   }
  
  //   rows=[
  //     {
  //     "ID" : "1",
  //     "NAME" : "NINAD",
  //     "AGE" : 23,
  //     "GENDER":"MALE",
  //     "COUNTRY" : "INDIA"
  //     },
  //    {
  //      "ID" : "2",
  //     "NAME" : "VIVEK",
  //     "AGE" : 56,
  //     "GENDER":"MALE",
  //     "COUNTRY" : "INDIA"
  //      },
  //      {
  //      "ID" : "3",
  //     "NAME" : "VIKAS",
  //     "AGE" : 68,
  //     "GENDER":"MALE",
  //     "COUNTRY" : "INDIA"
  //      } ,  
   
  //     {"ID" : "4",
  //     "NAME" : "SATISH",
  //     "AGE" : 20,
  //     "GENDER":"MALE",
  //     "COUNTRY" : "INDIA"
  // }
  //   ];

  // //  sortAge(){
  // //   if (this.order){
  // //     let newarr = this.showData.sort((a,b)=> a.AGE - b.AGE);
  // //     this.showData= newarr;

  // //   }
  // //   else{
  // //     let newarr = this.showData.sort((a,b)=> b.AGE - a.AGE);
  // //     this.showData= newarr;
  // //   }
  // //   this.order =  !this.order

  // //  }


  //   deletData(){
  //     this.rows=[]=[];
  //   }

}
