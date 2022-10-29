import { Component, OnInit } from '@angular/core';
import { distinct } from 'rxjs';

@Component({
  selector: 'app-liveformdel-eid',
  templateUrl: './liveformdel-eid.component.html',
  styleUrls: ['./liveformdel-eid.component.css']
})
export class LiveformdelEidComponent implements OnInit {
  dataMarks:any = [];
  i:any;
  
  firstName:any;
  lastName:any;
  email:any;
  marks:any;
  showUpdate:boolean = false
  showTable:boolean= false
  // fn:any;
  // data:any=[];
  // showTable:boolean=false;
  // age:any;
  // mail:any;
  // date:any;
  // editIndex:any

  // showButton:boolean=false
  // submitButton:boolean=false

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmitForm(frm:any){
    //console.log(frm.value)
    this.dataMarks.unshift(frm.value)
    if(this.dataMarks.length > 0){
      this.showTable = true
    }
  }
  onDelete(dlt:any){
    //console.log("deleted")
    //console.log(dlt)
    this.dataMarks.forEach((ele:any)=>{
      if(dlt.fname == ele.fname){
        this.i=this.dataMarks.indexOf(dlt)
        this.dataMarks.splice((this.i),1)
      }
    });
  }
  onEdit(edt:any): void{
   // console.log(edt)
    this.firstName = edt.fname
    this.lastName = edt.lname
    this.email = edt.email
    this.marks = edt.marks
    this.i = this.dataMarks.indexOf(edt)
    this.showUpdate = true
  }
  onUpdateForm(frm:any){
    console.log(frm.value)
    //this.i = this.dataMarks.indexOf(updt)this.dataMarks.splice(this.i,1,frm.value)this.showUpdate = false
  }
  // onSubmit(myForm1:any){
  //   console.log(myForm1.value)
  //   this.data.push(myForm1.value)
  //   console.log(this.data)
  //   if(this.data.length>0){
  //     this.showTable=true;
  //   }
  // }

// onDel(y:any){
//   console.log(y)
//   this.data.forEach((element:any)=>{
//     if(y.email==element.email){
//       this.data.splice(this.data.indexOf(y),1)
//     }
//   });
// }
// onEdit(x:any){
//   this.fn=x.fname
//   this.fn=x.lname
//   this.fn=x.email
//   this.fn=x.age
//   this.fn=x.date
//   this.editIndex=this.data.indexOf(x)
//   this.showButton=true
//   this.submitButton=false

// }
// onUpdateTemp(my:any){
//   console.log("Updated");
//   console.log(my.value)
//   this.data.splice(this.editIndex,1,my.value)
//   this.showButton=false
//   this.submitButton=true

// }
}