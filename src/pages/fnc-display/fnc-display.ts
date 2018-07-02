import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-fnc-display',
  templateUrl: 'fnc-display.html',
})
export class FncDisplayPage {

  functionRef = firebase.database().ref("FunctionHalls/");
  public functions: Array<any> = [];
  public Images : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.functionRef.once('value', itemSnapshot => {
      this.functions = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        console.log(itemSnap.child("Images"));
        this.functions.push(temp);
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    })  ;
  }

}
