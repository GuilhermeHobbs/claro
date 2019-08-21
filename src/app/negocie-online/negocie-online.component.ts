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
  public metodoPagamento: boolean = true;
 
  public nao_parcelado = { };

  constructor(private apiRestService: ApiRestService) {    
  }

  public dadosDivida = [];
  public opcoesPg = { };      

  ngOnInit() {
    this.dadosDivida = this.apiRestService.getDividasClaroMovel();
    
  }

  getAllOpcoesClaroMovel() {
    this.apiRestService.getAllOpcoesClaroMovel();
    this.dadosDivida.forEach( (dados) => this.sett(dados.CodigoTitulo));
  }
  sett (cod: string) {
    let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
    console.log("dadosDividaCod =");
    console.log(dadosDividaCod);
    console.log("this.apiRestService.opcoesPg=");
    console.log(this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo]);
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

  
}
