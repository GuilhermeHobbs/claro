import { Component, OnInit } from '@angular/core';
import { ApiRestService, Boleto } from '../api-rest.service';

@Component({
  selector: 'app-acordos-andamento',
  templateUrl: './acordos-andamento.component.html',
  styleUrls: ['./acordos-andamento.component.css']
})
export class AcordosAndamentoComponent implements OnInit {

  public acordos = [ ];
  public showHeader: boolean = true;
  public boleto: any;

  constructor(private apiRestService: ApiRestService) { }

  ngOnInit() {
    if (this.apiRestService.acordos.length) {
      this.apiRestService.acordos.forEach (acc => {    
        this.acordos.push(acc);
      });
    }
    if (this.apiRestService.acordos.CodigoAcordo) {
      this.acordos.push(this.apiRestService.acordos);
    }  
  }

  getIcon(acordo) {
    switch (acordo.NumeroTitulo.split(' ')[1]) {
      case "Móvel": {
        return "assets/icons/phone.jpg";
      }

    }
  }
  
  segunda_via(codAcordo: string, codCodigoAcordo: string) {
    this.apiRestService.getBoletoAcordo(codAcordo, codCodigoAcordo).subscribe ((bol: Boleto) => {
       this.boleto = bol.BoletoAcordo;
       console.log(bol);
    });
  }

}
