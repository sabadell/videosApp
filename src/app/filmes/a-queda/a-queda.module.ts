import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AQuedaPageRoutingModule } from './a-queda-routing.module';

import { AQuedaPage } from './a-queda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AQuedaPageRoutingModule
  ],
  declarations: [AQuedaPage]
})
export class AQuedaPageModule {}
