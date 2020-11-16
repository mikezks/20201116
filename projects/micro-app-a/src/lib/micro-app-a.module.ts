import { NgModule } from '@angular/core';
import { Comp1Component } from './feature-a/container/comp1/comp1.component';
import { Comp2Component } from './feature-a/container/comp2/comp2.component';
import { MicroAppARoutingModule } from './micro-app-a-routing.module';


@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  imports: [
    MicroAppARoutingModule
  ]
})
export class MicroAppAModule { }
