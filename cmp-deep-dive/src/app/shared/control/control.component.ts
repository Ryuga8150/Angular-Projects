import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',

    // click: 'onClick()',
  },

  // another backward way for above could be using HostDecorator
})
export class ControlComponent {
  // we are using an alias to actually bind to actual property
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  //   // Programmaticlaly accessing
  //   console.log(this.el);
  // }

  private el = inject(ElementRef);
  label = input.required<string>();

  // Accesssing contents inside ng content
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild('input');

  onClick() {
    console.log('Clicked');

    // Programmaticlaly accessing
    console.log(this.el);

    console.log(this.control());
  }
}
