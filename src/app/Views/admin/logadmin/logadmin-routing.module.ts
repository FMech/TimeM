import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogadminComponent } from './logadmin/logadmin.component';

const routes: Routes = [
  {path:'',component:LogadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogadminRoutingModule { }
