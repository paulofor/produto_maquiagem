import { Component } from '@angular/core';

/**
 * Generated class for the FotoRostoGeralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-rosto-geral',
  templateUrl: 'foto-rosto-geral.html'
})
export class FotoRostoGeralComponent {

  text: string;

  constructor() {
    console.log('Hello FotoRostoGeralComponent Component');
    this.text = 'FotoRostoGeralComponent';
  }

}
