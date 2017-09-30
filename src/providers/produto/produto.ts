import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoProvider {

  constructor(
    public http: Http
  ) { }

}
