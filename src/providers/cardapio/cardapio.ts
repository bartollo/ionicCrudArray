import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CardapioProvider {
    public cardapioProvider : any;
  constructor(
    public http: Http
  ) {
    this.cardapioProvider = this.preencherCardapio();
  }

  preencherCardapio() {
    let listaCardapio = [
      {
        tipo: 1,
        nome: "Espetinho de carne",
        valor: 10.00,
        id:1
      },
      {
        tipo: 2,
        nome: "Strogonoff",
        valor: 20.00,
        id:2
      },
      {
        tipo: 3,
        nome: "Musse de maracujá",
        valor: 5.00,
        id:3
      },
      {
        tipo: 3,
        nome: "Pavê",
        valor: 6.00,
        id:4
      },
      {
        tipo: 3,
        nome: "Pudim",
        valor: 15.00,
        id:5
      },
      {
        tipo: 2,
        nome: "Escondidinho",
        valor: 15.00,
        id:6
      },
      {
        tipo: 2,
        nome: "Arrumadinho",
        valor: 15.00,
        id:7
      }
    ];

    return listaCardapio;
  }

  consultarCardapio() {
    return this.cardapioProvider;
  }
  inserirItemCardapio(itemCardapio : any) {
    this.cardapioProvider.push(itemCardapio);
  }
  atualizarItemCardapio(itemCardapio, index) {
    this.cardapioProvider[index].tipo=itemCardapio.tipo;
    this.cardapioProvider[index].nome=itemCardapio.nome;
    this.cardapioProvider[index].valor=itemCardapio.valor;
  }

}
