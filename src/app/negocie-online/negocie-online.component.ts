import { Component, OnInit } from '@angular/core';
import { ApiRestService, Divida, OpcoesPagamento } from '../api-rest.service';


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
  public movelLabel: boolean;
  public opcoesParcelamentoLabel: boolean;
 
  public nao_parcelado = { };
  public ind_parcelado: number; 

  constructor(private apiRestService: ApiRestService) {    
  }

  public dadosDivida = [];
  public opcoesPg = { };      

  ngOnInit() {
    this.dadosDivida = this.apiRestService.getDividasClaroMovel();
    
  }

  getAllOpcoesClaroMovel() {
    this.showHeader = false;
    this.movelLabel = true;

    this.apiRestService.getAllOpcoesClaroMovel();
    this.dadosDivida.forEach( (dados) => this.sett(dados.CodigoTitulo));
  }
  sett (cod: string) {
    let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
    this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo].subscribe(res => {
      this.opcoesPg[dadosDividaCod[0].CodigoTitulo] = res.OpcoesPagamento;
    });
  }

  getValorNegociar (cod: string) {
    if (this.opcoesPg[cod]) {
      if (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar) return this.opcoesPg[cod].OpcaoPagamento.ValorNegociar;      
      else if (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar) {
        this.nao_parcelado[cod] = true;
        return this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar; 
      }  
    }
    else return "";      
  }

  getOpcao (ind: number) {
    return this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
  }

  showPrazoFinalizacao() {
    this.opcoesParcelamentoLabel = false;
    this.prazoFinalizacao = true;
    this.opcoesParcelamento = false;
  }

  showOpcoesParcelamento(ind) {

    this.opcoesParcelamento = true;
    this.showFatura = false;
    this.prazoFinalizacao = false;
    this.movelLabel = false;
    this.opcoesParcelamentoLabel = true;

    this.ind_parcelado = ind;
  }

  hideOpcoesParcelamento() {

    this.opcoesParcelamento = false;
    this.showFatura = true;
    this.prazoFinalizacao = false;
  }  

}
