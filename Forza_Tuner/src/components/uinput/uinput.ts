import { Component } from '@angular/core';

/**
 * Generated class for the UinputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'uinput',
  templateUrl: 'uinput.html'
})
export class UinputComponent {

  render = true;

  wd: number ;
  armin: number ;
  armax: number ;
  springmin: number ;
  springmax: number ;
  shocksmin: number ;
  shocksmax: number ;

  anti_roll_front: number = 0;
  anti_roll_back: number = 0;
  springs_front: number = 0;
  springs_back: number = 0;
  shocks_rebound_front: number = 0;
  shocks_rebound_back: number = 0;

  constructor() {
  }

  onClick(){
    this.render = false;
    this.anti_roll_front = (+((this.armax - this.armin) * (this.wd / 100)) + +this.armin);
    this.anti_roll_back = (+((this.armax - this.armin) * ((100 - this.wd) / 100)) + +this.armin);
    this.springs_front = (+((this.springmax - this.springmin) * (this.wd / 100)) + +this.springmin);
    this.springs_back = (+((this.springmax - this.springmin) * ((100 - this.wd) / 100)) + +this.springmin);
    this.shocks_rebound_front = (+((this.shocksmax- this.shocksmin) * (this.wd / 100)) + +this.shocksmin);
    this.shocks_rebound_back = (+((this.shocksmax - this.shocksmin) * ((100 - this.wd) / 100)) + +this.shocksmin);
  }

  reset(){
    this.render = true;
    this.wd = null;
    this.armin = null;
    this.armax = null;
    this.springmin = null;
    this.springmax = null;
    this.shocksmin = null;
    this.shocksmax = null;
  }

  useDefault(){
    this.armin = 1;
    this.armax = 65;
    this.shocksmin = 3;
    this.shocksmax = 20;
  }
}
