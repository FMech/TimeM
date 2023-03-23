import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
   
    FormsModule,
    TodoListRoutingModule,
    
  ]
})
export class TodoListModule { }
export interface Task {
  description: string;
  completed: boolean;
  editing: boolean;
}