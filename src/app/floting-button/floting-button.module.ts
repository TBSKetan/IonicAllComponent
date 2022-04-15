import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlotingButtonPageRoutingModule } from './floting-button-routing.module';

import { FlotingButtonPage } from './floting-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlotingButtonPageRoutingModule
  ],
  declarations: [FlotingButtonPage]
})
export class FlotingButtonPageModule {}
