import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ppolicy',
  templateUrl: 'ppolicy.html',
})
export class PpolicyPage {


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
