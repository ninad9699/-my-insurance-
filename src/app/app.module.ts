import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Student1Component } from './student1/student1.component';
import { DirectivesComponent } from './directives/directives.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LivecoadingComponent } from './livecoading/livecoading.component';
import { LiveFormComponent } from './live-form/live-form.component';
import { LiveformdelEidComponent } from './liveformdel-eid/liveformdel-eid.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicedataComponent } from './servicedata/servicedata.component';
import { CustomDirectiveDirective } from './servicedata/custom-directive.directive';
import { RxJSoprComponent } from './rx-jsopr/rx-jsopr.component';
import { PromiseComponent } from './promise/promise.component';


@NgModule({
  declarations: [
    AppComponent,
    Student1Component,
    DirectivesComponent,
    TempFormComponent,
    ReactiveFormComponent,
    LivecoadingComponent,
    LiveFormComponent,
    LiveformdelEidComponent,
    ServicedataComponent,
    CustomDirectiveDirective,
    RxJSoprComponent,
    PromiseComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
