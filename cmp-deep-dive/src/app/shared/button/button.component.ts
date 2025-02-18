import { Component } from '@angular/core';

@Component({
  // selector: 'app-button',
  // this selector creates a wrapper inside it rests the content of html in the DOM
  // to prevent the unnecessary dom element creation
  // selector: 'app-button',
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
