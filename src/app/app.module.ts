import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    AdminloginComponent,
    NavbaradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
