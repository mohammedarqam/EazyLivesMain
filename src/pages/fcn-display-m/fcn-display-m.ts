import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform  } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-fcn-display-m',
  templateUrl: 'fcn-display-m.html',
})
export class FcnDisplayMPage {

  functionRef = firebase.database().ref("FunctionHalls/");
  public functions: Array<any> = [];
  public loadedFunctions : Array<any> = [];
  public Imgs : Array<any> = [];

  minCapacity : number = this.navParams.get("minCapacity") ;
  maxCapacity : number = this.navParams.get("maxCapacity");

  minPrice : number;
  maxPrice : number;

  range :string = "5";



  constructor(
  public navCtrl: NavController,    
  public plt: Platform,
  public navParams: NavParams, 
  public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.getFunctions();
  }


getFunctions(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.functionRef.once('value', itemSnapshot => {
      let tempArray = [];
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
        tempArray.push(temp);
        return false;
      });
      this.functions = tempArray;
      this.loadedFunctions = tempArray;
    }).then(()=>{
      loading.dismiss();
    });
  }



  initializeItems(): void {
    this.functions = this.loadedFunctions;
  }

  filterMaxCapacity(){
    this.initializeItems();
    if(!this.maxCapacity){
      return;
    }
    this.functions = this.functions.filter((v)=>{
      if(this.maxCapacity && v.MaxCapacity){
        if(this.maxCapacity >= +v.MaxCapacity){
          return true;
        }
        return false;
      }
    });
  }
  
  filterMinCapacity(){
    this.initializeItems();
    if(!this.minCapacity){
      return;
    }
    this.functions = this.functions.filter((v)=>{
      if(this.minCapacity && v.MinCapacity){
        if(this.minCapacity <= +v.MinCapacity){
          return true;
        }
        return false;
      }
    });
  }
  
  filterMinPrice(){
    this.initializeItems();
    if(!this.minPrice){
      return;
    }
    this.functions = this.functions.filter((v)=>{
      if(this.minPrice && v.MBAmount){
        if(this.minPrice <= +v.MBAmount){
          return true;
        }
        return false;
      }
    });
  }

  filterMaxPrice(){
    this.initializeItems();
    if(!this.maxPrice){
      return;
    }
    this.functions = this.functions.filter((v)=>{
      if(this.maxPrice && v.MBAmount){
        if(this.maxPrice >= +v.MBAmount){
          return true;
        }
        return false;
      }
    });
  }

  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }

    this.functions = this.functions.filter((v) => {
      if(v.key && q) {
        if (v.key.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });


  }

  gtFilters(){
    this.navCtrl.push("FiltersMPage");
  }


  gtHome() {
    this.navCtrl.setRoot("HomePage");
  }

}


