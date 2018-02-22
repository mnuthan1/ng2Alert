/*
The alert service enables any component in the application to display alert messages at the top of the page via the alert component.
It has methods for displaying success and error messages, and a getAlert() method that returns an Observable that is used by the alert component
to subscribe to notifications for whenever a message should be displayed.
error , success, warn, info and alert methods are used by other components to display message in UI
clear()  method remove all alerts from the UI
*/
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType, PositionType } from './alert';


@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    
    constructor() {
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, ttl = 0, position= PositionType.DEFAULT) {
        this.alert(AlertType.Success, message, ttl, position,);
    }

    error(message: string, ttl = 0, position= PositionType.DEFAULT) {
        this.alert(AlertType.Error, message, ttl, position);
    }

    info(message: string, ttl = 0, position= PositionType.DEFAULT) {
        this.alert(AlertType.Info, message, ttl, position);
    }

    warn(message: string, ttl = 0, position= PositionType.DEFAULT) {
        this.alert(AlertType.Warning, message, ttl, position);
    }

    alert(type: AlertType, message: string, ttl = 0, position= PositionType.DEFAULT) {
        this.subject.next(<Alert>{ type: type, message: message, ttl: ttl , position: position});
    }

    clear() {
        // clear alerts
        this.subject.next();
    }
}
