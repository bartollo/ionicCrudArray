import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';
import { CardapioProvider } from '../../providers/cardapio/cardapio';
import { TipoProvider } from '../../providers/tipo/tipo';


@IonicPage()
@Component({
  selector: 'page-form-cardapio',
  templateUrl: 'form-cardapio.html',
})
export class FormCardapioPage {
  listaTipos : any;
  itemCardapio : any;
  listaItensCardapio : Array <any>;
  item : CardapioPage;
  arrayCardapioProvider: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cardapioProvider : CardapioProvider,
    public tipoProvider : TipoProvider
  ) {
      this.itemCardapio = navParams.get('item') || {};
      this.listaTipos = this.tipoProvider.consultaListaTipos();
  }

  voltaParaListagem() {
    this.navCtrl.pop ();
  }

  saveAndUpdate()
  {

    this.arrayCardapioProvider = this.cardapioProvider.consultarCardapio();
      if (this.itemCardapio.id == undefined) {
        this.itemCardapio.id = this.arrayCardapioProvider.length+1;
        this.cardapioProvider.inserirItemCardapio(this.itemCardapio);
        console.log(this.cardapioProvider.consultarCardapio());
        this.navCtrl.pop ();

     } else {
        let index = this.arrayCardapioProvider.indexOf(this.itemCardapio);
        console.log(index);
        this.navCtrl.pop ();
        if(index>-1){
          this.cardapioProvider.atualizarItemCardapio(this.itemCardapio, index);
        }

     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCardapioPage');
  }

}
