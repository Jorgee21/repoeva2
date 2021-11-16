import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionqPageRoutingModule } from './opcionq-routing.module';

import { OpcionqPage } from './opcionq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionqPageRoutingModule
  ],
  declarations: [OpcionqPage]
})
export class OpcionqPageModule {}
