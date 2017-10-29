import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';

const routes: Routes = [
  { path: 'flot', component: FlotComponent },
  { path: 'radial', component: RadialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
