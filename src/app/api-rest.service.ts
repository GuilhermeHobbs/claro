import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, EMPTY } from 'rxjs';
import { map, catchError, flatMap, shareReplay, retry } from 'rxjs/operators';

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
  public email: string;
  public telaFinal = false;

  public dividasClaroMovel: Divida;
  public dividasClaroInternet: Divida;
  public dividasClaroTv: Divida;
  public dividasClaroFixo: Divida;

  public opcoesPg = { }; 

  //private urlDadosDevedor = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/devedores'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  //private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  private urlDadosDevedor = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  //private urlDadosDevedor = 'apiresposta/apirequest_getdadosdevedor.php';
  //private urlDadosDivida = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/divida';   //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';  
  //private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
  private urlDadosDivida = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
  //private urlDadosDivida = 'apiresposta/apirequest_getdadosdivida.php';
  //private urlOpcoesPagamento = 'https://my-json-server.typicode.com/GuilhermeHobbs/opcoes/opcoes'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
  //private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
  private urlOpcoesPagamento = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php';
  //private urlOpcoesPagamento = 'apiresposta/apirequest_getdadosopcoespagamento.php';
  //private urlDadosAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/dadosAcordo/acordo';  // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  //private urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  private urlDadosAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  //private urlDadosAcordo = 'apiresposta/apirequest_getdadosacordo.php';
  //private urlGravaAcordoTv = 'apiresposta/apirequest_gravaacordo_clarotv.php';
  //private urlGravaAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/gravaAcordo/gravar';
  //private urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
  private urlGravaAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
  private urlGravaAcordoTv = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_gravaacordo_clarotv.php';
  //private urlGravaAcordo = 'apiresposta/apirequest_gravaacordo.php';
  //private urlBoletoAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/boletoAcordo/boleto'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
  //private urlBoletoAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
  private urlBoletoAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
  //private urlBoletoAcordo = 'apiresposta/apirequest_getboletoacordo.php';
  //private urlEnviaSms = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_smsenvio.php';
  //private urlEnviaSms = 'https://my-json-server.typicode.com/GuilhermeHobbs/smsEnvio/sms';
  private urlEnviaSms = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_smsenvio.php';
  //private urlEnviaSms = 'apiresposta/apirequest_smsenvio.php';
  private urlBoletoEmail = 'http://186.215.156.250:8085/landingpage/apiresposta/boleto/sendBill.php';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  
  
  constructor(private http: HttpClient) { }

  temDividasouAcordo(cpfCnpj: string): Observable<number> {
     
     this.cpfCnpj = cpfCnpj;
     return this.getDadosDevedor(cpfCnpj).pipe( flatMap( (devedor: Devedor) => {
      if (devedor.Codigo === '27') return of(0);
      if (devedor.Codigo === '10') {
        if (!devedor.Devedores) return of(0);
        this.devedor = devedor;
        console.log(devedor);
        return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe( map( (divida: Divida) => {
          console.log(divida);
          if (divida.Codigo !== '23' && divida.Codigo !== '10') return 2;
          
          this.dividas = divida;
          if (divida.Acordo) {
            this.acordos = divida.Acordo.DadosAcordo;
            return 1;
          }
          if (divida.Divida) return 1  
          return 0;
        }));
      }
        else return of(2);
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
   return this.http.post<Devedor>(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions).pipe(
     retry(100),
     catchError(() => {
       return EMPTY;
     }),
     shareReplay()
     ) 
   
  }  

 getDadosDivida(cpfCnpj: string, codDevedor: string): Observable<Divida> {
  const cpfDevedorParam = new HttpParams()
  .set('cpf', cpfCnpj)    
  .set('codigodevedor', codDevedor);
  return this.http.post<Divida>(this.urlDadosDivida,cpfDevedorParam, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
 }  

 getOpcoesPagamento(codTitulo: string): Observable<OpcoesPagamento> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', this.cpfCnpj);    
  return this.http.post<OpcoesPagamento>(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
 } 

 getDadosAcordo(codTitulo: string): Observable<any> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', this.cpfCnpj);
  return this.http.post<any>(this.urlDadosAcordo, cpfCnpjParam, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    ) 
 }
 
 getBoletoAcordo(codAcordo: string, codCodigoAcordo: string): Observable<Boleto> {
  const params = new HttpParams().set('codigoacordo', codAcordo)
                                 .set('codigoparcelaacordo', codCodigoAcordo)
                                 .set('cpf', this.cpfCnpj);    
  return this.http.post<Boleto>(this.urlBoletoAcordo, params, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
 }

 enviaSms(codigobarra: string, vencimento: string, valor: string): Observable<any> {
  let nome = this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase().split(' ')[0];
  const params = new HttpParams().set('cpf', this.cpfCnpj)
      .set('numeroenvio', this.telefone)
      .set('textosms', nome + ", Código de barras da conta CLARO, Vencimento " + vencimento + ", Valor R$ " + valor + ", Código: " + codigobarra);  
      return this.http.post(this.urlEnviaSms, params, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
 }
 

 gravaAcordo(codTitulo: string, cpf: string, codDevedor: string, codPlano: string, vencimentoPrimeira: string, valorPrimeira: string): Observable<any> {
  let url: string;
  const params = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', cpf)
                                       .set('codigodevedor', codDevedor)
                                       .set('plano', codPlano)
                                       .set('vencimentoprimeira', vencimentoPrimeira)
                                       .set('valorprimeira', valorPrimeira.replace('.',','));
  if (this.dividasClaroFixo.Divida.DadosDivida.length ||
      this.dividasClaroInternet.Divida.DadosDivida.length ||
      this.dividasClaroMovel.Divida.DadosDivida.length) url = this.urlGravaAcordo;
  else url = this.urlGravaAcordoTv;    
      

  return this.http.post(url, params, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
 }
  

 enviaBoletoEmail(contrato: string, valor: string, vencimento: string, linha: string, email: string): Observable<any> {
  const params = new HttpParams().set('cliente', this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase())
                                 .set('cpf', this.cpfCnpj)
                                 .set('contrato', contrato)
                                 .set('valor', valor)
                                 .set('vencimento', vencimento)
                                 .set('codigobarra', linha)
                                 .set('email', email);

  return this.http.post(this.urlBoletoEmail, params, this.httpOptions).pipe(
    retry(100),
    catchError(() => {
      return EMPTY;
    }),
    shareReplay()
    )  
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
   
   doisDigitosDecimais (num: string) {
     num = num.replace(',','.');
     if (num.indexOf('.') === num.length-2) return num + '0';
     else return num;
   }   

}

  export class Divida {
    Codigo?: string;
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
    Codigo: string;
    Devedores?: {
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