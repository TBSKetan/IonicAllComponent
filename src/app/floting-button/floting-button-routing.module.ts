import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlotingButtonPage } from './floting-button.page';

const routes: Routes = [
  {
    path: '',
    component: FlotingButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlotingButtonPageRoutingModule {}
