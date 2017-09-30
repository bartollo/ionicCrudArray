import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaProvider {

  baseURL : string;

  constructor(
    public http: Http
  ) {
    this.baseURL = "https://product-api-othonb.c9users.io/api/category";
  }

  findAll () : Promise <Response> {
    return this.http.get (this.baseURL).toPromise();
  }

  remove (id) : Promise <Response> {
    return this.http.delete (this.baseURL + '/' + id).toPromise();
  }

  atualiza (categoria) : Promise <Response> {

    let cabecalho = new Headers ();

    cabecalho.append ('Content-type', 'application/json');

    return this.http.put (this.baseURL, JSON.stringify (categoria), {headers : cabecalho}).toPromise ();
  }

  insere (categoria) : Promise <Response> {

    let cabecalho = new Headers ();

    cabecalho.append ('Content-type', 'application/json');

    return this.http.post (this.baseURL, JSON.stringify (categoria), {headers : cabecalho}).toPromise ();

  }







}
