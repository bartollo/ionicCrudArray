import { Component } from '@angular/core';
import {IonicPage, ModalController, AlertController, NavController, NavParams} from 'ionic-angular';
import { FormTipoPage } from '../form-tipo/form-tipo';
import { TipoProvider } from '../../providers/tipo/tipo';


@IonicPage()
@Component({
  selector: 'page-tipo-refeicao',
  templateUrl: 'tipo-refeicao.html',
})
export class TipoRefeicaoPage {

    listaTipos : Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl :    ModalController,
    private alertCtrl :    AlertController,
    private tipoProvider : TipoProvider

  ) {
    this.listaTipos = this.tipoProvider.consultaListaTipos();
  }

  editarTipo(tp){
    let modal = this.modalCtrl.create (FormTipoPage, {tipo : tp});
     modal.onDidDismiss (() => this.tipoProvider.consultaListaTipos());
     modal.present ();
  }

  excluirTipo (tipo : any) {
     let confirm = this.alertCtrl.create({
       title: 'Exclusão de Tipo',
       message: 'Confirma a exclusão do Tipo: ' + tipo.nome + '?',
       buttons: [
         {
           text: 'Cancelar',
           handler: () => {
           }
         },
         {
           text: 'Excluir',
           handler: () => {
             this.removerTipo(tipo);
           }
         }
       ]
     });
     confirm.present();
   }

   /* Metodo responsavel pela exclusao do tipo. */
    removerTipo(tipo){
      let index = this.listaTipos.indexOf(tipo);
          if(index>-1){
             this.listaTipos.splice(index,1);
          }
    }

    abreModalCadastroTipo(param) {
      let modal = this.modalCtrl.create (FormTipoPage);
      modal.onDidDismiss (() => this.tipoProvider.consultaListaTipos());
      modal.present ();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoRefeicaoPage');
  }

}
