import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';

const routes: Routes = [
  {path:'',component:VacationRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationRequestRoutingModule { }
