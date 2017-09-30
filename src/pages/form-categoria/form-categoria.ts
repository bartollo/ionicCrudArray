import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';


@IonicPage()
@Component({
  selector: 'page-form-categoria',
  templateUrl: 'form-categoria.html',
})
export class FormCategoriaPage {

  categoria : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaService : CategoriaProvider
  ) {
    this.categoria = navParams.get ('categoria') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCategoriaPage');
  }

  voltaPagina() {

    this.navCtrl.pop ();

  }

  salvar() {

    if (this.categoria.id == undefined) { // Inserindo

      this.categoriaService.insere (this.categoria).then ((res) => {
        this.navCtrl.pop ();
      });

    } else { // Atualizando
      this.categoriaService.atualiza (this.categoria).then ((res) => {
        this.navCtrl.pop ();
      });
    }

  }







}
