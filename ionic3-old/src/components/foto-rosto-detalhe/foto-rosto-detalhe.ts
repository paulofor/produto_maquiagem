import { Component } from '@angular/core';

/**
 * Generated class for the FotoRostoDetalheComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-rosto-detalhe',
  templateUrl: 'foto-rosto-detalhe.html'
})
export class FotoRostoDetalheComponent {

  text: string;

  constructor() {
    console.log('Hello FotoRostoDetalheComponent Component');
    this.text = 'Hello World';
  }

}
