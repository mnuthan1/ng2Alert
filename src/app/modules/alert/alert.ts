import {Observable} from 'rxjs/Rx';

export class Alert {
    type: AlertType;
    message: string;
    ttl:number = 0;
    position:PositionType;
}
 
export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

export enum PositionType {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTOM_RIGHT,
    DEFAULT
}