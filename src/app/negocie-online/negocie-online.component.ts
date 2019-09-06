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

  public fecharAbas = [true, true, true];

  public loadingParcelados: boolean;
  public loader: boolean;
  
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

  pagarParceladoTv(ind: number, codTitulo: string, plano: string) {
    
    this.apiRestService.parcelas = {
      primeira: this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
      vezes: ind,
      outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas 
    };
    this.apiRestService.codTitulo = codTitulo;
    this.apiRestService.plano = plano;
  }

  pagarParceladoMovel(ind: number, codTitulo: string, plano: string) {
    
    this.apiRestService.parcelas = {
      primeira: this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
      vezes: ind,
      outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas 
    };
    this.apiRestService.codTitulo = codTitulo;
    this.apiRestService.plano = plano;
  }

  pagarParceladoInternet(ind: number, codTitulo: string, plano: string) {
    
    this.apiRestService.parcelas = {
      primeira: this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
      vezes: ind,
      outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas 
    };
    this.apiRestService.codTitulo = codTitulo;
    this.apiRestService.plano = plano;
  }

  getAllOpcoesClaroMovel() {
    this.showHeader = false;
    this.movelLabel = true;

    this.apiRestService.getAllOpcoesClaroMovel();  
    if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length) {
      this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }

   /* if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.CodigoDevedor) {
      this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }*/
  }

  getAllOpcoesClaroTv() {
    this.showHeader = false;
    this.movelLabel = true;

    this.apiRestService.getAllOpcoesClaroTv();
    if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length) {
      this.apiRestService.dividasClaroTv.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }
   
  }


  getAllOpcoesClaroInternet() {
    this.showHeader = false;
    this.movelLabel = true;

    this.apiRestService.getAllOpcoesClaroInternet();    
    this.dadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
  }

  
  setOpcoes (cod: string) {
    let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
    
    this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo].subscribe(res => {
      this.opcoesPg[dadosDividaCod[0].CodigoTitulo] = res.OpcoesPagamento;
      
      if (!this.loadingParcelados && !res.Carregando) { this.loadingParcelados = true; setTimeout(() => { 
          this.loader = false; 
      }, 2000); }

      this.cd.detectChanges();     
      event.preventDefault();
    });
  }

  getValorTotal (cod: string) {
    if (this.opcoesPg[cod] && !this.opcoesPg[cod].Carregando) {
      if (this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido) {

        this.parcelado[cod] = 1;
        return this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido;      
      } else if (this.opcoesPg[cod].OpcaoPagamento.length) {
        this.parcelado[cod] = 2;
        return this.opcoesPg[cod].OpcaoPagamento[0].ValorCorrigido; 
      }  
    }
    else return "";      
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

  getOpcaoTv (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    
    return this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
  }

  getOpcaoMovel (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    
    return this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
  }

  getOpcaoInternet (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    
    return this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
  }

  showPrazoFinalizacao() {
    this.opcoesParcelamentoLabel = false;
    this.prazoFinalizacao = true;
    this.opcoesParcelamento = false;
  }

  showOpcoesParcelamento(ind, fecharAba: number) {

    this.opcoesParcelamento = true;
    this.showFatura = false;
    this.prazoFinalizacao = false;
    this.movelLabel = false;
    this.opcoesParcelamentoLabel = true;

    this.ind_parcelado = ind;

    this.fecharAbas = [false, false, false];
    this.fecharAbas[fecharAba] = true;
    }

  hideOpcoesParcelamento() {

    this.opcoesParcelamento = false;
    this.showFatura = true;
    this.prazoFinalizacao = false;
  }  

}
