import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormProdutoPage } from '../form-produto/form-produto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl : ModalController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  abreFormProduto() {

    let modal = this.modalCtrl.create (FormProdutoPage);

    modal.present ();

  }

}
