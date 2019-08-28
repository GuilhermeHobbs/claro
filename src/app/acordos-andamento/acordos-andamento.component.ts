import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-acordos-andamento',
  templateUrl: './acordos-andamento.component.html',
  styleUrls: ['./acordos-andamento.component.css']
})
export class AcordosAndamentoComponent implements OnInit {

  public acordos = { };

  constructor(private apiRestService: ApiRestService) { }

  ngOnInit() {

    this.apiRestService.acordos.forEach (acc => {    
    
    });
  }

}
