import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prazo-finalizacao',
  templateUrl: './prazo-finalizacao.component.html',
  styleUrls: ['./prazo-finalizacao.component.css']
})
export class PrazoFinalizacaoComponent implements OnInit {

  @Output() clickVoltar = new EventEmitter<boolean>(); 

  public opcoesParcelamento: boolean = true;
  public fim: boolean;

  constructor() { }

  ngOnInit() {
  }

  showFinalizacao() {
    this.fim = true;
    this.opcoesParcelamento = false;
  }

  mudarData() {
    this.fim = false;
    this.opcoesParcelamento = true;
  }  

  voltar() {
    this.clickVoltar.emit(true);
  }

}

