import { Component, OnInit  } from '@angular/core';
import { ApiRestService, Boleto } from '../api-rest.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-acordos-andamento',
  templateUrl: './acordos-andamento.component.html',
  styleUrls: ['./acordos-andamento.component.css']
})
export class AcordosAndamentoComponent implements OnInit {

  public acordos = [ ];
  public loadingBoleto = [false];
  public erroBoleto: boolean;

  constructor(private apiRestService: ApiRestService, private router: Router) { }

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
  
  segunda_via(codAcordo: string, codCodigoAcordo: string, numeroTitulo: string, ind: number) {
    numeroTitulo = numeroTitulo.split('.')[0];
    this.loadingBoleto[ind] = true;
    console.log(codCodigoAcordo);
    this.apiRestService.getBoletoAcordo(codAcordo, codCodigoAcordo).subscribe ((bol: Boleto) => {
       console.log(bol);
       this.loadingBoleto[ind] = false;

       if (bol.BoletoAcordo) {
          //window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor + "&cliente=" + this.apiRestService.getNome());
          this.router.navigate(['/boleto'] , { queryParams: { data: bol.BoletoAcordo.DataVencimento, 
            linha: bol.BoletoAcordo.LinhaDigitavel, 
            valor: bol.BoletoAcordo.Valor, 
            cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, 
            contrato: numeroTitulo
          }});

        }
       else {
         this.erroBoleto = true;
       }
       
    });
  }

}
