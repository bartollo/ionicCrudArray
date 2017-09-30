import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController, NavParams } from 'ionic-angular';
import { FormCategoriaPage } from '../form-categoria/form-categoria';
import { CategoriaProvider } from '../../providers/categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias : Array <any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl : ModalController,
    private alertCtrl : AlertController,
    private categoriaService : CategoriaProvider
  ) {
      this.selectAll();
   }

   selectAll () {
     this.categoriaService.findAll ().then ((resposta) => {

       let json = resposta.json ();

       this.categorias = json;

     }).catch ((erro) => {
       console.log ("Erro ao recuperar as categorias: " + erro);
     });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  abreFormCategoria () {

    let modal = this.modalCtrl.create (FormCategoriaPage);

    modal.onDidDismiss (() => this.selectAll());

    modal.present ();

  }

  alteraCategoria(c : any) {

    let modal = this.modalCtrl.create (FormCategoriaPage, {categoria : c});

    modal.onDidDismiss (() => this.selectAll());

    modal.present ();

  }

  removeCategoria (c : any) {

    let alerta = this.alertCtrl.create ({
      title : 'Remover Categoria',
      message : 'Remove a categoria: ' + c.nome,
      buttons : [
        {text : 'Cancelar'},
        {
          text : 'Remover',
          handler : (dados) => {
            this.categoriaService.remove (c.id).then ((resposta) => this.selectAll ()
          ).catch ((erro) => {
            let alert1 = this.alertCtrl.create ({
              title : 'Erro!',
              message : 'Erro na remoção da categoria: ' + erro,
              buttons : [
                {text : 'Ok'}
              ]
            });
            alert1.present();
          });
          }
        }
      ]
    });
    alerta.present ();
  }

}
