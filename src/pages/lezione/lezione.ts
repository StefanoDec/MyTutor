import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GoogleMap, GoogleMaps} from "@ionic-native/google-maps";

/**
 * Generated class for the LezionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lezione',
  templateUrl: 'lezione.html',
})
export class LezionePage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LezionePage');
  }

  loadMap() {

    // Create a map after the view is ready and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas');

    // No longer wait GoogleMapsEvent.MAP_READY event
    // ( except you use map.getVisibleRegion() )
  }


}
