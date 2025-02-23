import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// providing service here
// bootstrapApplication(AppComponent, {
//   providers: [TasksService],
// //   this code will always be included in the initial bundle
// // thus tree shaking could not happen
// // so @injectable way is always preffered to inject services into the application
// }).catch((err) => console.error(err));

// providing custom injection token

// the string tasks service token is used for debugging purposes
export const TaskServiceToken = new InjectionToken<TasksService>(
  'tasks-service-token'
);

bootstrapApplication(AppComponent, {
  //   providers: [TasksService],

  // internally its like this
  providers: [{ provide: TaskServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err));
