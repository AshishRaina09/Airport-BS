import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdUserPage } from './ad-user';

@NgModule({
  declarations: [
    AdUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AdUserPage),
  ],
})
export class AdUserPageModule {}
