import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // with signals
  // these are read only so can't be set here
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
