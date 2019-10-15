import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PerguntaUmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-um',
  templateUrl: 'pergunta-um.html',
})
export class PerguntaUmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaUmPage');
  }

  onPerguntaDois(): void{
    this.navCtrl.push('PerguntaDoisPage');
  }

  openTodoAlert() {
    let alert = this.alertCtrl.create({
      cssClass: "custom-alert",
      title: 'Parabéns!',
      subTitle: 'Você acertou.',
      buttons: [{
        text: 'Continuar',
        cssClass: 'btn-ok',
        handler: () => {
          this.onPerguntaDois()
        }
      }]
    });
    alert.present();
  }

  openTodoAlertErro() {
    let alert = this.alertCtrl.create({
      cssClass: "custom-alert",
      title: 'Ah que pena!',
      subTitle: 'Você errou.',
      buttons: [{
        text: 'Tentar novamente',
        cssClass: 'btn-ok'
      }]
    });
    alert.present();
  }

}
