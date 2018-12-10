import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
nombre='';
precio='';
vendedor='';
producto='';
imagen='';
car=CarritoPage;
compra=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto=this.navParams.get('productos');
    this.nombre=this.navParams.get('productos').nombre;
    this.precio=this.navParams.get('productos').precio;
    this.vendedor=this.navParams.get('productos').vendedor;
    this.imagen=this.navParams.get('productos').imagen;
    this.compra=this.navParams.get('canasta')
  
  }
  Agregar(){

    this.compra.push({nombre:this.nombre,precio:this.precio,vendedor:this.vendedor, imagen:this.imagen})
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

}
