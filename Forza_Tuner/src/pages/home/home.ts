import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  onChangeText(test, test2){
    alert(test.value  + test2.value);
  }

  showTune = false;
  anti_roll_front = 0;
  anti_roll_back = 0;
  springs_front = 0;
  springs_back = 0;
  shocks_rebound_front = 0;
  shocks_rebound_back = 0;


  test(tval){
    alert(tval.value);
  }

  runScript(wd, armin, armax, springmin, springmax, shocksmin, shocksmax){
      this.showTune = true;
      alert(wd.value);
      this.anti_roll_front = ((armax.value - armin.value) * (wd.value / 100)) + armin.value;
      this.anti_roll_back = ((armax.value - armin.value) * ((100 - wd.value) / 100)) + armin.value;

  }

}
