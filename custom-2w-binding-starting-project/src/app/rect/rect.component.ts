import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({ required: true }) size!: { width: string; height: string };
  // the change name is required at the end to let angular know we need a 2way data binding
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // notice the size property now in the html syntax its 2way bindable now

  // with a signal (>17.2)
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // console.log('Click');
    // this.sizeChange.emit({
    //   width: '100',
    //   height: '100',
    // });

    // with signal
    this.size.set({ width: '100', height: '100' });
  }
}
