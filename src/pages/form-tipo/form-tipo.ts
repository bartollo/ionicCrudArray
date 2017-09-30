import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoRefeicaoPage } from '../tipo-refeicao/tipo-refeicao';
import {TipoProvider } from '../../providers/tipo/tipo';


@IonicPage()
@Component({
  selector: 'page-form-tipo',
  templateUrl: 'form-tipo.html',
})
export class FormTipoPage {

  tipo : any;
  listaTipos : Array <any>;
  lista = [];
  tipoRefeicao : TipoRefeicaoPage;
  arrayTipoProvider: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tipoProvider : TipoProvider) {
      this.tipo = navParams.get('tipo') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormTipoPage');
  }

  voltaParaListagem() {
    this.navCtrl.pop ();
  }

  saveAndUpdate(tipo) {

    this.arrayTipoProvider = this.tipoProvider.consultaListaTipos();
      if (this.tipo.id == undefined) {
        this.tipo.id = this.arrayTipoProvider.length+1;
        this.tipoProvider.inserirTipo(this.tipo);
        console.log(this.tipoProvider.consultaListaTipos());
        this.navCtrl.pop ();

     } else {
        let index = this.arrayTipoProvider.indexOf(this.tipo);
        console.log(index);
        this.navCtrl.pop ();
        if(index>-1){
          this.tipoProvider.atualizarTipo(this.tipo,index);
        }

     }
  }

}
