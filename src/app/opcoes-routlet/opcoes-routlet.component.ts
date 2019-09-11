import { Component, OnInit } from '@angular/core';
import { ApiRestService, Divida, Acordo } from '../api-rest.service';

@Component({
  selector: 'app-opcoes-routlet',
  templateUrl: './opcoes-routlet.component.html',
  styleUrls: ['./opcoes-routlet.component.css']
})
export class OpcoesRoutletComponent implements OnInit {

  constructor(private apiRestService: ApiRestService) { }

  public nome: string = this.apiRestService.getNome();
  //////////////////////////////////////////////////////////////
  showOpcoes: boolean = true;
  showNegocieOnline: boolean;
  showAssistenteVirtual: boolean;
  showRecebaNossaLigacao: boolean;
  showAcordosAndamento: boolean;
  cardBodyPagamento: boolean = true;
  fizPagamentoOk: boolean;

  logo_menor: boolean;

  
  ngOnInit() {

   ////////////////////////////////////////////////////////////////
   /* 
    this.apiRestService.dividas = new Divida();
    this.apiRestService.dividas.Acordo = new Acordo();
    this.apiRestService.acordos = [{
      DataAcordo: "14/02/2019",
      FilialAcordo: "NET",
      NumeroTitulo: "102405257.Claro Móvel",
      StatusAcordo: "PENDENTE",
      ParcelasAcordo: {
      ParcelaAcordo: [{
          DataVencimento: "15/02/2019",
          StatusParcelaAcordo: "NÃO PAGO",
          ValorParcela: "R$ 323.23",
        }, {
          DataVencimento: "15/02/2019",
          StatusParcelaAcordo: "NÃO PAGO",
          ValorParcela: "R$ 323.23",
        }, {
          DataVencimento: "15/02/2019",
          StatusParcelaAcordo: "NÃO PAGO",
          ValorParcela: "R$ 323.23"
        }]
      }
    }];
*/


    this.apiRestService.notificarMotor('1');
  }

  negocieOnline() {
    this.showOpcoes = false;
    this.showNegocieOnline = true;
    this.logo_menor = true;
  } 

  assistenteVirtual() {
    this.showOpcoes = false;
    this.showAssistenteVirtual = true;
  } 

  recebaNossaLigacao() {
    this.showOpcoes = false;
    this.showRecebaNossaLigacao = true;
  } 

  fizPagamento() {    
    this.apiRestService.fizPagamento().subscribe(res => {
      if (res) {
        this.cardBodyPagamento = false;
        this.fizPagamentoOk = true;
      }  
    });
  }

  acordosAndamento() {
    this.showOpcoes = false;
    this.showAcordosAndamento = true;
    this.logo_menor = true;
  }


  voltarMenu() {
    this.showOpcoes = true;
    this.showNegocieOnline = false;
    this.showAssistenteVirtual = false;
    this.showRecebaNossaLigacao = false;
    this.showAcordosAndamento = false;  
    this.logo_menor = false;
  }

}
