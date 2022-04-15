import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollerPageRoutingModule } from './scroller-routing.module';

import { ScrollerPage } from './scroller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollerPageRoutingModule
  ],
  declarations: [ScrollerPage]
})
export class ScrollerPageModule {}
