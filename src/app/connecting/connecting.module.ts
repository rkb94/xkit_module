import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectingPageRoutingModule } from './connecting-routing.module';

import { ConnectingPage } from './connecting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectingPageRoutingModule
  ],
  declarations: [ConnectingPage]
})
export class ConnectingPageModule {}
