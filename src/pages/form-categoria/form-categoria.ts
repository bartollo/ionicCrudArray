import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';


@IonicPage()
@Component({
  selector: 'page-form-categoria',
  templateUrl: 'form-categoria.html',
})
export class FormCategoriaPage {

  produto : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaService : CategoriaProvider
  ) {
    this.produto = navParams.get ('produto') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCategoriaPage');
  }

  voltaPagina() {

    this.navCtrl.pop ();

  }

  salvar() {

    if (this.produto.id == undefined) { // Inserindo

      this.categoriaService.insere (this.produto).then ((res) => {
        this.navCtrl.pop ();
      });

    } else { // Atualizando
      this.categoriaService.atualiza (this.produto).then ((res) => {
        this.navCtrl.pop ();
      });
    }

  }







}
