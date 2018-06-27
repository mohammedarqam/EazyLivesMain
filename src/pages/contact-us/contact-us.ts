import { Component } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {


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
