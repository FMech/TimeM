import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupuserRoutingModule } from './signupuser-routing.module';
import { SignupuserComponent } from './signupuser/signupuser.component';


@NgModule({
  declarations: [
    SignupuserComponent
  ],
  imports: [
    CommonModule,
    SignupuserRoutingModule
  ]
})
export class SignupuserModule { }
