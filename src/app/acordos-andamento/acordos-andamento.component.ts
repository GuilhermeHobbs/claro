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

    ["27579830","27108636",'25758840','28403040', "15168499", "28929364"].forEach (acc => {    

    this.apiRestService.getDadosAcordo(acc).subscribe (res => {
      console.log (res);
    });
  });
  }

}
