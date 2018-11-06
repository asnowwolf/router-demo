import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Some2RoutingModule } from './some2-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    Some2RoutingModule
  ]
})
export class Some2Module { }
