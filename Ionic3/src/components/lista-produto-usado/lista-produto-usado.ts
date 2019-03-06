import { Component } from '@angular/core';


/**
 * Generated class for the ListaProdutoUsadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'lista-produto-usado',
  templateUrl: 'lista-produto-usado.html'
})
export class ListaProdutoUsadoComponent {

  text: string;

  constructor() {
    console.log('Hello ListaProdutoUsadoComponent Component');
    this.text = 'ListaProdutoUsadoComponent';
  }

}
