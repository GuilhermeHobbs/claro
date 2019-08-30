import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ApiRestService } from '../api-rest.service';


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

  constructor(private localeService: BsLocaleService, private apiRestService: ApiRestService) {
    this.localeService.use('pt-br');
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 10);

   }

  ngOnInit() {
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

  gravaAcordo () {
      if (this.apiRestService.parcelas.aVista) {
        this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().split(',')[0], this.apiRestService.parcelas.aVista).subscribe(res => {
           console.log(res); 
        });
      }
      else if (this.apiRestService.parcelas.primeira) {
        this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().split(',')[0], this.apiRestService.parcelas.primeira).subscribe(res => {
          console.log(res); 
       });
      }
  }

}

