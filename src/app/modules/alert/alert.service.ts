/*
The alert service enables any component in the application to display alert messages at the top of the page via the alert component.
It has methods for displaying success and error messages, and a getAlert() method that returns an Observable that is used by the alert component 
to subscribe to notifications for whenever a message should be displayed.
error , success, warn, info and alert methods are used by other components to display message in UI
clear()  method remove all alerts from the UI
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Alert, PositionType, AlertType } from './alert';


@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string,ttl = 0,position=PositionType.DEFAULT, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, ttl, position,keepAfterRouteChange);
    }

    error(message: string,ttl = 0, position=PositionType.DEFAULT,keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message,ttl, position,keepAfterRouteChange);
    }

    info(message: string, ttl = 0,position=PositionType.DEFAULT,keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, ttl,position,keepAfterRouteChange);
    }

    warn(message: string, ttl = 0,position=PositionType.DEFAULT,keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, ttl,position,keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, ttl = 0,position=PositionType.DEFAULT,keepAfterRouteChange = false) {
        console.log("in alert metthod");
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ type: type, message: message,ttl:ttl ,position:position});
    }

    clear() {
        // clear alerts
        this.subject.next();
    }
}