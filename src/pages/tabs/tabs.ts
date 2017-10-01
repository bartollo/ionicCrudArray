import { Component } from '@angular/core';

//import { ProdutosPage } from '../produtos/produtos';
//import { CategoriasPage } from '../categorias/categorias';
import { TipoRefeicaoPage } from '../tipo-refeicao/tipo-refeicao';
import { CardapioPage } from '../cardapio/cardapio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = ProdutosPage;
  //tab2Root = CategoriasPage;
  tab1Root = TipoRefeicaoPage;
  tab2Root = CardapioPage;

  constructor() {

  }
}
