import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  constructor(private taskService: TaskService){

  }
  
  
  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }


  onCompleteTask(id: string){
    // this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


  
}
