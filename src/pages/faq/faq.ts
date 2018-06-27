import { Component } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {



  ism: boolean;

  q1 : boolean = false;
  q2: boolean = false;
  q3: boolean = false;
  q4: boolean = false;



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


  t1(){
    this.q1 = ! this.q1;
  }

  t2() {
  this.q2 = !this.q2;
  }

  t3() {
    this.q3 = !this.q3;
  }

  t4() {
    this.q4 = !this.q4;
  }



}
