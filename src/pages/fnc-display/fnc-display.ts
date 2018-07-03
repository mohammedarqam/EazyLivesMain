import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform  } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-fnc-display',
  templateUrl: 'fnc-display.html',
})
export class FncDisplayPage {

  ism: boolean;
  functionRef = firebase.database().ref("FunctionHalls/");
  public functions: Array<any> = [];
  public Imgs : Array<any> = [];

  range :string = "5";



  constructor(public navCtrl: NavController,    public plt: Platform,
    public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    if (this.plt.is("core")) {
      this.ism = false;
    } else {
      this.ism = true;
    }

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.functionRef.once('value', itemSnapshot => {
      this.functions = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;

        this.functionRef.child(temp.key+"/Images").once('value',item => {
          this.Imgs=[];
          item.forEach(it =>{
            this.Imgs.push(it.val());
            temp.ImgD = this.Imgs[0].ImageUrl;
          })
        })

        this.functions.push(temp);
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    });
  }
  gtHome() {
    this.navCtrl.setRoot("HomePage");
  }

}
