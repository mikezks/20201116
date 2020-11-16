import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynRouterOuletDirective } from './directives/dyn-router-oulet.directive';


@NgModule({
  declarations: [
    DynRouterOuletDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynRouterOuletDirective
  ]
})
export class DynamicRouterModule { }
