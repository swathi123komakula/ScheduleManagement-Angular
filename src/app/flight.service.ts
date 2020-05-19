import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseURL="http://localhost:9146/Flight1";
  constructor(private http:HttpClient) { }

  show(flight1:Flight):Observable<any>{
    let addURL=this.baseURL+"/AddFlightPost";
    return this.http.post(addURL,flight1);
  }

  showById(flightNumber:number):Observable<any>{
    let searchURL=this.baseURL+"/viewFlightByNumber?flightNumber="+flightNumber;
    return this.http.get(searchURL);
  }
  update(flightNumber: number, value: any): Observable<Object> {
    let updateURL=this.baseURL+"/flight";
    return this.http.put(`${updateURL}/${flightNumber}`, value);
  }

  // update(flight1:Flight):Observable<any>{
  //   let updateURL=this.baseURL+"/flight/"+flightNumber;
  //   return this.http.put(updateURL,flight1,{responseType:'text'});
  // }

  delete(flightNumber:number):Observable<any>{
    let deleteURL=this.baseURL+"/deleteFlightByNumber?flightNumber="+flightNumber;
    return this.http.get(deleteURL);
  }

  showAll():Observable<any>{
    let showURL=this.baseURL+"/viewFlights";
    return this.http.get(showURL);
  }
}
