import { Component } from '@angular/core';

/**
 * Generated class for the FotoEventoResumoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-evento-resumo',
  templateUrl: 'foto-evento-resumo.html'
})
export class FotoEventoResumoComponent {

  text: string;

  constructor() {
    console.log('Hello FotoEventoResumoComponent Component');
    this.text = 'Hello World';
  }

}
