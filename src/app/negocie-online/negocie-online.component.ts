import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { ApiRestService, Divida, OpcoesPagamento } from '../api-rest.service';


@Component({
  selector: 'app-negocie-online',
  templateUrl: './negocie-online.component.html',
  styleUrls: ['./negocie-online.component.css']
})
export class NegocieOnlineComponent implements OnInit {

  constructor(private apiRestService: ApiRestService, private cd: ChangeDetectorRef) {    
  }

    
  public loadingParcelados: boolean;
  public loaderClaroMovel: boolean = true;
  
  public showFatura: boolean = true;
  public showHeader: boolean = true;
  public opcoesParcelamento: boolean;
  public prazoFinalizacao: boolean;
  public movelLabel: boolean;
  public opcoesParcelamentoLabel: boolean;
 
  public parcelado = { };
  public ind_parcelado: number; 

  
  public dadosDivida = [];
  public opcoesPg = { };      

  ngOnInit() {

    this.apiRestService.getDividas();
    if (this.apiRestService.dividas.Divida.DadosDivida.length) {
      this.dadosDivida = this.apiRestService.dividas.Divida.DadosDivida;
    }

    if (this.apiRestService.dividas.Divida.DadosDivida.CodigoDevedor) {
      this.dadosDivida.push(this.apiRestService.dividas.Divida.DadosDivida);
    }
  }

  pagarAVista(codTitulo: string, valor: string, plano: string) {
    this.apiRestService.parcelas = {
      aVista: valor
  };
  this.apiRestService.codTitulo = codTitulo;
  this.apiRestService.plano = plano;
}

  pagarParcelado(ind: number, codTitulo: string, plano: string) {
    this.apiRestService.parcelas = {
      primeira: this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
      vezes: ind,
      outrasParcelas: this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas 
    };
    this.apiRestService.codTitulo = codTitulo;
    this.apiRestService.plano = plano;
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
        console.log(res);
      
      if (!this.loadingParcelados && !res.Carregando) { this.loadingParcelados = true; setTimeout(() => { this.loaderClaroMovel = false }, 2000); }

      this.cd.detectChanges();     
      event.preventDefault();
    });
  }

  getValorNegociar (cod: string) {
    if (this.opcoesPg[cod]) {
      if (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar) {
        this.parcelado[cod] = 1;
        return this.opcoesPg[cod].OpcaoPagamento.ValorNegociar;      
      } else if (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar) {
        this.parcelado[cod] = 2;
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
