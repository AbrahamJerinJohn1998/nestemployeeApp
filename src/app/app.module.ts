import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ApiComponent } from './api/api.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addemp",
    component:AddemployeeComponent
  },
  {
    path:"addtask",
    component:AddtaskComponent
  
  },
  {
    path:"viewall",
    component:AdminviewComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    // ApiComponent,
    AdminloginComponent,
    NavbaradminComponent,
    AdminviewComponent,
    AddtaskComponent,
    AddemployeeComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
