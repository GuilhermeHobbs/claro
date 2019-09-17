import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  public showDisclaimer = true;
  
  public acordos: any;
        
  public devedor: Devedor; 
  public dividas: any;
  public parcelas = new Parcelas();
  public codTitulo: string;
  public cpfCnpj: string;
  public plano: string;
  public telefone: string;

  public dividasClaroMovel: Divida;
  public dividasClaroInternet: Divida;
  public dividasClaroTv: Divida;
  public dividasClaroFixo: Divida;

  public opcoesPg = { }; 

  private urlDadosDevedor = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/devedores'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  //private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  //private urlDadosDevedor = 'apiresposta/apirequest_getdadosdevedor.php';
  private urlDadosDivida = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/divida';   //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';  
  //private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
  //private urlDadosDivida = 'apiresposta/apirequest_getdadosdivida.php';
  private urlOpcoesPagamento = 'https://my-json-server.typicode.com/GuilhermeHobbs/opcoes/opcoes'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
  //private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
  //private urlOpcoesPagamento = 'apiresposta/apirequest_getdadosopcoespagamento.php';
  private urlDadosAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/dadosAcordo/acordo';  // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  //private urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  //private urlDadosAcordo = 'apiresposta/apirequest_getdadosacordo.php';
  private urlGravaAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/gravaAcordo/gravar';
  //private urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
  //private urlGravaAcordo = 'apiresposta/apirequest_gravaacordo.php';
  private urlBoletoAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/boletoAcordo/boleto'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
  //private urlBoletoAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
  //private urlBoletoAcordo = 'apiresposta/apirequest_getboletoacordo.php';
  //private urlEnviaSms = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_smsenvio.php';
  private urlEnviaSms = 'https://my-json-server.typicode.com/GuilhermeHobbs/smsEnvio/sms';
  //private urlEnviaSms = 'apiresposta/apirequest_smsenvio.php';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  
  
  constructor(private http: HttpClient) { }

  temDividasouAcordo(cpfCnpj: string): Observable<any> {
     
     this.cpfCnpj = cpfCnpj;
     return this.getDadosDevedor(cpfCnpj).pipe( flatMap( (devedor: Devedor) => {
      this.devedor = devedor;
      console.log(devedor);
      return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe( map( (divida: Divida) => {
        console.log(divida);
        this.dividas = divida;
        if (divida.Acordo) this.acordos = divida.Acordo.DadosAcordo;
        return (divida.Acordo || divida.Divida);
      }));
    }));       
  }

  getNome(): string {
    return this.devedor.Devedores.Devedor.Nome.toLowerCase();
  }  

  meLigue(num: string): Observable<boolean> {
    return of(true);
  } 

  fizPagamento(): Observable<boolean> {
    return of(true);
  } 
    
  
 getDadosDevedor(cpfCnpj: string): Observable<Devedor> {
  const cpfCnpjParam = new HttpParams().set('cpf', cpfCnpj);
   return this.http.get<Devedor>(this.urlDadosDevedor)//, cpfCnpjParam, this.httpOptions);
  }  

 getDadosDivida(cpfCnpj: string, codDevedor: string): Observable<Divida> {
  const cpfDevedorParam = new HttpParams()
  .set('cpf', cpfCnpj)    
  .set('codigodevedor', codDevedor);
  return this.http.get<Divida>(this.urlDadosDivida)//,cpfDevedorParam, this.httpOptions);
 }  

 getOpcoesPagamento(codTitulo: string): Observable<OpcoesPagamento> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', this.cpfCnpj);    
  return this.http.post<OpcoesPagamento>(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions);
 } 

 getDadosAcordo(codTitulo: string): Observable<any> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', this.cpfCnpj);
  return this.http.get<any>(this.urlDadosAcordo)//, cpfCnpjParam, this.httpOptions);
 }
 
 getBoletoAcordo(codAcordo: string, codCodigoAcordo: string): Observable<Boleto> {
  const params = new HttpParams().set('codigoacordo', codAcordo)
                                 .set('codigoparcelaacordo', codCodigoAcordo)
                                 .set('cpf', this.cpfCnpj);    
  return this.http.get<Boleto>(this.urlBoletoAcordo)//, params, this.httpOptions);
 }

 enviaSms(codigobarra: string, vencimento: string, valor: string): Observable<any> {
  const params = new HttpParams().set('nome', this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase())
                                 .set('codigobarra', codigobarra)
                                 .set('vencimento', vencimento)
                                 .set('valor', valor)    
                                 .set('numeroenvio', this.telefone);
  return this.http.post(this.urlEnviaSms, params, this.httpOptions);
 }
 

 gravaAcordo(codTitulo: string, cpf: string, codDevedor: string, codPlano: string, vencimentoPrimeira: string, valorPrimeira: string): Observable<any> {
  const params = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', cpf)
                                       .set('codigodevedor', codDevedor)
                                       .set('codigotitulo', codTitulo)
                                       .set('plano', codPlano)
                                       .set('vencimentoprimeira', vencimentoPrimeira)
                                       .set('valorprimeira', valorPrimeira);

  return this.http.post(this.urlGravaAcordo, params, this.httpOptions);
 }
  

 getDividas() {
  
  this.dividasClaroMovel = new Divida();
  this.dividasClaroMovel = {
    Divida: { 
      DadosDivida: []
    }
  };

  this.dividasClaroInternet = new Divida();
  this.dividasClaroInternet = {
    Divida: { 
      DadosDivida: []
    }
  };

  this.dividasClaroTv = new Divida();
  this.dividasClaroTv = {
    Divida: { 
      DadosDivida: []
    }
  };

  this.dividasClaroFixo = new Divida();
  this.dividasClaroFixo = {
    Divida: { 
      DadosDivida: []
    }
  };

  
  console.log("this.dividasClaroTv.Divida.DadosDivida");
  console.log(this.dividasClaroTv.Divida.DadosDivida);
  
  if (this.dividas.Divida.DadosDivida.length) {
    this.dividasClaroMovel.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Móvel" );  
    this.dividasClaroInternet.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Internet" );
    this.dividasClaroTv.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro TV" );
    this.dividasClaroFixo.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Fixo" );
  
  }
  
  else { 
    
    switch (this.dividas.Divida.DadosDivida.Produto) {
      case "Claro Móvel": {
        this.dividasClaroMovel.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
        break;
      } 
      case "Claro Internet": {
        this.dividasClaroInternet.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
        break;
      }
      case "Claro TV": {
        this.dividasClaroTv.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
        break;
      }
      case "Claro Fixo": {
        this.dividasClaroFixo.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
        break;
      }
  }  

 }
}

 getAllOpcoesClaroMovel() {

if (this.opcoesPg[this.dividasClaroMovel.Divida.DadosDivida[0].CodigoTitulo]) return true;  
 this.dividasClaroMovel.Divida.DadosDivida.forEach ( (divida) => {
 
  this.opcoesPg[divida.CodigoTitulo] = new BehaviorSubject<OpcoesPagamento>({
    Carregando: true,
    OpcoesPagamento: {
      OpcaoPagamento: {
        ValorNegociar: "Aguarde...",
      }
    }
  });  
   this.getOpcoesPagamento(divida.CodigoTitulo).subscribe( (opc: OpcoesPagamento) => {
    opc.Carregando = false;
    this.opcoesPg[divida.CodigoTitulo].next(opc);
    });
  });
 }


 getAllOpcoesClaroTv() {

  if (this.opcoesPg[this.dividasClaroTv.Divida.DadosDivida[0].CodigoTitulo]) return true;
   this.dividasClaroTv.Divida.DadosDivida.forEach ( (divida) => {
   
    this.opcoesPg[divida.CodigoTitulo] = new BehaviorSubject<OpcoesPagamento>({
      Carregando: true,
      OpcoesPagamento: {
        OpcaoPagamento: {
          ValorNegociar: "Aguarde...",
        }
      }
    });  

     this.getOpcoesPagamento(divida.CodigoTitulo).subscribe( (opc: OpcoesPagamento) => {
      opc.Carregando = false;
      this.opcoesPg[divida.CodigoTitulo].next(opc);
      });
    });
   }

   getAllOpcoesClaroInternet() {

    if (this.opcoesPg[this.dividasClaroInternet.Divida.DadosDivida[0].CodigoTitulo]) return true;  
     this.dividasClaroInternet.Divida.DadosDivida.forEach ( (divida) => {
     
      this.opcoesPg[divida.CodigoTitulo] = new BehaviorSubject<OpcoesPagamento>({
        Carregando: true,
        OpcoesPagamento: {
          OpcaoPagamento: {
            ValorNegociar: "Aguarde...",
          }
        }
      });  
       this.getOpcoesPagamento(divida.CodigoTitulo).subscribe( (opc: OpcoesPagamento) => {
        opc.Carregando = false;
        this.opcoesPg[divida.CodigoTitulo].next(opc);
        });
      });
     }
  
     getAllOpcoesClaroFixo() {

      if (this.opcoesPg[this.dividasClaroFixo.Divida.DadosDivida[0].CodigoTitulo]) return true;  
       this.dividasClaroFixo.Divida.DadosDivida.forEach ( (divida) => {
       
        this.opcoesPg[divida.CodigoTitulo] = new BehaviorSubject<OpcoesPagamento>({
          Carregando: true,
          OpcoesPagamento: {
            OpcaoPagamento: {
              ValorNegociar: "Aguarde...",
            }
          }
        });  
         this.getOpcoesPagamento(divida.CodigoTitulo).subscribe( (opc: OpcoesPagamento) => {
          opc.Carregando = false;
          this.opcoesPg[divida.CodigoTitulo].next(opc);
          });
        });
       }

}

  export class Divida {
    Divida?: {
      DadosDivida: Array<{
        CodigoDevedor: string;
        CodigoTitulo: string;
        NumeroTitulo: string;
        Produto: string;
        Parcelas: {
          ParcelaDivida: {
            CodigoParcela: string;
            DescricaoDaParcela: string;
            Valor: string;
            Vencimento: string;
          }
        }
      }>
    }
    Acordo?: { 
      DadosAcordo: Array<Acordo>;
    }  
  }

  export class Devedor {
    Devedores: {
      Devedor: {
        Credor: string;
        CodigoDevedor: string;
        Nome: string;
      }    
    }    
  }

  export class OpcoesPagamento {
    Carregando?: boolean;
    OpcoesPagamento?: {
      OpcaoPagamento: {
        Plano?: number;
        ValorCorrecao?: string;
        ValorCorrigido?: string;
        ValorDemaisParcelas?: string;
        ValorDesconto?: string;
        ValorNegociar?: string;
        ValorOriginal?: string;
        ValorPrimeira?: string;
        VencimentoDemaisParcelas?: string;
        VencimentoPrimeira?: string;                        

      }
    }  
  }

  export class Acordo {
        CodigoAcordo: string;
        CodigoDevedor: string;
        CodigoTitulo: string;
        DataAcordo: string;
        FilialAcordo: string;
        NumeroTitulo: string;
        StatusAcordo: string;
        ParcelasAcordo: {
          ParcelaAcordo: Array<{
            CodigoParcelaAcordo: string;
            DataVencimento: string;
            NumeroParcela: string;
            StatusParcelaAcordo: string;
            ValorParcela: string;
          }>
        }
      }

  export class Parcelas {
    primeira?: string;
    outrasParcelas?: string;
    vezes?: number;
    aVista?: string;
  }

  export class Boleto {
    BoletoAcordo: {
      DataVencimento: string;
      LinhaDigitavel: string;
      Valor: string;
    }
  }