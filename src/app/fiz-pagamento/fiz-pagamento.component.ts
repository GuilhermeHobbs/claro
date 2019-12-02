import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fiz-pagamento',
  templateUrl: './fiz-pagamento.component.html',
  styleUrls: ['./fiz-pagamento.component.css']
})
export class FizPagamentoComponent implements OnInit {

  public acordos = [ ];
  public dadosDivida = [];
  public maxDate = new Date();
  public loader: boolean;
  public movelLabel: boolean;
  public acordosClaroFixo = [];
  public acordosClaroMovel = [];
  public acordosClaroTv = [];
  public acordosClaroInternet = [];
  public mostrarAbas = [true, true, true, true]
  
  public acordosClaroFixoParcelas = [];
  public acordosClaroMovelParcelas = [];
  public acordosClaroTvParcelas = [];
  public acordosClaroInternetParcelas = [];

  constructor(public apiRestService: ApiRestService, private cd: ChangeDetectorRef) { 
  }

  ngOnInit() {

    console.log("this.apiRestService.acordos");
    console.log(this.apiRestService.acordos);
  
    if (this.apiRestService.acordos) {
      if (this.apiRestService.acordos.length) {
        this.apiRestService.acordos.forEach (acc => {    
          this.acordos.push(acc);
        });
      }
      if (this.apiRestService.acordos.CodigoAcordo) {
        this.acordos.push(this.apiRestService.acordos);
      }
    }
    
    this.apiRestService.getDividas();
    /*if (this.apiRestService.dividas.data.Dividas.Divida.length) {      
      this.dadosDivida = this.apiRestService.dividas.data.Dividas.Divida;
    }

    if (this.apiRestService.dividas.data.Dividas.Divida.CodigoDevedor) {
      this.dadosDivida.push(this.apiRestService.dividas.data.Dividas.Divida);
    }*/
    
  
    this.acordosClaroMovel = this.acordos.filter(aco => aco.NumeroTitulo.split('.')[1] === "Claro Móvel");
    this.acordosClaroInternet = this.acordos.filter(aco => aco.NumeroTitulo.split('.')[1] === "Claro Internet");
    this.acordosClaroTv = this.acordos.filter(aco => aco.NumeroTitulo.split('.')[1] === "Claro TV");
    this.acordosClaroFixo = this.acordos.filter(aco => aco.NumeroTitulo.split('.')[1] === "Claro Fixo");

    console.log("this.acordosClaroMovel =");
    console.log(this.acordosClaroMovel);
    
    this.acordosClaroMovel.forEach( aco => {
      if (aco.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo) {
        aco.ParcelasAcordo.ParcelaAcordo.NumeroTitulo = aco.NumeroTitulo.split('.')[0];
        this.acordosClaroMovelParcelas.push(aco.ParcelasAcordo.ParcelaAcordo)  
      }
      else {
      aco.ParcelasAcordo.ParcelaAcordo.forEach((par, ind) => {
        aco.ParcelasAcordo.ParcelaAcordo[ind].NumeroTitulo = aco.NumeroTitulo.split('.')[0];
      })  
      this.acordosClaroMovelParcelas = this.acordosClaroMovelParcelas.concat(aco.ParcelasAcordo.ParcelaAcordo);
      }  
    });
    
    this.acordosClaroInternet.forEach( aco => {
      if (aco.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo) {
        aco.ParcelasAcordo.ParcelaAcordo.NumeroTitulo = aco.NumeroTitulo.split('.')[0];
        this.acordosClaroInternetParcelas.push(aco.ParcelasAcordo.ParcelaAcordo)  
      }
      else {
      aco.ParcelasAcordo.ParcelaAcordo.forEach((par, ind) => {
        aco.ParcelasAcordo.ParcelaAcordo[ind].NumeroTitulo = aco.NumeroTitulo.split('.')[0];
      })  
      this.acordosClaroInternetParcelas = this.acordosClaroInternetParcelas.concat(aco.ParcelasAcordo.ParcelaAcordo);
      }  
    });

    this.acordosClaroTv.forEach( aco => {
      if (aco.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo) {
        aco.ParcelasAcordo.ParcelaAcordo.NumeroTitulo = aco.NumeroTitulo.split('.')[0];
        this.acordosClaroTvParcelas.push(aco.ParcelasAcordo.ParcelaAcordo)  
      }
      else {
      aco.ParcelasAcordo.ParcelaAcordo.forEach((par, ind) => {
        aco.ParcelasAcordo.ParcelaAcordo[ind].NumeroTitulo = aco.NumeroTitulo.split('.')[0];
      })  
      this.acordosClaroTvParcelas = this.acordosClaroTvParcelas.concat(aco.ParcelasAcordo.ParcelaAcordo);
      }  
    });

    this.acordosClaroFixo.forEach( aco => {
      if (aco.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo) {
        aco.ParcelasAcordo.ParcelaAcordo.NumeroTitulo = aco.NumeroTitulo.split('.')[0];
        this.acordosClaroFixoParcelas.push(aco.ParcelasAcordo.ParcelaAcordo)  
      }
      else {
      aco.ParcelasAcordo.ParcelaAcordo.forEach((par, ind) => {
        aco.ParcelasAcordo.ParcelaAcordo[ind].NumeroTitulo = aco.NumeroTitulo.split('.')[0];
      })  
      this.acordosClaroFixoParcelas = this.acordosClaroFixoParcelas.concat(aco.ParcelasAcordo.ParcelaAcordo);
      }  
    });

  }

  mostraAbaClaroMovel() {
    return (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length || this.acordosClaroMovelParcelas.length ) && this.mostrarAbas[0];
  }

  mostraAbaClaroInternet() {
    return (this.apiRestService.dividasClaroInternet.Divida.DadosDivida.length || this.acordosClaroInternetParcelas.length ) && this.mostrarAbas[1];
  }

  mostraAbaClaroTv() {
    return (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length || this.acordosClaroTvParcelas.length ) && this.mostrarAbas[2];
  }

  mostraAbaClaroFixo() {
    return (this.apiRestService.dividasClaroFixo.Divida.DadosDivida.length || this.acordosClaroFixoParcelas.length ) && this.mostrarAbas[3];
  }

  getIcon(acordo) {
    switch (acordo.NumeroTitulo.split(' ')[1]) {
      case "Móvel": {
        return "assets/icons/phone.jpg";
      }
      case "Internet": {
        return "assets/icons/internet.jpg";
      }
      case "TV": {
        return "assets/icons/tv.jpg";
      }
      case "Fixo": {  
        return "assets/icons/phone.jpg";  
    }
   }
  }

  getAllOpcoesClaroMovel() { 
    
    this.mostrarAbas = [true, false, false, false];
    this.movelLabel = true;   
  }

  getAllOpcoesClaroInternet() {

    this.mostrarAbas = [false, true, false, false];
    this.movelLabel = true;     
  }

  getAllOpcoesClaroTv() {

    this.mostrarAbas = [false, false, true, false];
    this.movelLabel = true;     
  }

  getAllOpcoesClaroFixo() {

    this.mostrarAbas = [false, false, false, true];
    this.movelLabel = true;     
  }


}
