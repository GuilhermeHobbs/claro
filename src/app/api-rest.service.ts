import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  public nome: string;

  public dividas: Divida;

  private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apirequest_getdadosdevedor.php';
  private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apirequest_getdadosdivida.php';  
  private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apirequest_getdadosopcoespagamento.php'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  
  
  constructor(private http: HttpClient) { }

  temDividasouAcordo(cpfCnpj: string): Observable<any> {
     
     return this.getDadosDevedor(cpfCnpj).pipe( flatMap( (devedor: Devedor) => {
      this.nome = devedor.Devedores.Devedor.Nome;
      return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe( map( (divida: Divida) => {
        this.dividas = divida;
        console.log(divida);
        return (divida.Acordo || divida.Divida);
      }));
    }));       
  }

  getNome(): string {
    return this.nome.toLowerCase();
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

 getOpcoesPagamento(codTitulo: string) {
  const cpfCnpjParam = new HttpParams().set('codigotitulo', codTitulo);
  return this.http.post<Divida>(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions);
 } 

 getDividasClaroMovel() {
  return this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Móvel" );
 }

 getDividasClaroInternet() {
  return this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro Internet" );
 }

 getDividasClaroTv() {
  return this.dividas.Divida.DadosDivida.filter( div => div.Produto === "Claro TV" );
 }

}

  export class Divida {
    Divida: {
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
    Acordo:any;
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
    OpcaoPagamento: {
      Plano: number;
    }
  }