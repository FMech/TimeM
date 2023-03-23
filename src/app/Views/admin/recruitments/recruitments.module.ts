import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentsRoutingModule } from './recruitments-routing.module';
import { RecruitmentsComponent } from './recruitments/recruitments.component';


@NgModule({
  declarations: [
    RecruitmentsComponent
  ],
  imports: [
    CommonModule,
    RecruitmentsRoutingModule
  ]
})
export class RecruitmentsModule { }
