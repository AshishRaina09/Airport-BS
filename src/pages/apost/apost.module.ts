import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApostPage } from './apost';

@NgModule({
  declarations: [
    ApostPage,
  ],
  imports: [
    IonicPageModule.forChild(ApostPage),
  ],
})
export class ApostPageModule {}
