import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./Views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'signupuser',loadChildren:()=>import('./Views/user/signupuser/signupuser.module').then(m=>m.SignupuserModule)},
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./Views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule) },
  {path:'addEmployee',loadChildren:()=>import('./Views/admin/add-employee/add-employee.module').then(m=>m.AddEmployeeModule) },
  {path:'Employees',loadChildren:()=>import('./Views/admin/employees/employees.module').then(m=>m.EmployeesModule)},
  {path:'meetings',loadChildren:()=>import('./Views/admin/meetings/meetings.module').then(m=>m.MeetingsModule)},
  {path:'loginadmin',loadChildren:()=>import('./Views/admin/logadmin/logadmin.module').then(m=>m.LogadminModule) },
  {path:'addMeeting',loadChildren:()=>import('./Views/admin/add-meeting/add-meeting.module').then(m=>m.AddMeetingModule)},
  {path:'todolist',loadChildren:()=>import('./Views/admin/todo-list/todo-list.module').then(m=>m.TodoListModule)},
  {path:'timetracking',loadChildren:()=>import('./Views/admin/time-tracking/time-tracking.module').then(m=>m.TimeTrackingModule)}
  ]},
  {path:'user',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/user/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  
  
]},

  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
