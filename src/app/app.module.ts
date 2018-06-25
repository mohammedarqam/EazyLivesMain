import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { CategoriesPage } from '../pages/categories/categories';
import { LoginPage } from '../pages/login/login';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { FaqPage } from '../pages/faq/faq';
import { PpolicyPage } from '../pages/ppolicy/ppolicy';
import { TncPage } from '../pages/tnc/tnc';


firebase.initializeApp({
      apiKey: "AIzaSyDRiZU7VAD2QXJ90hPzA6r4HPss_kY4QDU",
    authDomain: "esupplier-codebro.firebaseapp.com",
    databaseURL: "https://esupplier-codebro.firebaseio.com",
    projectId: "esupplier-codebro",
    storageBucket: "esupplier-codebro.appspot.com",
    messagingSenderId: "457078122816"
});



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    LoginPage,
    ContactUsPage,
    FaqPage,
    PpolicyPage,
    TncPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    LoginPage,
    ContactUsPage,
    FaqPage,
    PpolicyPage,
    TncPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



// WEBPACK FOOTER //
// ./src/app/app.module.ts