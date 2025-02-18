import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  // private interval?: NodeJS.Timeout;
  // another way around for the NodeJS not to be found
  // private interval?: ReturnType<typeof setInterval>;

  // with
  private destroyRef = inject(DestroyRef);
  constructor() {
    // if we have to listen to a signal change we can use effect
    // it receives a onCleanup function which u ca execute for cleanup purposes
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  // we can do a typo in below method name and ts won't complain
  // so to restict this typos we can use implements method to enforce lifecycle methods to be used
  // in the class method

  ngOnInit() {
    // we use this lifecycle method for below purposes
    // only try to use constructor for initialisation purposes
    // this.interval = setInterval(() => {
    //   const rnd = Math.random(); // [0,1)

    //   if (rnd < 0.5) {
    //     this.currentStatus = 'online';
    //   } else if (rnd < 0.9) {
    //     this.currentStatus = 'offline';
    //   } else {
    //     this.currentStatus = 'unknown';
    //   }
    // }, 5000);

    // with DestroyRef
    const interval = setInterval(() => {
      const rnd = Math.random(); // [0,1)

      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
        // this.currentStatus = 'offline';
      } else {
        this.currentStatus.set('unknown');
        // this.currentStatus = 'unknown';
      }
    }, 5000);

    // this way we can add multiple destroyRef listeners
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // alternate way for below is using destroyRef which is newer
  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
