import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { ResumoEventoPage } from '../pages/resumo-evento/resumo-evento';

import { ProdutosPage } from '../pages/produtos/produtos';
import { BocaPage } from '../pages/boca/boca';
import { OlhosPage } from '../pages/olhos/olhos';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { ListaEventoPage } from '../pages/lista-evento/lista-evento';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { Screenshot } from '@ionic-native/screenshot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ResumoEventoPage,
    ProdutosPage,
    BocaPage,
    OlhosPage,
    CadastroEventoPage,
    ListaEventoPage,
    CadastroProdutoPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ResumoEventoPage,
    ProdutosPage,
    BocaPage,
    OlhosPage,
    CadastroEventoPage,
    ListaEventoPage,
    CadastroProdutoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Screenshot
  ]
})
export class AppModule {}
