import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = TASKS;

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getTaskById(taskId): Observable<Task> {
    const neededTask = this.tasks.find(task => task.id === taskId);
    return of(neededTask);
  }
}
