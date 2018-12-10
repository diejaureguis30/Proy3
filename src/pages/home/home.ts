import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import {Storage} from '@ionic/storage';
import { ProductosPage } from '../productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  catalogo=ProductosPage;
  registrarse=RegistrarsePage;
  registro=[];
  Correo='';
  Contrasena='';
  telefono='';
  nombre='';
  Registro= [{ nombre: '', Contrasena: '', telefono: '', Correo: '', compra:[]}];
  cliente='';
  carrito=[];
  

  constructor(public navCtrl: NavController, public storage: Storage, public alertCtrl: AlertController){
  this.storage.keys()
  .then(keys => {
  if (keys.some(k => k == 'Registro')) {
  this.storage.get('Registro')
  .then(Registro => {
  this.Registro = JSON.parse(Registro);
  });
       }
     });

  }
  Entrar(){
    
    let index=this.Registro.findIndex(Registro => Registro.Correo == this.Correo);
    //let index2=this.Registro.findIndex(c=>c.Contrasena == this.Contrasena)

    if (index>0) //index2>=8
    {
      const alert=this.alertCtrl.create({
        title:"Bienvenido", buttons:["ok"]
      })
      alert.present();
      this.navCtrl.push(this.catalogo, {Registro:this.Registro});
    }
    else {
      const alert=this.alertCtrl.create({
      title:"Error", subTitle:"correo o contraseña inválidos", buttons:["ok"]
      })
      alert.present();
  }
}
  Registrate(){
    this.navCtrl.push(this.registrarse, {registro:this.Registro});  
  }

}
