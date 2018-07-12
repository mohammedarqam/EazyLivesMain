import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-book-a-venue',
  templateUrl: 'book-a-venue.html',
})
export class BookAVenuePage {
  
  ism: boolean;

  constructor(
  public navCtrl: NavController,    
  public plt: Platform,
  public loadingCtrl  : LoadingController,
  public navParams: NavParams) {
  }

  gtfDisplay(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    if(this.ism){
      this.navCtrl.setRoot("FcnDisplayMPage").then(()=>{
        loading.dismiss();
      }) ;
    }else{
      this.navCtrl.setRoot("FncDisplayPage").then(()=>{
        loading.dismiss()
      });
    }
  }
  ionViewDidLoad() {
    if (this.plt.is("core")) {
      this.ism = false;
    } else {
      this.ism = true;
    }
  }

  gtHome() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.navCtrl.setRoot("HomePage").then(()=>{
      loading.dismiss();
    }) ;
  }


}
