import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-form-produto',
  templateUrl: 'form-produto.html',
})
export class FormProdutoPage {

    produtoNome : string;
    produtoPreco : number;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
   ){} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormProdutoPage');
  }

  voltaPagina() {

    this.navCtrl.pop ();

  }

  addItem() {
    console.log('ok');
  }


}
