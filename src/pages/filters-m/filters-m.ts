import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filters-m',
  templateUrl: 'filters-m.html',
})
export class FiltersMPage {
    maxCapacity = null;
    minCapacity = null;
    minPrice = null;
    maxPrice = null;
    range = "5";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clear(){
    this.maxCapacity = null;
    this.minCapacity = null;
    this.minPrice = null;
    this.maxPrice = null;
    this.range = "5";
    this.gtFunctions();
  }

apply(){
  this.navCtrl.setRoot("FcnDisplayMPage",{
    maxCapacity : this.maxCapacity,
    minCapacity : this.minCapacity,
    minPrice : this.minPrice,
    maxPrice : this.maxPrice,
  } );
}

gtFunctions(){
  this.navCtrl.setRoot("FcnDisplayMPage");
}

}
