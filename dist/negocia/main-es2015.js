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

module.exports = "<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n   \r\n    <accordion-group *ngFor=\"let acordo of acordos\">\r\n        <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n         <div class=\"row\">\r\n          <div class=\"col-12 col-sm-2 img-produto\">\r\n             <img [src]=\"getIcon(acordo)\" class=\"produto-img\">  \r\n             <p class=\"titulo-mobile\">{{ acordo.NumeroTitulo.split(' ')[1] }}</p>\r\n          </div>  \r\n            <div class=\"col-sm-3 col-4 btn-linha no-padd-left no-padd-right\">  \r\n                Data: {{ acordo.DataAcordo }}\r\n            </div>              \r\n          <div class=\"col-5 btn-linha\">\r\n              Status: {{ acordo.StatusAcordo }}\r\n          </div>\r\n          <div class=\"col-sm-2 col-3 btn-linha\">\r\n              Filial: {{ acordo.FilialAcordo }}\r\n          </div>\r\n        </div>\r\n        </button>     \r\n        <div class=\"acc-body\">\r\n         <p class=\"font-weight-bold\">Parcelas</p>\r\n          <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.length\">\r\n            <div *ngFor=\"let par of acordo.ParcelasAcordo.ParcelaAcordo; let ind = index\" class=\"row bottom-parcela\">\r\n                    <div class=\"col-6 col-md-3 no-padd-left no-padd-right\">\r\n                        Data: {{ par.DataVencimento }}\r\n                    </div>\r\n                    <div class=\"col-6 col-md-3 no-padd-right\">\r\n                        Status: {{ par.StatusParcelaAcordo }}\r\n                    </div>\r\n                    <div class=\"col-6 col-md-2 valor-mobile\">\r\n                        {{ par.ValorParcela }}\r\n                    </div>\r\n                    <div class=\"col-4 col-md-2 no-padd-left\">\r\n                        <a type=\"button\" class=\"btn btn-primary padd-mobile\" (click)=\"segunda_via(acordo.CodigoAcordo, par.CodigoParcelaAcordo, acordo.NumeroTitulo, ind)\">\r\n                            Segunda via do boleto        \r\n                        </a>\r\n                        <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n                    </div>\r\n                    <div class=\"col-2 col-md-1\">\r\n                        <div class=\"loader-wrap\">\r\n                            <div class=\"loader\" *ngIf=\"loadingBoleto[ind]\"></div>\r\n                        </div>    \r\n                    </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo\" class=\"row\">\r\n                    <div class=\"col-6 col-md-3\">\r\n                            Data: {{ acordo.ParcelasAcordo.ParcelaAcordo.DataVencimento }}\r\n                        </div>\r\n                        <div class=\"col-6 col-md-3 no-padd-right bottom-parcela\">\r\n                            Status: {{ acordo.ParcelasAcordo.ParcelaAcordo.StatusParcelaAcordo }}\r\n                        </div>\r\n                        <div class=\"col-5 col-md-2 no-padd-right\">\r\n                            Valor: {{ acordo.ParcelasAcordo.ParcelaAcordo.ValorParcela }}\r\n                        </div>\r\n                        <div class=\"col-5 col-md-2 no-padd-right no-padd-left\">\r\n                            <a type=\"button\" class=\"btn btn-primary padd-mobile\" (click)=\"segunda_via(acordo.CodigoAcordo, acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo, acordo.NumeroTitulo, 0)\">\r\n                                Segunda via do boleto        \r\n                            </a>                          \r\n                            <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                        </div>\r\n                        <div class=\"col-2 col-md-1\">\r\n                            <div class=\"loader-wrap\">\r\n                                <div class=\"loader\" *ngIf=\"loadingBoleto[0]\"></div>\r\n                            </div>    \r\n                        </div>    \r\n            </div>\r\n        </div>    \r\n    </accordion-group>\r\n</accordion>"

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

module.exports = "<ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Seu boleto</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n      <TABLE cellSpacing=0 cellPadding=0 border=0 class=\"Boleto\">\r\n        \r\n        <TR>\r\n          <TD style='width: 0.9cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 0.5cm'></TD>\r\n          <TD style='width: 1.3cm'></TD>\r\n          <TD style='width: 0.8cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          \r\n          <TD style='width: 1.9cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n        <tr><td colspan=11>\r\n        <ul class=BoletoInstrucoes>\r\n        <li>Imprima em papel A4 ou Carta</li>\r\n        <li>Não rasure o código de barras</li>\r\n        </ul>\r\n        </td></tr>\r\n        \r\n        <tr><td colspan=11 class=\"BoletoPontilhado\">&nbsp;</td></tr>\r\n        <TR>\r\n          <TD colspan=4 class=\"BoletoLogo\"><img src='assets/img/logo.jpg' style=\"width: 60px; padding: 5px\"></TD>\r\n          <TD colspan=8 class=\"BoletoLinhaDigitavel\">{{ linha }}</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoTituloEsquerdo>Nome do Cliente</TD>\r\n          <TD class=BoletoTituloDireito>Vencimento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm; text-transform: capitalize'>{{ cliente }}</TD>\r\n          <TD class=\"BoletoValorDireito\">{{ data }}</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=10 class=\"BoletoTituloEsquerdo\">Valor</TD>\r\n          <TD class=BoletoTituloDireito>Contrato</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm'>R$ {{ valor }}</TD>\r\n          <TD class=BoletoValorDireito>{{ contrato }}</TD>\r\n        </TR>   \r\n        <TR>\r\n          <TD colspan=3 class=BoletoTituloEsquerdo>Data do Documento</TD>\r\n          <TD colspan=4 class=BoletoTituloEsquerdo>Número do Documento</TD>\r\n          <TD class=BoletoTituloEsquerdo>Espécie</TD>\r\n          <TD class=BoletoTituloEsquerdo>Aceite</TD>\r\n          <TD class=BoletoTituloEsquerdo>Data do Processamento</TD>\r\n          <TD class=BoletoTituloDireito>Nosso Número</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=3 class=BoletoValorEsquerdo>DataDoDoc</TD>\r\n          <TD colspan=4 class=BoletoValorEsquerdo>NumeroDodoc</TD>\r\n          <TD class=BoletoValorEsquerdo>RC</TD>\r\n          <TD class=BoletoValorEsquerdo>N</TD>\r\n          <TD class=BoletoValorEsquerdo>DataDoProces</TD>\r\n          <TD class=BoletoValorDireito>NossoNumero</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=3 class=BoletoTituloEsquerdo>Uso do Banco</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Carteira</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Moeda</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Quantidade</TD>\r\n          <TD class=BoletoTituloEsquerdo>(x) Valor</TD>\r\n          <TD class=BoletoTituloDireito>(=) Valor do Documento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=3 class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>SR</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>R$</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD class=BoletoValorDireito>ValorDocumento</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=10 class=BoletoTituloEsquerdo>Instruco</TD>\r\n          <TD class=BoletoTituloDireito>(-) Desconto</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 rowspan=9 class=BoletoValorEsquerdo style='text-align: left; vertical-align:top; padding-left : 0.1cm'>Instrucoes</TD>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(-) Outras Deduções/Abatimento</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(+) Mora/Multa/Juros</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(+) Outros Acréscimos</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(=) Valor Cobrado</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>                \r\n        </TABLE>\r\n\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tela-grid\">\r\n\r\n <div class=\"cpf-box\">\r\n    <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n    <p>Quer negociar com a Claro? <br> Inicie aqui uma consulta sem custo!  </p>\r\n        <div class=\"form-group\"> \r\n            <input type=\"text\" [textMask]=\"mask()\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu CPF ou CNPJ\" [(ngModel)]=\"cpf_cnpj\" (input)=\"cleanAlertsAndDisclaimer()\" (keydown.backspace)=\"backspacePress($event)\" (keydown.enter)=\"valida()\">\r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"valida()\">Verificar</button>            \r\n        <div class=\"input_error\">\r\n            <p *ngIf=\"cpf_inv\">CPF inválido.</p>\r\n            <p *ngIf=\"cnpj_inv\">CNPJ inválido.</p>\r\n            <p *ngIf=\"input_inv\">Por favor, informe um CPF ou CNPJ.</p>\r\n            <p *ngIf=\"verificando\">Aguarde, estamos verificando. . .</p>\r\n            <p *ngIf=\"cpf_sem_debitos\">O CPF informado não tem débitos ou acordos.</p>\r\n            <p *ngIf=\"cnpj_sem_debitos\">O CNPJ informado não tem débitos ou acordos.</p>\r\n        </div>        \r\n    </div> \r\n </div>\r\n\r\n    <a class=\"fixed-bottom auto_inicio\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\" *ngIf=\"disclaimer\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n\r\n</div>\r\n"

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

module.exports = "<header *ngIf=\"showHeader\">\r\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\r\n</header>\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n  \r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroMovel.Divida.DadosDivida.length && mostrarAbas[0]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"getAllOpcoesClaroMovel()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Móvel</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px no-margimBottom-mobile\">Opções de Parcelamento:</p>\r\n        <div class=\"col-xs-12 col-sm-6 wrap-opcao-btn\" [class.col-lg-4]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary\" [class.btn-smaller]=\"opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento.length > 4\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoMovel(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 wrap-opcao-btn\"> \r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroMovel.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind, 0)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroTv.Divida.DadosDivida.length && mostrarAbas[1]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"getAllOpcoesClaroTv()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro TV</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-4 wrap-opcao-btn\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoTv(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-4 wrap-opcao-btn\"> <!--  -->\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroTv.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind, 0)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n \r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroInternet.Divida.DadosDivida.length && mostrarAbas[2]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"getAllOpcoesClaroInternet()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Internet</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-4 wrap-opcao-btn\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoInternet(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-4 wrap-opcao-btn\"> \r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroInternet.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind, 0)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>  \r\n\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroFixo.Divida.DadosDivida.length && mostrarAbas[3]\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"getAllOpcoesClaroFixo()\" [class.mobile-hidden]=\"!showHeader\">\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Fixo</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n\r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento && opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo]\">\r\n        <p class=\"w-100 pl-15px\">Opções de Parcelamento:</p>\r\n        <div class=\"col-4 wrap-opcao-btn\" *ngFor=\"let opc of opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParceladoMovel(ind, apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcaoFixo(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-4 wrap-opcao-btn\"> \r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n        <div class=\"loader-wrap\">\r\n          <div class=\"loader\"></div>\r\n        </div>  \r\n      </div>\r\n      \r\n    <div [hidden]=\"opcoesParcelamento || prazoFinalizacao || loader\" class=\"row\"> \r\n     <div class=\"col-xl-4\" *ngFor=\"let div of apiRestService.dividasClaroFixo.Divida.DadosDivida; let ind = index\"> \r\n      <div class=\"metodo-pagamento up-30px up-15px-mobile\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          <span class=\"font-weight-bold\">Valor total: R$ {{ getValorTotal(div.CodigoTitulo) }} </span><br>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.length\">\r\n            <div *ngFor=\"let par of div.Parcelas.ParcelaDivida\">\r\n              Data Venc.: {{ par.Vencimento }}              \r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"div.Parcelas.ParcelaDivida.Vencimento\">\r\n              Data Venc.: {{ div.Parcelas.ParcelaDivida.Vencimento }}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarAVista(div.CodigoTitulo, getValorNegociar(div.CodigoTitulo), opcoesPg[div.CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(div.CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!parcelado[div.CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind, 0)\" *ngIf=\"parcelado[div.CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px\" *ngIf=\"parcelado[div.CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </accordion-group>\r\n  \r\n</accordion>\r\n<!--\r\n<div class=\"loader-wrap-wrap\" *ngIf=\"loader\">  \r\n    <div class=\"loader-wrap\">\r\n      <div class=\"loader\"></div>\r\n    </div>  \r\n  </div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\r\n    <div class=\"col-lg-3 fundo-paulista\">\r\n    </div>\r\n \r\n    <div class=\"back-beje col-lg-9\">\r\n                            \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \r\n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\r\n            \r\n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\r\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\r\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\r\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\r\n                        \r\n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\r\n                <h3 class=\"text-center bem-vindo\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, <span class=\"text-capitalize\">{{nome}}</span>!</h3>    \r\n                \r\n                <div class=\"row\">                    \r\n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\" *ngIf=\"this.apiRestService.dividas.Divida\">\r\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\r\n                            <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">NEGOCIE ONLINE</h5>\r\n                            <p class=\"card-text\">Clique e tenha as melhores condições para negociar com a Claro de forma rápida e prática.</p>\r\n                            \r\n                            </div>\r\n                            <p class=\"btn btn-acessar\">Acessar</p>\r\n                    </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\r\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n                    <p class=\"card-text\">Converse agora com nosso Assistente Virtual, não perca tempo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\r\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">RECEBA NOSSA LIGAÇÃO</h5>\r\n                    <p class=\"card-text\">Quer receber uma ligação de nosso agente digital? Aqui é o lugar certo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <div class=\"col-lg-3 fiz-pagamento-ok\" *ngIf=\"fizPagamentoOk\">\r\n                  <div class=\"container\">\r\n                        <span class=\"red\">Obrigada!</span><br>\r\n                        As informações de pagamento foram enviadas para a nossa central.<br>\r\n                        Caso necessário entraremos em contato no nosso número:<br> \r\n                        0800 208 8080         \r\n                </div>            \r\n        </div>\r\n\r\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\r\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">JÁ FIZ O PAGAMENTO</h5>\r\n                    <p class=\"card-text\">Já realizou o pagamento de seus débitos com a claro? Pressione o botão abaixo!</p>\r\n                        \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Informar</p>\r\n                </div>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\" *ngIf=\"this.apiRestService.dividas.Acordo\">\r\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">SEUS ACORDOS EM ANDAMENTO</h5>\r\n                    <p class=\"card-text\">Se tiver um acordo em andamento, acesse aqui para retirar a 2ª via.</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n        </div>\r\n     </div>    \r\n        <a class=\"bottom-fixed back-beje-mobile\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\" *ngIf=\"apiRestService.showDisclaimer\" [class.mobile-hidden]=\"showOpcoes || showAcordosAndamento\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n                \r\n    </div>    \r\n\r\n</div>      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prazo-finalizacao/prazo-finalizacao.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sucessoEmail\" class=\"mb-15\">\r\n    <h1>E-mail enviado com sucesso!</h1>\r\n</div>\r\n  \r\n<div *ngIf=\"porEmail\">\r\n    <p class=\"text-center\">Para qual e-mail enviar seu boleto?</p>\r\n    <app-input-email (clickEnviar)=\"enviarEmail()\" (clickVoltar)=\"voltarEmail()\"></app-input-email>\r\n</div>\r\n  \r\n<div *ngIf=\"sucessoSms\" class=\"mb-15\">\r\n  <h1>SMS enviado com sucesso!</h1>\r\n</div>\r\n\r\n<div *ngIf=\"porSms\">\r\n  <p class=\"text-center\">Para qual número enviar o SMS?</p>\r\n  <app-input-tel (clickEnviar)=\"enviarSms()\" (clickVoltar)=\"voltarSms()\"></app-input-tel>\r\n</div>\r\n\r\n<div *ngIf=\"loader\">\r\n  <p>Aguarde . . .</p>\r\n  <div class=\"loader-wrap\">  \r\n    <div class=\"loader\"></div>\r\n  </div>\r\n</div>  \r\n\r\n<div *ngIf=\"sucesso\">\r\n  <h4 class=\"font-weight-bold\"> O Acordo foi realizado com sucesso!</h4>\r\n  <br>\r\n  <h4>Como deseja receber seu boleto?</h4>\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"pegarEmail()\">\r\n          Por e-mail\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"pegarTelefone()\">\r\n          Por SMS\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-mudar-parce\" (click)=\"abrirBoleto()\">\r\n          Ver dados do boleto\r\n        </button>\r\n      </div>            \r\n    </div>\r\n    <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n</div>\r\n\r\n<div *ngIf=\"erro\">\r\n  <h1> Houve um erro. Tente novamente, por favor.</h1>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"fim\">\r\n  <p class=\"detalhes-titulo\">Detalhes do acordo:</p>\r\n  <p>Data do {{ primeiraParcelado()? 'primeiro':'' }} pagamento: {{ dataPagamento.toLocaleString().split(',')[0] }}</p>\r\n  <p>Valor {{ primeiraParcelado()? 'da primeira parcela':'' }}: R$ {{ primeiraParcelado()? primeiraParcelado():valorAVista() }}</p>\r\n  <p *ngIf=\"vezesParcelado()\">Demais parcelas: {{ vezesParcelado() }} x R$ {{ outrasParcelado() }}</p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-yellow\" (click)=\"gravaAcordo()\"> <!-- sucesso = true; this.fim = false;  -->\r\n        Confirmar acordo\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"mudarData()\">\r\n        Mudar data\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <!--<button type=\"button\" class=\"btn btn-primary btn-mudar-parce\" (click)=\"voltar()\">\r\n        Mudar parcelamento\r\n      </button>-->\r\n    </div>            \r\n  </div>\r\n</div>\r\n\r\n<div class=\"opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n    <p class=\"escolha-data\">Data para o pagamento:</p>\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <input type=\"text\"\r\n        placeholder=\"Clique para escolher uma data\"\r\n        class=\"form-control\"\r\n        bsDatepicker [minDate]=\"minDate\"\r\n        [maxDate]=\"maxDate\"  [(ngModel)]=\"dataPagamento\">\r\n    </div>  \r\n    <div class=\"col-sm-3\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"showFinalizacao()\">\r\n          Realizar acordo\r\n      </button>      \r\n    </div>\r\n    <div class=\"col-sm-3\">      \r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar_data()\">\r\n        Voltar\r\n      </button>\r\n    </div>    \r\n  </div>\r\n</div>  "

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

module.exports = "button {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.produto-heading {\r\n    line-height: 44px;\r\n    font-size: 22px;\r\n    margin-left: 10px;    \r\n    }\r\n\r\n.logo {\r\n        width: 120px;\r\n        display: block;\r\n        margin: 10px auto;\r\n    }\r\n\r\n.produto-img {\r\n        height: 45px;\r\n        float: left;\r\n    }\r\n\r\n.btn-accordion {\r\n        line-height: 50px;\r\n        font-size: 20px;\r\n    }\r\n\r\n.acc-body {\r\n        position: relative;\r\n        top: -15px;\r\n    }\r\n\r\n.bottom-parcela {\r\n      margin-bottom: 0px;            \r\n    }\r\n\r\n@media (max-width: 768px) {\r\n        .no-padd-left {\r\n            padding-left: 0;\r\n        }\r\n\r\n        .no-padd-right {\r\n            padding-right: 0;\r\n        }\r\n\r\n        .bottom-parcela {\r\n            margin-bottom: 40px;            \r\n          }\r\n        \r\n        .btn-accordion {\r\n            font-size: 15px;\r\n        }    \r\n\r\n        .produto-img {\r\n            height: 25px;\r\n        }    \r\n\r\n        .img-produto {\r\n            line-height: 25px;\r\n        }\r\n\r\n        .btn-linha {\r\n            line-height: 22px;\r\n        }\r\n\r\n        .acc-body {\r\n            font-size: 15px;\r\n        }\r\n\r\n        .valor-mobile {\r\n            font-size: 14px;\r\n            padding-left: 0;\r\n        }\r\n\r\n        .loader-wrap {\r\n            position: relative;\r\n            left: 8px;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n\r\n        .titulo-mobile {\r\n            font-weight: bold;\r\n            font-size: large;\r\n        }\r\n\r\n        .padd-mobile {\r\n            padding: 2px;\r\n        }\r\n    \r\n    }    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCOztBQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0FBR0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztBQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOztBQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztBQUVBO1FBQ0k7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksbUJBQW1CO1VBQ3JCOztRQUVGO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZUFBZTtZQUNmLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsU0FBUztZQUNULFdBQVc7WUFDWCxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7O0lBRUoiLCJmaWxlIjoic3JjL2FwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHV0by1oZWFkaW5nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjYy1ib2R5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5uby1wYWRkLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tcGFkZC1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAuaW1nLXByb2R1dG8ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tbGluaGEge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY2MtYm9keSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52YWxvci1tb2JpbGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2FkZXItd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdHVsby1tb2JpbGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWRkLW1vYmlsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0gICAgIl19 */"

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
                //window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor + "&cliente=" + this.apiRestService.getNome());
                this.router.navigate(['/boleto'], { queryParams: { data: bol.BoletoAcordo.DataVencimento,
                        linha: bol.BoletoAcordo.LinhaDigitavel,
                        valor: bol.BoletoAcordo.Valor,
                        cliente: this.apiRestService.devedor.Devedores.Devedor.Nome,
                        contrato: numeroTitulo
                    } });
            }
            else {
                this.erroBoleto = true;
            }
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
        this.opcoesPg = {};
        this.urlDadosDevedor = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/devedores'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        //private urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        this.urlDadosDivida = 'https://my-json-server.typicode.com/GuilhermeHobbs/devedor/divida'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';  
        //private urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
        this.urlOpcoesPagamento = 'https://my-json-server.typicode.com/GuilhermeHobbs/opcoes/opcoes'; //'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
        //private urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php'
        this.urlDadosAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/dadosAcordo/acordo'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        //private urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        this.urlGravaAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/gravaAcordo/gravar';
        //private urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
        this.urlBoletoAcordo = 'https://my-json-server.typicode.com/GuilhermeHobbs/boletoAcordo/boleto'; // 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        //private urlBoletoAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        //private urlEnviaSms = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_smsenvio.php';
        this.urlEnviaSms = 'https://my-json-server.typicode.com/GuilhermeHobbs/smsEnvio/sms';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    notificarMotor(id) {
        /* const params = new HttpParams().set('cpf', this.cpfCnpj)
                                        .set('datahora', (new Date) as any)
                                        .set('id', id)
                                        .set('Operacao', 'Claro'); */
        //this.http.post("https://fulltime.free.beeceptor.com", params, this.httpOptions).subscribe();
    }
    temDividasouAcordo(cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
        return this.getDadosDevedor(cpfCnpj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])((devedor) => {
            this.devedor = devedor;
            console.log(devedor);
            return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((divida) => {
                console.log(divida);
                this.dividas = divida;
                if (divida.Acordo)
                    this.acordos = divida.Acordo.DadosAcordo;
                return (divida.Acordo || divida.Divida);
            }));
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
        return this.http.get(this.urlDadosDevedor); //, cpfCnpjParam, this.httpOptions);
    }
    getDadosDivida(cpfCnpj, codDevedor) {
        const cpfDevedorParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('cpf', cpfCnpj)
            .set('codigodevedor', codDevedor);
        return this.http.get(this.urlDadosDivida); //,cpfDevedorParam, this.httpOptions);
    }
    getOpcoesPagamento(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', this.cpfCnpj);
        return this.http.get(this.urlOpcoesPagamento); //, cpfCnpjParam, this.httpOptions);
    }
    getDadosAcordo(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo);
        return this.http.get(this.urlDadosAcordo); //, cpfCnpjParam, this.httpOptions);
    }
    getBoletoAcordo(codAcordo, codCodigoAcordo) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigoacordo', codAcordo)
            .set('codigoparcelaacordo', codCodigoAcordo)
            .set('cpf', this.cpfCnpj);
        return this.http.get(this.urlBoletoAcordo); //, params, this.httpOptions);
    }
    enviaSms(codigobarra, vencimento, valor) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('nome', this.devedor.Devedores.Devedor.Nome.toLocaleUpperCase())
            .set('codigobarra', codigobarra)
            .set('vencimento', vencimento)
            .set('valor', valor)
            .set('numeroenvio', this.telefone);
        return this.http.get(this.urlEnviaSms); //, params, this.httpOptions);
    }
    gravaAcordo(codTitulo, cpf, codDevedor, codPlano, vencimentoPrimeira, valorPrimeira) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', cpf)
            .set('codigodevedor', codDevedor)
            .set('codigotitulo', codTitulo)
            .set('plano', codPlano)
            .set('vencimentoprimeira', vencimentoPrimeira)
            .set('valorprimeira', valorPrimeira);
        return this.http.get(this.urlGravaAcordo); //, params, this.httpOptions);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"].forRoot()
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

module.exports = "a {\r\n    /*text-decoration: none !important;*/\r\n    color: inherit;\r\n}\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 200px;\r\n    \r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 150px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .logo {\r\n        width: 35%;\r\n        margin: 3px auto;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 15px;   \r\n        height: 90px;    \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjOztJQUVkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdIQUF3RztJQUF4Ryx3R0FBd0c7QUFDNUc7O0FBR0E7SUFDSTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO1FBQ3hCLDhCQUFtQjtRQUFuQiw2QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7S0FFQztRQUNHLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hc3Npc3RlbnRlLXZpcnR1YWwvYXNzaXN0ZW50ZS12aXJ0dWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIC8qdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7Ki9cclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG4tYWNlc3NhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTMyNjIwO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSxiYWNrZ3JvdW5kIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIG1hcmdpbjogM3B4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDsgICBcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHQsIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9IFxyXG5cclxuICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9IFxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1hY2Vzc2FyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

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

module.exports = "td.BoletoCodigoBanco {font-size: 6mm; font-family: arial, verdana; font-weight : bold; \r\n    FONT-STYLE: italic; text-align: center; vertical-align: bottom;  \r\n    border-bottom: 0.15mm solid #000000; border-right: 0.15mm solid #000000;\r\n    padding-bottom : 1mm}\r\ntd.BoletoLogo { border-bottom: 0.15mm solid #000000;  border-right: 0.15mm solid #000000;\r\ntext-align: center; height: 10mm}\r\ntd.BoletoLinhaDigitavel {font-size: 4 mm; font-family: arial, verdana; font-weight : bold; \r\n       text-align: center; vertical-align: bottom; \r\n        border-bottom: 0.15mm solid #000000; padding-bottom : 1mm; }\r\ntd.BoletoTituloEsquerdo{font-size: 0.2cm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      border-right: 0.15mm solid #000000; text-align: left}\r\ntd.BoletoTituloDireito{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      text-align: left}\r\ntd.BoletoValorEsquerdo{font-size: 3mm; font-family: arial, verdana; text-align: center;\r\n      border-right: 0.15mm solid #000000; font-weight: bold;\r\n      border-bottom: 0.15mm solid #000000; padding-top: 0.5mm}\r\ntd.BoletoValorDireito{font-size: 3mm; font-family: arial, verdana; text-align:right; \r\n    padding-right: 3mm; padding-top: 0.8mm; border-bottom: 0.15mm solid #000000;\r\n     font-weight: bold;}\r\ntd.BoletoTituloSacado{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: top; padding-top : 0.15mm; text-align: left}\r\ntd.BoletoValorSacado{font-size: 3mm; font-family: arial, verdana;  font-weight: bold; \r\n  text-align : left}\r\ntd.BoletoTituloSacador{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: bottom; padding-bottom : 0.8mm;\r\n      border-bottom: 0.15mm solid #000000}\r\ntd.BoletoValorSacador{font-size: 3mm; font-family: arial, verdana; vertical-align: bottom; \r\n  padding-bottom : 0.15mm; border-bottom: 0.15mm solid #000000;\r\n   font-weight: bold; text-align: left}\r\ntd.BoletoPontilhado{border-top: 0.3mm dashed #000000; font-size: 1mm}\r\nul.BoletoInstrucoes{font-size : 3mm; font-family : verdana, arial}\r\n@media (max-width: 768px) {\r\n      .Boleto {\r\n            width: 400px;\r\n      }\r\n\r\n      td.BoletoLinhaDigitavel, td.BoletoValorDireito {\r\n            text-align: left;\r\n      }\r\n}      \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9sZXRvL2JvbGV0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO0lBQ2pGLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQjtJQUM5RCxtQ0FBbUMsRUFBRSxrQ0FBa0M7SUFDdkUsb0JBQW9CO0FBQ3hCLGdCQUFnQixtQ0FBbUMsR0FBRyxrQ0FBa0M7QUFDeEYsa0JBQWtCLEVBQUUsWUFBWTtBQUNoQyx5QkFBeUIsZUFBZSxFQUFFLDJCQUEyQixFQUFFLGtCQUFrQjtPQUNsRixrQkFBa0IsRUFBRSxzQkFBc0I7UUFDekMsbUNBQW1DLEVBQUUsb0JBQW9CLEVBQUU7QUFDbkUsd0JBQXdCLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLHFCQUFxQjtNQUN0RixrQ0FBa0MsRUFBRSxnQkFBZ0I7QUFDMUQsdUJBQXVCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUI7TUFDbkYsZ0JBQWdCO0FBQ3RCLHVCQUF1QixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO01BQ2hGLGtDQUFrQyxFQUFFLGlCQUFpQjtNQUNyRCxtQ0FBbUMsRUFBRSxrQkFBa0I7QUFDN0Qsc0JBQXNCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxnQkFBZ0I7SUFDL0Usa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsbUNBQW1DO0tBQzFFLGlCQUFpQixDQUFDO0FBQ3ZCLHNCQUFzQixjQUFjLEVBQUUsMkJBQTJCLEVBQUUscUJBQXFCO01BQ2xGLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQjtBQUNqRSxxQkFBcUIsY0FBYyxFQUFFLDJCQUEyQixHQUFHLGlCQUFpQjtFQUNsRixpQkFBaUI7QUFDbkIsdUJBQXVCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUI7TUFDbkYsc0JBQXNCLEVBQUUsc0JBQXNCO01BQzlDLG1DQUFtQztBQUN6QyxzQkFBc0IsY0FBYyxFQUFFLDJCQUEyQixFQUFFLHNCQUFzQjtFQUN2Rix1QkFBdUIsRUFBRSxtQ0FBbUM7R0FDM0QsaUJBQWlCLEVBQUUsZ0JBQWdCO0FBQ3RDLG9CQUFvQixnQ0FBZ0MsRUFBRSxjQUFjO0FBQ3BFLG9CQUFvQixlQUFlLEVBQUUsNEJBQTRCO0FBRWpFO01BQ007WUFDTSxZQUFZO01BQ2xCOztNQUVBO1lBQ00sZ0JBQWdCO01BQ3RCO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9ib2xldG8vYm9sZXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZC5Cb2xldG9Db2RpZ29CYW5jbyB7Zm9udC1zaXplOiA2bW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgZm9udC13ZWlnaHQgOiBib2xkOyBcclxuICAgIEZPTlQtU1RZTEU6IGl0YWxpYzsgdGV4dC1hbGlnbjogY2VudGVyOyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyAgXHJcbiAgICBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDsgYm9yZGVyLXJpZ2h0OiAwLjE1bW0gc29saWQgIzAwMDAwMDtcclxuICAgIHBhZGRpbmctYm90dG9tIDogMW1tfVxyXG50ZC5Cb2xldG9Mb2dvIHsgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7ICBib3JkZXItcmlnaHQ6IDAuMTVtbSBzb2xpZCAjMDAwMDAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMTBtbX1cdFxyXG50ZC5Cb2xldG9MaW5oYURpZ2l0YXZlbCB7Zm9udC1zaXplOiA0IG1tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IGZvbnQtd2VpZ2h0IDogYm9sZDsgXHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IHZlcnRpY2FsLWFsaWduOiBib3R0b207IFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyBwYWRkaW5nLWJvdHRvbSA6IDFtbTsgfVxyXG50ZC5Cb2xldG9UaXR1bG9Fc3F1ZXJkb3tmb250LXNpemU6IDAuMmNtOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHBhZGRpbmctbGVmdCA6IDAuMTVtbTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjE1bW0gc29saWQgIzAwMDAwMDsgdGV4dC1hbGlnbjogbGVmdH1cclxudGQuQm9sZXRvVGl0dWxvRGlyZWl0b3tmb250LXNpemU6IDJtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBwYWRkaW5nLWxlZnQgOiAwLjE1bW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnR9XHJcbnRkLkJvbGV0b1ZhbG9yRXNxdWVyZG97Zm9udC1zaXplOiAzbW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7IHBhZGRpbmctdG9wOiAwLjVtbX1cclxudGQuQm9sZXRvVmFsb3JEaXJlaXRve2ZvbnQtc2l6ZTogM21tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHRleHQtYWxpZ246cmlnaHQ7IFxyXG4gICAgcGFkZGluZy1yaWdodDogM21tOyBwYWRkaW5nLXRvcDogMC44bW07IGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO31cclxudGQuQm9sZXRvVGl0dWxvU2FjYWRve2ZvbnQtc2l6ZTogMm1tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHBhZGRpbmctbGVmdCA6IDAuMTVtbTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDsgcGFkZGluZy10b3AgOiAwLjE1bW07IHRleHQtYWxpZ246IGxlZnR9XHJcbnRkLkJvbGV0b1ZhbG9yU2FjYWRve2ZvbnQtc2l6ZTogM21tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7ICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgdGV4dC1hbGlnbiA6IGxlZnR9XHJcbnRkLkJvbGV0b1RpdHVsb1NhY2Fkb3J7Zm9udC1zaXplOiAybW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgcGFkZGluZy1sZWZ0IDogMC4xNW1tO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyBwYWRkaW5nLWJvdHRvbSA6IDAuOG1tO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMH1cclxudGQuQm9sZXRvVmFsb3JTYWNhZG9ye2ZvbnQtc2l6ZTogM21tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHZlcnRpY2FsLWFsaWduOiBib3R0b207IFxyXG4gIHBhZGRpbmctYm90dG9tIDogMC4xNW1tOyBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGxlZnR9XHRcclxudGQuQm9sZXRvUG9udGlsaGFkb3tib3JkZXItdG9wOiAwLjNtbSBkYXNoZWQgIzAwMDAwMDsgZm9udC1zaXplOiAxbW19XHJcbnVsLkJvbGV0b0luc3RydWNvZXN7Zm9udC1zaXplIDogM21tOyBmb250LWZhbWlseSA6IHZlcmRhbmEsIGFyaWFsfVx0ICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAuQm9sZXRvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZC5Cb2xldG9MaW5oYURpZ2l0YXZlbCwgdGQuQm9sZXRvVmFsb3JEaXJlaXRvIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG59ICAgICAgIl19 */"

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




let BoletoComponent = class BoletoComponent {
    constructor(modalService, route) {
        this.modalService = modalService;
        this.linha = route.snapshot.queryParams.linha;
        this.valor = route.snapshot.queryParams.valor;
        this.data = route.snapshot.queryParams.data;
        this.cliente = route.snapshot.queryParams.cliente;
        this.contrato = route.snapshot.queryParams.contrato;
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

module.exports = ".form-group {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.tela-grid {\r\n    background: url(/assets/img/back.jpg) 100% 50% no-repeat;\r\n    height: 100%;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n.cpf-box {\r\n    height: 50%;\r\n    \r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; bottom: 0; right: 90px; \r\n    /*\r\n    position: absolute;\r\n  right: 20px; \r\n  margin: auto; */\r\n  font-family: SourceSansPro;\r\n  font-weight: 600;\r\n  font-size: 19px;\r\n}\r\n\r\n.cpf-box .logo {\r\n    display: block;\r\n    max-width: 400px;\r\n    margin: 0px auto 30px;\r\n}\r\n\r\n.cpf-box p {\r\n    color: aliceblue;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.cpf-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.cpf-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;    \r\n}\r\n\r\n.auto_inicio {\r\n    text-align: right;\r\n    color: white;\r\n    bottom: 5px;\r\n    right: 10px;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .cpf-box {\r\n     position: static;\r\n     padding: 10px;\r\n     height: 100%;   \r\n    }\r\n    \r\n    .cpf-box .logo {\r\n        width: 60%;\r\n    }\r\n    .cpf-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3BmLWNucGotYm94L2NwZi1jbnBqLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXO0lBQzlCOzs7aUJBR2E7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7RUFDYjs7QUFFRjtJQUNJO0tBQ0MsZ0JBQWdCO0tBQ2hCLGFBQWE7S0FDYixZQUFZO0lBQ2I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NwZi1jbnBqLWJveC9jcGYtY25wai1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udGVsYS1ncmlkIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrLmpwZykgMTAwJSA1MCUgbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNwZi1ib3gge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogOTBweDsgXHJcbiAgICAvKlxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4OyBcclxuICBtYXJnaW46IGF1dG87ICovXHJcbiAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm87XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5jcGYtYm94IC5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMzBweDtcclxufVxyXG5cclxuLmNwZi1ib3ggcCB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jcGYtYm94IGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyp3aWR0aDogNzAlOyovXHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi5jcGYtYm94IGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlucHV0X2Vycm9yIHtcclxuICAgIGNsZWFyOiBib3RoOyAgICBcclxufVxyXG5cclxuLmF1dG9faW5pY2lvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNwZi1ib3gge1xyXG4gICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgICBoZWlnaHQ6IDEwMCU7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jcGYtYm94IC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLmNwZi1ib3ggYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9ICAgIFxyXG59ICAgICJdfQ== */"

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
    cleanAlertsAndDisclaimer() {
        this.cpf_inv = false;
        this.cnpj_inv = false;
        this.cpf_sem_debitos = false;
        this.cnpj_sem_debitos = false;
        this.input_inv = false;
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
                        if (res)
                            this.router.navigateByUrl('/opcoes-routlet');
                        else
                            this.cpf_sem_debitos = true;
                    });
                }
                else
                    this.cpf_inv = true;
                break;
            }
            case 14: {
                if (this.testaCNPJ(cpfCnpj)) {
                    //      this.verificando = true; 
                    //  this.apiRestService.temDividas(cpfCnpj).subscribe(div => {
                    //  this.verificando = false;
                    //if (div) this.router.navigateByUrl('/opcoes-routlet');
                    //   else this.cnpj_sem_debitos = true;
                    //  });
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

module.exports = ".form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.email-box {\r\n    margin: 25px auto;\r\n    width: 45%;\r\n}\r\n\r\n.email-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.email-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.email-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .email-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .email-box .logo {\r\n        width: 60%;\r\n    }\r\n    .email-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtZW1haWwvaW5wdXQtZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0tBQ0MsWUFBWTtLQUNaLFdBQVc7SUFDWjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQtZW1haWwvaW5wdXQtZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmVtYWlsLWJveCB7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5lbWFpbC1ib3ggcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmVtYWlsLWJveCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8qd2lkdGg6IDcwJTsqL1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4uZW1haWwtYm94IGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlucHV0X2Vycm9yIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmVtYWlsLWJveCB7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZW1haWwtYm94IC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLmVtYWlsLWJveCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH0gICAgXHJcbn0gICAgIl19 */"

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

module.exports = ".form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.tel-box {\r\n    margin: 25px auto;\r\n    width: 45%;\r\n}\r\n\r\n.tel-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.tel-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.tel-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .tel-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .tel-box .logo {\r\n        width: 60%;\r\n    }\r\n    .tel-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtdGVsL2lucHV0LXRlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7S0FDQyxZQUFZO0tBQ1osV0FBVztJQUNaOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC10ZWwvaW5wdXQtdGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50ZWwtYm94IHtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLnRlbC1ib3ggcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRlbC1ib3ggaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKndpZHRoOiA3MCU7Ki9cclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLnRlbC1ib3ggYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRElOT1QtTWVkaXVtJztcclxuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaW5wdXRfZXJyb3Ige1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGVsLWJveCB7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGVsLWJveCAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC50ZWwtYm94IGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfSAgICBcclxufSAgICAiXX0= */"

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

module.exports = ".produto-heading {\r\nline-height: 44px;\r\nfont-size: 22px;\r\nmargin-left: 10px;    \r\n}\r\n\r\n.logo {\r\n    width: 120px;\r\n    display: block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.produto-img {\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    font-size: 19px;  \r\n}\r\n\r\ntable {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.opcoes-parcelamento {  \r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.opcoes-parcelamento .btn {\r\n    margin-bottom: 25px;\r\n    width: 250px;    \r\n}\r\n\r\n.metodo-pagamento {\r\n    margin-top: 25px;\r\n    border: 1px solid #007bff;\r\n    padding-bottom: 10px;\r\n    /*margin-left: 7px;*/\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.movelLabel {\r\n    display: inline-block;\r\n    margin-left: 100px;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.panel-collapse > div {\r\n    padding-top: 0 !important\r\n}\r\n\r\n.opcoes-para-parcelamento {\r\n    text-align: right;\r\n}\r\n\r\n.metodo-de-pagamento {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.btn-smaller {\r\n    width: 205px !important;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    h3 {\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .opcoes-para-parcelamento {\r\n        text-align: left;\r\n    }    \r\n\r\n    .btn {\r\n        margin-top: 10px;\r\n        font-size: 17px;    \r\n    }\r\n\r\n    .metodo-pagamento {\r\n        margin-top: 0px;\r\n        margin-bottom: 7px;\r\n        margin-left: 0;\r\n    }\r\n    \r\n    .metodo-de-pagamento {\r\n        margin-bottom: 0;\r\n        margin-top: 5px;\r\n        text-align: left;\r\n        font-size: 17px;\r\n    }\r\n\r\n    .btn-accordion {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n      \r\n    table {\r\n        margin-top: -16px;\r\n        margin-bottom: -10px;\r\n    }\r\n\r\n    .movelLabel {\r\n        display: none;\r\n    }\r\n\r\n    .opcoes-parcelamento {\r\n        width: 100%;\r\n        margin: auto;\r\n        position: relative;\r\n        top: -20px;\r\n    }\r\n\r\n    .opcoes-parcelamento .btn {\r\n        /*width: 155px;*/\r\n        display: block;\r\n        margin: 20px auto 0;\r\n        padding: 1px;\r\n        /*position: relative;\r\n        left: -20px;*/\r\n    }\r\n\r\n   /* .wrap-opcao-btn:nth-child(even) {\r\n        padding-left: 0;\r\n    }*/\r\n\r\n    \r\n}\r\n\r\n.loader-wrap-wrap {\r\n    height: 4500px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFJQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1o7cUJBQ2E7SUFDakI7O0dBRUQ7O01BRUc7OztBQUdOOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL25lZ29jaWUtb25saW5lL25lZ29jaWUtb25saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHV0by1oZWFkaW5nIHtcclxubGluZS1oZWlnaHQ6IDQ0cHg7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4ucHJvZHV0by1pbWcge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7ICBcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm9wY29lcy1wYXJjZWxhbWVudG8geyAgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0gICAgXHJcbiAgICBcclxuXHJcblxyXG4ub3Bjb2VzLXBhcmNlbGFtZW50byAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7ICAgIFxyXG59XHJcblxyXG4ubWV0b2RvLXBhZ2FtZW50byB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLyptYXJnaW4tbGVmdDogN3B4OyovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1vdmVsTGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYW5lbC1jb2xsYXBzZSA+IGRpdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5vcGNvZXMtcGFyYS1wYXJjZWxhbWVudG8ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXRvZG8tZGUtcGFnYW1lbnRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bi1zbWFsbGVyIHtcclxuICAgIHdpZHRoOiAyMDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAub3Bjb2VzLXBhcmEtcGFyY2VsYW1lbnRvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm1ldG9kby1wYWdhbWVudG8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZXRvZG8tZGUtcGFnYW1lbnRvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWFjY29yZGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb3ZlbExhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGNvZXMtcGFyY2VsYW1lbnRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm9wY29lcy1wYXJjZWxhbWVudG8gLmJ0biB7XHJcbiAgICAgICAgLyp3aWR0aDogMTU1cHg7Ki9cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAvKnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAtMjBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgLyogLndyYXAtb3BjYW8tYnRuOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfSovXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5sb2FkZXItd3JhcC13cmFwIHtcclxuICAgIGhlaWdodDogNDUwMHB4O1xyXG59XHJcblxyXG4iXX0= */"

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
        this.cd.detach();
    }
    ngOnInit() {
        if (!this.dadosDivida.length) {
            this.apiRestService.getDividas();
            if (this.apiRestService.dividas.Divida.DadosDivida.length) {
                this.dadosDivida = this.apiRestService.dividas.Divida.DadosDivida;
            }
            if (this.apiRestService.dividas.Divida.DadosDivida.CodigoDevedor) {
                this.dadosDivida.push(this.apiRestService.dividas.Divida.DadosDivida);
            }
        }
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
        if (!this.apiRestService.getAllOpcoesClaroMovel()) {
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
        }
    }
    getAllOpcoesClaroTv() {
        this.mostrarAbas = [false, true, false, false];
        if (!this.apiRestService.getAllOpcoesClaroTv()) {
            this.showHeader = false;
            this.movelLabel = true;
            if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length) {
                if (this.apiRestService.dividasClaroTv.Divida.DadosDivida.length > 2)
                    this.apiRestService.showDisclaimer = false;
                this.apiRestService.dividasClaroTv.Divida.DadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
            }
        }
    }
    getAllOpcoesClaroInternet() {
        this.mostrarAbas = [false, false, true, false];
        if (!this.apiRestService.getAllOpcoesClaroInternet()) {
            this.showHeader = false;
            this.movelLabel = true;
            this.dadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
        }
    }
    getAllOpcoesClaroFixo() {
        this.mostrarAbas = [false, false, false, true];
        if (!this.apiRestService.getAllOpcoesClaroFixo()) {
            this.showHeader = false;
            this.movelLabel = true;
            this.dadosDivida.forEach((dados) => this.setOpcoes(dados.CodigoTitulo));
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
                    console.log("this.loader =");
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
                this.parcelado[cod] = 1;
                return this.opcoesPg[cod].OpcaoPagamento.ValorCorrigido;
            }
            else if (this.opcoesPg[cod].OpcaoPagamento.length) {
                this.parcelado[cod] = 2;
                return this.opcoesPg[cod].OpcaoPagamento[0].ValorCorrigido;
            }
        }
        else
            return "";
    }
    getValorNegociar(cod) {
        if (this.opcoesPg[cod]) {
            if (this.opcoesPg[cod].OpcaoPagamento.ValorNegociar) {
                this.parcelado[cod] = 1;
                return this.opcoesPg[cod].OpcaoPagamento.ValorNegociar;
            }
            else if (this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar) {
                this.parcelado[cod] = 2;
                return this.opcoesPg[cod].OpcaoPagamento[0].ValorNegociar;
            }
        }
        else
            return "";
    }
    getOpcaoFixo(ind) {
        return this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroFixo.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
    }
    getOpcaoTv(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
    }
    getOpcaoMovel(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroMovel.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
    }
    getOpcaoInternet(ind) {
        /*console.log("this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo=");
        console.log(this.apiRestService.dividasClaroTv.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo);
        console.log("this.opcoesPg=");
        console.log(this.opcoesPg);
        console.log("ind=");
        console.log(ind);*/
        return this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.apiRestService.dividasClaroInternet.Divida.DadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
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

module.exports = "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.back-beje {\r\n    background: #f8f8f8;\r\n}\r\n\r\n/* .back-red {\r\n    height: 100%;\r\n    background: url(/assets/img/back-red.png) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 185px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14.5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 100px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    max-width: 320px;\r\n    margin: 15px auto;\r\n  }\r\n\r\n.fundo-paulista {\r\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\r\n    background-size: cover;\r\n    height: inherit;\r\n}\r\n\r\n.link-voltar {\r\n        font-size: 20px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.bottom-fixed {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        margin-bottom: 0px;\r\n        font-size: 18px;\r\n        padding-right: 17px;\r\n        padding-left: 17px;\r\n        }\r\n\r\n.fiz-pagamento-ok {\r\n        margin-top: 30px;\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .fiz-pagamento-ok {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bottom-fixed {\r\n        font-size: 14px;\r\n        bottom: 26px;        \r\n    }\r\n    \r\n    .logo {\r\n        width: 35%;\r\n        margin: 6px auto 3px;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 8px;  \r\n        height: 90px;     \r\n    }\r\n\r\n    .card-title {\r\n        font-size: 13px;\r\n        min-width: 150px;\r\n    }\r\n\r\n    .card-text {\r\n        font-size: 12px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        height: 90px;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n   \r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n\r\n    .link-voltar {\r\n        font-size: 18px;\r\n        text-align: center;\r\n    }    \r\n\r\n    .back-beje-mobile {\r\n        background: #f8f8f8;\r\n    }\r\n    \r\n    .bem-vindo {\r\n        font-size: 15px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bjb2VzLXJvdXRsZXQvb3Bjb2VzLXJvdXRsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjOztJQUVkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdIQUF3RztJQUF4Ryx3R0FBd0c7QUFDNUc7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHVEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjs7QUFFSjtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7S0FFQztRQUNHLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1COztJQUV2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb3Bjb2VzLXJvdXRsZXQvb3Bjb2VzLXJvdXRsZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5iYWNrLWJlamUge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5cclxuLyogLmJhY2stcmVkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrLXJlZC5wbmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0gKi9cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDE4NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG59XHJcblxyXG4uYnRuLWFjZXNzYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UzMjYyMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSksYmFja2dyb3VuZCAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICB9XHJcblxyXG4gIC5mdW5kby1wYXVsaXN0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9yZWNvcnRlX3BoaXhyLmpwZ1wiKSBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4gICAgLmxpbmstdm9sdGFyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tZml4ZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAuZml6LXBhZ2FtZW50by1vayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH0gICAgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAuZml6LXBhZ2FtZW50by1vayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLWZpeGVkIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm90dG9tOiAyNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IGF1dG8gM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDsgIFxyXG4gICAgICAgIGhlaWdodDogOTBweDsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9IFxyXG5cclxuICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAuYnRuLWFjZXNzYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmstdm9sdGFyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAuYmFjay1iZWplLW1vYmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJlbS12aW5kbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"

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
        this.apiRestService.notificarMotor('1');
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

module.exports = ".btn {\r\n    width: 100%;\r\n    font-size: 19px;\r\n    margin-bottom: 20px;  \r\n}\r\n\r\n.btn-yellow {\r\n    background: #ffbc4a;\r\n    color: white;\r\n}\r\n\r\n.escolha-data {\r\n    text-align: left;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.detalhes-titulo {\r\n    font-weight: bold;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n \r\n    .btn {\r\n        margin-bottom: 0px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .escolha-data {\r\n        text-align: left;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .detalhes-titulo {\r\n        margin-bottom: 0;        \r\n    }\r\n    \r\n    .btn-mudar-parce {\r\n        font-size: 15px;\r\n    }\r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhem8tZmluYWxpemFjYW8vcHJhem8tZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcmF6by1maW5hbGl6YWNhby9wcmF6by1maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICBcclxufVxyXG5cclxuLmJ0bi15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzY29saGEtZGF0YSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGV0YWxoZXMtdGl0dWxvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzY29saGEtZGF0YSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhbGhlcy10aXR1bG8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1tdWRhci1wYXJjZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59ICAgICJdfQ== */"

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
        this.localeService.use('pt-br');
        this.minDate = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 10);
    }
    ngOnInit() {
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
        if (this.apiRestService.parcelas.aVista)
            return this.apiRestService.parcelas.aVista;
    }
    primeiraParcelado() {
        if (this.apiRestService.parcelas.primeira)
            return this.apiRestService.parcelas.primeira;
    }
    vezesParcelado() {
        console.log(this.apiRestService.parcelas);
        if (this.apiRestService.parcelas.vezes)
            return this.apiRestService.parcelas.vezes;
    }
    outrasParcelado() {
        if (this.apiRestService.parcelas.outrasParcelas)
            return this.apiRestService.parcelas.outrasParcelas;
    }
    abrirBoleto() {
        let codigoParcelaAcordo;
        let numeroTitulo;
        this.loadingBoleto = true;
        this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe(acc => {
            console.log("acc=");
            console.log(acc);
            if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
            else
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
            numeroTitulo = acc.Acordo.DadosAcordo.NumeroTitulo.split('.')[0];
            this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                console.log(bol);
                this.loadingBoleto = false;
                if (bol.BoletoAcordo) { ///////////////////////////////////////////////////////////////////
                    //window.open ("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor, "_self");
                    this.router.navigate(['/boleto'], { queryParams: { data: bol.BoletoAcordo.DataVencimento, linha: bol.BoletoAcordo.LinhaDigitavel, valor: bol.BoletoAcordo.Valor, cliente: this.apiRestService.devedor.Devedores.Devedor.Nome, contrato: numeroTitulo } });
                }
                else {
                    this.erroBoleto = true;
                }
            });
        });
    }
    gravaAcordo() {
        this.loader = true;
        this.fim = false;
        if (this.apiRestService.parcelas.aVista) {
            this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().split(',')[0], this.apiRestService.parcelas.aVista).subscribe(res => {
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
            this.apiRestService.gravaAcordo(this.apiRestService.codTitulo, this.apiRestService.cpfCnpj, this.apiRestService.devedor.Devedores.Devedor.CodigoDevedor, this.apiRestService.plano, this.dataPagamento.toLocaleString().split(',')[0], this.apiRestService.parcelas.primeira).subscribe(res => {
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
        this.apiRestService.enviaSms(this.boleto.BoletoAcordo.LinhaDigitavel, this.boleto.BoletoAcordo.DataVencimento, this.boleto.BoletoAcordo.Valor).subscribe(res => {
            this.sucessoSms = true;
            console.log("RES SMS=");
            console.log(res);
        });
    }
    pegarTelefone() {
        this.sucesso = false;
        let codigoParcelaAcordo;
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
    pegarEmail() {
        this.porEmail = true;
        this.sucesso = false;
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

module.exports = ".tel-box {\r\n    margin: 50px auto;\r\n    width: 75%;\r\n}\r\n\r\n.tel-box p {\r\n    text-align: center;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.tel-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.tel-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .tel-box {\r\n     padding: 5px;\r\n     width: 100%;   \r\n    }\r\n    \r\n    .tel-box .logo {\r\n        width: 60%;\r\n    }\r\n    .tel-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWJhLW5vc3NhLWxpZ2FjYW8vcmVjZWJhLW5vc3NhLWxpZ2FjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0tBQ0MsWUFBWTtLQUNaLFdBQVc7SUFDWjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVjZWJhLW5vc3NhLWxpZ2FjYW8vcmVjZWJhLW5vc3NhLWxpZ2FjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWwtYm94IHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnRlbC1ib3ggcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRlbC1ib3ggaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKndpZHRoOiA3MCU7Ki9cclxuICAgIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLnRlbC1ib3ggYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRElOT1QtTWVkaXVtJztcclxuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaW5wdXRfZXJyb3Ige1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGVsLWJveCB7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGVsLWJveCAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC50ZWwtYm94IGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfSAgICBcclxufSAgICAiXX0= */"

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