import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { BocaPage } from '../pages/boca/boca';
import { OlhosPage } from '../pages/olhos/olhos';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fotos - Bocas', component: BocaPage },
      { title: 'Fotos - Olhos', component: OlhosPage },
      { title: 'Evento - Cadastro' , component: CadastroEventoPage},
      { title: 'Evento - Lista' , component: ListaEventoPage },
      { title: 'Produto - Cadastro' , component : CadastroProdutoPage },
      { title: 'Produto - Evento' , component: ProdutosPage}
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
