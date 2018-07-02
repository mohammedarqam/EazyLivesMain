import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-book-a-venue',
  templateUrl: 'book-a-venue.html',
})
export class BookAVenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gtfDisplay(){
    this.navCtrl.setRoot("FncDisplayPage")
  }

}
