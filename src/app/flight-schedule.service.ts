import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { FlightSchedule } from './FlightSchedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {

  private baseURL="http://localhost:9146/flightSchedule";
  constructor(private http:HttpClient) { }

  show(flightSchedule:FlightSchedule):Observable<any>{
    let addURL=this.baseURL+"/add";
    return this.http.post(addURL,flightSchedule,{responseType:'text'});
  }

  showById(id:number):Observable<any>{
    let searchURL=this.baseURL+"/viewById?id="+id;
    return this.http.get(searchURL);
  }

  update(flightSchedule:FlightSchedule):Observable<any>{
    let updateURL=this.baseURL+"/update";
    return this.http.post(updateURL,flightSchedule,{responseType:'text'});
  }

  delete(id:number):Observable<any>{
    let deleteURL=this.baseURL+"/delete?id="+id;
    return this.http.get(deleteURL,{responseType:'text'});
  }

  showAll():Observable<any>{
    alert("inside view all")
    let showURL=this.baseURL+"/viewAll";
    return this.http.get(showURL);
  }
}
