import { Airport } from './Airport';

export class Schedule{
    sourceAirport:Airport;
    destinationAirport:Airport;
    arrivalTime:Date;
    departureTime:Date;

    constructor(sourceAirport:Airport,destinationAirport:Airport,arrivalTime:Date,departureTime:Date){
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
        this.arrivalTime=arrivalTime;
        this.departureTime=departureTime;
    }
}