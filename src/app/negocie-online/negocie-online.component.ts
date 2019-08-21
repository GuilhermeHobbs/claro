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
 
  constructor(private apiRestService: ApiRestService) {    
    //this.dadosDivida = this.apiRestService.getDividasClaroMovel();
    //this.dadosDivida.forEach(dados => this.getOpcaoAVista(dados.CodigoTitulo));  
  }

  public opcoesPag: OpcoesPagamento = { };
  public dadosDivida = [];      

  ngOnInit() {
    let dados = this.apiRestService.getDividasClaroMovel();
    //dados.forEach(dados => this.getOpcaoAVista(dados.CodigoTitulo));
    this.dadosDivida = dados;
    
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

  getOpcaoAVista(codTitulo: string) {
    console.log("inicializando:");
    console.log(codTitulo);
    
    this.opcoesPag[codTitulo] = {
      OpcaoPagamento: {
        OpcaoPagamento: {
          ValorNegociar: "Aguarde..."
        }
      }    
    };

    console.log("this.opcoesPag[codTitulo] = ");
    console.log(this.opcoesPag[codTitulo]);
  //   this.apiRestService.opcoesPg.subscribe( opc => {
  //     this.opcoesPag[codTitulo] = opc[codTitulo];
  //    });
      //this.opcoesPag = opc;
    }

   // getOpcaoAVista(codTitulo: string){
   //   this.getOpcaoAVista1(codTitulo).subscribe
   // }  

   // console.log( this.apiRestService.opcoesPgTitulo[codTitulo].OpcaoPagamento.OpcaoPagamento.ValorNegociar | );
  
   getValorAVista(ind) {
     console.log("ind=");
     console.log(ind);
     console.log("opcoesPag[ind]");
     console.log(this.opcoesPag);
     if (!this.opcoesPag[ind].OpcaoPagamento) return "Em aguarde...";
     else return this.opcoesPag[ind].OpcaoPagamento.OpcaoPagamento.ValorNegociar;
   }
}
