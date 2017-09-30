import { Component } from '@angular/core';

import { ProdutosPage } from '../produtos/produtos';
import { CategoriasPage } from '../categorias/categorias';
import { TipoRefeicaoPage } from '../tipo-refeicao/tipo-refeicao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = CategoriasPage;
  tab3Root = TipoRefeicaoPage;

  constructor() {

  }
}
