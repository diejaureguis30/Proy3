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
  Productos= [{ id:0, nombre: 'Lamborghini Aventador SVJ Coupé', precio: "$8'000,000", vendedor: 'Lamborghini', imagen: "../assets/lambo.jpg", avatar:'../assets/lambo2.jpg', disponibles: '800', lanzamiento:'18/08/2018', valoracion:[1,2,3,4,5] ,evaluador:'Lewis Hamilton', resena:'De los mejores autos que ha diseñado lamborghini.', fecha: '12/09/2018'},
              { id:1, nombre: 'Bugatti Divo', precio: "$115'000,000", vendedor: 'Bugatti', imagen: '../assets/divo.jpg',avatar: "../assets/bugatti.jpg", disponibles: '40', lanzamiento:'24/08/2018', valoracion:[1,2,3,4,5], evaluador:'Nico Rosberg', resena:'Como siempre Bugatti rompiendo records.', fecha: '29/08/2018'},
              { id:2, nombre: 'Ferrari LaFerrari', precio: "$26'000,000", vendedor: 'Ferrari', imagen: "../assets/ferrari.jpg", avatar: "../assets/Ferrari2.png", disponibles: '500', lanzamiento:'24/08/2016', valoracion:[1,2,3,4,5], evaluador:'Top Gear', resena:'Definitivamente entre en los 3 mejores carros del mundo.', fecha: '30/09/2016'},
              { id:3, nombre: 'McLaren P1', precio: "$21'000,000", vendedor: 'McLaren',  avatar: "../assets/mclaren logo.png", imagen: "../assets/p1.jpg", disponibles: '375', lanzamiento:'07/09/2013', valoracion:[1,2,3,4,5], evaluador:'Leo Briseño', resena:'Parte de la santisima trinidad.', fecha: '10/09/2013'},
              { id:4, nombre: 'Porsche 918', precio: "$17'000,000", vendedor: 'Porsche', imagen: "../assets/918.jpg", avatar:'../assets/lambo2.jpg', disponibles: '18', lanzamiento:'18/11/2013', valoracion:[1,2,3,4,5], evaluador:'Top Gear', resena:'El rey de la santisima trinidad.', fecha: '30/09/2016'},
              { id:5, nombre: 'Koenigsegg Regera', precio: "$40'000,000", vendedor: 'Koenigsegg', imagen: "../assets/regera.jpg", avatar: "../assets/Koenigsegg.png", disponibles: '80', lanzamiento:'21/08/2015', valoracion:[1,2,3,4,5],evaluador:'Top Gear', resena:'Koenigsegg, una marca tan nueva pero de las mejores del mundo.', fecha: '30/09/2015'},
              { id:6, nombre: 'Mclaren Speedtail', precio: "$41'000,000", vendedor: 'McLaren',  avatar: "../assets/mclaren logo.png", imagen: "../assets/speedtail.jpg", disponibles: '800', lanzamiento:'24/08/2020', valoracion:[1,2,3,4,5], evaluador:'CNN', resena:'Diseño unico en el mundo con una tecnologia de la mas avanzada.', fecha: '30/09/2018'},
              { id:7, nombre: 'Ferrari Enzo', precio: "$13'000,000", vendedor: 'Ferrari', imagen: "../assets/enzo.jpg", avatar: "../assets/Ferrari2.png", disponibles: '400', lanzamiento:'26/08/2002', valoracion:[1,2,3,4,5], evaluador:'Elon Musk', resena:'A pesar de que es viejo el auto. Parece que es nuevo por su forma de manejo.', fecha: '30/09/2015'},
              { id:8, nombre: 'Porsche Carrera GT', precio: "$16'000,000", vendedor: 'Porsche', imagen: "../assets/carrera.jpg", avatar: "../assets/porsche2.jpg", disponibles: '1270', lanzamiento:'15/08/2003', valoracion:[1,2,3,4,5], evaluador:'Salomundo', resena:'De los mejores carros fabricados en la historia.', fecha: '30/09/16'},
              { id:9, nombre: 'Rolls-Royce Phantom', precio: "$12'000,000", vendedor: 'Rolls-Royce', imagen: "../assets/phantom.jpg", disponibles: '5000', lanzamiento:'27/07/17', valoracion:[1,2,3,4,5], evaluador:'Bill Gates', resena:'El auto de más lujo y con clase en la actualidad.', fecha: '30/09/2016'},
              { id:10, nombre: 'Audi R8 V10 Plus', precio: "$4'000,000", vendedor: 'Audi', avatar: "../assets/audi2.png", imagen: "../assets/r8.jpg", disponibles: '10,000', lanzamiento:'05/03/2019', valoracion:[1,2,3,4,5], evaluador:'Sergio Pérez', resena:'Gran manejo y diseño del carro.', fecha: '30/09/16'},
              { id:11, nombre: 'Tesla Model X P100D', precio: "$3'700,000", vendedor: 'Tesla', imagen: "../assets/x.jpg",avatar: "../assets/tesla.png", disponibles: '12,000', lanzamiento:'29/10/2015', valoracion:[1,2,3,4,5], evaluador:'Vehicle Virgins', resena:'Tesla fue la primera compañía en hacer un carro electrico, y vaya que les salio muy bien.', fecha: '30/09/16'},
              { id:12, nombre: 'Pagani Huayra', precio: "$4'000,000", vendedor: 'Pagani', imagen: "../assets/huayra.jpg", disponibles: '100', lanzamiento:'11/02/2015', valoracion:[1,2,3,4,5], evaluador:'Top Gear', resena:'De los diseños más exóticos que hay.', fecha: '30/09/16'},
              { id:13, nombre: 'Mercedes Benz AMG GTR', precio: "$3'700,000", vendedor: 'Mercedes Benz', imagen: "../assets/amggtr.jpg", disponibles: '10,000', lanzamiento:'21/08/2015', valoracion:[1,2,3,4,5], evaluador:'William Lizard', resena:'Este carro ahora sí que le daré en la madre al 911.', fecha: '30/09/16'},
              { id:14, nombre: 'Audi A8', precio: "$2'500,000", vendedor: 'Audi',  avatar: "../assets/audi2.png", imagen: "../assets/a8.jpg", disponibles: '10,000', lanzamiento:'5/10/2018', valoracion:[1,2,3,4,5], evaluador:'Leonardo Briseño', resena:'Por fuera se ve como un Audi cualquiera, pero por dentro es otro mundo.', fecha: '30/09/16'},
              { id:15, nombre: 'Nissan GT-R Nismo', precio: "$4'200,000", vendedor: 'Nissan', imagen: "../assets/nismo.jpg", disponibles: '10,000', lanzamiento:'30/09/2018', valoracion:[1,2,3,4,5], evaluador:'René Sánchez', resena:'La diferencia entre el GTR y el nismo si es muy notable, además del precio.', fecha: '30/09/16'},
              { id:16, nombre: 'Mercedes Benz AM G63 6x6', precio: "$10'500,000", vendedor: 'Mercedes Benz', imagen: "../assets/6x6.jpg", disponibles: '500', lanzamiento:'24/08/2015', valoracion:[1,2,3,4,5],evaluador:'Aldo Román', resena:'Un carro todo terreno con mucha clase.', fecha: '30/09/16'},
              { id:17, nombre: 'Mustang Shelby GT500 Eleanor', precio: "$1'000,000", vendedor: 'Ford', imagen: "../assets/eleanor.jpg", disponibles: '500', lanzamiento:'13/03/1967', valoracion:[1,2,3,4,5], evaluador:'Aldo Román', resena:'Un verdadero auto clásico, vale cada centavo.', fecha: '30/09/16'},
              { id:18, nombre: 'McLaren Senna', precio: "$20'000,000", vendedor: 'McLaren', avatar: "../assets/mclaren logo.png", imagen: "../assets/senna.jpg", disponibles: '300', lanzamiento:'10/12/2017', valoracion:[1,2,3,4,5], evaluador:'Grand Tour', resena:'Un auto exótico y de los mejores que ha hecho McLaren.', fecha: '30/09/16'},
              { id:19, nombre: 'BMW M8', precio: "$5'000,000", vendedor: 'BMW', imagen: "../assets/m8.jpg", disponibles: '1,000', lanzamiento:'28/08/2019', valoracion:[1,2,3,4,5], evaluador:'Diego Jauregui', resena:'Si le  da batalla al AMG S65.', fecha: '30/09/16'}
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
