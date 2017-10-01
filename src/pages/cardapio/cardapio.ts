import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController, NavParams } from 'ionic-angular';
import { FormCardapioPage } from '../form-cardapio/form-cardapio';
import { CardapioProvider } from '../../providers/cardapio/cardapio';
import { TipoProvider } from '../../providers/tipo/tipo';


@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {
    listaCardapio : Array<any>;
    listaTipos : Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl :    ModalController,
    private alertCtrl :    AlertController,
    private cardapioProvider : CardapioProvider,
    private tipoProvider : TipoProvider) {
      this.listaCardapio = this.cardapioProvider.consultarCardapio();
      this.listaTipos = this.tipoProvider.consultaListaTipos();
  }

  editarItemCardapio(it){
    let modal = this.modalCtrl.create (FormCardapioPage, {item : it});
     modal.onDidDismiss (() => this.cardapioProvider.consultarCardapio());
     modal.present ();
  }

  excluirItemCardapio (item : any) {
     let confirm = this.alertCtrl.create({
       title: 'Exclusão de Item do Cardápio',
       message: 'Confirma a exclusão do Item do Cardápio: ' + item.nome + '?',
       buttons: [
         {
           text: 'Cancelar',
           handler: () => {
           }
         },
         {
           text: 'Excluir',
           handler: () => {
             this.removerItemCardapio(item);
           }
         }
       ]
     });
     confirm.present();
   }

   /* Metodo responsavel pela exclusao do Item do cardápio. */
    removerItemCardapio(item){
      let index = this.listaCardapio.indexOf(item);
          if(index>-1){
             this.listaCardapio.splice(index,1);
          }
    }

    abreModalCadastrarItemCardapio(param) {
      let modal = this.modalCtrl.create (FormCardapioPage);
      modal.onDidDismiss (() => this.cardapioProvider.consultarCardapio());
      modal.present ();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
