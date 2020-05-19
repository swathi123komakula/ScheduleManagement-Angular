import { Flight } from './Flight';
import { Schedule } from './Schedule';

export class FlightSchedule{
    scheduleFlightId:number;
    flight:Flight;
    availableSeats:number;
    schedule:Schedule;
    cost:number;

    constructor(scheduleFlightId:number,flight:Flight,availableSeats:number,schedule:Schedule,cost:number){
        this.scheduleFlightId=scheduleFlightId;
        this.flight=flight;
        this.availableSeats=availableSeats;
        this.schedule=schedule;
        this.cost=cost;
    }
}