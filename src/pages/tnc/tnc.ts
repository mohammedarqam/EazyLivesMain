import { Component } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tnc',
  templateUrl: 'tnc.html',
})
export class TncPage {


  ism: boolean;

  constructor(
    public navCtrl: NavController,
    public plt: Platform,
  ) { }

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