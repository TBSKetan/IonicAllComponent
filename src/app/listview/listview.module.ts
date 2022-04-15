import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListviewPageRoutingModule } from './listview-routing.module';

import { ListviewPage } from './listview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListviewPageRoutingModule
  ],
  declarations: [ListviewPage]
})
export class ListviewPageModule {}
