import { Component } from '@angular/core';

/**
 * Generated class for the OlympComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'olymp',
  templateUrl: 'olymp.html'
})
export class OlympComponent {

  text: string;

  constructor() {
    console.log('Hello OlympComponent Component');
    this.text = 'Hello World';
  }

}
