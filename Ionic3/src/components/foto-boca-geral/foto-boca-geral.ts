import { Component } from '@angular/core';

/**
 * Generated class for the FotoBocaGeralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-boca-geral',
  templateUrl: 'foto-boca-geral.html'
})
export class FotoBocaGeralComponent {

  text: string;

  constructor() {
    console.log('Hello FotoBocaGeralComponent Component');
    this.text = 'Hello World';
  }

}
