import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the ResumoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo-evento',
  templateUrl: 'resumo-evento.html',
})
export class ResumoEventoPage {

  constructor(public navCtrl: NavController, private screenshot: Screenshot, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoEventoPage');
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ResumoEventoPage');
  }


}
