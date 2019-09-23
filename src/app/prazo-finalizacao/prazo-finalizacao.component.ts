import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ApiRestService, Boleto, Acordo } from '../api-rest.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-prazo-finalizacao',
  templateUrl: './prazo-finalizacao.component.html',
  styleUrls: ['./prazo-finalizacao.component.css']
})
export class PrazoFinalizacaoComponent implements OnInit {

  @Output() clickVoltar = new EventEmitter<boolean>(); 
  @Output() clickVoltarAVista= new EventEmitter<boolean>();

  minDate: Date;
  maxDate: Date;

  public dataPagamento: string;
  public opcoesParcelamento: boolean = true;
  public fim: boolean;
  public sucesso: boolean;
  public erro: boolean;
  public loader: boolean;
  public loadingBoleto: boolean;
  public erroBoleto: boolean;
  public codAcordo: string;
  public sucessoSms: boolean;
  public boleto: Boleto;
  public porSms: boolean;
  public porEmail: boolean;
  public sucessoEmail: boolean;

  constructor(private localeService: BsLocaleService, private apiRestService: ApiRestService, private router: Router) {
    this.localeService.use('pt-br');
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 10);

   }

  ngOnInit() {
  }

  enviarEmail() {
    let codigoParcelaAcordo: string;
    let numeroTitulo: string;
    this.loadingBoleto = true;
    this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe (acc => {
      console.log("acc=");
      console.log(acc);
      if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
      else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
      numeroTitulo = acc.Acordo.DadosAcordo.NumeroTitulo.split('.')[0];

      this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => {
       console.log(bol);
       this.loadingBoleto = false;

       if (bol.BoletoAcordo) { 
        //this.router.navigate(['/boleto'] , { queryParams: { data: bol.BoletoAcordo.DataVencimento, linha: bol.BoletoAcordo.LinhaDigitavel, valor: bol.BoletoAcordo.Valor, cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, contrato: numeroTitulo}});
        this.apiRestService.enviaBoletoEmail (numeroTitulo, bol.BoletoAcordo.Valor, bol.BoletoAcordo.DataVencimento, bol.BoletoAcordo.LinhaDigitavel, this.apiRestService.email).subscribe(res => {
          this.sucessoEmail = true;
          console.log("RES SMS="); 
          console.log(res);
        });
    
      }
       else {
         this.erroBoleto = true;
       }       
    });
  });
    
  }

  voltarEmail() {
    this.porEmail = false;
    this.sucesso = true;
    this.sucessoEmail = false;
  }

  voltarSms() {
    this.porSms = false;
    this.sucesso = true;
    this.sucessoSms = false;
  }

  showFinalizacao() {
   if (this.dataPagamento) { 
    this.fim = true;
    this.opcoesParcelamento = false;
   } 
  }

  mudarData() {
    this.fim = false;
    this.opcoesParcelamento = true;
  }  

  voltar() {
    this.clickVoltar.emit(true);
  }

  voltar_data() {
    this.clickVoltarAVista.emit(true);
  }

  valorAVista() {
    if (this.apiRestService.parcelas.aVista) return this.apiRestService.parcelas.aVista;
  }

  primeiraParcelado() {
    if (this.apiRestService.parcelas.primeira) return this.apiRestService.parcelas.primeira;
  }

  vezesParcelado() {
    console.log (this.apiRestService.parcelas);
    if (this.apiRestService.parcelas.vezes) return this.apiRestService.parcelas.vezes;
  }

  outrasParcelado() {
    if (this.apiRestService.parcelas.outrasParcelas) return this.apiRestService.parcelas.outrasParcelas;
  }

  abrirBoleto() {
    let codigoParcelaAcordo: string;
    let numeroTitulo: string;
    this.loadingBoleto = true;
    this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe (acc => {
      console.log("acc=");
      console.log(acc);
      if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
      else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
      numeroTitulo = acc.Acordo.DadosAcordo.NumeroTitulo.split('.')[0];

      this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => {
       console.log(bol);
       this.loadingBoleto = false;

       if (bol.BoletoAcordo) { 
        //window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor, "_self");
        this.router.navigate(['/boleto'] , { queryParams: { data: bol.BoletoAcordo.DataVencimento, linha: bol.BoletoAcordo.LinhaDigitavel, valor: bol.BoletoAcordo.Valor, cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, contrato: numeroTitulo}});

      }
       else {
         this.erroBoleto = true;
       }       
    });
  });
}
  
  gravaAcordo () {
    this.loader = true;
    this.fim = false;
      if (this.apiRestService.parcelas.aVista) {
        console.log(this.dataPagamento.toLocaleString().slice(0,10));
        
        this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, '1', this.dataPagamento.toLocaleString().slice(0,10), this.apiRestService.parcelas.aVista).subscribe(res => {
          console.log(res);  
          this.loader = false;
          if (res.Codigo === '12') {
            this.fim = false;
            this.sucesso = true;
            this.codAcordo = res.CodigoAcordo;
           }
           else {
             this.erro = true;
             this.fim = true;
           }

        });
      }
      else if (this.apiRestService.parcelas.primeira) {
        this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().slice(0,10), this.apiRestService.parcelas.primeira).subscribe(res => {
          console.log(res);
          this.loader = false; 
          if (res.Codigo === '12') {
            this.fim = false;
            this.sucesso = true;
            this.codAcordo = res.CodigoAcordo;
           }
           else {
             this.erro = true;
             this.fim = true;
           }

       });
      }
  }

  enviarSms() {
    this.apiRestService.enviaSms( this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.Valor).subscribe(res => {
      this.sucessoSms = true;
      console.log("RES SMS="); 
      console.log(res);
   });
  }

  pegarTelefone() {
    this.sucesso = false;

    let codigoParcelaAcordo: string;
    this.loader = true;
    this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe (acc => { 
      console.log("acc=");
      console.log(acc);
      if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length) codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
      else codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
      console.log("this.codAcordo + + + codigoParcelaAcordo");      
      console.log("22547866 " + codigoParcelaAcordo);
      this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe ((bol: Boleto) => { 
        this.loader = false;
        console.log("bol=");  
        console.log(bol);
               
       if (bol.BoletoAcordo) {
         this.porSms = true;
         this.boleto = bol; 
       } else this.erroBoleto = true;
              
    });
  });

  }

  pegarEmail() {
    this.porEmail = true;
    this.sucesso = false;

  }  
}

