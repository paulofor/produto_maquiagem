import { Component } from '@angular/core';

/**
 * Generated class for the FotoOlhosGeralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foto-olhos-geral',
  templateUrl: 'foto-olhos-geral.html'
})
export class FotoOlhosGeralComponent {

  text: string;

  constructor() {
    console.log('Hello FotoOlhosGeralComponent Component');
    this.text = 'Hello World';
  }

}
