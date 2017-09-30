import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TipoProvider {

  public tipoProvider : any;
  constructor(public http: Http) {
    this.tipoProvider = this.preencherTipos();
  }

  preencherTipos() {
    let listaTipos=[
    {
      nome: "Entrada",
      id:1
    },
    {
      nome: "Principal",
      id:2
    },
    {
      nome: "Sobremesa",
      id:3
    }
    ];
    return listaTipos;
  }

  consultaListaTipos() {
    return this.tipoProvider;
  }
  inserirTipo(item : any){
    this.tipoProvider.push(item);
  }
  atualizarTipo(itemArray, index){
    this.tipoProvider[index].nome=itemArray.nome;
  }

}
