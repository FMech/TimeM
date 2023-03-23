import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./Views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'signupuser',loadChildren:()=>import('./Views/user/signupuser/signupuser.module').then(m=>m.SignupuserModule)},
    {path:'application',loadChildren:()=>import('./Views/user/application/application.module').then(m=>m.ApplicationModule)},
    {path:'success',loadChildren:()=>import('./Views/user/success/success.module').then(m=>m.SuccessModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./Views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule) },
  {path:'addEmployee',loadChildren:()=>import('./Views/admin/add-employee/add-employee.module').then(m=>m.AddEmployeeModule) },
  {path:'Employees',loadChildren:()=>import('./Views/admin/employees/employees.module').then(m=>m.EmployeesModule)},
  {path:'meetings',loadChildren:()=>import('./Views/admin/meetings/meetings.module').then(m=>m.MeetingsModule)},
  {path:'recruitment',loadChildren:()=>import('./Views/admin/recruitments/recruitments.module').then(m=>m.RecruitmentsModule)},
 
  {path:'addMeeting',loadChildren:()=>import('./Views/admin/add-meeting/add-meeting.module').then(m=>m.AddMeetingModule)},
  {path:'todolist',loadChildren:()=>import('./Views/admin/todo-list/todo-list.module').then(m=>m.TodoListModule)},
  {path:'timetracking',loadChildren:()=>import('./Views/admin/time-tracking/time-tracking.module').then(m=>m.TimeTrackingModule)}
  ]},
  {path:'user',component:EmployeeLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/user/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'EditProfile',loadChildren:()=>import('./Views/user/edit-profile/edit-profile.module').then(m=>m.EditProfileModule)},
    {path:'dashboard',loadChildren:()=>import('./Views/user/dashboard/dashboard.module').then(m=>m.DashboardModule) },
  {path:'profile',loadChildren:()=>import('./Views/user/profile/profile.module').then(m=>m.ProfileModule)},
  {path:'vacation',loadChildren:()=>import('./Views/user/vacation-request/vacation-request.module').then(m=>m.VacationRequestModule)},
  {path:'timetracking',loadChildren:()=>import('./Views/user/time-tracking/time-tracking.module').then(m=>m.TimeTrackingModule)},
  {path:'announcements',loadChildren:()=>import('./Views/user/announcements/announcements.module').then(m=>m.AnnouncementsModule)},
]},

  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
