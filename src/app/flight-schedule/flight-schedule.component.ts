import { Component, OnInit } from '@angular/core';
import { FlightSchedule } from '../FlightSchedule';
import { FlightScheduleService } from '../flight-schedule.service';
import { Flight } from '../Flight';
import { Airport } from '../Airport';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {

  constructor(private flightScheduleService:FlightScheduleService) { }

  ngOnInit(): void {
  }

  bool:boolean;
  bool2:boolean;
  scheduleId:number;
  sourceAirportCode:string;
  destinationAirportCode:string;
  departureTime:Date;
  arrivalTime:Date;
  cost:number;
  flightNo:number;
  dataString:string;
  switch:string;
  updateScheduleId:number;
  deleteScheduleId:number;
  flightSchedule:FlightSchedule;
  flightScheduleList:FlightSchedule[];

  addFlightSchedule(){
    this.switch='add';
    this.scheduleId=null;
    this.sourceAirportCode=null;
    this.destinationAirportCode=null;
    this.departureTime=null;
    this.arrivalTime=null;
    this.cost=null;
    this.flightNo=null;
  }

  updateFlightSchedule(){
    this.switch='update';
    this.bool=false;
    this.scheduleId=null;
  }

  deleteFlightSchedule(){
    this.switch='delete'; 
    this.bool2=false;
    this.scheduleId=null;
  }

  searchFlightSchedule(){
    this.switch='search';
    this.scheduleId=null;
  }

  viewFlightSchedule(){
    this.switch='view';
    this.flightScheduleService.showAll().subscribe(
      data =>{
        this.flightScheduleList=data;
      },
      (error)=>{
        alert("No data found!!");
      }
    )
  }
  

  add(){
    let flight=new Flight(this.flightNo,null,null,null,null);
    let sourceAirport=new Airport(this.sourceAirportCode,null,null);
    let destinationAirport=new Airport(this.destinationAirportCode,null,null);
    let schedule=new Schedule(sourceAirport,destinationAirport,this.arrivalTime,this.departureTime);
    let flightSchedule=new FlightSchedule(this.scheduleId,flight,0,schedule,this.cost);

    this.flightScheduleService.show(flightSchedule).subscribe(
      data =>{
        this.dataString=data;
        alert(this.dataString);
      },
      (error)=>{
        alert("No field should be left empty!!")
      }
    );
  }

  update(){
    this.flightSchedule.schedule.sourceAirport.airportCode=this.sourceAirportCode;
    this.flightSchedule.schedule.destinationAirport.airportCode=this.destinationAirportCode;
    this.flightSchedule.schedule.arrivalTime=this.arrivalTime;
    this.flightSchedule.schedule.departureTime=this.departureTime;
    this.flightSchedule.cost=this.cost;
    this.flightScheduleService.update(this.flightSchedule).subscribe(
      data=>{
        this.dataString=data;
        alert(data);
      }
    )
  }

  search(){
    this.bool=true;
    this.flightScheduleService.showById(this.scheduleId).subscribe(
      data=>{
        this.flightSchedule=data;
      },
      (error)=>{
        alert("No data found!!");
      }
    );
    
    
    this.sourceAirportCode=this.flightSchedule.schedule.sourceAirport.airportCode;
    this.destinationAirportCode=this.flightSchedule.schedule.destinationAirport.airportCode;
    this.departureTime=this.flightSchedule.schedule.departureTime;
    this.arrivalTime=this.flightSchedule.schedule.arrivalTime;
    this.cost=this.flightSchedule.cost;
  }

  delete(){
    this.flightScheduleService.delete(this.scheduleId).subscribe(
      data =>{
        this.dataString=data;
        alert(this.dataString);
      },
      (error)=>{
        alert("No data found!!");
      }
    )
  }  
  viewId(){
    this.bool2=true;
    this.flightScheduleService.showById(this.scheduleId).subscribe(
      data =>{
        this.flightSchedule=data;
      },
      (error)=>{
        alert("No data found!!");
      }
    )
  }



}
