import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false,
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  // @Output() cancel = new EventEmitter<void>();

  // when we are not using dependency injection
  // @Output() add = new EventEmitter<NewTaskData>();
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // with signals no need to change the form with ngModel
  // enteredTitle = signal('');

  // another way to inject dependency instead of the constructor approach
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
