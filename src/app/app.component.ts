import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { HomeStudentePage } from '../pages/home-studente/home-studente';
import { LoginPage } from "../pages/login/login";
import { RegistratiPage } from "../pages/registrati/registrati";
import {InserisciLezionePage} from "../pages/inserisci-lezione/inserisci-lezione";
import {LezionePage} from "../pages/lezione/lezione";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages     toggle menu
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Home Studente', component: HomeStudentePage },
      { title: 'Login', component: LoginPage },
      { title: 'Registrati', component: RegistratiPage},
      { title: 'Inserisci Lezione', component: InserisciLezionePage},
      { title: 'Lezione', component: LezionePage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
