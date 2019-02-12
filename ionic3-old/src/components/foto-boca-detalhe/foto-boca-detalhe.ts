import { Component } from '@angular/core';

/**
 * Generated class for the FotoBocaDetalheComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-boca-detalhe',
  templateUrl: 'foto-boca-detalhe.html'
})
export class FotoBocaDetalheComponent {

  text: string;

  constructor() {
    console.log('Hello FotoBocaDetalheComponent Component');
    this.text = 'Hello World';
  }

}
