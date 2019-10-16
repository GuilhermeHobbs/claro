(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/acordos-andamento/acordos-andamento.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acordos-andamento/acordos-andamento.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"emailRes\" class=\"mb-15\">\r\n    <h1>{{ emailRes }}</h1>\r\n</div>\r\n  \r\n<div *ngIf=\"porEmail\">\r\n    <p class=\"text-center\">Para qual e-mail enviar seu boleto?</p>\r\n    <app-input-email (clickEnviar)=\"enviarEmail()\" (clickVoltar)=\"voltarEmail()\"></app-input-email>\r\n</div>\r\n  \r\n<div *ngIf=\"smsRes\" class=\"mb-15\">\r\n  <h1>SMS enviado: {{ smsRes }}</h1>\r\n</div>\r\n\r\n<div *ngIf=\"porSms\">\r\n  <p class=\"text-center\">Para qual número enviar o SMS?</p>\r\n  <app-input-tel (clickEnviar)=\"enviarSms()\" (clickVoltar)=\"voltarSms()\"></app-input-tel>\r\n</div>\r\n\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\" *ngIf=\"accDividas\">\r\n   \r\n    <accordion-group *ngFor=\"let acordo of acordos\">\r\n        <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n         <div class=\"row\">\r\n          <div class=\"col-12 col-sm-2 img-produto\">\r\n             <img [src]=\"getIcon(acordo)\" class=\"produto-img\">  \r\n             <p class=\"titulo-mobile\">{{ acordo.NumeroTitulo.split(' ')[1] }}</p>\r\n          </div>  \r\n            <div class=\"col-sm-3 col-4 btn-linha no-padd-left no-padd-right\">  \r\n                Data: {{ acordo.DataAcordo }}\r\n            </div>              \r\n          <div class=\"col-5 btn-linha\">\r\n              Status: {{ acordo.StatusAcordo }}\r\n          </div>\r\n          <div class=\"col-sm-2 col-3 btn-linha\">\r\n              Filial: {{ acordo.FilialAcordo }}\r\n          </div>\r\n        </div>\r\n        </button>     \r\n        <div class=\"acc-body\">\r\n         <p class=\"font-weight-bold\">Parcelas</p>\r\n          <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.length\">\r\n            <div *ngFor=\"let par of acordo.ParcelasAcordo.ParcelaAcordo; let ind = index\" class=\"row bottom-parcela parcela-border\">\r\n                    <div class=\"col-6 col-md-2\">\r\n                         {{ par.DataVencimento }}\r\n                    </div>\r\n                    <div class=\"col-6 col-md-2 no-padd-right bottom-parcela\">\r\n                        Status: {{ par.StatusParcelaAcordo }}\r\n                    </div>\r\n                    <div class=\"col-4 col-md-2 no-padd-right\">\r\n                        R$ {{ apiRestService.doisDigitosDecimais(par.ValorParcela) }}\r\n                    </div>\r\n                    <div class=\"col-4 col-md-2 no-padd-right\">\r\n                        <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"segunda_via(acordo.CodigoAcordo, par.CodigoParcelaAcordo, acordo.CodigoTitulo, ind)\">\r\n                            Ver segunda via do boleto        \r\n                        </a>\r\n                        <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n                    </div>\r\n                    <div class=\"col-4 col-md-2 no-padd-right\">\r\n                        <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"pegarEmail(ind, acordo.CodigoAcordo, acordo.CodigoTitulo, acordo.NumeroTitulo)\">\r\n                            Enviar por e-mail        \r\n                        </a>                          \r\n                        <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                    </div>\r\n                    \r\n                    <div class=\"col-4 col-md-2 no-padd-right\">\r\n                        <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"pegarTelefone(ind, acordo.CodigoAcordo, acordo.CodigoTitulo)\">\r\n                            Enviar por SMS        \r\n                        </a>                          \r\n                        <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                    </div>\r\n                    <div class=\"col-2 col-md-1\">\r\n                        <div class=\"loader-wrap\">\r\n                            <div class=\"loader\" *ngIf=\"loadingBoleto[ind]\"></div>\r\n                        </div>    \r\n                    </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo\" class=\"row parcela-border\">\r\n                    <div class=\"col-6 col-md-2\">\r\n                         {{ acordo.ParcelasAcordo.ParcelaAcordo.DataVencimento }}\r\n                        </div>\r\n                        <div class=\"col-6 col-md-2 no-padd-right bottom-parcela\">\r\n                            Status: {{ acordo.ParcelasAcordo.ParcelaAcordo.StatusParcelaAcordo }}\r\n                        </div>\r\n                        <div class=\"col-4 col-md-2 no-padd-right\">\r\n                           R$ {{ apiRestService.doisDigitosDecimais(acordo.ParcelasAcordo.ParcelaAcordo.ValorParcela) }}\r\n                        </div>\r\n                        <div class=\"col-4 col-md-2 no-padd-right\">\r\n                            <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"segunda_via(acordo.CodigoAcordo, acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo, acordo.NumeroTitulo, 0)\">\r\n                                Ver segunda via do boleto        \r\n                            </a>                          \r\n                            <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                        </div>\r\n                        <div class=\"col-4 col-md-2 no-padd-right\">\r\n                            <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"pegarEmail(0, acordo.CodigoAcordo, acordo.CodigoTitulo, acordo.NumeroTitulo)\">\r\n                                Enviar por e-mail        \r\n                            </a>                          \r\n                            <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                        </div>\r\n                        \r\n                        <div class=\"col-4 col-md-2 no-padd-right\">\r\n                            <a type=\"button\" class=\"btn btn-primary padd-mobile btn-segunda\" (click)=\"pegarTelefone(0, acordo.CodigoAcordo, acordo.CodigoTitulo)\">\r\n                                Enviar por SMS        \r\n                            </a>                          \r\n                            <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                        </div>\r\n                        <div class=\"col-2 col-md-1\">\r\n                            <div class=\"loader-wrap\">\r\n                                <div class=\"loader\" *ngIf=\"loadingBoleto[0]\"></div>\r\n                            </div>    \r\n                        </div>    \r\n            </div>\r\n        </div>    \r\n    </accordion-group>\r\n</accordion>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assistente-virtual/assistente-virtual.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assistente-virtual/assistente-virtual.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n            <img src=\"assets/icons/messenger.png\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n            <h5 class=\"card-title\">MESSENGER</h5>\r\n            <p class=\"card-text\">Converse conosco pelo messenger do Facebook!</p>\r\n            </div>\r\n            <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" target=\" _blank\">\r\n        <img src=\"assets/icons/virtual_assistant.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n        <p class=\"card-text\">Converse conosco pelo chat!</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n        <img src=\"assets/icons/telegram.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">TELEGRAM</h5>\r\n        <p class=\"card-text\">Converse conosco pelo Telegram!</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/boleto/boleto.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boleto/boleto.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Seu boleto</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n      <TABLE cellSpacing=0 cellPadding=0 border=0 class=\"Boleto\">\r\n        \r\n        <TR>\r\n          <TD style='width: 0.9cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 0.5cm'></TD>\r\n          <TD style='width: 1.3cm'></TD>\r\n          <TD style='width: 0.8cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          \r\n          <TD style='width: 1.9cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n        <tr><td colspan=11>\r\n        <ul class=BoletoInstrucoes>\r\n        <li>Imprima em papel A4 ou Carta</li>\r\n        <li>Não rasure o código de barras</li>\r\n        </ul>\r\n        </td></tr>\r\n        \r\n        <tr><td colspan=11 class=\"BoletoPontilhado\">&nbsp;</td></tr>\r\n        <TR>\r\n          <TD colspan=3 class=\"BoletoLogo\"><img src='assets/img/logo.jpg' style=\"width: 60px; padding: 5px\"></TD>\r\n          <TD colspan=9 class=\"BoletoLinhaDigitavel\">{{ linha }}</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=9 class=BoletoTituloEsquerdo>Nome do Cliente</TD>\r\n          <TD colspan=2 class=BoletoTituloDireito>Valor</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=9 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm; text-transform: capitalize'>{{ cliente }}</TD>\r\n          <TD colspan=2 class=\"BoletoValorDireito\">R$ {{ valor }}</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=9 class=\"BoletoTituloEsquerdo\">Contrato</TD>\r\n          <TD colspan=2 class=BoletoTituloDireito>Vencimento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=9 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm'>{{ contrato }}</TD>\r\n          <TD colspan=2 class=BoletoValorDireito>{{ data }}</TD>\r\n        </TR>   \r\n        <TR>\r\n          <TD colspan=4 class=BoletoTituloEsquerdo>Data do Documento</TD>\r\n          <TD colspan=3 class=BoletoTituloEsquerdo>Espécie</TD>\r\n          <TD colspan=4 class=BoletoTituloEsquerdo>Data do Processamento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=4 class=BoletoValorEsquerdo>{{ hoje }}</TD>\r\n          <TD colspan=3 class=BoletoValorEsquerdo>RC</TD>\r\n          <TD colspan=4 class=BoletoValorEsquerdo>{{ hoje }}</TD>\r\n        </TR>  \r\n          \r\n        <TR>\r\n          <TD colspan=12 class=BoletoTituloEsquerdo>Código de barras</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=12  class=BoletoValorEsquerdo style='text-align: left; vertical-align:top; padding-left : 0.1cm'><canvas id=\"barcodeCanvas\"></canvas></TD>\r\n          \r\n        </TR>  \r\n         \r\n                        \r\n        </TABLE>\r\n\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tela-grid\">\r\n\r\n <div class=\"cpf-box\">\r\n    <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n    <p>Quer negociar com a Claro? <br> Inicie aqui uma consulta sem custo!  </p>\r\n        <div class=\"form-group\"> \r\n            <input autofocus type=\"text\" [textMask]=\"mask()\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu CPF ou CNPJ\" [(ngModel)]=\"cpf_cnpj\" (input)=\"clearAlerts()\" (focus)=\"clearDisclaimer\"  (keydown.backspace)=\"backspacePress($event)\" (keydown.enter)=\"valida()\">\r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"valida()\">Verificar</button>            \r\n        <div class=\"input_error\">\r\n            <p *ngIf=\"erro\">Houve um erro. Tente novamente, por favor.</p>\r\n            <p *ngIf=\"cpf_inv\">CPF inválido.</p>\r\n            <p *ngIf=\"cnpj_inv\">CNPJ inválido.</p>\r\n            <p *ngIf=\"input_inv\">Por favor, informe um CPF ou CNPJ.</p>\r\n            <p *ngIf=\"verificando\">Aguarde, estamos verificando . . .</p>\r\n            <p *ngIf=\"cpf_sem_debitos\">O CPF informado não tem débitos ou acordos.</p>\r\n            <p *ngIf=\"cnpj_sem_debitos\">O CNPJ informado não tem débitos ou acordos.</p>\r\n        </div>        \r\n    </div> \r\n </div>\r\n\r\n <a class=\"fixed-bottom auto_inicio\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\" *ngIf=\"disclaimer\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input-email/input-email.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input-email/input-email.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group email-box\">\r\n        \r\n       <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"E-mail\" [(ngModel)]=\"email\" (input)=\"cleanAlerts()\"> \r\n       <button type=\"submit\" class=\"col-sm-3\" (click)=\"envia()\">Enviar</button>\r\n       <button class=\"col-sm-3 float-right\" (click)=\"voltar()\">Voltar</button>\r\n       <div class=\"input_error\">\r\n           <p *ngIf=\"email_inv\">E-mail inválido.</p>\r\n           <p *ngIf=\"verificando\">Aguarde . . .</p>\r\n           <p *ngIf=\"cadastrado\">Telefone cadastrado com sucesso.</p>\r\n           <p *ngIf=\"houve_erro\">Houve um erro. Tente novamente, por favor.</p>\r\n       </div>            \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input-tel/input-tel.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input-tel/input-tel.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <div class=\"tel-box\"> <!-- col-sm-8-->        \r\n        <input type=\"text\" [textMask]=\"{mask: telMask}\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"(DDD) TELEFONE\" [(ngModel)]=\"tel\" (input)=\"cleanAlerts()\"> <br>\r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"envia()\">Enviar</button>\r\n            <button class=\"col-sm-3 float-right\" (click)=\"voltar()\">Voltar</button>\r\n        \r\n        <div class=\"input_error\">\r\n            <p *ngIf=\"tel_inv\">Telefone inválido.</p>\r\n            <p *ngIf=\"verificando\">Aguarde . . .</p>\r\n            <p *ngIf=\"cadastrado\">Telefone cadastrado com sucesso.</p>\r\n            <p *ngIf=\"houve_erro\">Houve um erro. Tente novamente, por favor.</p>\r\n        </div>            \r\n    </div>\r\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/negocie-online/negocie-online.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"showHeader\">\r\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\r\n</header>\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n  \r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroMovel.Divida.DadosDivida.length && mostrarAbas[0]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"botaoNaoClicavel() && getAllOpcoesClaroMovel()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Móvel</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px no-margimBottom-mobile\">Opções de Parcelamento:</p>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoMovel(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\"> \r\n          <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"hideOpcoesParcelamento()\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento(0)\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroMovel.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px back-red\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroTv.Divida.DadosDivida.length && mostrarAbas[1]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"botaoNaoClicavel() && getAllOpcoesClaroTv()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro TV</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoTv(ind, apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoTv(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\"> \r\n          <button type=\"button\" class=\"btn btn-primary back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento(0)\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroTv.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px back-red\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n \r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroInternet.Divida.DadosDivida.length && mostrarAbas[2]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"botaoNaoClicavel() && getAllOpcoesClaroInternet()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Internet</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-xs-12 col-sm-6 wrap-opcao-btn\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoInternet(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\"> \r\n          <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"hideOpcoesParcelamento()\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento(0)\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroInternet.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px back-red\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>  \r\n\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroFixo.Divida.DadosDivida.length && mostrarAbas[3]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"botaoNaoClicavel() && getAllOpcoesClaroFixo()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Fixo</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoFixo(ind, apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoFixo(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\"> \r\n          <button type=\"button\" class=\"btn btn-primary back-red\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" (click)=\"hideOpcoesParcelamento()\" >\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento(0)\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroFixo.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary back-red\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px back-red\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n  \r\n</accordion>\r\n<!--\r\n<div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n    <div class=\"loader-wrap\">\r\n      <div class=\"loader\"></div>\r\n    </div>  \r\n  </div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\r\n    <div class=\"col-lg-3 fundo-paulista\">\r\n    </div>\r\n \r\n    <div class=\"back-beje col-lg-9\">\r\n                            \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" [hidden]=\"showOpcoes || apiRestService.telaFinal\">Voltar ao Menu Principal</p>        \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarInicio()\" *ngIf=\"apiRestService.telaFinal\">Fazer nova consulta de CPF ou CNPJ</p>        \r\n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\r\n            \r\n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\r\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\r\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\r\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\r\n                        \r\n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\r\n                <h3 class=\"text-center bem-vindo\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, <span class=\"text-capitalize\">{{nome}}</span>!</h3>    \r\n                \r\n                <div class=\"row\">                    \r\n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\" *ngIf=\"this.apiRestService.dividas.Divida\">\r\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\r\n                            <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">NEGOCIE ONLINE</h5>\r\n                            <p class=\"card-text\">Clique e tenha as melhores condições para negociar com a Claro de forma rápida e prática.</p>\r\n                            \r\n                            </div>\r\n                            <p class=\"btn btn-acessar back-red\">Acessar</p>\r\n                    </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\" [hidden]=\"true\">\r\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n                    <p class=\"card-text\">Converse agora com nosso Assistente Virtual, não perca tempo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar back-red\">Acessar</p>\r\n            </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\" [hidden]=\"true\">\r\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">RECEBA NOSSA LIGAÇÃO</h5>\r\n                    <p class=\"card-text\">Quer receber uma ligação de nosso agente digital? Aqui é o lugar certo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar back-red\">Acessar</p>\r\n            </a>\r\n    \r\n            <div class=\"col-lg-3 fiz-pagamento-ok\" *ngIf=\"fizPagamentoOk\">\r\n                  <div class=\"container\">\r\n                        <span class=\"red\">Obrigada!</span><br>\r\n                        As informações de pagamento foram enviadas para a nossa central.<br>\r\n                        Caso necessário entraremos em contato no nosso número:<br> \r\n                        0800 208 8080         \r\n                </div>            \r\n        </div>\r\n\r\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\" [hidden]=\"true\">\r\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">JÁ FIZ O PAGAMENTO</h5>\r\n                    <p class=\"card-text\">Já realizou o pagamento de seus débitos com a claro? Pressione o botão abaixo!</p>\r\n                        \r\n                    </div>\r\n                    <p class=\"btn btn-acessar back-red\">Informar</p>\r\n                </div>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\" *ngIf=\"this.apiRestService.dividas.Acordo\">\r\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">SEUS ACORDOS EM ANDAMENTO</h5>\r\n                    <p class=\"card-text\">Se tiver um acordo em andamento, acesse aqui para retirar a 2ª via.</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar back-red\">Acessar</p>\r\n            </a>\r\n        </div>\r\n     </div>    \r\n        <a class=\"bottom-fixed back-beje-mobile\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\" *ngIf=\"apiRestService.showDisclaimer\" [class.mobile-hidden]=\"showOpcoes || showAcordosAndamento\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n                \r\n    </div>    \r\n\r\n</div>      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prazo-finalizacao/prazo-finalizacao.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"emailRes\" class=\"mb-15\">\r\n    <h1>{{ emailRes }}</h1>\r\n</div>\r\n  \r\n<div *ngIf=\"porEmail\">\r\n    <p class=\"text-center\">Para qual e-mail enviar seu boleto?</p>\r\n    <app-input-email (clickEnviar)=\"enviarEmail()\" (clickVoltar)=\"voltarEmail()\"></app-input-email>\r\n</div>\r\n  \r\n<div *ngIf=\"smsRes\" class=\"mb-15\">\r\n  <h1>SMS enviado: {{ smsRes }}</h1>\r\n</div>\r\n\r\n<div *ngIf=\"porSms\">\r\n  <p class=\"text-center\">Para qual número enviar o SMS?</p>\r\n  <app-input-tel (clickEnviar)=\"enviarSms()\" (clickVoltar)=\"voltarSms()\"></app-input-tel>\r\n</div>\r\n\r\n<div *ngIf=\"loader\">\r\n  <p>Aguarde . . .</p>\r\n  <div class=\"loader-wrap\">  \r\n    <div class=\"loader\"></div>\r\n  </div>\r\n</div>  \r\n\r\n<div *ngIf=\"sucesso\">\r\n  <h4 class=\"font-weight-bold\"> O Acordo foi realizado com sucesso!</h4>\r\n  <br>\r\n  <p>Feito acordo em {{ vezesParcelado() + 1 }} parcelas no valor de {{ vezesParcelado() }} x R$ {{ outrasParcelado() }} com vencimento para o {{ primeiraParcelado()? 'primeiro':'' }} pagamento: {{ (dataPagamento.toLocaleString().indexOf(',') > -1)? dataPagamento.toLocaleString().slice(0, 10) : dataPagamento.toLocaleString().split(' ')[0] }}</p>\r\n  <h4>Como deseja receber seu boleto?</h4>\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"pegarEmail()\">\r\n          Por e-mail\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"pegarTelefone()\">\r\n          Por SMS\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-mudar-parce back-red\" (click)=\"abrirBoleto()\">\r\n          Ver dados do boleto\r\n        </button>\r\n      </div>            \r\n    </div>\r\n    <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n    <div class=\"text-center\">\r\n      <p>Em caso de dúvidas, ligue: 3003-8080 ou 0800-208-8080</p>\r\n      <p>De segunda a sexta-feira, das 08:00 às 21:00 e aos sábados das 09:00 às 16:00</p>\r\n    </div>\r\n  </div>\r\n\r\n<div *ngIf=\"erro\">\r\n  <h1> Houve um erro. Tente novamente, por favor.</h1>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"fim\">\r\n  <p class=\"detalhes-titulo\">Detalhes do acordo:</p>\r\n  <p>Data do {{ primeiraParcelado()? 'primeiro':'' }} pagamento: {{ (dataPagamento.toLocaleString().indexOf(',') > -1)? dataPagamento.toLocaleString().slice(0, 10) : dataPagamento.toLocaleString().split(' ')[0] }}</p>\r\n  <p>Valor {{ primeiraParcelado()? 'da primeira parcela':'' }}: R$ {{ primeiraParcelado()? primeiraParcelado():valorAVista() }}</p>\r\n  <p *ngIf=\"vezesParcelado()\">Demais parcelas: {{ vezesParcelado() }} x R$ {{ outrasParcelado() }}</p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-yellow\" (click)=\"gravaAcordo()\"> <!-- sucesso = true; this.fim = false; -->\r\n        Confirmar acordo\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"mudarData()\">\r\n        Mudar data\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <!--<button type=\"button\" class=\"btn btn-primary btn-mudar-parce\" (click)=\"voltar()\">\r\n        Mudar parcelamento\r\n      </button>-->\r\n    </div>            \r\n  </div>\r\n</div>\r\n\r\n<div class=\"opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n    <p class=\"escolha-data\">Data para o pagamento:</p>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n          <input type=\"text\"\r\n          placeholder=\"Clique para escolher uma data\"\r\n          class=\"form-control\"\r\n          bsDatepicker [minDate]=\"minDate\"\r\n          [maxDate]=\"maxDate\"  [(ngModel)]=\"dataPagamento\">\r\n      </div>  \r\n      <div class=\"col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary back-red\" (click)=\"showFinalizacao()\">\r\n            Realizar acordo\r\n        </button>      \r\n      </div>        \r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary btn-voltar back-red\" (click)=\"voltar_data()\">\r\n      Voltar\r\n    </button>\r\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tel-box\">\r\n    <p>Informe seu número de telefone, fixo ou celular, para que possamos te ligar.</p>\r\n        <div class=\"form-group\"> \r\n            <input type=\"text\" [textMask]=\"{mask: telMask}\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"(DDD) TELEFONE\" [(ngModel)]=\"tel\" (input)=\"cleanAlerts()\"> \r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"envia()\">Enviar</button>\r\n            <div class=\"input_error\">\r\n                <p *ngIf=\"tel_inv\">Telefone inválido.</p>\r\n                <p *ngIf=\"verificando\">Aguarde . . .</p>\r\n                <p *ngIf=\"cadastrado\">Telefone cadastrado com sucesso.</p>\r\n                <p *ngIf=\"houve_erro\">Houve um erro. Tente novamente, por favor.</p>\r\n            </div>            \r\n        </div>\r\n</div>    "

/***/ }),

/***/ "./src/app/acordos-andamento/acordos-andamento.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/acordos-andamento/acordos-andamento.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.produto-heading {\r\n    line-height: 44px;\r\n    font-size: 22px;\r\n    margin-left: 10px;    \r\n    }\r\n\r\n.logo {\r\n        width: 120px;\r\n        display: block;\r\n        margin: 10px auto;\r\n    }\r\n\r\n.produto-img {\r\n        height: 45px;\r\n        float: left;\r\n    }\r\n\r\n.btn-accordion {\r\n        line-height: 50px;\r\n        font-size: 20px;\r\n    }\r\n\r\n.acc-body {\r\n        position: relative;\r\n        top: -15px;\r\n    }\r\n\r\n.bottom-parcela {\r\n      margin-bottom: 0px; \r\n      \r\n    }\r\n\r\n.parcela-border {\r\n        border-bottom: 1px solid rgba(0,0,0,.125);     \r\n        margin-bottom: 5px;      \r\n    }\r\n\r\n.btn-segunda {\r\n        /*margin-bottom: 30px;*/\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n        .no-padd-left {\r\n            padding-left: 0;\r\n        }\r\n\r\n        .no-padd-right {\r\n            padding-right: 0;\r\n        }\r\n\r\n        .bottom-parcela {\r\n            margin-bottom: 10px;            \r\n          }\r\n        \r\n        .btn-accordion {\r\n            font-size: 15px;\r\n        }    \r\n\r\n        .produto-img {\r\n            height: 25px;\r\n        }    \r\n\r\n        .img-produto {\r\n            line-height: 25px;\r\n        }\r\n\r\n        .btn-linha {\r\n            line-height: 22px;\r\n        }\r\n\r\n        .acc-body {\r\n            font-size: 15px;\r\n        }\r\n\r\n        .valor-mobile {\r\n            font-size: 14px;\r\n            padding-left: 0;\r\n        }\r\n\r\n        .loader-wrap {\r\n            position: relative;\r\n            left: 8px;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n\r\n        .titulo-mobile {\r\n            font-weight: bold;\r\n            font-size: large;\r\n        }\r\n\r\n        .padd-mobile {\r\n            padding: 2px;\r\n        }\r\n    \r\n        .btn-segunda {\r\n            /*margin-bottom: 0px;\r\n            margin-top: -20px;*/\r\n            margin-bottom: 5px;\r\n        }\r\n    }    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7O0FBRUE7UUFDSSxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7QUFHQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0FBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0FBRUE7TUFDRSxrQkFBa0I7O0lBRXBCOztBQUVBO1FBQ0kseUNBQXlDO1FBQ3pDLGtCQUFrQjtJQUN0Qjs7QUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFFQTtRQUNJO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLG1CQUFtQjtVQUNyQjs7UUFFRjtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksaUJBQWlCO1FBQ3JCOztRQUVBO1lBQ0ksaUJBQWlCO1FBQ3JCOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGVBQWU7WUFDZixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxXQUFXO1lBQ1gsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGlCQUFpQjtZQUNqQixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0k7K0JBQ21CO1lBQ25CLGtCQUFrQjtRQUN0QjtJQUNKIiwiZmlsZSI6ImFwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHV0by1oZWFkaW5nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjYy1ib2R5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhcmNlbGEtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTsgICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXNlZ3VuZGEge1xyXG4gICAgICAgIC8qbWFyZ2luLWJvdHRvbTogMzBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5uby1wYWRkLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tcGFkZC1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAuaW1nLXByb2R1dG8ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tbGluaGEge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY2MtYm9keSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52YWxvci1tb2JpbGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2FkZXItd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdHVsby1tb2JpbGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWRkLW1vYmlsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYnRuLXNlZ3VuZGEge1xyXG4gICAgICAgICAgICAvKm1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgIl19 */"

/***/ }),

/***/ "./src/app/acordos-andamento/acordos-andamento.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/acordos-andamento/acordos-andamento.component.ts ***!
  \******************************************************************/
/*! exports provided: AcordosAndamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordosAndamentoComponent", function() { return AcordosAndamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AcordosAndamentoComponent = class AcordosAndamentoComponent {
    constructor(apiRestService, router) {
        this.apiRestService = apiRestService;
        this.router = router;
        this.acordos = [];
        this.loadingBoleto = [false];
        this.accDividas = true;
        this.smsRes = '';
    }
    ngOnInit() {
        if (this.apiRestService.acordos.length) {
            this.apiRestService.acordos.forEach(acc => {
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
    segunda_via(codAcordo, codCodigoAcordo, numeroTitulo, ind) {
        numeroTitulo = numeroTitulo.split('.')[0];
        this.loadingBoleto[ind] = true;
        console.log(codCodigoAcordo);
        this.apiRestService.getBoletoAcordo(codAcordo, codCodigoAcordo).subscribe((bol) => {
            console.log(bol);
            this.loadingBoleto[ind] = false;
            if (bol.BoletoAcordo) {
                //window.open ("boleto?data=" + encodeURIComponent(bol.BoletoAcordo.DataVencimento) + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor + "&cliente=" + this.apiRestService.getNome() + "&contrato=" + numeroTitulo);
                this.router.navigate(['/boleto'], { queryParams: { data: bol.BoletoAcordo.DataVencimento,
                        linha: bol.BoletoAcordo.LinhaDigitavel,
                        valor: this.apiRestService.doisDigitosDecimais(bol.BoletoAcordo.Valor),
                        cliente: this.apiRestService.devedor.Devedores.Devedor.Nome,
                        contrato: numeroTitulo
                    } });
            }
            else {
                this.erroBoleto = true;
            }
        });
    }
    voltarEmail() {
        this.porEmail = false;
        this.sucessoEmail = false;
        this.accDividas = true;
    }
    voltarSms() {
        this.porSms = false;
        this.accDividas = true;
    }
    enviarSms() {
        this.apiRestService.enviaSms(this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.apiRestService.doisDigitosDecimais(this.boleto.BoletoAcordo.Valor)).subscribe(res => {
            this.smsRes = JSON.parse(res).statusDescription;
            this.accDividas = true;
            this.porSms = false;
        });
    }
    pegarTelefone(ind, codAcordo, codTitulo) {
        let codigoParcelaAcordo;
        this.loadingBoleto[ind] = true;
        this.emailRes = '';
        this.smsRes = '';
        console.log("acoordo=");
        console.log(codTitulo);
        this.apiRestService.getDadosAcordo(codTitulo).subscribe(acc => {
            console.log("acc=");
            console.log(acc);
            if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
            else
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
            this.apiRestService.getBoletoAcordo(codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                this.loadingBoleto[ind] = false;
                this.accDividas = false;
                console.log("bol=");
                console.log(bol);
                if (bol.BoletoAcordo) {
                    this.porSms = true;
                    this.boleto = bol;
                }
                else
                    this.erroBoleto = true;
            });
        });
    }
    pegarEmail(ind, codAcordo, codTitulo, numTitulo) {
        let codigoParcelaAcordo;
        this.smsRes = '';
        this.loadingBoleto[ind] = true;
        this.numTitulo = numTitulo;
        this.emailRes = '';
        console.log("acoordo=");
        console.log(codTitulo);
        this.apiRestService.getDadosAcordo(codTitulo).subscribe(acc => {
            console.log("acc=");
            console.log(acc);
            if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
            else
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
            this.apiRestService.getBoletoAcordo(codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                //this.loadingBoleto[ind] = false;
                //this.accDividas = false;
                console.log("bol=");
                console.log(bol);
                if (bol.BoletoAcordo) {
                    this.loadingBoleto[ind] = false;
                    this.accDividas = false;
                    this.porEmail = true;
                    this.boleto = bol;
                }
                else
                    this.erroBoleto = true;
            });
        });
    }
    enviarEmail() {
        this.apiRestService.enviaBoletoEmail(this.numTitulo, this.boleto.BoletoAcordo.Valor, this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.LinhaDigitavel, this.apiRestService.email).subscribe(res => {
            this.emailRes = res.message;
            this.accDividas = true;
            this.porEmail = false;
        });
    }
};
AcordosAndamentoComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AcordosAndamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acordos-andamento',
        template: __webpack_require__(/*! raw-loader!./acordos-andamento.component.html */ "./node_modules/raw-loader/index.js!./src/app/acordos-andamento/acordos-andamento.component.html"),
        styles: [__webpack_require__(/*! ./acordos-andamento.component.css */ "./src/app/acordos-andamento/acordos-andamento.component.css")]
    })
], AcordosAndamentoComponent);



/***/ }),

/***/ "./src/app/api-rest.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-rest.service.ts ***!
  \*************************************/
/*! exports provided: ApiRestService, Divida, Devedor, OpcoesPagamento, Acordo, Parcelas, Boleto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestService", function() { return ApiRestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divida", function() { return Divida; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devedor", function() { return Devedor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesPagamento", function() { return OpcoesPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Acordo", function() { return Acordo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parcelas", function() { return Parcelas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boleto", function() { return Boleto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiRestService = class ApiRestService {
    constructor(http) {
        this.http = http;
        this.showDisclaimer = true;
        this.parcelas = new Parcelas();
        this.telaFinal = false;
        this.opcoesPg = {};
        this.urlDadosDevedor = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/devedores'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        //private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        //private urlDadosDevedor = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        //private urlDadosDevedor = 'apiresposta/apirequest_getdadosdevedor.php';
        this.urlDadosDivida = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/divida'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';  
        //private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
        //private urlDadosDivida = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
        //private urlDadosDivida = 'apiresposta/apirequest_getdadosdivida.php';
        this.urlOpcoesPagamento = 'https://my-json-server.typicode.com/GuilhermeHobbs/opcoes/opcoes'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
        //private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
        //private urlOpcoesPagamento = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php';
        //private urlOpcoesPagamento = 'apiresposta/apirequest_getdadosopcoespagamento.php';
        this.urlDadosAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/dadosAcordo/acordo'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        //private urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        //private urlDadosAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        //private urlDadosAcordo = 'apiresposta/apirequest_getdadosacordo.php';
        this.urlGravaAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/gravaAcordo/gravar';
        //private urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
        //private urlGravaAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_gravaacordo_clarotv.php';
        //private urlGravaAcordo = 'apiresposta/apirequest_gravaacordo.php';
        this.urlBoletoAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/boletoAcordo/boleto'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        //private urlBoletoAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        //private urlBoletoAcordo = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        //private urlBoletoAcordo = 'apiresposta/apirequest_getboletoacordo.php';
        //private urlEnviaSms = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_smsenvio.php';
        this.urlEnviaSms = 'https://my-json-server.typicode.com/GuilhermeHobbs/smsEnvio/sms';
        //private urlEnviaSms = 'http://186.215.156.250:8085/landingpage/apiresposta/apirequest_smsenvio.php';
        //private urlEnviaSms = 'apiresposta/apirequest_smsenvio.php';
        this.urlBoletoEmail = 'http://186.215.156.250:8085/landingpage/apiresposta/boleto/sendBill.php';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    temDividasouAcordo(cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
        return this.getDadosDevedor(cpfCnpj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])((devedor) => {
            if (devedor.Codigo === '27')
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0);
            if (devedor.Codigo === '10') {
                if (!devedor.Devedores)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0);
                this.devedor = devedor;
                console.log(devedor);
                return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((divida) => {
                    console.log(divida);
                    if (divida.Codigo !== '23' && divida.Codigo !== '10')
                        return 2;
                    this.dividas = divida;
                    if (divida.Acordo) {
                        this.acordos = divida.Acordo.DadosAcordo;
                        return 1;
                    }
                    if (divida.Divida)
                        return 1;
                    return 0;
                }));
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(2);
        }));
    }
    getNome() {
        return this.devedor.Devedores.Devedor.Nome.toLowerCase();
    }
    meLigue(num) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    fizPagamento() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    getDadosDevedor(cpfCnpj) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('cpf', cpfCnpj);
        return this.http.get(this.urlDadosDevedor); /*, cpfCnpjParam, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )
        */
    }
    getDadosDivida(cpfCnpj, codDevedor) {
        const cpfDevedorParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('cpf', cpfCnpj)
            .set('codigodevedor', codDevedor);
        return this.http.get(this.urlDadosDivida); /*,cpfDevedorParam, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    getOpcoesPagamento(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', this.cpfCnpj);
        return this.http.get(this.urlOpcoesPagamento); /*, cpfCnpjParam, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    getDadosAcordo(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', this.cpfCnpj);
        return this.http.get(this.urlDadosAcordo); /*, cpfCnpjParam, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          ) */
    }
    getBoletoAcordo(codAcordo, codCodigoAcordo) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigoacordo', codAcordo)
            .set('codigoparcelaacordo', codCodigoAcordo)
            .set('cpf', this.cpfCnpj);
        return this.http.get(this.urlBoletoAcordo); /*, params, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    enviaSms(codigobarra, vencimento, valor) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('nome', this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase())
            .set('codigobarra', codigobarra)
            .set('vencimento', vencimento)
            .set('valor', valor)
            .set('numeroenvio', this.telefone);
        return this.http.get(this.urlEnviaSms); /*, params, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    gravaAcordo(codTitulo, cpf, codDevedor, codPlano, vencimentoPrimeira, valorPrimeira) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', cpf)
            .set('codigodevedor', codDevedor)
            .set('codigotitulo', codTitulo)
            .set('plano', codPlano)
            .set('vencimentoprimeira', vencimentoPrimeira)
            .set('valorprimeira', valorPrimeira.replace('.', ','));
        return this.http.get(this.urlGravaAcordo); /*, params, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    enviaBoletoEmail(contrato, valor, vencimento, linha, email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('cliente', this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase())
            .set('cpf', this.cpfCnpj)
            .set('contrato', contrato)
            .set('valor', valor)
            .set('vencimento', vencimento)
            .set('codigobarra', linha)
            .set('email', email);
        return this.http.get(this.urlBoletoEmail); /*, params, this.httpOptions).pipe(
          retry(100),
          catchError(() => {
            return EMPTY;
          }),
          shareReplay()
          )  */
    }
    getDividas() {
        this.dividasClaroMovel = new Divida();
        this.dividasClaroMovel = {
            Divida: {
                DadosDivida: []
            }
        };
        this.dividasClaroInternet = new Divida();
        this.dividasClaroInternet = {
            Divida: {
                DadosDivida: []
            }
        };
        this.dividasClaroTv = new Divida();
        this.dividasClaroTv = {
            Divida: {
                DadosDivida: []
            }
        };
        this.dividasClaroFixo = new Divida();
        this.dividasClaroFixo = {
            Divida: {
                DadosDivida: []
            }
        };
        console.log("this.dividasClaroTv.Divida.DadosDivida");
        console.log(this.dividasClaroTv.Divida.DadosDivida);
        if (this.dividas.Divida.DadosDivida.length) {
            this.dividasClaroMovel.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Móvel");
            this.dividasClaroInternet.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Internet");
            this.dividasClaroTv.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro TV");
            this.dividasClaroFixo.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Fixo");
        }
        else {
            switch (this.dividas.Divida.DadosDivida.Produto) {
                case "Claro Móvel": {
                    this.dividasClaroMovel.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
                    break;
                }
                case "Claro Internet": {
                    this.dividasClaroInternet.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
                    break;
                }
                case "Claro TV": {
                    this.dividasClaroTv.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
                    break;
                }
                case "Claro Fixo": {
                    this.dividasClaroFixo.Divida.DadosDivida.push(this.dividas.Divida.DadosDivida);
                    break;
                }
            }
        }
    }
    getAllOpcoesClaroMovel() {
        if (this.opcoesPg[this.dividasClaroMovel.Divida.DadosDivida[0].CodigoTitulo])
            return true;
        this.dividasClaroMovel.Divida.DadosDivida.forEach((divida) => {
            this.opcoesPg[divida.CodigoTitulo] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
                Carregando: true,
                OpcoesPagamento: {
                    OpcaoPagamento: {
                        ValorNegociar: "Aguarde...",
                    }
                }
            });
            this.getOpcoesPagamento(divida.CodigoTitulo).subscribe((opc) => {
                opc.Carregando = false;
                this.opcoesPg[divida.CodigoTitulo].next(opc);
            });
        });
    }
    getAllOpcoesClaroTv() {
        if (this.opcoesPg[this.dividasClaroTv.Divida.DadosDivida[0].CodigoTitulo])
            return true;
        this.dividasClaroTv.Divida.DadosDivida.forEach((divida) => {
            this.opcoesPg[divida.CodigoTitulo] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
                Carregando: true,
                OpcoesPagamento: {
                    OpcaoPagamento: {
                        ValorNegociar: "Aguarde...",
                    }
                }
            });
            this.getOpcoesPagamento(divida.CodigoTitulo).subscribe((opc) => {
                opc.Carregando = false;
                this.opcoesPg[divida.CodigoTitulo].next(opc);
            });
        });
    }
    getAllOpcoesClaroInternet() {
        if (this.opcoesPg[this.dividasClaroInternet.Divida.DadosDivida[0].CodigoTitulo])
            return true;
        this.dividasClaroInternet.Divida.DadosDivida.forEach((divida) => {
            this.opcoesPg[divida.CodigoTitulo] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
                Carregando: true,
                OpcoesPagamento: {
                    OpcaoPagamento: {
                        ValorNegociar: "Aguarde...",
                    }
                }
            });
            this.getOpcoesPagamento(divida.CodigoTitulo).subscribe((opc) => {
                opc.Carregando = false;
                this.opcoesPg[divida.CodigoTitulo].next(opc);
            });
        });
    }
    getAllOpcoesClaroFixo() {
        if (this.opcoesPg[this.dividasClaroFixo.Divida.DadosDivida[0].CodigoTitulo])
            return true;
        this.dividasClaroFixo.Divida.DadosDivida.forEach((divida) => {
            this.opcoesPg[divida.CodigoTitulo] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
                Carregando: true,
                OpcoesPagamento: {
                    OpcaoPagamento: {
                        ValorNegociar: "Aguarde...",
                    }
                }
            });
            this.getOpcoesPagamento(divida.CodigoTitulo).subscribe((opc) => {
                opc.Carregando = false;
                this.opcoesPg[divida.CodigoTitulo].next(opc);
            });
        });
    }
    doisDigitosDecimais(num) {
        num = num.replace(',', '.');
        if (num.indexOf('.') === num.length - 2)
            return num + '0';
        else
            return num;
    }
};
ApiRestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiRestService);

class Divida {
}
class Devedor {
}
class OpcoesPagamento {
}
class Acordo {
}
class Parcelas {
}
class Boleto {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cpf-cnpj-box/cpf-cnpj-box.component */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts");
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");
/* harmony import */ var _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boleto/boleto.component */ "./src/app/boleto/boleto.component.ts");







const routes = [
    { path: '', component: _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_3__["CpfCnpjBoxComponent"], pathMatch: 'full' },
    { path: 'negocie-online', component: _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_5__["NegocieOnlineComponent"] },
    { path: 'opcoes-routlet', component: _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_4__["OpcoesRoutletComponent"] },
    { path: 'boleto', component: _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_6__["BoletoComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'negocia';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js");
/* harmony import */ var _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cpf-cnpj-box/cpf-cnpj-box.component */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _assistente_virtual_assistente_virtual_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assistente-virtual/assistente-virtual.component */ "./src/app/assistente-virtual/assistente-virtual.component.ts");
/* harmony import */ var _receba_nossa_ligacao_receba_nossa_ligacao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./receba-nossa-ligacao/receba-nossa-ligacao.component */ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.ts");
/* harmony import */ var _acordos_andamento_acordos_andamento_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./acordos-andamento/acordos-andamento.component */ "./src/app/acordos-andamento/acordos-andamento.component.ts");
/* harmony import */ var _prazo_finalizacao_prazo_finalizacao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./prazo-finalizacao/prazo-finalizacao.component */ "./src/app/prazo-finalizacao/prazo-finalizacao.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./boleto/boleto.component */ "./src/app/boleto/boleto.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _input_tel_input_tel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input-tel/input-tel.component */ "./src/app/input-tel/input-tel.component.ts");
/* harmony import */ var _input_email_input_email_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./input-email/input-email.component */ "./src/app/input-email/input-email.component.ts");












Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_12__["CpfCnpjBoxComponent"],
            _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_13__["NegocieOnlineComponent"],
            _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_14__["OpcoesRoutletComponent"],
            _assistente_virtual_assistente_virtual_component__WEBPACK_IMPORTED_MODULE_15__["AssistenteVirtualComponent"],
            _receba_nossa_ligacao_receba_nossa_ligacao_component__WEBPACK_IMPORTED_MODULE_16__["RecebaNossaLigacaoComponent"],
            _acordos_andamento_acordos_andamento_component__WEBPACK_IMPORTED_MODULE_17__["AcordosAndamentoComponent"],
            _prazo_finalizacao_prazo_finalizacao_component__WEBPACK_IMPORTED_MODULE_18__["PrazoFinalizacaoComponent"],
            _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_20__["BoletoComponent"],
            _input_tel_input_tel_component__WEBPACK_IMPORTED_MODULE_22__["InputTelComponent"],
            _input_email_input_email_component__WEBPACK_IMPORTED_MODULE_23__["InputEmailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/assistente-virtual/assistente-virtual.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/assistente-virtual/assistente-virtual.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    /*text-decoration: none !important;*/\r\n    color: inherit;\r\n}\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 200px;\r\n    \r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 150px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .logo {\r\n        width: 35%;\r\n        margin: 3px auto;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 15px;   \r\n        height: 90px;    \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Npc3RlbnRlLXZpcnR1YWwvYXNzaXN0ZW50ZS12aXJ0dWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0hBQXdHO0lBQXhHLHdHQUF3RztBQUM1Rzs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7S0FFQztRQUNHLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztLQUVDO1FBQ0csZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJhcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICAvKnRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyovXHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYnRuLWFjZXNzYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UzMjYyMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSksYmFja2dyb3VuZCAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBtYXJnaW46IDNweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7ICAgXHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0LCAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNlc3NhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/assistente-virtual/assistente-virtual.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/assistente-virtual/assistente-virtual.component.ts ***!
  \********************************************************************/
/*! exports provided: AssistenteVirtualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistenteVirtualComponent", function() { return AssistenteVirtualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssistenteVirtualComponent = class AssistenteVirtualComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssistenteVirtualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assistente-virtual',
        template: __webpack_require__(/*! raw-loader!./assistente-virtual.component.html */ "./node_modules/raw-loader/index.js!./src/app/assistente-virtual/assistente-virtual.component.html"),
        styles: [__webpack_require__(/*! ./assistente-virtual.component.css */ "./src/app/assistente-virtual/assistente-virtual.component.css")]
    })
], AssistenteVirtualComponent);



/***/ }),

/***/ "./src/app/boleto/boleto.component.css":
/*!*********************************************!*\
  !*** ./src/app/boleto/boleto.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.BoletoCodigoBanco {font-size: 6mm; font-family: arial, verdana; font-weight : bold; \r\n    FONT-STYLE: italic; text-align: center; vertical-align: bottom;  \r\n    border-bottom: 0.15mm solid #000000; border-right: 0.15mm solid #000000;\r\n    padding-bottom : 1mm}\r\ntd.BoletoLogo { border-bottom: 0.15mm solid #000000;  border-right: 0.15mm solid #000000;\r\ntext-align: center; height: 10mm}\r\ntd.BoletoLinhaDigitavel {font-size: 4 mm; font-family: arial, verdana; font-weight : bold; \r\n       text-align: center; vertical-align: bottom; \r\n        border-bottom: 0.15mm solid #000000; padding-bottom : 1mm; }\r\ntd.BoletoTituloEsquerdo{font-size: 0.2cm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      border-right: 0.15mm solid #000000; text-align: left}\r\ntd.BoletoTituloDireito{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      text-align: left}\r\ntd.BoletoValorEsquerdo{font-size: 3mm; font-family: arial, verdana; text-align: center;\r\n      border-right: 0.15mm solid #000000; font-weight: bold;\r\n      border-bottom: 0.15mm solid #000000; padding-top: 0.5mm}\r\ntd.BoletoValorDireito{font-size: 3mm; font-family: arial, verdana; text-align:right; \r\n    padding-right: 3mm; padding-top: 0.8mm; border-bottom: 0.15mm solid #000000;\r\n     font-weight: bold;}\r\ntd.BoletoTituloSacado{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: top; padding-top : 0.15mm; text-align: left}\r\ntd.BoletoValorSacado{font-size: 3mm; font-family: arial, verdana;  font-weight: bold; \r\n  text-align : left}\r\ntd.BoletoTituloSacador{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: bottom; padding-bottom : 0.8mm;\r\n      border-bottom: 0.15mm solid #000000}\r\ntd.BoletoValorSacador{font-size: 3mm; font-family: arial, verdana; vertical-align: bottom; \r\n  padding-bottom : 0.15mm; border-bottom: 0.15mm solid #000000;\r\n   font-weight: bold; text-align: left}\r\ntd.BoletoPontilhado{border-top: 0.3mm dashed #000000; font-size: 1mm}\r\nul.BoletoInstrucoes{font-size : 3mm; font-family : verdana, arial}\r\n@media (max-width: 768px) {\r\n      .Boleto {\r\n            width: 400px;\r\n      }\r\n\r\n      td.BoletoLinhaDigitavel, td.BoletoValorDireito {\r\n            text-align: left;\r\n      }\r\n\r\n      .modal-body {\r\n        padding-left: 0;\r\n      }\r\n}      \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib2xldG8vYm9sZXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDakYsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCO0lBQzlELG1DQUFtQyxFQUFFLGtDQUFrQztJQUN2RSxvQkFBb0I7QUFDeEIsZ0JBQWdCLG1DQUFtQyxHQUFHLGtDQUFrQztBQUN4RixrQkFBa0IsRUFBRSxZQUFZO0FBQ2hDLHlCQUF5QixlQUFlLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO09BQ2xGLGtCQUFrQixFQUFFLHNCQUFzQjtRQUN6QyxtQ0FBbUMsRUFBRSxvQkFBb0IsRUFBRTtBQUNuRSx3QkFBd0IsZ0JBQWdCLEVBQUUsMkJBQTJCLEVBQUUscUJBQXFCO01BQ3RGLGtDQUFrQyxFQUFFLGdCQUFnQjtBQUMxRCx1QkFBdUIsY0FBYyxFQUFFLDJCQUEyQixFQUFFLHFCQUFxQjtNQUNuRixnQkFBZ0I7QUFDdEIsdUJBQXVCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxrQkFBa0I7TUFDaEYsa0NBQWtDLEVBQUUsaUJBQWlCO01BQ3JELG1DQUFtQyxFQUFFLGtCQUFrQjtBQUM3RCxzQkFBc0IsY0FBYyxFQUFFLDJCQUEyQixFQUFFLGdCQUFnQjtJQUMvRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxtQ0FBbUM7S0FDMUUsaUJBQWlCLENBQUM7QUFDdkIsc0JBQXNCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUI7TUFDbEYsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCO0FBQ2pFLHFCQUFxQixjQUFjLEVBQUUsMkJBQTJCLEdBQUcsaUJBQWlCO0VBQ2xGLGlCQUFpQjtBQUNuQix1QkFBdUIsY0FBYyxFQUFFLDJCQUEyQixFQUFFLHFCQUFxQjtNQUNuRixzQkFBc0IsRUFBRSxzQkFBc0I7TUFDOUMsbUNBQW1DO0FBQ3pDLHNCQUFzQixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsc0JBQXNCO0VBQ3ZGLHVCQUF1QixFQUFFLG1DQUFtQztHQUMzRCxpQkFBaUIsRUFBRSxnQkFBZ0I7QUFDdEMsb0JBQW9CLGdDQUFnQyxFQUFFLGNBQWM7QUFDcEUsb0JBQW9CLGVBQWUsRUFBRSw0QkFBNEI7QUFFakU7TUFDTTtZQUNNLFlBQVk7TUFDbEI7O01BRUE7WUFDTSxnQkFBZ0I7TUFDdEI7O01BRUE7UUFDRSxlQUFlO01BQ2pCO0FBQ04iLCJmaWxlIjoiYXBwL2JvbGV0by9ib2xldG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLkJvbGV0b0NvZGlnb0JhbmNvIHtmb250LXNpemU6IDZtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBmb250LXdlaWdodCA6IGJvbGQ7IFxyXG4gICAgRk9OVC1TVFlMRTogaXRhbGljOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHZlcnRpY2FsLWFsaWduOiBib3R0b207ICBcclxuICAgIGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyBib3JkZXItcmlnaHQ6IDAuMTVtbSBzb2xpZCAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1ib3R0b20gOiAxbW19XHJcbnRkLkJvbGV0b0xvZ28geyBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDsgIGJvcmRlci1yaWdodDogMC4xNW1tIHNvbGlkICMwMDAwMDA7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAxMG1tfVx0XHJcbnRkLkJvbGV0b0xpbmhhRGlnaXRhdmVsIHtmb250LXNpemU6IDQgbW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgZm9udC13ZWlnaHQgOiBib2xkOyBcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7IHBhZGRpbmctYm90dG9tIDogMW1tOyB9XHJcbnRkLkJvbGV0b1RpdHVsb0VzcXVlcmRve2ZvbnQtc2l6ZTogMC4yY207IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgcGFkZGluZy1sZWZ0IDogMC4xNW1tO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyB0ZXh0LWFsaWduOiBsZWZ0fVxyXG50ZC5Cb2xldG9UaXR1bG9EaXJlaXRve2ZvbnQtc2l6ZTogMm1tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHBhZGRpbmctbGVmdCA6IDAuMTVtbTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdH1cclxudGQuQm9sZXRvVmFsb3JFc3F1ZXJkb3tmb250LXNpemU6IDNtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMC4xNW1tIHNvbGlkICMwMDAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDsgcGFkZGluZy10b3A6IDAuNW1tfVxyXG50ZC5Cb2xldG9WYWxvckRpcmVpdG97Zm9udC1zaXplOiAzbW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgdGV4dC1hbGlnbjpyaWdodDsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzbW07IHBhZGRpbmctdG9wOiAwLjhtbTsgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG50ZC5Cb2xldG9UaXR1bG9TYWNhZG97Zm9udC1zaXplOiAybW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgcGFkZGluZy1sZWZ0IDogMC4xNW1tO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBwYWRkaW5nLXRvcCA6IDAuMTVtbTsgdGV4dC1hbGlnbjogbGVmdH1cclxudGQuQm9sZXRvVmFsb3JTYWNhZG97Zm9udC1zaXplOiAzbW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICB0ZXh0LWFsaWduIDogbGVmdH1cclxudGQuQm9sZXRvVGl0dWxvU2FjYWRvcntmb250LXNpemU6IDJtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBwYWRkaW5nLWxlZnQgOiAwLjE1bW07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IHBhZGRpbmctYm90dG9tIDogMC44bW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwfVxyXG50ZC5Cb2xldG9WYWxvclNhY2Fkb3J7Zm9udC1zaXplOiAzbW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgXHJcbiAgcGFkZGluZy1ib3R0b20gOiAwLjE1bW07IGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwO1xyXG4gICBmb250LXdlaWdodDogYm9sZDsgdGV4dC1hbGlnbjogbGVmdH1cdFxyXG50ZC5Cb2xldG9Qb250aWxoYWRve2JvcmRlci10b3A6IDAuM21tIGRhc2hlZCAjMDAwMDAwOyBmb250LXNpemU6IDFtbX1cclxudWwuQm9sZXRvSW5zdHJ1Y29lc3tmb250LXNpemUgOiAzbW07IGZvbnQtZmFtaWx5IDogdmVyZGFuYSwgYXJpYWx9XHQgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5Cb2xldG8ge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRkLkJvbGV0b0xpbmhhRGlnaXRhdmVsLCB0ZC5Cb2xldG9WYWxvckRpcmVpdG8ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbn0gICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/boleto/boleto.component.ts":
/*!********************************************!*\
  !*** ./src/app/boleto/boleto.component.ts ***!
  \********************************************/
/*! exports provided: BoletoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoComponent", function() { return BoletoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var bwip_angular2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bwip-angular2 */ "./node_modules/bwip-angular2/browser-bwipjs.js");
/* harmony import */ var bwip_angular2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bwip_angular2__WEBPACK_IMPORTED_MODULE_4__);





let BoletoComponent = class BoletoComponent {
    constructor(modalService, route) {
        this.modalService = modalService;
        //this.linha.split(' ').join(''),
        this.newDate = new Date();
        this.hoje = (this.newDate.toLocaleString().indexOf(',') > -1) ? this.newDate.toLocaleString().slice(0, 10) : this.newDate.toLocaleString().split(' ')[0];
        this.linha = route.snapshot.queryParams.linha;
        this.valor = route.snapshot.queryParams.valor;
        this.data = decodeURIComponent(route.snapshot.queryParams.data);
        this.cliente = route.snapshot.queryParams.cliente;
        this.contrato = route.snapshot.queryParams.contrato;
    }
    ngOnInit() {
        bwip_angular2__WEBPACK_IMPORTED_MODULE_4___default()('barcodeCanvas', {
            bcid: 'interleaved2of5',
            text: this.linha.split(' ').join(''),
            scale: 2,
            height: 10,
            width: 6,
            includetext: true,
            textxalign: 'center',
        }, (err, cvs) => {
            if (err) {
                // document.getElementById('err').innerText = 'Error occured. See browser log for more information';
                console.log(err);
            }
            else {
            }
        });
    }
    ngAfterViewInit() {
        const initialState = {
            writerProfileActive: true,
            smallInfoActive: false
        };
        this.modalRef = this.modalService.show(this.templateRef, { initialState, class: 'modal-lg' });
    }
};
BoletoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('template', { static: false })
], BoletoComponent.prototype, "templateRef", void 0);
BoletoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boleto',
        template: __webpack_require__(/*! raw-loader!./boleto.component.html */ "./node_modules/raw-loader/index.js!./src/app/boleto/boleto.component.html"),
        styles: [__webpack_require__(/*! ./boleto.component.css */ "./src/app/boleto/boleto.component.css")]
    })
], BoletoComponent);



/***/ }),

/***/ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.tela-grid {\r\n    background: url('/assets/img/back.jpg') 100% 50% no-repeat;\r\n    height: 100%;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n.cpf-box {\r\n    height: 50%;\r\n    \r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; bottom: 0; right: 90px; \r\n    /*\r\n    position: absolute;\r\n  right: 20px; \r\n  margin: auto; */\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  font-weight: 600;\r\n  font-size: 19px;\r\n}\r\n\r\n.cpf-box .logo {\r\n    display: block;\r\n    max-width: 400px;\r\n    margin: 0px auto 30px;\r\n}\r\n\r\n.cpf-box p {\r\n    color: aliceblue;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.cpf-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.cpf-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;    \r\n}\r\n\r\n.auto_inicio {\r\n    text-align: right;\r\n    color: white;\r\n    bottom: 5px;\r\n    right: 10px;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .cpf-box {\r\n     position: static;\r\n     padding: 10px;\r\n     height: 100%;   \r\n    }\r\n    \r\n    .cpf-box .logo {\r\n        width: 60%;\r\n    }\r\n    .cpf-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }\r\n    \r\n    .form-group {\r\n        width: inherit;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jcGYtY25wai1ib3gvY3BmLWNucGotYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBEQUEyRDtJQUMzRCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVc7SUFDOUI7OztpQkFHYTtFQUNmLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVGO0lBQ0k7S0FDQyxnQkFBZ0I7S0FDaEIsYUFBYTtLQUNiLFlBQVk7SUFDYjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJhcHAvY3BmLWNucGotYm94L2NwZi1jbnBqLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRlbGEtZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltZy9iYWNrLmpwZycpIDEwMCUgNTAlIG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jcGYtYm94IHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDkwcHg7IFxyXG4gICAgLypcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDsgXHJcbiAgbWFyZ2luOiBhdXRvOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLmNwZi1ib3ggLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xyXG59XHJcblxyXG4uY3BmLWJveCBwIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmNwZi1ib3ggaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKndpZHRoOiA3MCU7Ki9cclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmNwZi1ib3ggYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRElOT1QtTWVkaXVtJztcclxuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaW5wdXRfZXJyb3Ige1xyXG4gICAgY2xlYXI6IGJvdGg7ICAgIFxyXG59XHJcblxyXG4uYXV0b19pbmljaW8ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY3BmLWJveCB7XHJcbiAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgIGhlaWdodDogMTAwJTsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNwZi1ib3ggLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuY3BmLWJveCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfSAgICBcclxufSAgICAiXX0= */"

/***/ }),

/***/ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts ***!
  \********************************************************/
/*! exports provided: CpfCnpjBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfCnpjBoxComponent", function() { return CpfCnpjBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let CpfCnpjBoxComponent = class CpfCnpjBoxComponent {
    constructor(http, router, cd, apiRestService) {
        this.http = http;
        this.router = router;
        this.cd = cd;
        this.apiRestService = apiRestService;
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cpf_inv = false;
        this.cnpj_inv = false;
        this.cpf_sem_debitos = false;
        this.cnpj_sem_debitos = false;
        this.input_inv = false;
        this.verificando = false;
        this.disclaimer = true;
    }
    ngOnInit() {
        // ["15354161", "22546129"].forEach (num => { this.apiRestService.getDadosAcordo(num).subscribe (acc => {
        /*  this.apiRestService.getDadosAcordo("15354161").subscribe ((acc: Acordo) => {
            console.log("acc=");
            console.log(acc);
           this.apiRestService.getBoletoAcordo( "22532147", "18271371").subscribe ((bol: Boleto) => {
             console.log(bol);
      
             if (bol.BoletoAcordo) {
              window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor);
             }
             else {
             }
             
          });
        });
         */
    }
    clearAlerts() {
        this.cpf_inv = false;
        this.cnpj_inv = false;
        this.cpf_sem_debitos = false;
        this.cnpj_sem_debitos = false;
        this.input_inv = false;
        this.erro = false;
    }
    clearDisclaimer() {
        this.disclaimer = false;
    }
    backspacePress(event) {
        if (event.target.value.substr(event.target.value.length - 1) == '.' ||
            event.target.value.substr(event.target.value.length - 1) == '/' ||
            event.target.value.substr(event.target.value.length - 1) == '-') {
            this.cd.detectChanges();
            event.preventDefault();
            this.cpf_cnpj = this.cpf_cnpj.slice(0, -1);
        }
    }
    mask() {
        return {
            mask: (value) => {
                if (value.length <= 14)
                    return this.cpfMask;
                else
                    return this.cnpjMask;
            },
            guide: false
        };
    }
    valida() {
        const cpfCnpj = this.cpf_cnpj.replace(/[`\-.\{\}\[\]\\\/]/gi, '');
        switch (cpfCnpj.length) {
            case 11: {
                if (this.testaCPF(cpfCnpj)) {
                    this.verificando = true;
                    this.apiRestService.temDividasouAcordo(cpfCnpj).subscribe(res => {
                        this.verificando = false;
                        switch (res) {
                            case 0: {
                                this.cpf_sem_debitos = true;
                                break;
                            }
                            case 1: {
                                this.router.navigateByUrl('/opcoes-routlet');
                                break;
                            }
                            case 2: {
                                this.erro = true;
                                break;
                            }
                        }
                    });
                }
                else
                    this.cpf_inv = true;
                break;
            }
            case 14: {
                if (this.testaCNPJ(cpfCnpj)) {
                    this.verificando = true;
                    this.apiRestService.temDividasouAcordo(cpfCnpj).subscribe(res => {
                        this.verificando = false;
                        switch (res) {
                            case 0: {
                                this.cpf_sem_debitos = true;
                                break;
                            }
                            case 1: {
                                this.router.navigateByUrl('/opcoes-routlet');
                                break;
                            }
                            case 2: {
                                this.erro = true;
                                break;
                            }
                        }
                    });
                }
                else
                    this.cnpj_inv = true;
                break;
            }
            default: {
                this.input_inv = true;
            }
        }
    }
    testaCPF(strCPF) {
        let Soma, Resto, i;
        Soma = 0;
        if (strCPF == "00000000000")
            return false;
        for (i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11))
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)))
            return false;
        Soma = 0;
        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11))
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11)))
            return false;
        return true;
    }
    testaCNPJ(cnpj) {
        // Valida a quantidade de caracteres
        if (cnpj.length !== 14)
            return false;
        // Elimina inválidos com todos os caracteres iguais
        if (/^(\d)\1+$/.test(cnpj))
            return false;
        // Cáculo de validação
        let t = cnpj.length - 2, d = cnpj.substring(t), d1 = parseInt(d.charAt(0)), d2 = parseInt(d.charAt(1)), calc = x => {
            let n = cnpj.substring(0, x), y = x - 7, s = 0, r = 0;
            for (let i = x; i >= 1; i--) {
                s += +n.charAt(x - i) * y--;
                if (y < 2)
                    y = 9;
            }
            r = 11 - s % 11;
            return r > 9 ? 0 : r;
        };
        return calc(t) === d1 && calc(t + 1) === d2;
    }
};
CpfCnpjBoxComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] }
];
CpfCnpjBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cpf-cnpj-box',
        template: __webpack_require__(/*! raw-loader!./cpf-cnpj-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html"),
        styles: [__webpack_require__(/*! ./cpf-cnpj-box.component.css */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css")]
    })
], CpfCnpjBoxComponent);



/***/ }),

/***/ "./src/app/input-email/input-email.component.css":
/*!*******************************************************!*\
  !*** ./src/app/input-email/input-email.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.email-box {\r\n    margin: 25px auto;\r\n    width: 45%;\r\n}\r\n\r\n.email-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.email-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.email-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .email-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .email-box .logo {\r\n        width: 60%;\r\n    }\r\n    .email-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbnB1dC1lbWFpbC9pbnB1dC1lbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7S0FDQyxZQUFZO0tBQ1osV0FBVztJQUNaOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiYXBwL2lucHV0LWVtYWlsL2lucHV0LWVtYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lbWFpbC1ib3gge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uZW1haWwtYm94IHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5lbWFpbC1ib3ggaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKndpZHRoOiA3MCU7Ki9cclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmVtYWlsLWJveCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdESU5PVC1NZWRpdW0nO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dF9lcnJvciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5lbWFpbC1ib3gge1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVtYWlsLWJveCAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC5lbWFpbC1ib3ggYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9ICAgIFxyXG59ICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/input-email/input-email.component.ts":
/*!******************************************************!*\
  !*** ./src/app/input-email/input-email.component.ts ***!
  \******************************************************/
/*! exports provided: InputEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEmailComponent", function() { return InputEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



let InputEmailComponent = class InputEmailComponent {
    constructor(apiRestService) {
        this.apiRestService = apiRestService;
        this.clickEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickVoltar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cleanAlerts() {
        this.email_inv = false;
    }
    validaEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    envia() {
        if (!this.validaEmail(this.email))
            this.email_inv = true;
        else {
            this.apiRestService.email = this.email;
            this.clickEnviar.emit(true);
        }
    }
    voltar() {
        this.clickVoltar.emit(true);
    }
};
InputEmailComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputEmailComponent.prototype, "clickEnviar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputEmailComponent.prototype, "clickVoltar", void 0);
InputEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-email',
        template: __webpack_require__(/*! raw-loader!./input-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/input-email/input-email.component.html"),
        styles: [__webpack_require__(/*! ./input-email.component.css */ "./src/app/input-email/input-email.component.css")]
    })
], InputEmailComponent);



/***/ }),

/***/ "./src/app/input-tel/input-tel.component.css":
/*!***************************************************!*\
  !*** ./src/app/input-tel/input-tel.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.tel-box {\r\n    margin: 25px auto;\r\n    width: 45%;\r\n}\r\n\r\n.tel-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.tel-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.tel-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .tel-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .tel-box .logo {\r\n        width: 60%;\r\n    }\r\n    .tel-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbnB1dC10ZWwvaW5wdXQtdGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtLQUNDLFlBQVk7S0FDWixXQUFXO0lBQ1o7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhcHAvaW5wdXQtdGVsL2lucHV0LXRlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGVsLWJveCB7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi50ZWwtYm94IHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZWwtYm94IGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyp3aWR0aDogNzAlOyovXHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi50ZWwtYm94IGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlucHV0X2Vycm9yIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRlbC1ib3gge1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRlbC1ib3ggLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAudGVsLWJveCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH0gICAgXHJcbn0gICAgIl19 */"

/***/ }),

/***/ "./src/app/input-tel/input-tel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/input-tel/input-tel.component.ts ***!
  \**************************************************/
/*! exports provided: InputTelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTelComponent", function() { return InputTelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



let InputTelComponent = class InputTelComponent {
    constructor(cd, apiRestService) {
        this.cd = cd;
        this.apiRestService = apiRestService;
        this.clickEnviar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickVoltar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.telMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    ngOnInit() {
    }
    cleanAlerts() {
        this.tel_inv = false;
    }
    envia() {
        let telNum = this.tel.replace(/[`\-()_.\{\}\[\] \\\/]/gi, '');
        let ddd = telNum.slice(0, 2);
        if (telNum.length < 11 || telNum.length > 12 || +ddd < 10) {
            this.tel_inv = true;
            return;
        }
        this.cadastrado = false;
        this.houve_erro = false;
        this.apiRestService.telefone = telNum;
        this.clickEnviar.emit(true);
    }
    voltar() {
        this.clickVoltar.emit(true);
    }
};
InputTelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputTelComponent.prototype, "clickEnviar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputTelComponent.prototype, "clickVoltar", void 0);
InputTelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-tel',
        template: __webpack_require__(/*! raw-loader!./input-tel.component.html */ "./node_modules/raw-loader/index.js!./src/app/input-tel/input-tel.component.html"),
        styles: [__webpack_require__(/*! ./input-tel.component.css */ "./src/app/input-tel/input-tel.component.css")]
    })
], InputTelComponent);



/***/ }),

/***/ "./src/app/negocie-online/negocie-online.component.css":
/*!*************************************************************!*\
  !*** ./src/app/negocie-online/negocie-online.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-heading {\r\nline-height: 44px;\r\nfont-size: 22px;\r\nmargin-left: 10px;    \r\n}\r\n\r\n.logo {\r\n    width: 120px;\r\n    display: block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.produto-img {\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    font-size: 19px;  \r\n}\r\n\r\ntable {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.opcoes-parcelamento {  \r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.opcoes-parcelamento .btn {\r\n    margin-bottom: 25px;\r\n    width: 250px;    \r\n}\r\n\r\n.metodo-pagamento {\r\n    margin-top: 25px;\r\n    border: 1px solid #007bff;\r\n    padding-bottom: 10px;\r\n    /*margin-left: 7px;*/\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.movelLabel {\r\n    display: inline-block;\r\n    margin-left: 100px;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.panel-collapse > div {\r\n    padding-top: 0 !important\r\n}\r\n\r\n.opcoes-para-parcelamento {\r\n    text-align: right;\r\n}\r\n\r\n.metodo-de-pagamento {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.btn-smaller {\r\n    width: 205px !important;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    h3 {\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .opcoes-para-parcelamento {\r\n        text-align: left;\r\n    }    \r\n\r\n    .btn {\r\n        margin-top: 10px;\r\n        font-size: 17px;    \r\n    }\r\n\r\n    .metodo-pagamento {\r\n        margin-top: 0px;\r\n        margin-bottom: 7px;\r\n        margin-left: 0;\r\n    }\r\n    \r\n    .metodo-de-pagamento {\r\n        margin-bottom: 0;\r\n        margin-top: 5px;\r\n        text-align: left;\r\n        font-size: 17px;\r\n    }\r\n\r\n    .btn-accordion {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n      \r\n    table {\r\n        margin-top: -16px;\r\n        margin-bottom: -10px;\r\n    }\r\n\r\n    .movelLabel {\r\n        display: none;\r\n    }\r\n\r\n    .opcoes-parcelamento {\r\n        width: 100%;\r\n        margin: auto;\r\n        position: relative;\r\n        top: -20px;\r\n    }\r\n\r\n    .opcoes-parcelamento .btn {\r\n        /*width: 155px;*/\r\n        display: block;\r\n        margin: 20px auto 0;\r\n        padding: 1px;\r\n        /*position: relative;\r\n        left: -20px;*/\r\n    }\r\n\r\n       \r\n}\r\n\r\n.loader-wrap-wrap {\r\n    height: 4500px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZWdvY2llLW9ubGluZS9uZWdvY2llLW9ubGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWjtxQkFDYTtJQUNqQjs7O0FBR0o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC9uZWdvY2llLW9ubGluZS9uZWdvY2llLW9ubGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1dG8taGVhZGluZyB7XHJcbmxpbmUtaGVpZ2h0OiA0NHB4O1xyXG5mb250LXNpemU6IDIycHg7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4OyAgICBcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLnByb2R1dG8taW1nIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOXB4OyAgXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5vcGNvZXMtcGFyY2VsYW1lbnRvIHsgIFxyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59ICAgIFxyXG4gICAgXHJcblxyXG5cclxuLm9wY29lcy1wYXJjZWxhbWVudG8gLmJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1MHB4OyAgICBcclxufVxyXG5cclxuLm1ldG9kby1wYWdhbWVudG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDdweDsqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5tb3ZlbExhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFuZWwtY29sbGFwc2UgPiBkaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudFxyXG59XHJcblxyXG4ub3Bjb2VzLXBhcmEtcGFyY2VsYW1lbnRvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWV0b2RvLWRlLXBhZ2FtZW50byB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tc21hbGxlciB7XHJcbiAgICB3aWR0aDogMjA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9wY29lcy1wYXJhLXBhcmNlbGFtZW50byB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5tZXRvZG8tcGFnYW1lbnRvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWV0b2RvLWRlLXBhZ2FtZW50byB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1hY2NvcmRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW92ZWxMYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAub3Bjb2VzLXBhcmNlbGFtZW50byB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGNvZXMtcGFyY2VsYW1lbnRvIC5idG4ge1xyXG4gICAgICAgIC8qd2lkdGg6IDE1NXB4OyovXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgLypwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogLTIwcHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAgICBcclxufVxyXG5cclxuLmxvYWRlci13cmFwLXdyYXAge1xyXG4gICAgaGVpZ2h0OiA0NTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/negocie-online/negocie-online.component.ts":
/*!************************************************************!*\
  !*** ./src/app/negocie-online/negocie-online.component.ts ***!
  \************************************************************/
/*! exports provided: NegocieOnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegocieOnlineComponent", function() { return NegocieOnlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



let NegocieOnlineComponent = class NegocieOnlineComponent {
    constructor(apiRestService, cd) {
        this.apiRestService = apiRestService;
        this.cd = cd;
        this.mostrarAbas = [true, true, true, true];
        this.showFatura = true;
        this.showHeader = true;
        this.parcelado = {};
        this.dadosDivida = [];
        this.opcoesPg = {};
    }
    ngOnDestroy() {
        // this.cd.detach();
    }
    ngOnInit() {
        //if (!this.dadosDivida.length) {
        this.apiRestService.getDividas();
        if (this.apiRestService.dividas.Divida.DadosDivida.length) {
            this.dadosDivida = this.apiRestService.dividas.Divida.DadosDivida;
        }
        if (this.apiRestService.dividas.Divida.DadosDivida.CodigoDevedor) {
            this.dadosDivida.push(this.apiRestService.dividas.Divida.DadosDivida);
        }
        // }
    }
    botaoNaoClicavel() {
        return this.mostrarAbas.every(Boolean);
    }
    pagarAVista(codTitulo, valor, plano) {
        this.apiRestService.parcelas = {
            aVista: valor
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    pagarParceladoTv(ind, codTitulo, plano) {
        this.apiRestService.parcelas = {
            primeira: this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
            vezes: ind,
            outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    pagarParceladoMovel(ind, codTitulo, plano) {
        this.apiRestService.parcelas = {
            primeira: this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
            vezes: ind,
            outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    pagarParceladoInternet(ind, codTitulo, plano) {
        this.apiRestService.parcelas = {
            primeira: this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
            vezes: ind,
            outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    pagarParceladoFixo(ind, codTitulo, plano) {
        this.apiRestService.parcelas = {
            primeira: this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
            vezes: ind,
            outrasParcelas: this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    getAllOpcoesClaroMovel() {
        this.mostrarAbas = [true, false, false, false];
        //////////////////////////////if (!this.apiRestService.getAllOpcoesClaroMovel()) {
        this.apiRestService.getAllOpcoesClaroMovel();
        this.loader = true;
        this.showHeader = false;
        this.movelLabel = true;
        if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length) {
            if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.length > 2)
                this.apiRestService.showDisclaimer = false;
            this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
        }
        /* if (this.apiRestService.dividasClaroMovel.Divida.DadosDivida.CodigoDevedor) {
           this.apiRestService.dividasClaroMovel.Divida.DadosDivida.forEach( (dados) => this.setOpcoes(dados.CodigoTitulo));
         }*/
        ////////////////////////////}
    }
    getAllOpcoesClaroTv() {
        this.mostrarAbas = [false, true, false, false];
        this.apiRestService.getAllOpcoesClaroTv();
        this.loader = true;
        this.showHeader = false;
        this.movelLabel = true;
        if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length) {
            if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length > 2)
                this.apiRestService.showDisclaimer = false;
            this.apiRestService.dividasClaroTv.Divida.DadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
        }
    }
    getAllOpcoesClaroInternet() {
        this.mostrarAbas = [false, false, true, false];
        this.apiRestService.getAllOpcoesClaroInternet();
        this.loader = true;
        this.showHeader = false;
        this.movelLabel = true;
        if (this.apiRestService.dividasClaroInternet.Divida.DadosDivida.length) {
            if (this.apiRestService.dividasClaroInternet.Divida.DadosDivida.length > 2)
                this.apiRestService.showDisclaimer = false;
            this.apiRestService.dividasClaroInternet.Divida.DadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
        }
    }
    getAllOpcoesClaroFixo() {
        this.mostrarAbas = [false, false, false, true];
        this.apiRestService.getAllOpcoesClaroFixo();
        this.loader = true;
        this.showHeader = false;
        this.movelLabel = true;
        if (this.apiRestService.dividasClaroFixo.Divida.DadosDivida.length) {
            if (this.apiRestService.dividasClaroFixo.Divida.DadosDivida.length > 2)
                this.apiRestService.showDisclaimer = false;
            this.apiRestService.dividasClaroFixo.Divida.DadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
        }
    }
    setOpcoes(cod) {
        let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
        this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo].subscribe(res => {
            this.opcoesPg[dadosDividaCod[0].CodigoTitulo] = res.OpcoesPagamento;
            console.log("RES.OPCOESPAGAMENTO=");
            console.log(res.OpcoesPagamento);
            if (!this.loadingParcelados && !res.Carregando) {
                this.loadingParcelados = true;
                setTimeout(() => {
                    this.loader = false;
                }, 2000);
            }
            this.cd.detectChanges();
            event.preventDefault();
        });
    }
    getValorTotal(cod) {
        if (this.opcoesPg[cod] && !this.opcoesPg[cod].Carregando) {
            if (this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido) {
                //   if (+this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido.replace(',','.') < 45.00) this.parcelado[cod] = 1;        
                return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido);
            }
            else if (this.opcoesPg[cod].OpcaoPagamento.length) {
                this.parcelado[cod] = 2;
                return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento[0].ValorCorrigido);
            }
        }
        else
            return "";
    }
    getValorNegociar(cod) {
        if (this.opcoesPg[cod]) {
            if (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar) {
                this.parcelado[cod] = 1;
                return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento.ValorNegociar);
            }
            else if (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar) {
                this.parcelado[cod] = 2;
                return this.apiRestService.doisDigitosDecimais(this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar);
            }
        }
        else
            return "";
    }
    getOpcaoFixo(ind) {
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
    }
    getOpcaoTv(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
    }
    getOpcaoMovel(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
    }
    getOpcaoInternet(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira) + " + " + ind + " X R$ " + this.apiRestService.doisDigitosDecimais(this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas);
    }
    showPrazoFinalizacao() {
        this.apiRestService.showDisclaimer = true;
        this.opcoesParcelamentoLabel = false;
        this.prazoFinalizacao = true;
        this.opcoesParcelamento = false;
    }
    showOpcoesParcelamento(ind) {
        this.opcoesParcelamento = true;
        this.showFatura = false;
        this.prazoFinalizacao = false;
        this.movelLabel = false;
        this.opcoesParcelamentoLabel = true;
        this.ind_parcelado = ind;
    }
    hideOpcoesParcelamento() {
        this.opcoesParcelamento = false;
        this.showFatura = true;
        this.prazoFinalizacao = false;
    }
};
NegocieOnlineComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NegocieOnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-negocie-online',
        template: __webpack_require__(/*! raw-loader!./negocie-online.component.html */ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html"),
        styles: [__webpack_require__(/*! ./negocie-online.component.css */ "./src/app/negocie-online/negocie-online.component.css")]
    })
], NegocieOnlineComponent);



/***/ }),

/***/ "./src/app/opcoes-routlet/opcoes-routlet.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opcoes-routlet/opcoes-routlet.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.back-beje {\r\n    background: #f8f8f8;\r\n}\r\n\r\n/* .back-red {\r\n    height: 100%;\r\n    background: url(/assets/img/back-red.png) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 185px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14.5px;\r\n}\r\n\r\n.btn-acessar {\r\n    \r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 100px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    max-width: 320px;\r\n    margin: 15px auto;\r\n  }\r\n\r\n.fundo-paulista {\r\n    background: url('/assets/img/recorte_phixr.jpg') bottom;\r\n    background-size: cover;\r\n    height: inherit;\r\n}\r\n\r\n.link-voltar {\r\n        font-size: 20px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.bottom-fixed {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        margin-bottom: 0px;\r\n        font-size: 18px;\r\n        padding-right: 17px;\r\n        padding-left: 17px;\r\n        }\r\n\r\n.fiz-pagamento-ok {\r\n        margin-top: 30px;\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .fiz-pagamento-ok {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bottom-fixed {\r\n        font-size: 14px;\r\n        bottom: 26px;        \r\n    }\r\n    \r\n    .logo {\r\n        width: 35%;\r\n        margin: 6px auto 3px;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 8px;  \r\n        height: 90px;     \r\n    }\r\n\r\n    .card-title {\r\n        font-size: 13px;\r\n        min-width: 150px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        height: 90px;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n   \r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n\r\n    .link-voltar {\r\n        font-size: 18px;\r\n        text-align: center;\r\n    }    \r\n\r\n    .back-beje-mobile {\r\n        background: #f8f8f8;\r\n    }\r\n    \r\n    .bem-vindo {\r\n        font-size: 15px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcGNvZXMtcm91dGxldC9vcGNvZXMtcm91dGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0dBSUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0hBQXdHO0lBQXhHLHdHQUF3RztBQUM1Rzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdURBQXdEO0lBQ3hELHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCOztBQUVKO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7S0FFQztRQUNHLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztLQUVDO1FBQ0csWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiYXBwL29wY29lcy1yb3V0bGV0L29wY29lcy1yb3V0bGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYmFjay1iZWplIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbn1cclxuXHJcbi8qIC5iYWNrLXJlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay1yZWQucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovXHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0LjVweDtcclxufVxyXG5cclxuLmJ0bi1hY2Vzc2FyIHtcclxuICAgIFxyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSxiYWNrZ3JvdW5kIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZ1bmRvLXBhdWxpc3RhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltZy9yZWNvcnRlX3BoaXhyLmpwZ1wiKSBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4gICAgLmxpbmstdm9sdGFyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tZml4ZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAuZml6LXBhZ2FtZW50by1vayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH0gICAgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAuZml6LXBhZ2FtZW50by1vayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLWZpeGVkIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm90dG9tOiAyNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IGF1dG8gM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDsgIFxyXG4gICAgICAgIGhlaWdodDogOTBweDsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9IFxyXG5cclxuICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAuYnRuLWFjZXNzYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmstdm9sdGFyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAuYmFjay1iZWplLW1vYmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJlbS12aW5kbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/opcoes-routlet/opcoes-routlet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/opcoes-routlet/opcoes-routlet.component.ts ***!
  \************************************************************/
/*! exports provided: OpcoesRoutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesRoutletComponent", function() { return OpcoesRoutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



let OpcoesRoutletComponent = class OpcoesRoutletComponent {
    constructor(apiRestService) {
        this.apiRestService = apiRestService;
        this.nome = this.apiRestService.getNome();
        //////////////////////////////////////////////////////////////
        this.showOpcoes = true;
        this.cardBodyPagamento = true;
    }
    ngOnInit() {
        ////////////////////////////////////////////////////////////////
        /*
         this.apiRestService.dividas = new Divida();
         this.apiRestService.dividas.Acordo = new Acordo();
         this.apiRestService.acordos = [{
           DataAcordo: "14/02/2019",
           FilialAcordo: "NET",
           NumeroTitulo: "102405257.Claro Móvel",
           StatusAcordo: "PENDENTE",
           ParcelasAcordo: {
           ParcelaAcordo: [{
               DataVencimento: "15/02/2019",
               StatusParcelaAcordo: "NÃO PAGO",
               ValorParcela: "R$ 323.23",
             }, {
               DataVencimento: "15/02/2019",
               StatusParcelaAcordo: "NÃO PAGO",
               ValorParcela: "R$ 323.23",
             }, {
               DataVencimento: "15/02/2019",
               StatusParcelaAcordo: "NÃO PAGO",
               ValorParcela: "R$ 323.23"
             }]
           }
         }];
     */
    }
    negocieOnline() {
        this.showOpcoes = false;
        this.showNegocieOnline = true;
        this.logo_menor = true;
    }
    assistenteVirtual() {
        this.showOpcoes = false;
        this.showAssistenteVirtual = true;
    }
    recebaNossaLigacao() {
        this.showOpcoes = false;
        this.showRecebaNossaLigacao = true;
    }
    fizPagamento() {
        this.apiRestService.fizPagamento().subscribe(res => {
            if (res) {
                this.cardBodyPagamento = false;
                this.fizPagamentoOk = true;
            }
        });
    }
    acordosAndamento() {
        this.showOpcoes = false;
        this.showAcordosAndamento = true;
        this.logo_menor = true;
    }
    voltarMenu() {
        this.showOpcoes = true;
        this.showNegocieOnline = false;
        this.showAssistenteVirtual = false;
        this.showRecebaNossaLigacao = false;
        this.showAcordosAndamento = false;
        this.logo_menor = false;
    }
    voltarInicio() {
        window.open("/");
    }
};
OpcoesRoutletComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
];
OpcoesRoutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opcoes-routlet',
        template: __webpack_require__(/*! raw-loader!./opcoes-routlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html"),
        styles: [__webpack_require__(/*! ./opcoes-routlet.component.css */ "./src/app/opcoes-routlet/opcoes-routlet.component.css")]
    })
], OpcoesRoutletComponent);



/***/ }),

/***/ "./src/app/prazo-finalizacao/prazo-finalizacao.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/prazo-finalizacao/prazo-finalizacao.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    width: 100%;\r\n    font-size: 19px;\r\n    margin-bottom: 20px;  \r\n}\r\n\r\n.btn-yellow {\r\n    background: #ffbc4a;\r\n    color: white;\r\n}\r\n\r\n.escolha-data {\r\n    text-align: left;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.detalhes-titulo {\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-voltar {\r\n    width: 25%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .btn-voltar {\r\n        float: right;\r\n        position: absolute;\r\n        right: 10px;\r\n        top: 20px;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 768px) {\r\n \r\n    .btn {\r\n        margin-bottom: 0px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .escolha-data {\r\n        text-align: left;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .detalhes-titulo {\r\n        margin-bottom: 0;        \r\n    }\r\n    \r\n    .btn-mudar-parce {\r\n        font-size: 15px;\r\n    }\r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmF6by1maW5hbGl6YWNhby9wcmF6by1maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO0lBQ2I7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJhcHAvcHJhem8tZmluYWxpemFjYW8vcHJhem8tZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXHJcbn1cclxuXHJcbi5idG4teWVsbG93IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lc2NvbGhhLWRhdGEge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmRldGFsaGVzLXRpdHVsbyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi12b2x0YXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufSAgICBcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5idG4tdm9sdGFyIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59ICAgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiBcclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc2NvbGhhLWRhdGEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWxoZXMtdGl0dWxvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tbXVkYXItcGFyY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxufSAgICAiXX0= */"

/***/ }),

/***/ "./src/app/prazo-finalizacao/prazo-finalizacao.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/prazo-finalizacao/prazo-finalizacao.component.ts ***!
  \******************************************************************/
/*! exports provided: PrazoFinalizacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrazoFinalizacaoComponent", function() { return PrazoFinalizacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PrazoFinalizacaoComponent = class PrazoFinalizacaoComponent {
    constructor(localeService, apiRestService, router) {
        this.localeService = localeService;
        this.apiRestService = apiRestService;
        this.router = router;
        this.clickVoltar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickVoltarAVista = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opcoesParcelamento = true;
        this.smsRes = '';
        this.emailRes = '';
        this.localeService.use('pt-br');
        this.minDate = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 10);
    }
    ngOnInit() {
    }
    enviarEmail() {
        this.apiRestService.enviaBoletoEmail(this.numeroTitulo, this.boleto.BoletoAcordo.Valor, this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.LinhaDigitavel, this.apiRestService.email).subscribe(res => {
            this.emailRes = res.message;
            this.porEmail = false;
            this.sucesso = true;
        });
    }
    voltarEmail() {
        this.porEmail = false;
        this.sucesso = true;
    }
    voltarSms() {
        this.porSms = false;
        this.sucesso = true;
        this.smsRes = '';
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
        if (this.apiRestService.parcelas.aVista)
            return this.apiRestService.doisDigitosDecimais(this.apiRestService.parcelas.aVista);
    }
    primeiraParcelado() {
        if (this.apiRestService.parcelas.primeira)
            return this.apiRestService.doisDigitosDecimais(this.apiRestService.parcelas.primeira);
    }
    vezesParcelado() {
        if (this.apiRestService.parcelas.vezes)
            return this.apiRestService.parcelas.vezes;
    }
    outrasParcelado() {
        if (this.apiRestService.parcelas.outrasParcelas)
            return this.apiRestService.doisDigitosDecimais(this.apiRestService.parcelas.outrasParcelas);
    }
    abrirBoleto() {
        let codigoParcelaAcordo;
        if (!this.boleto) {
            this.loader = true;
            this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe(acc => {
                console.log("acc=");
                console.log(acc);
                if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
                else
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
                this.numeroTitulo = acc.Acordo.DadosAcordo.NumeroTitulo.split('.')[0];
                this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                    console.log(bol);
                    this.loader = false;
                    if (bol.BoletoAcordo) {
                        this.boleto = bol;
                        //window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor, "_self");
                        this.router.navigate(['/boleto'], { queryParams: { data: bol.BoletoAcordo.DataVencimento, linha: bol.BoletoAcordo.LinhaDigitavel, valor: this.apiRestService.doisDigitosDecimais(bol.BoletoAcordo.Valor), cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, contrato: this.numeroTitulo } });
                    }
                    else {
                        this.erroBoleto = true;
                    }
                });
            });
        }
        else {
            this.router.navigate(['/boleto'], { queryParams: { data: this.boleto.BoletoAcordo.DataVencimento, linha: this.boleto.BoletoAcordo.LinhaDigitavel, valor: this.apiRestService.doisDigitosDecimais(this.boleto.BoletoAcordo.Valor), cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, contrato: this.numeroTitulo } });
        }
    }
    gravaAcordo() {
        this.loader = true;
        this.fim = false;
        if (this.apiRestService.parcelas.aVista) {
            console.log(this.dataPagamento.toLocaleString().slice(0, 10));
            this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, '1', this.dataPagamento.toLocaleString().slice(0, 10), this.apiRestService.parcelas.aVista).subscribe(res => {
                console.log(res);
                this.loader = false;
                if (res.Codigo === '12') {
                    this.fim = false;
                    this.sucesso = true;
                    this.codAcordo = res.CodigoAcordo;
                    this.apiRestService.telaFinal = true;
                }
                else {
                    this.erro = true;
                    this.fim = true;
                }
            });
        }
        else if (this.apiRestService.parcelas.primeira) {
            this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().slice(0, 10), this.apiRestService.parcelas.primeira).subscribe(res => {
                console.log(res);
                this.loader = false;
                if (res.Codigo === '12') {
                    this.fim = false;
                    this.sucesso = true;
                    this.codAcordo = res.CodigoAcordo;
                    this.apiRestService.telaFinal = true;
                }
                else {
                    this.erro = true;
                    this.fim = true;
                }
            });
        }
    }
    enviarSms() {
        this.apiRestService.enviaSms(this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.apiRestService.doisDigitosDecimais(this.boleto.BoletoAcordo.Valor)).subscribe(res => {
            this.smsRes = JSON.parse(res).statusDescription;
            this.porSms = false;
            this.sucesso = true;
            console.log("RES SMS=");
            console.log(res);
        });
    }
    pegarTelefone() {
        this.sucesso = false;
        let codigoParcelaAcordo;
        if (!this.boleto) {
            this.loader = true;
            this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe(acc => {
                console.log("acc=");
                console.log(acc);
                if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
                else
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
                console.log("this.codAcordo + + + codigoParcelaAcordo");
                console.log("22547866 " + codigoParcelaAcordo);
                this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                    this.loader = false;
                    console.log("bol=");
                    console.log(bol);
                    if (bol.BoletoAcordo) {
                        this.porSms = true;
                        this.boleto = bol;
                    }
                    else
                        this.erroBoleto = true;
                });
            });
        }
        else {
            this.porSms = true;
        }
    }
    pegarEmail() {
        let codigoParcelaAcordo;
        this.smsRes = '';
        this.sucesso = false;
        if (!this.boleto) {
            this.loader = true;
            this.emailRes = '';
            this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe(acc => {
                this.numeroTitulo = acc.Acordo.DadosAcordo.NumeroTitulo.split('.')[0];
                console.log("acc=");
                console.log(acc);
                if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
                else
                    codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
                this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                    console.log("bol=");
                    console.log(bol);
                    if (bol.BoletoAcordo) {
                        this.loader = false;
                        this.porEmail = true;
                        this.boleto = bol;
                    }
                    else
                        this.erroBoleto = true;
                });
            });
        }
        else {
            this.porEmail = true;
        }
    }
};
PrazoFinalizacaoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrazoFinalizacaoComponent.prototype, "clickVoltar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PrazoFinalizacaoComponent.prototype, "clickVoltarAVista", void 0);
PrazoFinalizacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prazo-finalizacao',
        template: __webpack_require__(/*! raw-loader!./prazo-finalizacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html"),
        styles: [__webpack_require__(/*! ./prazo-finalizacao.component.css */ "./src/app/prazo-finalizacao/prazo-finalizacao.component.css")]
    })
], PrazoFinalizacaoComponent);



/***/ }),

/***/ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tel-box {\r\n    margin: 50px auto;\r\n    width: 75%;\r\n}\r\n\r\n.tel-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.tel-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.tel-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .tel-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .tel-box .logo {\r\n        width: 60%;\r\n    }\r\n    .tel-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWNlYmEtbm9zc2EtbGlnYWNhby9yZWNlYmEtbm9zc2EtbGlnYWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7S0FDQyxZQUFZO0tBQ1osV0FBVztJQUNaOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiYXBwL3JlY2ViYS1ub3NzYS1saWdhY2FvL3JlY2ViYS1ub3NzYS1saWdhY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsLWJveCB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi50ZWwtYm94IHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZWwtYm94IGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyp3aWR0aDogNzAlOyovXHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi50ZWwtYm94IGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlucHV0X2Vycm9yIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRlbC1ib3gge1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRlbC1ib3ggLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAudGVsLWJveCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH0gICAgXHJcbn0gICAgIl19 */"

/***/ }),

/***/ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.ts ***!
  \************************************************************************/
/*! exports provided: RecebaNossaLigacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecebaNossaLigacaoComponent", function() { return RecebaNossaLigacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



let RecebaNossaLigacaoComponent = class RecebaNossaLigacaoComponent {
    constructor(cd, apiRestService) {
        this.cd = cd;
        this.apiRestService = apiRestService;
        this.telMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    ngOnInit() {
    }
    cleanAlerts() {
        this.tel_inv = false;
    }
    envia() {
        let telNum = this.tel.replace(/[`\-()_.\{\}\[\]\\\/]/gi, '');
        let ddd = telNum.slice(0, 2);
        if (telNum.length < 11 || telNum.length > 12 || +ddd < 10) {
            this.tel_inv = true;
            return;
        }
        this.cadastrado = false;
        this.houve_erro = false;
        this.apiRestService.meLigue(telNum).subscribe(res => {
            if (res)
                this.cadastrado = true;
            else
                this.houve_erro = true;
        });
    }
};
RecebaNossaLigacaoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
];
RecebaNossaLigacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receba-nossa-ligacao',
        template: __webpack_require__(/*! raw-loader!./receba-nossa-ligacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html"),
        styles: [__webpack_require__(/*! ./receba-nossa-ligacao.component.css */ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css")]
    })
], RecebaNossaLigacaoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wtechnology1\claro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map