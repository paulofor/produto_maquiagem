import { Component } from '@angular/core';

/**
 * Generated class for the FotoOlhosDetalheComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-olhos-detalhe',
  templateUrl: 'foto-olhos-detalhe.html'
})
export class FotoOlhosDetalheComponent {

  text: string;

  constructor() {
    console.log('Hello FotoOlhosDetalheComponent Component');
    this.text = 'Hello World';
  }

}
