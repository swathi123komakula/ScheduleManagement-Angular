import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }

  

 bool:boolean;
 bool2:boolean;
 flightNumber:number;
 carrierName:string;
 flightModel:string;
 seatCapacity:number;
 status:string;
 dataString:string;
 switch:string;
 updateFlightNumber:number;
 deleteFlightNumber:number;
 flightList:Flight[];
 flight1:Flight;
 errorMsg:string;

  addFlight(){
    this.switch='add';
    this.flightNumber=null;
    this.carrierName=null;
    this.flightModel=null;
    this.seatCapacity=null;
    this.status=null;
  }

  updateFlight(){
    this.switch='update';
    this.bool=false;
  }

  deleteFlight(){
    this.switch='delete'; 
    this.bool2=false;
    this.flightNumber=null;
  }

  searchFlight(){
    this.switch='search';
    this.flightNumber=null;
  }

  viewFlight(){
    this.switch='view';
    this.flightService.showAll().subscribe(
      data =>{
        this.flightList=data;
      },
      (error)=>{
        alert("No data found!!");
      }
    )
  }
  

  add(){
    let flight=new Flight(this.flightNumber,this.carrierName,this.flightModel,this.seatCapacity,this.status);
    
    this.flightService.show(flight).subscribe(
      data =>{
        this.flight1=data;
        alert("Data added successfully");
      }
    );
  }

  update(){
    this.flight1.carrierName=this.carrierName;
    this.flight1.flightModel=this.flightModel;
    this.flight1.seatCapacity=this.seatCapacity;
    this.flight1.status=this.status
    this.flightService.update(this.flightNumber,this.flight1).subscribe(
      data=>{
        // this.dataString=data;
         alert("Data updated successfully");
      }
    )
  }

  search(){
    this.bool=true;
    this.flightService.showById(this.flightNumber).subscribe(
      data=>{
        this.flight1=data;
        this.carrierName=this.flight1.carrierName;
        this.flightModel=this.flight1.flightModel;
        this.seatCapacity=this.flight1.seatCapacity;
        this.status=this.flight1.status;
      },
      (error)=>{
        this.errorMsg=error;
        alert(this.errorMsg);
        alert("No Data found!!");
      }
    );
    
    
    
    }

  delete(){
    this.flightService.delete(this.flightNumber).subscribe(
      data =>{
        this.dataString=data;
        alert("Data deleted successfully");
      },
      (error)=>{
        alert("No Data found!!");
      }
    )
  }  

  viewNumber(){
    this.bool2=true;
    this.flightService.showById(this.flightNumber).subscribe(
      data =>{
        this.flight1=data;
      },
      (error)=>{
        alert("No data found!!");
      }
    )
  }

}
