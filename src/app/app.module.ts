import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { CpfCnpjBoxComponent } from './cpf-cnpj-box/cpf-cnpj-box.component';
import { NegocieOnlineComponent } from './negocie-online/negocie-online.component';
import { OpcoesRoutletComponent } from './opcoes-routlet/opcoes-routlet.component';
import { AssistenteVirtualComponent } from './assistente-virtual/assistente-virtual.component';
import { RecebaNossaLigacaoComponent } from './receba-nossa-ligacao/receba-nossa-ligacao.component';
import { AcordosAndamentoComponent } from './acordos-andamento/acordos-andamento.component';
import { PrazoFinalizacaoComponent } from './prazo-finalizacao/prazo-finalizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfCnpjBoxComponent,
    NegocieOnlineComponent,
    OpcoesRoutletComponent,
    AssistenteVirtualComponent,
    RecebaNossaLigacaoComponent,
    AcordosAndamentoComponent,
    PrazoFinalizacaoComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
