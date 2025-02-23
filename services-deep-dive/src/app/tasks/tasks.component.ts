import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],

  // we can also pass a service by element injector as
  // providers:[TasksService]
  // but this element injector only works in components and direcctives
  // and this way it will be able to this component and the child components

  // if i have two instances of task component
  // then i will have 2 diff instances of TasksService
})
export class TasksComponent {}
