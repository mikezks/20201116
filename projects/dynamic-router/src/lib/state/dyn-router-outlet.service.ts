import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynRouterOutletService {
  outletNames: string[] = [];

  addOutletNames(n: string[], reset = false): void {
    this.outletNames = [
      ...(reset ? [] : this.outletNames),
      ...n
    ];
  }
}
