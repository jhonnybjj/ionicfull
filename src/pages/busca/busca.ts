import { Component } from '@angular/core';
import { MenuController, NavParams } from 'ionic-angular';
import { UserModel } from '../profile/profile.model';

@Component({
  selector: 'busca-page',
  templateUrl: 'busca.html'
})
export class PagBusca {
  list: Array<UserModel> = [];

  constructor(public menu: MenuController, public navParams: NavParams)
  {
    this.list = navParams.get('list');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
