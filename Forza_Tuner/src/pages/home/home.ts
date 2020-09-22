import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  //the default page to be loaded is gonna be the tuning page
  page = 'tune';


  switcher(swith_to){
    this.page = swith_to;
  }
}
