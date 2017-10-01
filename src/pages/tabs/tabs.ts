import { Component } from '@angular/core';

import { TipoRefeicaoPage } from '../tipo-refeicao/tipo-refeicao';
import { CardapioPage } from '../cardapio/cardapio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TipoRefeicaoPage;
  tab2Root = CardapioPage;

  constructor() {

  }
}
