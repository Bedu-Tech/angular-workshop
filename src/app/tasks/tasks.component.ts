import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from "angularfire2/database";

import { TasksService } from "../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private taskText: string;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  addTask(): void{
    this.taskService.tasks.push({text: this.taskText, done: false});
    this.taskText = "";
  }

  toggleTask(index, taskStatus): void{
    this.taskService.tasks.update(index, { done: !taskStatus });
  }

  deleteTask(index): void{
    this.taskService.tasks.remove(index);
  }

}
