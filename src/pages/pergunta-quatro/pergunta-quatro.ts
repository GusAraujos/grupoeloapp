import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PerguntaQuatroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-quatro',
  templateUrl: 'pergunta-quatro.html',
})
export class PerguntaQuatroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaQuatroPage');
  }

  onPerguntaInicio(): void{
    this.navCtrl.push('InicioPage');
  }

  openTodoAlert() {
    let alert = this.alertCtrl.create({
      cssClass: "custom-alert",
      title: 'Parabéns!',
      subTitle: 'Você acertou.',
      buttons: [{
        text: 'Concluído!',
        cssClass: 'btn-ok',
        handler: () => {
          this.onPerguntaInicio()
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
