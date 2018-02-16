import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { Alert } from './alert';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  exports: [
    AlertComponent
  ],
  providers:[AlertService]
})
export class AlertModule { }
