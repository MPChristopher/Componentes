import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';

import { Page1Page } from './page1.page';
import { SharedModule } from '../modules/shared/shared.module';
import { ColorListComponent } from '../color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Page1PageRoutingModule
  ],
  declarations: [Page1Page,ColorListComponent]
})
export class Page1PageModule {}
