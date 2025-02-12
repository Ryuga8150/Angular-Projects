import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  //   instead of including the Dateipe in this we can instead
  // use common module which includes common features like Browser Module
  imports: [CommonModule, FormsModule, SharedModule],

  //   since this is the only component that is required outside this module
  exports: [TasksComponent],
})
export class TasksModule {}
