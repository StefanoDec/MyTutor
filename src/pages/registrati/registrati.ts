import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {RegistrazioneDocenteModalPage} from "../registrazione-docente-modal/registrazione-docente-modal";

/**
 * Generated class for the RegistratiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrati',
  templateUrl: 'registrati.html',
})
export class RegistratiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  notify(event){
    //console.log(event.checked);
    if (event.checked) {
      const myModal = this.modal.create(RegistrazioneDocenteModalPage);
      myModal.present();

      myModal.onDidDismiss((data =>{
        console.log(data)
      }))
    }
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistratiPage');
  }

}
