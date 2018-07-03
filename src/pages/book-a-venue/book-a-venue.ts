import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-book-a-venue',
  templateUrl: 'book-a-venue.html',
})
export class BookAVenuePage {
  
  ism: boolean;

  constructor(public navCtrl: NavController,    public plt: Platform,
    public navParams: NavParams) {
  }

  gtfDisplay(){
    this.navCtrl.setRoot("FncDisplayPage")
  }
  ionViewDidLoad() {
    if (this.plt.is("core")) {
      this.ism = false;
    } else {
      this.ism = true;
    }
  }

  gtHome() {
    this.navCtrl.setRoot("HomePage");
  }


}
