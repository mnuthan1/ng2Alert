/**
 * The alert component passes alert messages to the template whenever a message is received from the alert service.
 * It does this by subscribing to the alert service's getAlert() method which returns an Observable.
 * @Component
 * @author Nuthan Kumar
 */
/*
*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { take, map } from 'rxjs/operators';
import { Alert, AlertType, PositionType } from './alert';
import { AlertService } from './alert.service';
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent {
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        console.log("component init");
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            console.log(alert);
            this.alerts.push(alert);
            // if ttl is specified then create delay observable
            if (alert.ttl > 0) {
                let delayedObservable = Observable.of(alert).delay(alert.ttl * 1000);
                this.updatettl(alert);
                delayedObservable.subscribe(data => this.removeAlert(data));
            }
        });
    }

    
    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

   

    getTypeClass(alert: Alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    
    getPositionClass(alert: Alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.position) {
            case PositionType.TOP_LEFT:
                return 'alert-top-left';
            case PositionType.TOP_RIGHT:
                return 'alert-top-right';
            case PositionType.BOTOM_RIGHT:
                return 'alert-bottom-right';
            case PositionType.BOTTOM_LEFT:
                return 'alert-bottom-left';
            case PositionType.DEFAULT:
                return 'alert-default';
        }
    }
    
    getTopPosition(alert: Alert, index: number) {
        switch (alert.position) {
            case PositionType.TOP_LEFT:
            case PositionType.TOP_RIGHT:
            case PositionType.DEFAULT:
                return this.alerts.filter((x, i) => x.position == alert.position && i < index).length * 55;
            default:
                return;
        }
    }
    
    getBottomPosition(alert: Alert, index: number) {
        switch (alert.position) {
            case PositionType.BOTOM_RIGHT:
            case PositionType.BOTTOM_LEFT:
                return this.alerts.filter((x, i) => x.position == alert.position && i < index).length * (55) + 10;
            default:
                return;
        }
    }
    
    getIconType(alert: Alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'done';
            case AlertType.Error:
                return 'error';
            case AlertType.Info:
                return 'info';
            case AlertType.Warning:
                return 'warning';
        }
    }
    
    updatettl(alert: Alert) {
        Observable
            .interval(1000)
            .map(x => {
                alert.ttl = alert.ttl - 1;
            }) // to start from 1 instead of 0
            .take(alert.ttl)
            .subscribe();
    };
}