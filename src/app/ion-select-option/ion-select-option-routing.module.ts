import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSelectOptionPage } from './ion-select-option.page';

const routes: Routes = [
  {
    path: '',
    component: IonSelectOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSelectOptionPageRoutingModule {}
