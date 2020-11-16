import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './feature-a/container/comp1/comp1.component';
import { Comp2Component } from './feature-a/container/comp2/comp2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'comp-1',
        pathMatch: 'full',
      },
      {
        path: 'comp-1',
        component: Comp1Component
      },
      {
        path: 'comp-2',
        component: Comp2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroAppARoutingModule { }
