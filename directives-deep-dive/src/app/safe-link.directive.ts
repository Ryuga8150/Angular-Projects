import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  //   standalone false when we are dealing with ngmodule
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  // if below LogDirective would have taken some input we would have specified that in the host property
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      //   const address = (event.target as HTMLAnchorElement).href;

      //   (event.target as HTMLAnchorElement).href =
      //     address + '?from=' + this.queryParam();

      const address = this.hostElementRef.nativeElement.href;

      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
