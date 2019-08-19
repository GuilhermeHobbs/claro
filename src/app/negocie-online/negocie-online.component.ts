import { Component, OnInit } from '@angular/core';
import { ApiRestService, Divida } from '../api-rest.service';


@Component({
  selector: 'app-negocie-online',
  templateUrl: './negocie-online.component.html',
  styleUrls: ['./negocie-online.component.css']
})
export class NegocieOnlineComponent implements OnInit {

  public showFatura: boolean = true;
  public showHeader: boolean = true;
  public opcoesParcelamento: boolean;
  public prazoFinalizacao: boolean;
  public metodoPagamento: boolean = true;
 
  constructor(private apiRestService: ApiRestService) { }

  public opcoesPg = this.apiRestService.opcoesPgTitulo; 

  ngOnInit() {
  }

  showPrazoFinalizacao() {

    this.prazoFinalizacao = true;
    this.opcoesParcelamento = false;
    this.metodoPagamento = false;
  }

  showOpcoesParcelamento() {

    this.opcoesParcelamento = true;
    this.showFatura = false;
    this.prazoFinalizacao = false;
    this.metodoPagamento = true;
  }

  getOpcaoAVista (codTitulo: string) {
    console.log (this.apiRestService.opcoesPgTitulo);
    console.log(codTitulo);
    return this.apiRestService.opcoesPgTitulo[codTitulo].OpcaoPagamento.OpcaoPagamento.ValorNegociar;
  }
}
