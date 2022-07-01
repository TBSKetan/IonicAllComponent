import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSelectOptionPageRoutingModule } from './ion-select-option-routing.module';

import { IonSelectOptionPage } from './ion-select-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSelectOptionPageRoutingModule
  ],
  declarations: [IonSelectOptionPage]
})
export class IonSelectOptionPageModule {}
