import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormCategoriaPage } from './form-categoria';

@NgModule({
  declarations: [
    FormCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormCategoriaPage),
  ],
})
export class FormCategoriaPageModule {}
