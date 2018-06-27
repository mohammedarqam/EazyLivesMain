import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, PopoverController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  ism: boolean;
  @ViewChild(Slides) slides: Slides;

  //References
  userRef = firebase.database().ref("Users/");

  //Login Variables
  lemail : string;
  lpass : string;
  //Signup Variables
  sname :string;
  sphone : string;
  semail : string;
  spass : string;


  constructor(
    public navCtrl: NavController,
    public plt: Platform,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
  ) { }

  ionViewDidLoad() {
    if (this.plt.is("core")) {
      this.ism = false;
    } else {
      this.ism = true;
    }
    this.slides.lockSwipes(true);
  }


  signUp(){
    let loading = this.loadingCtrl.create({
      content: 'Signing Up...'
    });
    loading.present();

    firebase.auth().createUserWithEmailAndPassword(this.semail, this.spass).catch(function (error) {
    alert(error.message);
    }).then(()=>{
      this.userRef.child(firebase.auth().currentUser.uid).set({
        Name : this.sname,
        Phone : this.sphone,
        Email : this.semail,
        Password : this.spass

      }).then(()=>{
        if(firebase.auth().currentUser){
          this.gtHome();
        }else{
          
        }
        loading.dismiss();

      })
    });
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });
    loading.present();

    firebase.auth().signInWithEmailAndPassword(this.lemail, this.lpass).catch(function (error) {
      alert(error.message);
    }).then(()=>{
      if (firebase.auth().currentUser) {
        this.gtHome();
      } else {

      }
      loading.dismiss();
    }) ;
  }




/*Slides */
signUpSlide(){
  this.slides.lockSwipes(false);
  this.slides.slideTo(1, 500);
  this.slides.lockSwipes(true);
}

loginSlide(){
  this.slides.lockSwipes(false);
  this.slides.slideTo(0,500);
  this.slides.lockSwipes(true);

}
/*Slides End */


gtHome() {
    this.navCtrl.setRoot("HomePage");
  }


  //Footer Links

  gtContact() {
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






}