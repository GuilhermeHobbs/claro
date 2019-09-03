import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
  export class BoletoComponent {

    @ViewChild('template', {static: false}) templateRef: TemplateRef<any>;

  modalRef: BsModalRef;

  public linha: string;
  public data: string;
  public valor: string;

  constructor(private modalService: BsModalService, route: ActivatedRoute) {
    
    this.linha = route.snapshot.queryParams.linha;
    this.valor = route.snapshot.queryParams.valor;
    this.data = route.snapshot.queryParams.data;
    
  }

  ngAfterViewInit() {
    const initialState = {
      writerProfileActive: true,
      smallInfoActive: false
      };
    this.modalRef = this.modalService.show(this.templateRef, {initialState, class: 'modal-lg'});
  }
  
}
