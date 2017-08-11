import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private taskText: string;
  private tasks: any[] = [
    { text: 'Tarea 01', done: false },
    { text: 'Tarea 02', done: false }
  ]

  constructor() { }

  ngOnInit() {
  }

  addTask(): void{
    this.tasks.push({ text: this.taskText, done: false });
    this.taskText = "";
  }

  toggleTask(index): void{
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(index): void{
    this.tasks.splice(index, 1);
  }

}
