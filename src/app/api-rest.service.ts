import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor() { }

  temDividas(cpf: string): Observable<boolean> {
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
  
  }
  

