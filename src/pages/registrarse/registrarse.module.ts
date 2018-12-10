import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarsePage } from './registrarse';
import { IonicStorageModule} from '@ionic/storage'
@NgModule({
  declarations: [
    RegistrarsePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarsePage),
  ],
})
export class RegistrarsePageModule {}
