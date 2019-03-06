import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
/**
 * Generated class for the BocaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boca',
  templateUrl: 'boca.html',
})
export class BocaPage {

  constructor(public navCtrl: NavController, private screenshot: Screenshot, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BocaPage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'BocaPage');
  }

}
