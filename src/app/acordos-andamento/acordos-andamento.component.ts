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
  public loader = false;
  public erroBoleto = [[false]];
  public erro = false;
  public sucessoEmail: boolean;
  public porEmail: boolean;
  public porSms: boolean;
  public accDividas = true;
  public boleto: Boleto;
  public numTitulo: string;
  public emailRes: string;
  public smsRes = '';
  
  constructor(public apiRestService: ApiRestService, private router: Router) {
   }

  ngOnInit() {
      
    if (this.apiRestService.acordos.length) {
      this.apiRestService.acordos.forEach (acc => {    
        this.acordos.push(acc);
      });
    }
    if (this.apiRestService.acordos.CodigoAcordo) {
      this.acordos.push(this.apiRestService.acordos);
    }
    
    this.acordos.forEach( (acc, ind) => {
      this.erroBoleto[ind] = [];
     });
    
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

  segunda_via(codAcordo: string, codCodigoAcordo: string, numeroTitulo: string, ind: number, indAcordo: number) {
    console.log("indAcordo=");
    console.log(indAcordo);
    this.erroBoleto[indAcordo][ind] = false;
    numeroTitulo = numeroTitulo.split('.')[0];
    this.loadingBoleto[ind] = true;
    console.log(codCodigoAcordo);
    this.apiRestService.getBoletoAcordo(codAcordo, codCodigoAcordo).subscribe ((bol: Boleto) => {
       console.log(bol);
       this.loadingBoleto[ind] = false;

       if (bol.BoletoAcordo) {
          window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + this.apiRestService.doisDigitosDecimais(bol.BoletoAcordo.Valor) + "&cliente=" + this.apiRestService.devedor.Devedores.Devedor.Nome + "&contrato=" + numeroTitulo + "&codigo=" + this.apiRestService.linhaDigitavelToCodigoBarras(bol.BoletoAcordo.LinhaDigitavel));
          /* this.router.navigate(['/boleto'] , { queryParams: { data: bol.BoletoAcordo.DataVencimento, 
            linha: bol.BoletoAcordo.LinhaDigitavel, 
            valor: this.apiRestService.doisDigitosDecimais(bol.BoletoAcordo.Valor), 
            cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, 
            contrato: numeroTitulo
          }}); */

        }
       else {
         
         this.erroBoleto[indAcordo][ind] = true;
       }
       
    });
  }

  voltarEmail() {
    this.porEmail = false;
    this.sucessoEmail = false;
    this.accDividas = true;
    this.erro = false;
    this.loader = false;
  }

  voltarSms() {
    this.porSms = false;
    this.accDividas = true;
    this.erro = false;
    this.loader = false;
  }

  enviarSms() {
    this.loader = true;
    this.apiRestService.enviaSms( this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.apiRestService.doisDigitosDecimais(this.boleto.BoletoAcordo.Valor)).subscribe(res => {
      this.loader = false;
      if (res.response) {
        this.accDividas = true;
        this.porSms = false;
      }
      else {
        this.erro = true;
      }
   });
  }

  pegarTelefone(ind: number, codAcordo: string, codTitulo: any, indAcordo: number) {
    this.erroBoleto[indAcordo][ind] = false;
    let codigoParcelaAcordo: string;
    this.loadingBoleto[ind] = true;
    this.emailRes = '';
    this.smsRes = '';
    console.log("acoordo=");
    console.log(codTitulo);
    this.apiRestService.getDadosAcordo(codTitulo).subscribe (acc => { 
      console.log("acc=");
      console.log(acc);
      if (acc.Acordo.DadosAcordo.length) {
        console.log(".length");
        console.log(ind);
        acc.Acordo.DadosAcordo = acc.Acordo.DadosAcordo[indAcordo];
      }
      if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
      else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
      this.apiRestService.getBoletoAcordo(codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => { 
        this.loadingBoleto[ind] = false;
        
        console.log("bol=");  
        console.log(bol);
               
       if (bol.BoletoAcordo) {
        this.accDividas = false; 
        this.porSms = true;
         this.boleto = bol; 
       } else this.erroBoleto[indAcordo][ind] = true;
              
    });
  });

  }

  pegarEmail(ind: number, codAcordo: string, codTitulo: any, numTitulo: string, indAcordo: number) {
    this.erroBoleto[indAcordo][ind] = false;
    let codigoParcelaAcordo: string;
    this.smsRes = '';
    this.loadingBoleto[ind] = true;
    this.numTitulo = numTitulo;
    this.emailRes = '';
    console.log("acoordo=");
    console.log(codTitulo);
    this.apiRestService.getDadosAcordo(codTitulo).subscribe (acc => { 
          console.log("acc=");
          console.log(acc);

          console.log(acc.Acordo.DadosAcordo)
      if (acc.Acordo.DadosAcordo.length) {
        console.log(".length");
        console.log(ind);
        acc.Acordo.DadosAcordo = acc.Acordo.DadosAcordo[indAcordo];
      }
        console.log(acc.Acordo.DadosAcordo)
          if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
          else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
          this.apiRestService.getBoletoAcordo(codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => { 
            this.loadingBoleto[ind] = false;
            //this.accDividas = false;
            console.log("bol=");  
            console.log(bol);
                  
          if (bol.BoletoAcordo) {
            this.loadingBoleto[ind] = false;
            this.accDividas = false;
            this.porEmail = true;
            this.boleto = bol; 
          } else this.erroBoleto[indAcordo][ind] = true;
                  
        });
      
  });

  }

  enviarEmail () {
    this.loader = true;
    this.apiRestService.enviaBoletoEmail(this.numTitulo.split('.')[0], this.apiRestService.doisDigitosDecimais(this.boleto.BoletoAcordo.Valor), this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.LinhaDigitavel, this.apiRestService.email).subscribe(res => {
      this.loader = false;
      this.emailRes = res.message;
      this.accDividas = true;
      this.porEmail = false;
    });
 }

}
