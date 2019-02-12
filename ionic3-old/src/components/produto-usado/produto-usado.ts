import { Component } from '@angular/core';

/**
 * Generated class for the ProdutoUsadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produto-usado',
  templateUrl: 'produto-usado.html'
})
export class ProdutoUsadoComponent {

  text: string;

  constructor() {
    console.log('Hello ProdutoUsadoComponent Component');
    this.text = 'Hello World';
  }

}
