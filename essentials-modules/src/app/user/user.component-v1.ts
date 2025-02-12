import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component-v1.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // uses the concept of zone.js
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // before using signals
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    // setting signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
