import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from './fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';
import { RadialComponent } from './charts/radial/radial.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  {
    path: 'charts',
    children: [
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false,
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
