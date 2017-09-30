import { Component } from '@angular/core';

import { ProdutosPage } from '../produtos/produtos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;

  constructor() {

  }
}
