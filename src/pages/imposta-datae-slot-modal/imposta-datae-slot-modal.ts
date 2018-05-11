import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ImpostaDataeSlotModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-imposta-datae-slot-modal',
  templateUrl: 'imposta-datae-slot-modal.html',
})
export class ImpostaDataeSlotModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    const data = {
      name : 'mario',
      cognome : 'rossi'
    };
    this.view.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpostaDataeSlotModalPage');
  }

}
