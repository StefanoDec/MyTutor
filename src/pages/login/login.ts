import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistratiPage} from "../registrati/registrati";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordType: string = 'password';
  passwordShow: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  public registrati(){
    this.navCtrl.push(RegistratiPage);
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
