import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // since rest of the components are standalone components
  // they need to be changed to module based components
  // but we can instead use them in imports as it is meant for standalone components

  // migrating to module based components
  declarations: [AppComponent, HeaderComponent, UserComponent],

  // below property is only for the root component
  bootstrap: [AppComponent],

  // browser module is needed to run angular application working with modules
  // we don't need to include DatePipe in this component as it is already included in the imports module
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
