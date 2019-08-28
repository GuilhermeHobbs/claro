import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-acordos-andamento',
  templateUrl: './acordos-andamento.component.html',
  styleUrls: ['./acordos-andamento.component.css']
})
export class AcordosAndamentoComponent implements OnInit {

  constructor(private apiRestService: ApiRestService) { }

  ngOnInit() {

    this.apiRestService.acordos.DadosAcordo.ParcelasAcordo.ParcelaAcordo (acc => {    

    this.apiRestService.getDadosAcordo(acc).subscribe (res => {
      console.log (res);
    });
  });
  }

}
