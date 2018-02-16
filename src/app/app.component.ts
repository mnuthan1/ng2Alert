import { Component } from '@angular/core';
import { AlertService } from './modules/alert/alert.service';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  constructor(private alertService: AlertService) { }
  ngAfterViewInit(): void {
    this.alertService.error("error.message",10);
  }
}
