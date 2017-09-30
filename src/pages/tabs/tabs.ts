import { Component } from '@angular/core';

import { ProdutosPage } from '../produtos/produtos';
import { CategoriasPage } from '../categorias/categorias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = CategoriasPage;

  constructor() {

  }
}
