import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeetingRoutingModule } from './add-meeting-routing.module';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';


@NgModule({
  declarations: [
    AddMeetingComponent
  ],
  imports: [
    CommonModule,
    AddMeetingRoutingModule
  ]
})
export class AddMeetingModule { }
