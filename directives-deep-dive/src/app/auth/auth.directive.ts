// For structural Deirective
import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);

  // TemplateRef lets u see the contents inside the ng-template
  private templateRef = inject(TemplateRef);

  // ViewContainerRef lets u see the dom place where it will be rendered
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        // console.log('SHOW ELEMENT');

        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // console.log('DO NOT SHOW ELEMENT');
        this.viewContainerRef.clear();
      }
    });
  }
}
