export class Flight{

    
    flightNumber:number;
    carrierName:string;
    flightModel:string;
    seatCapacity:number;
    status:string

    constructor(flightNumber:number,carrierName:string,flightModel:string,seatCapacity:number,status:string){
        this.flightNumber=flightNumber;
        this.carrierName=carrierName;
        this.flightModel=flightModel;
        this.seatCapacity=this.seatCapacity;
        this.status=status;
    }
}