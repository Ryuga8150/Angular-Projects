import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
    // won't be available at the moment
    // console.log(this.text);
  }

  ngOnInit() {
    // will be available now could be used for http requests
    // console.log(this.text);
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // listens to the change in the entire application
  // so is discouraged to use as it will run that many time
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // content refers to the content projected
  // with the help of ng content
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // runs when some ui update is needed same for
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // view refers to the content present in the html without ng ig
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
