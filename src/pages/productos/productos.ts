import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  nombre='';
  precio='';
  vendedor='';
  productos=[];

  compra=[{nombre: '', vendedor:'', precio:''}];
  Productos= [{ id:0, nombre: 'Lamborghini Aventador SVJ Coupé', precio: "$8'000,000", vendedor: 'Lamborghini', imagen: "../assets/lambo.jpg", disponibles: '800', lanzamiento:'18/08/2018', },
              { id:1, nombre: 'Bugatti Divo', precio: "$115'000,000", vendedor: 'Bugatti', imagen: "../assets/bugatti.jpg", disponibles: '40', lanzamiento:'24/08/2018'},
              { id:2, nombre: 'Ferrari LaFerrari', precio: "$26'000,000", vendedor: 'Ferrari', imagen: "../assets/ferrari.jpg", disponibles: '500', lanzamiento:'24/08/2016'},
              { id:3, nombre: 'McLaren P1', precio: "$21'000,000", vendedor: 'McLaren', imagen: "../assets/p1.jpg", disponibles: '375', lanzamiento:'07/09/2013'},
              { id:4, nombre: 'Porsche 918', precio: "$17'000,000", vendedor: 'Lamborghini', imagen: "../assets/918.jpg", disponibles: '18', lanzamiento:'18/11/2013'},
              { id:5, nombre: 'Koenigsegg Regera', precio: "$40'000,000", vendedor: 'Koenigsegg', imagen: "../assets/regera.jpg", disponibles: '80', lanzamiento:'21/08/2015'},
              { id:6, nombre: 'Mclaren Speedtail', precio: "$41'000,000", vendedor: 'McLaren', imagen: "../assets/speedtail.jpg", disponibles: '800', lanzamiento:'18/08/2018'},
              { id:7, nombre: 'Ferrari Enzo', precio: "$13'000,000", vendedor: 'Ferrari', imagen: "../assets/enzo.jpg", disponibles: '400', lanzamiento:'26/08/2012'},
              { id:8, nombre: 'Porsche Carrera GT', precio: "$16'000,000", vendedor: 'Porsche', imagen: "../assets/carrera.jpg", disponibles: '1270', lanzamiento:'15/08/2003'},
              { id:9, nombre: 'Rolls-Royce Phantom', precio: "$12'000,000", vendedor: 'Rolls-Royce', imagen: "../assets/phantom.jpg", disponibles: '5000', lanzamiento:'27/07/17'},
              { id:10, nombre: 'Audi R8 V10 Plus', precio: "$4'000,000", vendedor: 'Audi', imagen: "../assets/r8.jpg", disponibles: '10,000', lanzamiento:'05/03/2019'},
              { id:11, nombre: 'Tesla Model X P100D', precio: "$3'700,000", vendedor: 'Tesla', imagen: "../assets/x.jpg", disponibles: '12,000', lanzamiento:'29/10/2015'},
              { id:12, nombre: 'Pagani Huayra', precio: "$4'000,000", vendedor: 'Pagani', imagen: "../assets/huayra.jpg", disponibles: '100', lanzamiento:'11/02/2015'},
              { id:13, nombre: 'Mercedes Benz AMG GTR', precio: "$3'700,000", vendedor: 'Mercedes Benz', imagen: "../assets/amggtr.jpg", disponibles: '10,000', lanzamiento:'21/08/2015'},
              { id:14, nombre: 'Audi A8', precio: "$2'500,000", vendedor: 'Audi', imagen: "../assets/a8.jpg", disponibles: '10,000', lanzamiento:'5/10/2018'},
              { id:15, nombre: 'Nissan GT-R Nismo', precio: "$4'200,000", vendedor: 'Nissan', imagen: "../assets/nismo.jpg", disponibles: '10,000', lanzamiento:'30/09/2018'},
              { id:16, nombre: 'Mercedes Benz AM G63 6x6', precio: "$10'500,000", vendedor: 'Mercedes Benz', imagen: "../assets/6x6.jpg", disponibles: '500', lanzamiento:'24/08/2015'},
              { id:17, nombre: 'Mustang Shelby GT500 Eleanor', precio: "$1'000,000", vendedor: 'Ford', imagen: "../assets/eleanor.jpg", disponibles: '500', lanzamiento:'13/03/1967'},
              { id:18, nombre: 'McLaren Senna', precio: "$20'000,000", vendedor: 'McLaren', imagen: "../assets/senna.jpg", disponibles: '300', lanzamiento:'10/12/2017'},
              { id:19, nombre: 'BMW M8', precio: "$5'000,000", vendedor: 'BMW', imagen: "../assets/m8.jpg", disponibles: '1,000', lanzamiento:'28/08/2019'}
            ]
  Prod=ProductoPage;
  car=CarritoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  verProducto(p){
    this.navCtrl.push(this.Prod, {productos:p,canasta:this.compra})
  }
  Ver(){
    this.navCtrl.push(this.car, {lista:this.compra});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
