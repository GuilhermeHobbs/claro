import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apirequest_getdadosdevedor.php';
  private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apirequest_getdadosdivida.php';  

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  
  
  constructor(private http: HttpClient) { }

  temDividasouAcordo(cpfCnpj: string): Observable<boolean> {
     
     this.getDadosDevedor(cpfCnpj).pipe( map( (devedor: Devedor) => {
      console.log ("DEVEDOR = ");
      console.log(devedor); 
      
      //this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).subscribe((divida: Divida) => {
          
         // if (!divida.Acordo && !divida.Divida) observer.next(true);
         // else observer.next(false);
         // observer.complete()
      //});
    }));       
    return of(true);
  }

  getNome(): string {
    return ("Guilherme Hobbs");
  }  

  meLigue(num: string): Observable<boolean> {
    return of(true);
  } 

  fizPagamento(): Observable<boolean> {
    return of(true);
  } 
   
  
 getDadosDevedor(cpfCnpj: string): Observable<Devedor> {
  const cpfCnpjParam = new HttpParams().set('cpf', cpfCnpj);
   return this.http.post<Devedor>(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions).pipe( map( (devedor: Devedor) => {
    console.log ("DEVE = ");
    console.log(devedor); 
   
    return devedor;
   }));
  }  

 getDadosDivida(cpfCnpj: string, codDevedor: string): Observable<any> {
  const cpfCnpjParam = new HttpParams().set('cpf', cpfCnpj);
    
  const cpfDevedorParam = new HttpParams()
  .set('cpf', cpfCnpj)    
  .set('codigodevedor', codDevedor);
  
  return this.http.post<Divida>(this.urlDadosDivida, cpfDevedorParam, this.httpOptions);

 }  

}

  class Divida {
    Divida: any;
    Acordo:any;
  }

  class Devedor {
    Devedores: {
      Devedor: {
        Credor: string;
        CodigoDevedor: string;
        Nome: string;
      }    
    }    
  }
