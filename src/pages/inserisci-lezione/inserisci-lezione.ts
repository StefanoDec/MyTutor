import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ImpostaDataeSlotModalPage } from "../imposta-datae-slot-modal/imposta-datae-slot-modal";

/**
 * Generated class for the InserisciLezionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inserisci-lezione',
  templateUrl: 'inserisci-lezione.html',
})
export class InserisciLezionePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ImpostaDataeSlot(){
    const myModal = this.modal.create(ImpostaDataeSlotModalPage);
    myModal.present();

    myModal.onDidDismiss((data =>{
      console.log(data)
    }))
  }
}
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad InserisciLezionePage');
  // }


