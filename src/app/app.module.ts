import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomeStudentePage } from '../pages/home-studente/home-studente';
import { LoginPage } from '../pages/login/login';
import { RegistratiPage } from "../pages/registrati/registrati";
import {RegistrazioneDocenteModalPage} from "../pages/registrazione-docente-modal/registrazione-docente-modal";
import {InserisciLezionePage} from "../pages/inserisci-lezione/inserisci-lezione";
import {ImpostaDataeSlotModalPage} from "../pages/imposta-datae-slot-modal/imposta-datae-slot-modal";
import {LezionePage} from "../pages/lezione/lezione";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from "@ionic-native/google-maps";





@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomeStudentePage,
    LoginPage,
    RegistratiPage,
    RegistrazioneDocenteModalPage,
    InserisciLezionePage,
    ImpostaDataeSlotModalPage,
    LezionePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomeStudentePage,
    LoginPage,
    RegistratiPage,
    RegistrazioneDocenteModalPage,
    InserisciLezionePage,
    ImpostaDataeSlotModalPage,
    LezionePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
