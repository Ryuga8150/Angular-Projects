import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

// For more shared components we will add them in declarations
@NgModule({
  declarations: [CardComponent],
  //   we don't need to declare the bootstrap property here as its not the root component

  //   we want modules or components to be shared outside this module
  exports: [CardComponent],
})
export class SharedModule {}
