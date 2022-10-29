import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Data2Service } from '../service/data2.service';
import { Task1Service } from '../service/task1.service';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {
  postData:any;
  // abc:any;
  // backendRespFilter: any = [];
  // id:any;
  // backendResp: any = [];
  // oddEvenCSS: boolean = false;
  constructor(private mySer: DataService, private mySer2:Data2Service , private mySer3: Task1Service) {
 //  this.dataFromService();
  // this.getDataFrombackend();
   this.getDataFromService2();
 //  this.getDataPosts();
  // getUserdAta();
  
   }

  ngOnInit(): void {
  }
  // getDatafromServiceUser() {
  //   console.log(this.mySer3.getUserdAta().subscribe(
  //     (res: any) => {
  //       console.log(res);
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   ));
  // }
  // dataFromService(){
  //   this.mySer.getData().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     },
  //     (err:any)=>{
  //       console.log(err);
  //     }
  //   )
  //   }
    // getDataFrombackend(){
    //   console.log("this is from angular Component");
    //   this.mySer.getDataRealTimeData().subscribe(
    //     (res:any)=>{
    //       console.log(res);
    //       this.postData = res;
    //     },
    //     (err:any)=>{
    //       console.log(err);
        
    //     }
    //   )
    // }
    getDataFromService2(){
      this.mySer2.getData().subscribe(
        (res)=>{
          console.log(res);
          this.postData = res;
          this.postData.map((x:any)=>{
            console.log(x);
            x.year=1999;
          })
          console.log(this.postData);
        },
        (err)=>{
          console.log(err);
        }
      )}
      // getDataPosts(){
      //   console.log(this.mySer3.getPostData().subscribe(
      //     (res:any)=>{
      //       console.log(res);
      //       this.abc = res.slice();
      //       for(let i=0;i<15;i++){
      //         this.backendRespFilter.push(this.abc[i]);
      //         this.id = this.backendRespFilter.indexOf(i)
      //       }
      //     },
      //     (err:any)=>{
      //       console.log(err);
      //     }
      //   ));

      
   // }

    
    
      

}
