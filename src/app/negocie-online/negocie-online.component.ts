import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';


@Component({
  selector: 'app-negocie-online',
  templateUrl: './negocie-online.component.html',
  styleUrls: ['./negocie-online.component.css']
})
export class NegocieOnlineComponent implements OnInit {

  public showFatura: boolean = true;
  public showHeader: boolean = true;
  public opcoesParcelamento: boolean;
  public prazoFinalizacao: boolean;
  public metodoPagamento: boolean = true;
 
  constructor(private apiRestService: ApiRestService) { }

  ngOnInit() {
  }

  showPrazoFinalizacao() {

    this.prazoFinalizacao = true;
    this.opcoesParcelamento = false;
    this.metodoPagamento = false;
  }

  showOpcoesParcelamento() {
    this.opcoesParcelamento = true;
    this.showFatura = false;
    this.prazoFinalizacao = false;
    this.metodoPagamento = true;
  }


}
