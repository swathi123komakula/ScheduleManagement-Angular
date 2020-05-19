import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlightComponent } from './flight/flight.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';


const routes:Routes=[
  {path:'flightSchedule',component:FlightScheduleComponent },
  {path:'flight',component:FlightComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightScheduleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
