import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeRoutingModule } from './some-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SomeRoutingModule
  ]
})
export class SomeModule { }
