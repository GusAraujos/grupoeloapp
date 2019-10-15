import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController, public statusBar: StatusBar) {
    platform.ready().then(async () => {
      this.statusBar.hide();
      this.statusBar.backgroundColorByHexString('#ffffff');
    });
  }

  onPerguntaUm(): void{
    this.navCtrl.push('PerguntaUmPage');
  }

}
