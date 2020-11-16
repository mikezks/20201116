import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div>Home Component</div>
    <input placeholder="Insert name">
    <div>
      <a [routerLink]="[ '', { outlets: { 'mf-a': ['comp-2'] }}]">Micro App A: Comp 2</a>
    </div>
  `
})
export class HomeComponent {
  constructor(public route: ActivatedRoute) {}
}
