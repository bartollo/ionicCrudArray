import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { TipoRefeicaoPage } from '../pages/tipo-refeicao/tipo-refeicao';
import { FormTipoPage } from '../pages/form-tipo/form-tipo';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { FormCardapioPage } from '../pages/form-cardapio/form-cardapio';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoProvider } from '../providers/produto/produto';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { TipoProvider } from '../providers/tipo/tipo';
import { CardapioProvider } from '../providers/cardapio/cardapio';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TipoRefeicaoPage,
    FormTipoPage,
    CardapioPage,
    FormCardapioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TipoRefeicaoPage,
    FormTipoPage,
    CardapioPage,
    FormCardapioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoProvider,
    CategoriaProvider,
    TipoProvider,
    CardapioProvider
  ]
})
export class AppModule {}
