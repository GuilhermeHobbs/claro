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
  public sucessoEmail: boolean;
  public porEmail: boolean;
  public sucessoSms: boolean;
  public porSms: boolean;
  public accDividas = true;
  public boleto: Boleto;

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
          //window.open ("boleto?data=" + encodeURIComponent(bol.BoletoAcordo.DataVencimento) + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor + "&cliente=" + this.apiRestService.getNome() + "&contrato=" + numeroTitulo);
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

  voltarEmail() {
    this.porEmail = false;
    this.sucessoEmail = false;
    this.accDividas = true;
  }

  voltarSms() {
    this.porSms = false;
    this.sucessoSms = false;
    this.accDividas = true;
  }

  enviarSms() {
    this.apiRestService.enviaSms( this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.Valor).subscribe(res => {
      this.sucessoSms = true;
      console.log("RES SMS="); 
      console.log(res);
   });
  }

  pegarTelefone(ind: number, codAcordo: string, codTitulo: any) {
    this.accDividas = false;

    let codigoParcelaAcordo: string;
    this.loadingBoleto[ind] = true;
    console.log("acoordo=");
    console.log(codTitulo);
    this.apiRestService.getDadosAcordo(codTitulo).subscribe (acc => { 
      console.log("acc=");
      console.log(acc);
      if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
      else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
      this.apiRestService.getBoletoAcordo(codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => { 
        this.loadingBoleto[ind] = false;
        console.log("bol=");  
        console.log(bol);
               
       if (bol.BoletoAcordo) {
         this.porSms = true;
         this.boleto = bol; 
       } else this.erroBoleto = true;
              
    });
  });

  }

  pegarEmail(ind: number) {
    this.porEmail = true;
    this.accDividas = false;

  }

  enviarEmail () { }

}
