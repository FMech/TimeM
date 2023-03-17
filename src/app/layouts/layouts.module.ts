import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    EmployeeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ]
})
export class LayoutsModule { }
