import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
  editing: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskDescription: string = '';

  addTask() {
    if (this.newTaskDescription) {
      const task: Task = {
        description: this.newTaskDescription,
        completed: false,
        editing: false
      };
      this.tasks.push(task);
      this.newTaskDescription = '';
    }
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: Task) {
    task.editing = !task.editing;
  }
}


