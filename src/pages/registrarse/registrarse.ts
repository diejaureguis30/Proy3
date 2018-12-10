import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  bienvenido= BienvenidoPage
  registro=[];
  nombre='';
  Contrasena='';
  Correo='';
  telefono='';


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public alertCtrl: AlertController) {
  this.registro=this.navParams.get("registro")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
  Listo(){
    if (this.Correo.length>0 || this.Contrasena.length>8)
    {
      this.registro.push({nombre:this.nombre, Contrasena:this.Contrasena, telefono:this.telefono, Correo:this.Correo, comprado:[]});
      this.storage.set('registro', JSON.stringify(this.registro));
      this.navCtrl.pop();
    }
    else
    {
      const alert =this.alertCtrl.create({
        title: "Ooops!",
        subTitle: "Tu usuario le falta algo",
        buttons: ['Ok']
      })
      alert.present();
    }
this.Correo="";
this.Contrasena="";
}
}