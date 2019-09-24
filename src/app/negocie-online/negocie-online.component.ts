import { Component, OnInit, ChangeDetectorRef, HostListener, OnDestroy } from '@angular/core';
import { ApiRestService, Divida, OpcoesPagamento } from '../api-rest.service';


@Component({
  selector: 'app-negocie-online',
  templateUrl: './negocie-online.component.html',
  styleUrls: ['./negocie-online.component.css']
})
export class NegocieOnlineComponent implements OnInit, OnDestroy {

  constructor(public apiRestService: ApiRestService, private cd: ChangeDetectorRef) { 
   }

  ngOnDestroy() {
   // this.cd.detach();
  }

  public mostrarAbas = [true, true, true, true];

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
    
    //if (!this.dadosDivida.length) {

    this.apiRestService.getDividas();
    if (this.apiRestService.dividas.Divida.DadosDivida.length) {      
      this.dadosDivida = this.apiRestService.dividas.Divida.DadosDivida;
    }

    if (this.apiRestService.dividas.Divida.DadosDivida.CodigoDevedor) {
      this.dadosDivida.push(this.apiRestService.dividas.Divida.DadosDivida);
    }
 // }
 }

 botaoNaoClicavel() {
   return this.mostrarAbas.every(Boolean);
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

  pagarParceladoFixo(ind: number, codTitulo: string, plano: string) {
    
    this.apiRestService.parcelas = {
      primeira: this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
      vezes: ind,
      outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas 
    };
    this.apiRestService.codTitulo = codTitulo;
    this.apiRestService.plano = plano;
  }

  getAllOpcoesClaroMovel() { 
    
    this.mostrarAbas = [true, false, false, false];

   //////////////////////////////if (!this.apiRestService.getAllOpcoesClaroMovel()) {
    this.apiRestService.getAllOpcoesClaroMovel();  
    this.loader = true;
    this.showHeader = false;
    this.movelLabel = true;
      
    if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length) {
      if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length > 2) this.apiRestService.showDisclaimer = false;
      this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }

   /* if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.CodigoDevedor) {
      this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }*/
   ////////////////////////////}
  }

  getAllOpcoesClaroTv() {
    this.mostrarAbas = [false, true, false, false];

    this.apiRestService.getAllOpcoesClaroTv();
    this.loader = true;  
    this.showHeader = false;
    this.movelLabel = true;
    
    if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length) {
      if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length > 2) this.apiRestService.showDisclaimer = false;
      this.apiRestService.dividasClaroTv.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }
  }


  getAllOpcoesClaroInternet() {
    this.mostrarAbas = [false, false, true, false];

    this.apiRestService.getAllOpcoesClaroInternet();
    this.loader = true;
    this.showHeader = false;
    this.movelLabel = true;
            
    if (this.apiRestService.dividasClaroInternet.Divida.DadosDivida.length) {
      if (this.apiRestService.dividasClaroInternet.Divida.DadosDivida.length > 2) this.apiRestService.showDisclaimer = false;
      this.apiRestService.dividasClaroInternet.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }
  }

  getAllOpcoesClaroFixo() {
    this.mostrarAbas = [false, false, false, true];

   this.apiRestService.getAllOpcoesClaroFixo();
    this.loader = true;
    this.showHeader = false;
    this.movelLabel = true;
            
    if (this.apiRestService.dividasClaroFixo.Divida.DadosDivida.length) {
      if (this.apiRestService.dividasClaroFixo.Divida.DadosDivida.length > 2) this.apiRestService.showDisclaimer = false;
      this.apiRestService.dividasClaroFixo.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
    }
  }
  
  setOpcoes (cod: string) {
    let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
    
    this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo].subscribe(res => {
      this.opcoesPg[dadosDividaCod[0].CodigoTitulo] = res.OpcoesPagamento;
        console.log("RES.OPCOESPAGAMENTO=");
        console.log(res.OpcoesPagamento);
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
        if (+this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido.replace(',','.') < 45.00) this.parcelado[cod] = 1;        
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido);
      } else if (this.opcoesPg[cod].OpcaoPagamento.length) {
        this.parcelado[cod] = 2;
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento[0].ValorCorrigido);
      }  
    }
    else return "";      
  }

  

  getValorNegociar (cod: string) {
    if (this.opcoesPg[cod]) {
      if (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar) {
        this.parcelado[cod] = 1;
        return this.apiRestService.doisDigitosDecimais (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar);      
      } else if (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar) {
        this.parcelado[cod] = 2;
        return this.apiRestService.doisDigitosDecimais (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar); 
      }  
    }
    else return "";      
  }

  getOpcaoFixo (ind: number) {
    return this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
  } 

  getOpcaoTv (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    return this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
  }

  getOpcaoMovel (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    return this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
  }

  getOpcaoInternet (ind: number) {
    /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
    console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
    console.log("this.opcoesPg=");
    console.log(this.opcoesPg);
    console.log("ind=");
    console.log(ind);*/
    return this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais (this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
  }

  showPrazoFinalizacao() {
    this.apiRestService.showDisclaimer = true;
    
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
