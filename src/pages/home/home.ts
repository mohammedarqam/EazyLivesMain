import { Component } from '@angular/core';
import { NavController,Platform, PopoverController, LoadingController, IonicPage} from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userin: boolean;
  ism : boolean ;
  bannerRef = firebase.database().ref("Banners");
  public banners: Array<any> = [];


  constructor(
  public navCtrl: NavController,
  public plt : Platform,
  public loadingCtrl: LoadingController,
  public popoverCtrl: PopoverController,
  ){}

  
  ionViewDidEnter() {
    this.getBanners();
    if(this.plt.is("core")){
        this.ism = false;
      }else{
        this.ism = true;
      }
      this.checkAuth();
}

  getBanners() {

    this.bannerRef.once('value', itemSnapshot => {
      this.banners = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.banners.push(temp);
        return false;
      });
    });
  }
  
  gtLogin() {
    this.navCtrl.setRoot("LoginPage");
  }

  checkAuth(){
    if (firebase.auth().currentUser) {
      this.userin = true;
      } else {
        this.userin = false;
      }
  
  }
  
  signOut(){
    firebase.auth().signOut().then(()=> {
      let loading = this.loadingCtrl.create({
        content: 'Signing Up...'
      });
      loading.present();
  
  
      this.userin = null;
      this.userin = false;
      loading.dismiss();
    }).catch(function (error) {
      alert(error.message);
    });
  }
  
  gtHome(){
    this.navCtrl.setRoot("HomePage");
  }



//Footer Links

  gtContact(){
    this.navCtrl.setRoot("ContactUsPage");
  }

  gtFaq() {
    this.navCtrl.setRoot("FaqPage");
  }
  gtPP() {
    this.navCtrl.setRoot("PpolicyPage");
  }
  gtTnc() {
    this.navCtrl.setRoot("TncPage");
  }
//Footer links end


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("CategoriesPage");
    popover.present({
      ev: myEvent
    });
  }

  baVenue(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.navCtrl.setRoot("BookAVenuePage").then(()=>{
      loading.dismiss();
    }) ;
  }
}
