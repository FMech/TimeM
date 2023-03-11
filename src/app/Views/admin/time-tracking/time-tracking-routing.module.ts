import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackingModule } from './time-tracking.module';
import { TimetrackingComponent } from './timetracking/timetracking.component';

const routes: Routes = [
  {path:'',component:TimetrackingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingRoutingModule { }
