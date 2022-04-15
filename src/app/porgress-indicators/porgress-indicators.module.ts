import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorgressIndicatorsPageRoutingModule } from './porgress-indicators-routing.module';

import { PorgressIndicatorsPage } from './porgress-indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorgressIndicatorsPageRoutingModule
  ],
  declarations: [PorgressIndicatorsPage]
})
export class PorgressIndicatorsPageModule {}
