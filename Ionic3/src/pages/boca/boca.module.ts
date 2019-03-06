import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BocaPage } from './boca';

@NgModule({
  declarations: [
    BocaPage,
  ],
  imports: [
    IonicPageModule.forChild(BocaPage),
  ],
})
export class BocaPageModule {}
