import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersMPage } from './filters-m';

@NgModule({
  declarations: [
    FiltersMPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersMPage),
  ],
})
export class FiltersMPageModule {}
