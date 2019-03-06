import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';
import { Tab4DefaultPagePage } from '../tab4default-page/tab4default-page';
import { Tab5DefaultPagePage } from '../tab5default-page/tab5default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ProdutosPage;
  tab2Root: any = CartTabDefaultPagePage;
  tab3Root: any = CloudTabDefaultPagePage;
  tab4Root: any = Tab4DefaultPagePage;
  tab5Root: any = Tab5DefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
