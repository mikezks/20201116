import { Component } from '@angular/core';
import { DynRouterOutletService } from '@company-platform/dynamic-router';


const navigation: { label: string, link: string | any[] }[] = [
  {
    label: 'Home',
    link: []
  },
  {
    label: 'Micro App A: Root',
    link: [{ outlets: { 'mf-a': [] }}]
  },
  {
    label: 'Micro App A: Comp 1',
    link: [{ outlets: { 'mf-a': ['comp-1'] }}]
  },
  {
    label: 'Micro App A: Comp 2',
    link: [{ outlets: { 'mf-a': ['comp-2'] }}]
  },
  {
    label: 'Micro App B: Home',
    link: [{ outlets: { 'mf-b': ['home'] }}]
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigation = navigation;

  get outlets(): string[] {
    return this.outletService.outletNames;
  }

  constructor(private outletService: DynRouterOutletService) {
    this.initOutlets();
  }

  initOutlets(): void {
    this.outletService.addOutletNames([
      'primary',
      'mf-b'
    ]);
  }

  reverseOutlets(): void {
    this.outletService.addOutletNames(
      this.outletService.outletNames.reverse(),
      true
    );
  }
}
