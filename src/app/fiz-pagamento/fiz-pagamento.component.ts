import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fiz-pagamento',
  templateUrl: './fiz-pagamento.component.html',
  styleUrls: ['./fiz-pagamento.component.css']
})
export class FizPagamentoComponent implements OnInit {

  public acordos = [ ];
  public maxDate = new Date();

  
  constructor(public apiRestService: ApiRestService, private localeService: BsLocaleService) { 
    this.localeService.use('pt-br');    
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


}
