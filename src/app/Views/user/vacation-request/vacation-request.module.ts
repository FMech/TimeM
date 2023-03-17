import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationRequestRoutingModule } from './vacation-request-routing.module';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';


@NgModule({
  declarations: [
    VacationRequestComponent
  ],
  imports: [
    CommonModule,
    VacationRequestRoutingModule
  ]
})
export class VacationRequestModule { }
