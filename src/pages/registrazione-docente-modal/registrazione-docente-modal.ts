import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RegistrazioneDocenteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrazione-docente-modal',
  templateUrl: 'registrazione-docente-modal.html',
})
export class RegistrazioneDocenteModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
   const data = {
     nome : 'mario',
     cognome : 'rossi'
    };
    this.view.dismiss(data);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegistrazioneDocenteModalPage ciao kevin');
  }

}
