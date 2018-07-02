import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAVenuePage } from './book-a-venue';

@NgModule({
  declarations: [
    BookAVenuePage,
  ],
  imports: [
    IonicPageModule.forChild(BookAVenuePage),
  ],
})
export class BookAVenuePageModule {}
