import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-form-produto',
  templateUrl: 'form-produto.html',
})
export class FormProdutoPage {

    produtoNome : string;
    produtoPreco : number;
    produtoCategoria : number;
    categoriaVetor : Array <any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaService : CategoriaProvider
  ) {

      this.categoriaService.findAll ().then ((r) => this.categoriaVetor = r.json()
    ).catch ((e) => console.log ("Erro na obtenção das categorias: " + e));

   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormProdutoPage');
  }

  voltaPagina() {

    this.navCtrl.pop ();

  }

}
