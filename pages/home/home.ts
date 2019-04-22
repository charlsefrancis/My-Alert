import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    openIt() {
    let alert = this.alertCtrl.create({
      title: "My Alert",
      subTitle: "components app",
      buttons: [
        {
          text: "Okay"
        },
        {
          text: "Nope"
        }
      ]
    });
    alert.present();
  }

  constructor(public alertCtrl: AlertController) {}

  }
