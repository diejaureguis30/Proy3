import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BienvenidoPage } from '../pages/bienvenido/bienvenido';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import {IonicStorageModule} from '@ionic/storage'
import { ProductoPage } from '../pages/producto/producto';
import { ProductosPage } from '../pages/productos/productos';
import { CarritoPage } from '../pages/carrito/carrito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BienvenidoPage,
    RegistrarsePage,
    ProductoPage,
    ProductosPage,
    CarritoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BienvenidoPage,
    RegistrarsePage,
    ProductoPage,
    ProductosPage,
    CarritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
