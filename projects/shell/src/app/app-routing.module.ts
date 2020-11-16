import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { microAppALazyLoadingConfig } from '@company-platform/micro-app-a';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'mf-b'
  },
  microAppALazyLoadingConfig
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
