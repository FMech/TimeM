import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogadminRoutingModule } from './logadmin-routing.module';
import { LogadminComponent } from './logadmin/logadmin.component';


@NgModule({
  declarations: [
    LogadminComponent
  ],
  imports: [
    CommonModule,
    LogadminRoutingModule
  ]
})
export class LogadminModule { }
