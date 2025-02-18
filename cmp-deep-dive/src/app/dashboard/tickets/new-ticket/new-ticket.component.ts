import {
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // with signals
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<Ticket>();
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);

    // this.form?.nativeElement.reset();

    // with signal
    // this.form().nativeElement.reset();

    this.form().nativeElement.reset();

    this.add.emit({ title, text: ticketText });
  }
}
