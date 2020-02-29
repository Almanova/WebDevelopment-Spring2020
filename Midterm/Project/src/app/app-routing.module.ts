import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent }  from './task-details/task-details.component';


const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
