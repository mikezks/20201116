import { AddDynOutletGuard } from '@company-platform/dynamic-router';

const microAppKey = 'mf-a';

export const microAppALazyLoadingConfig = {
  matcher: () => ({ consumed: [] }),
  loadChildren: () => import('./micro-app-a-routing.module')
    .then(m => m.MicroAppARoutingModule),
  outlet: microAppKey,
  data: {
    addDynOutlet: microAppKey
  },
  canLoad: [ AddDynOutletGuard ]
};
