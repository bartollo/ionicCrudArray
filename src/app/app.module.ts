import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CategoriasPage } from '../pages/categorias/categorias';
import { FormProdutoPage } from '../pages/form-produto/form-produto';
import { FormCategoriaPage } from '../pages/form-categoria/form-categoria';
import { TipoRefeicaoPage } from '../pages/tipo-refeicao/tipo-refeicao';
import { FormTipoPage } from '../pages/form-tipo/form-tipo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoProvider } from '../providers/produto/produto';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { TipoProvider } from '../providers/tipo/tipo';

@NgModule({
  declarations: [
    MyApp,
    ProdutosPage,
    CategoriasPage,
    TabsPage,
    FormProdutoPage,
    FormCategoriaPage,
    TipoRefeicaoPage,
    FormTipoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutosPage,
    CategoriasPage,
    TabsPage,
    FormProdutoPage,
    FormCategoriaPage,
    TipoRefeicaoPage,
    FormTipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoProvider,
    CategoriaProvider,
    TipoProvider
  ]
})
export class AppModule {}
