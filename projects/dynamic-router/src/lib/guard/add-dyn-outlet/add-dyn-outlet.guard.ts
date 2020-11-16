import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { DynRouterOutletService } from '../../state/dyn-router-outlet.service';

@Injectable({
  providedIn: 'root'
})
export class AddDynOutletGuard implements CanLoad {
  constructor(private outletService: DynRouterOutletService) {}

  canLoad(route: Route): boolean {
    if (route.data?.addDynOutlet && ![
        '',
        'primary'
      ].includes(route.data.addDynOutlet)
    ) {
      this.outletService.addOutletNames([ route.data.addDynOutlet ]);
    }
    return true;
  }
}
