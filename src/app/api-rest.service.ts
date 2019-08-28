import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  public acordos: Acordo;
  public devedor: Devedor; 
  public dividas: Divida;
  public dataPagamento: Date;
  public parcelas = new Parcelas();
  public codTitulo: string;
  public cpfCnpj: string;

  public dividasClaroMovel: Divida;

  public opcoesPg = { }; 

  private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
  private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';  
  private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
  private urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
  private urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  
  
  constructor(private http: HttpClient) { }

  temDividasouAcordo(cpfCnpj: string): Observable<any> {
     
     this.cpfCnpj = cpfCnpj;
     return this.getDadosDevedor(cpfCnpj).pipe( flatMap( (devedor: Devedor) => {
      this.devedor = devedor;
      return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe( map( (divida: Divida) => {
        console.log(divida);
        this.dividas = divida;
        if (divida.Acordo) this.acordos = divida.Acordo;
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
    
  testee(): Observable<Devedor> {
    const cpfCnpjParam = new HttpParams().set('cpf', '10805480765');
     return this.http.post<Devedor>(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions).pipe( map( (devedor: Devedor) => {
      return devedor;
     }));
  }
  
 getDadosDevedor(cpfCnpj: string): Observable<Devedor> {
  const cpfCnpjParam = new HttpParams().set('cpf', cpfCnpj);
   return this.http.post<Devedor>(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions);
  }  

 getDadosDivida(cpfCnpj: string, codDevedor: string): Observable<Divida> {
  const cpfDevedorParam = new HttpParams()
  .set('cpf', cpfCnpj)    
  .set('codigodevedor', codDevedor);
  return this.http.post<Divida>(this.urlDadosDivida, cpfDevedorParam, this.httpOptions);
 }  

 getOpcoesPagamento(codTitulo: string): Observable<OpcoesPagamento> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo);
  return this.http.post<OpcoesPagamento>(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions);
 } 

 getDadosAcordo(codTitulo: string): Observable<OpcoesPagamento> {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo);
  return this.http.post<OpcoesPagamento>(this.urlDadosAcordo, cpfCnpjParam, this.httpOptions);
 }
 
 gravaAcordo(codTitulo: string, cpf: string, codDevedor: string, codPlano: string, vencimentoPrimeira: string, valorPrimeira: string): Observable<OpcoesPagamento> {
  const params = new HttpParams().set('codigotitulo', codTitulo)
                                       .set('cpf', cpf)
                                       .set('codigodevedor', codDevedor)
                                       .set('codigotitulo', codTitulo)
                                       .set('plano', codPlano)
                                       .set('vencimentoprimeira', vencimentoPrimeira)
                                       .set('valorprimeira', valorPrimeira);

  return this.http.post<OpcoesPagamento>(this.urlGravaAcordo, params, this.httpOptions);
 }
  

 getDividasClaroMovel() {
  this.dividasClaroMovel = new Divida();
  this.dividasClaroMovel = {
    Divida: { 
      DadosDivida: []
    }
  };
  this.dividasClaroMovel.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Móvel" );  
  return this.dividasClaroMovel.Divida.DadosDivida;
}

 getAllOpcoesClaroMovel() {

if (this.opcoesPg[this.dividasClaroMovel.Divida.DadosDivida[0].CodigoTitulo]) return;  
 this.dividasClaroMovel.Divida.DadosDivida.forEach ( (divida) => {
 
  this.opcoesPg[divida.CodigoTitulo] = new BehaviorSubject<OpcoesPagamento>({
    OpcoesPagamento: {
      OpcaoPagamento: {
        ValorNegociar: "Aguarde..."
      }
    }
  });  
   this.getOpcoesPagamento(divida.CodigoTitulo).subscribe( (opc: OpcoesPagamento) => {
    this.opcoesPg[divida.CodigoTitulo].next(opc);
    });
  });
 }


 getDividasClaroInternet() {
  return this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Internet" );
 }

 getDividasClaroTv() {
  return this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro TV" );
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
    Acordo?: Acordo;
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
      DadosAcordo: {
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
    }

  export class Parcelas {
    primeira?: string;
    outrasParcelas?: string;
    vezes?: number;
    aVista?: string;
  }