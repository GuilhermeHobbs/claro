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

module.exports = "<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n   \r\n    <accordion-group *ngFor=\"let acordo of acordos\">\r\n        <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n         <div class=\"row\">\r\n          <div class=\"col-12 col-sm-2 img-produto\">\r\n             <img [src]=\"getIcon(acordo)\" class=\"produto-img\">  \r\n             <p>{{ acordo.NumeroTitulo.split(' ')[1] }}</p>\r\n          </div>  \r\n            <div class=\"col-sm-3 col-4 btn-linha no-padd-left no-padd-right\">  \r\n                Data: {{ acordo.DataAcordo }}\r\n            </div>              \r\n          <div class=\"col-5 btn-linha\">\r\n              Status: {{ acordo.StatusAcordo }}\r\n          </div>\r\n          <div class=\"col-sm-2 col-3 btn-linha\">\r\n              Filial: {{ acordo.FilialAcordo }}\r\n          </div>\r\n        </div>\r\n        </button>     \r\n        <div class=\"acc-body\">\r\n         <p class=\"font-weight-bold\">Parcelas</p>\r\n          <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.length\">\r\n            <div *ngFor=\"let par of acordo.ParcelasAcordo.ParcelaAcordo; let ind = index\" class=\"row bottom-parcela\">\r\n                    <div class=\"col-3 no-padd-left no-padd-right\">\r\n                        Data: {{ par.DataVencimento }}\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        Status: {{ par.StatusParcelaAcordo }}\r\n                    </div>\r\n                    <div class=\"col-2 valor-mobile\">\r\n                        {{ par.ValorParcela }}\r\n                    </div>\r\n                    <div class=\"col-2 no-padd-left\">\r\n                        <a type=\"button\" class=\"btn btn-primary\" (click)=\"segunda_via(acordo.CodigoAcordo, par.CodigoParcelaAcordo, ind)\">\r\n                            Segunda via do boleto        \r\n                        </a>\r\n                        <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                        <div class=\"loader-wrap\">\r\n                            <div class=\"loader\" *ngIf=\"loadingBoleto[ind]\"></div>\r\n                        </div>    \r\n                    </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo\" class=\"row\">\r\n                    <div class=\"col-2\">\r\n                            Data: {{ acordo.ParcelasAcordo.ParcelaAcordo.DataVencimento }}\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            Status: {{ acordo.ParcelasAcordo.ParcelaAcordo.StatusParcelaAcordo }}\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                            Valor: {{ acordo.ParcelasAcordo.ParcelaAcordo.ValorParcela }}\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            <a type=\"button\" class=\"btn btn-primary\" (click)=\"segunda_via(acordo.CodigoAcordo, acordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo, 0)\">\r\n                                Segunda via do boleto        \r\n                            </a>                          \r\n                            <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>  \r\n                        </div>\r\n                        <div class=\"loader-wrap\">\r\n                            <div class=\"loader col-1\" *ngIf=\"loadingBoleto[0]\"></div>\r\n                        </div>    \r\n            </div>\r\n        </div>    \r\n    </accordion-group>\r\n</accordion>"

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

module.exports = "<ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Seu boleto</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <P align=center>\r\n      <TABLE cellSpacing=0 cellPadding=0 border=0 class=Boleto>\r\n        \r\n        <TR>\r\n          <TD style='width: 0.9cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 0.5cm'></TD>\r\n          <TD style='width: 1.3cm'></TD>\r\n          <TD style='width: 0.8cm'></TD>\r\n          <TD style='width: 1cm'></TD>\r\n          \r\n          <TD style='width: 1.9cm'></TD>\r\n          <TD style='width: 1.9cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n          \r\n          <TD style='width: 3.8cm'></TD>\r\n        <tr><td colspan=11>\r\n        <ul class=BoletoInstrucoes>\r\n        <li>Imprima em papel A4 ou Carta</li>\r\n        <li>Utilize margens mínimas a direita e a esquerda</li>\r\n        <li>Recorte na linha pontilhada</li>\r\n        <li>Não rasure o código de barras</li>\r\n        </ul>\r\n        </td></tr>\r\n        \r\n        <tr><td colspan=11 class=BoletoPontilhado>&nbsp;</td></tr>\r\n        <TR>\r\n          <TD colspan=4 class=BoletoLogo><img src='assets/img/logo.jpg' style=\"width: 60px; padding: 5px\"></TD>\r\n          <TD colspan=8 class=BoletoLinhaDigitavel>{{ linha }}</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoTituloEsquerdo>Nome do Cliente</TD>\r\n          <TD class=BoletoTituloDireito>Vencimento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm; text-decoration: capitalize'>{{ cliente }}</TD>\r\n          <TD class=BoletoValorDireito>{{ data }}</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=10 class=BoletoTituloEsquerdo>Cedente</TD>\r\n          <TD class=BoletoTituloDireito>Agência/Código do Cedente</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 class=BoletoValorEsquerdo style='text-align: left; padding-left : 0.1cm'>Cedente</TD>\r\n          <TD class=BoletoValorDireito>AgenciaCodDoCedente</TD>\r\n        </TR>   \r\n        <TR>\r\n          <TD colspan=3 class=BoletoTituloEsquerdo>Data do Documento</TD>\r\n          <TD colspan=4 class=BoletoTituloEsquerdo>Número do Documento</TD>\r\n          <TD class=BoletoTituloEsquerdo>Espécie</TD>\r\n          <TD class=BoletoTituloEsquerdo>Aceite</TD>\r\n          <TD class=BoletoTituloEsquerdo>Data do Processamento</TD>\r\n          <TD class=BoletoTituloDireito>Nosso Número</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=3 class=BoletoValorEsquerdo>DataDoDoc</TD>\r\n          <TD colspan=4 class=BoletoValorEsquerdo>NumeroDodoc</TD>\r\n          <TD class=BoletoValorEsquerdo>RC</TD>\r\n          <TD class=BoletoValorEsquerdo>N</TD>\r\n          <TD class=BoletoValorEsquerdo>DataDoProces</TD>\r\n          <TD class=BoletoValorDireito>NossoNumero</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=3 class=BoletoTituloEsquerdo>Uso do Banco</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Carteira</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Moeda</TD>\r\n          <TD colspan=2 class=BoletoTituloEsquerdo>Quantidade</TD>\r\n          <TD class=BoletoTituloEsquerdo>(x) Valor</TD>\r\n          <TD class=BoletoTituloDireito>(=) Valor do Documento</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=3 class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>SR</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>R$</TD>\r\n          <TD colspan=2 class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD class=BoletoValorEsquerdo>&nbsp;</TD>\r\n          <TD class=BoletoValorDireito>ValorDocumento</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD colspan=10 class=BoletoTituloEsquerdo>Instruco</TD>\r\n          <TD class=BoletoTituloDireito>(-) Desconto</TD>\r\n        </TR>\r\n        <TR>\r\n          <TD colspan=10 rowspan=9 class=BoletoValorEsquerdo style='text-align: left; vertical-align:top; padding-left : 0.1cm'>Instrucoes</TD>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(-) Outras Deduções/Abatimento</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(+) Mora/Multa/Juros</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(+) Outros Acréscimos</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoTituloDireito>(=) Valor Cobrado</TD>\r\n        </TR>  \r\n        <TR>\r\n          <TD class=BoletoValorDireito>&nbsp;</TD>\r\n        </TR>                \r\n         \r\n        \r\n       \r\n                  \r\n        </TABLE>\r\n\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tela-grid\">\r\n\r\n <div class=\"cpf-box\">\r\n    <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n    <p>Quer negociar com a Claro? <br> Inicie aqui uma consulta sem custo!  </p>\r\n        <div class=\"form-group\"> \r\n            <input type=\"text\" [textMask]=\"mask()\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu CPF ou CNPJ\" [(ngModel)]=\"cpf_cnpj\" (input)=\"cleanAlerts()\" (keydown.backspace)=\"backspacePress($event)\" (keydown.enter)=\"valida()\">\r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"valida()\">Verificar</button>            \r\n        <div class=\"input_error\">\r\n            <p *ngIf=\"cpf_inv\">CPF inválido.</p>\r\n            <p *ngIf=\"cnpj_inv\">CNPJ inválido.</p>\r\n            <p *ngIf=\"input_inv\">Por favor, informe um CPF ou CNPJ.</p>\r\n            <p *ngIf=\"verificando\">Aguarde, estamos verificando. . .</p>\r\n            <p *ngIf=\"cpf_sem_debitos\">O CPF informado não tem débitos.</p>\r\n            <p *ngIf=\"cnpj_sem_debitos\">O CNPJ informado não tem débitos.</p>\r\n        </div>        \r\n    </div> \r\n </div>\r\n\r\n    <a class=\"fixed-bottom auto_inicio\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/negocie-online/negocie-online.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"showHeader\">\r\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\r\n</header>\r\n\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n  \r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroMovel.Divida.DadosDivida.length\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"getAllOpcoesClaroMovel()\">\r\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\"><span>Claro Móvel</span> \r\n        <span class=\"movelLabel\" *ngIf=\"movelLabel\">Débitos para serem negociados</span>\r\n        <span class=\"movelLabel\" *ngIf=\"opcoesParcelamentoLabel\">Opções de parcelamento</span>\r\n      </div>        \r\n    </button>  \r\n          \r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n        <div class=\"col-md-6\" *ngFor=\"let opc of opcoesPg[this.dadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento; let ind = index\" [hidden]=\"!ind\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarParcelado(ind, dadosDivida[ind_parcelado].CodigoTitulo, opcoesPg[dadosDivida[ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].Plano)\"> \r\n              R$ {{ getOpcao(ind) }}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <button type=\"button\" class=\"btn btn-primary col-6\" (click)=\"hideOpcoesParcelamento()\">\r\n             Voltar\r\n          </button>\r\n        </div>  \r\n      </div>   \r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\" (clickVoltarAVista)=\"hideOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n    <div class=\"loader-wrap-wrap\" *ngIf=\"loaderClaroMovel\">  \r\n      <div class=\"loader-wrap\">\r\n        <div class=\"loader\"></div>\r\n      </div>  \r\n    </div>\r\n      \r\n    <div class=\"row\" [hidden]=\"opcoesParcelamento || prazoFinalizacao || loaderClaroMovel\"> \r\n      <div class=\"metodo-pagamento col-xl-4 col-lg-6\" *ngFor=\"let div of dadosDivida; let ind = index\">\r\n        <div class=\"metodo-de-pagamento\">\r\n          Valor total: R$ {{ dadosDivida[ind].Parcelas.ParcelaDivida.Valor }} <br>\r\n          Data Venc.: {{ dadosDivida[ind].Parcelas.ParcelaDivida.Vencimento }}\r\n        </div>\r\n        <div class=\"row\">  \r\n          <div class=\"col-6 pr-0\"> <!--  col-sm-3 -->\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao(); pagarAVista(dadosDivida[ind].CodigoTitulo, getValorNegociar(dadosDivida[ind].CodigoTitulo), opcoesPg[dadosDivida[ind].CodigoTitulo].OpcaoPagamento.Plano)\"> \r\n              À vista:<br> R$ {{ getValorNegociar(dadosDivida[ind].CodigoTitulo) }} \r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"!parcelado[dadosDivida[ind].CodigoTitulo]\"> \r\n                Aguarde...\r\n            </button>            \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[dadosDivida[ind].CodigoTitulo] === 2\"> \r\n              Parcelado\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary font-15px\" (click)=\"showOpcoesParcelamento(ind)\" *ngIf=\"parcelado[dadosDivida[ind].CodigoTitulo] === 1\" disabled> \r\n              Sem opção de parcelamento\r\n            </button> \r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n      \r\n  </accordion-group>\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroInternet.Divida.DadosDivida.length\">\r\n    <button class=\"btn btn-link btn-accordion\" accordion-heading>\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\r\n    </button>\r\n  </accordion-group>\r\n  <accordion-group *ngIf=\"apiRestService.dividasClaroTv.Divida.DadosDivida.length\">\r\n      <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n        <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n        <div class=\"pull-left float-left produto-heading\">Claro TV</div>\r\n      </button>\r\n    </accordion-group>\r\n</accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\r\n    <div class=\"col-lg-3 fundo-paulista\">\r\n    </div>\r\n \r\n    <div class=\"back-beje col-lg-9\">\r\n                            \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \r\n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\r\n            \r\n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\r\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\r\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\r\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\r\n                        \r\n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\r\n                <h3 class=\"text-center\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, <span class=\"text-capitalize\">{{nome}}</span>!</h3>    \r\n                \r\n                <div class=\"row\">                    \r\n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\" *ngIf=\"this.apiRestService.dividas.Divida\">\r\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\r\n                            <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">NEGOCIE ONLINE</h5>\r\n                            <p class=\"card-text\">Clique e tenha as melhores condições para negociar com a Claro de forma rápida e prática.</p>\r\n                            \r\n                            </div>\r\n                            <p class=\"btn btn-acessar\">Acessar</p>\r\n                    </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\r\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n                    <p class=\"card-text\">Converse agora com nosso Assistente Virtual, não perca tempo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\r\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">RECEBA NOSSA LIGAÇÃO</h5>\r\n                    <p class=\"card-text\">Quer receber uma ligação de nosso agente digital? Aqui é o lugar certo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <div class=\"col-lg-3 fiz-pagamento-ok\" *ngIf=\"fizPagamentoOk\">\r\n                  <div class=\"container\">\r\n                        <span class=\"red\">Obrigada!</span><br>\r\n                        As informações de pagamento foram enviadas para a nossa central.<br>\r\n                        Caso necessário entraremos em contato no nosso número:<br> \r\n                        0800 208 8080         \r\n                </div>            \r\n        </div>\r\n\r\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\r\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">JÁ FIZ O PAGAMENTO</h5>\r\n                    <p class=\"card-text\">Já realizou o pagamento de seus débitos com a claro? pressione o botão abaixo!</p>\r\n                        \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Informar</p>\r\n                </div>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\" *ngIf=\"this.apiRestService.dividas.Acordo\">\r\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">SEUS ACORDOS EM ANDAMENTO</h5>\r\n                    <p class=\"card-text\">Se tiver um acordo em andamento, acesse aqui para retirar a 2ª via.</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n        </div>\r\n     </div>    \r\n                <a class=\"bottom-fixed back-beje\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n                \r\n    </div>    \r\n\r\n</div>      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prazo-finalizacao/prazo-finalizacao.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-wrap\" *ngIf=\"loader\">\r\n  <p>Aguarde . . .</p>\r\n  <div class=\"loader\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"sucesso\">\r\n  <h1> O Acordo foi realizado com sucesso!</h1>\r\n  <br>\r\n  <h4>Como deseja receber seu boleto?</h4>\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          Por e-mail\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          Por SMS\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-mudar-parce\" (click)=\"abrirBoleto()\">\r\n          Ver dados do boleto\r\n        </button>\r\n      </div>            \r\n    </div>\r\n    <div class=\"loader-wrap\" *ngIf=\"loadingBoleto\">\r\n        <p>Aguarde . . .</p>\r\n        <div class=\"loader\"></div>\r\n    </div>\r\n      \r\n    <div class=\"erro-boleto\" *ngIf=\"erroBoleto\">Houve um erro. Tente novamente, por favor.</div>\r\n</div>\r\n\r\n<div *ngIf=\"erro\">\r\n  <h1> Houve um erro. Tente novamente, por favor.</h1>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"fim\">\r\n  <p class=\"detalhes-titulo\">Detalhes do acordo:</p>\r\n  <p>Data do {{ primeiraParcelado()? 'primeiro':'' }} pagamento: {{ dataPagamento.toLocaleString().split(',')[0] }}</p>\r\n  <p>Valor {{ primeiraParcelado()? 'da primeira parcela':'' }}: R$ {{ primeiraParcelado()? primeiraParcelado():valorAVista() }}</p>\r\n  <p *ngIf=\"vezesParcelado()\">Demais parcelas: {{ vezesParcelado() }} x R$ {{ outrasParcelado() }}</p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-yellow\" (click)=\"gravaAcordo()\">\r\n        Confirmar acordo\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"mudarData()\">\r\n        Mudar data\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-mudar-parce\" (click)=\"voltar()\">\r\n        Mudar parcelamento\r\n      </button>\r\n    </div>            \r\n  </div>\r\n</div>\r\n\r\n<div class=\"opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n    <p class=\"escolha-data\">Data para o pagamento:</p>\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <input type=\"text\"\r\n        placeholder=\"Clique para escolher uma data\"\r\n        class=\"form-control\"\r\n        bsDatepicker [minDate]=\"minDate\"\r\n        [maxDate]=\"maxDate\"  [(ngModel)]=\"dataPagamento\">\r\n    </div>  \r\n    <div class=\"col-sm-3\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"showFinalizacao()\">\r\n          Realizar acordo\r\n      </button>      \r\n    </div>\r\n    <div class=\"col-sm-3\">      \r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar_data()\">\r\n        Voltar\r\n      </button>\r\n    </div>    \r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tel-box\">\r\n    <p>Informe seu número de telefone, fixo ou celular, para que possamos te ligar.</p>\r\n        <div class=\"form-group\"> \r\n            <input type=\"text\" [textMask]=\"{mask: telMask}\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"(DDD) TELEFONE\" [(ngModel)]=\"tel\" (input)=\"cleanAlerts()\"> \r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"envia()\">Enviar</button>\r\n            <div class=\"input_error\">\r\n                <p *ngIf=\"tel_inv\">Telefone inválido.</p>\r\n                <p *ngIf=\"verificando\">Aguarde . . .</p>\r\n                <p *ngIf=\"cadastrado\">Telefone cadastrado com sucesso.</p>\r\n                <p *ngIf=\"houve_erro\">Houve um erro. Tente novamente, por favor.</p>\r\n            </div>            \r\n    </div>\r\n</div>    "

/***/ }),

/***/ "./src/app/acordos-andamento/acordos-andamento.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/acordos-andamento/acordos-andamento.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    text-decoration: none !important;\r\n}\r\n\r\n.produto-heading {\r\n    line-height: 44px;\r\n    font-size: 22px;\r\n    margin-left: 10px;    \r\n    }\r\n\r\n.logo {\r\n        width: 120px;\r\n        display: block;\r\n        margin: 10px auto;\r\n    }\r\n\r\n.produto-img {\r\n        height: 45px;\r\n        float: left;\r\n    }\r\n\r\n.btn-accordion {\r\n        line-height: 50px;\r\n        font-size: 20px;\r\n    }\r\n\r\n.acc-body {\r\n        position: relative;\r\n        top: -15px;\r\n    }\r\n\r\n.bottom-parcela {\r\n      margin-bottom: 0px;            \r\n    }\r\n\r\n@media (max-width: 768px) {\r\n        .no-padd-left {\r\n            padding-left: 0;\r\n        }\r\n\r\n        .no-padd-right {\r\n            padding-right: 0;\r\n        }\r\n\r\n        .bottom-parcela {\r\n            margin-bottom: 7px;            \r\n          }\r\n        \r\n        .btn-accordion {\r\n            font-size: 16px;\r\n        }    \r\n\r\n        .produto-img {\r\n            height: 25px;\r\n        }    \r\n\r\n        .img-produto {\r\n            line-height: 25px;\r\n        }\r\n\r\n        .btn-linha {\r\n            line-height: 22px;\r\n        }\r\n\r\n        .acc-body {\r\n            font-size: 15px;\r\n        }\r\n\r\n        .valor-mobile {\r\n            font-size: 14px;\r\n            padding-left: 0;\r\n        }\r\n\r\n        .loader-wrap {\r\n            position: relative;\r\n            left: 8px;\r\n            width: 30px;\r\n            height: 30px;\r\n        }\r\n    }    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCOztBQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0FBR0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztBQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOztBQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztBQUVBO1FBQ0k7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksa0JBQWtCO1VBQ3BCOztRQUVGO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksZUFBZTtZQUNmLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsU0FBUztZQUNULFdBQVc7WUFDWCxZQUFZO1FBQ2hCO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHV0by1oZWFkaW5nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjYy1ib2R5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5uby1wYWRkLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tcGFkZC1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tLXBhcmNlbGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi1hY2NvcmRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgLnByb2R1dG8taW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIC5pbWctcHJvZHV0byB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1saW5oYSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjYy1ib2R5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbG9yLW1vYmlsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvYWRlci13cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAiXX0= */"

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



let AcordosAndamentoComponent = class AcordosAndamentoComponent {
    constructor(apiRestService) {
        this.apiRestService = apiRestService;
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
    segunda_via(codAcordo, codCodigoAcordo, ind) {
        this.loadingBoleto[ind] = true;
        console.log(codCodigoAcordo);
        this.apiRestService.getBoletoAcordo(codAcordo, codCodigoAcordo).subscribe((bol) => {
            console.log(bol);
            this.loadingBoleto[ind] = false;
            if (bol.BoletoAcordo) {
                window.open("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor + "&cliente=" + this.apiRestService.getNome());
            }
            else {
                this.erroBoleto = true;
            }
        });
    }
};
AcordosAndamentoComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
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
        this.parcelas = new Parcelas();
        this.opcoesPg = {};
        this.urlDadosDevedor = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdevedor.php';
        this.urlDadosDivida = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosdivida.php';
        this.urlOpcoesPagamento = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosopcoespagamento.php';
        this.urlDadosAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getdadosacordo.php';
        this.urlGravaAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_gravaacordo.php';
        this.urlBoletoAcordo = 'http://172.22.4.33:8085/landingpage/apiresposta/apirequest_getboletoacordo.php';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    notificarMotor(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('cpf', this.cpfCnpj)
            .set('datahora', (new Date))
            .set('id', id)
            .set('Operacao', 'Claro');
        this.http.post("https://fulltime.free.beeceptor.com", params, this.httpOptions).subscribe();
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
    testee() {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('cpf', '10805480765');
        return this.http.post(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((devedor) => {
            return devedor;
        }));
    }
    getDadosDevedor(cpfCnpj) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('cpf', cpfCnpj);
        return this.http.post(this.urlDadosDevedor, cpfCnpjParam, this.httpOptions);
    }
    getDadosDivida(cpfCnpj, codDevedor) {
        const cpfDevedorParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('cpf', cpfCnpj)
            .set('codigodevedor', codDevedor);
        return this.http.post(this.urlDadosDivida, cpfDevedorParam, this.httpOptions);
    }
    getOpcoesPagamento(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', this.cpfCnpj);
        return this.http.post(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions);
    }
    getDadosAcordo(codTitulo) {
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo);
        return this.http.post(this.urlDadosAcordo, cpfCnpjParam, this.httpOptions);
    }
    getBoletoAcordo(codAcordo, codCodigoAcordo) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigoacordo', codAcordo)
            .set('codigoparcelaacordo', codCodigoAcordo)
            .set('cpf', this.cpfCnpj);
        return this.http.post(this.urlBoletoAcordo, params, this.httpOptions);
    }
    gravaAcordo(codTitulo, cpf, codDevedor, codPlano, vencimentoPrimeira, valorPrimeira) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo)
            .set('cpf', cpf)
            .set('codigodevedor', codDevedor)
            .set('codigotitulo', codTitulo)
            .set('plano', codPlano)
            .set('vencimentoprimeira', vencimentoPrimeira)
            .set('valorprimeira', valorPrimeira);
        return this.http.post(this.urlGravaAcordo, params, this.httpOptions);
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
        console.log("this.dividasClaroTv.Divida.DadosDivida");
        console.log(this.dividasClaroTv.Divida.DadosDivida);
        if (this.dividas.Divida.DadosDivida.length) {
            this.dividasClaroMovel.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Móvel");
            this.dividasClaroInternet.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Internet");
            this.dividasClaroTv.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro TV");
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
            }
        }
    }
    getAllOpcoesClaroMovel() {
        if (this.opcoesPg[this.dividasClaroMovel.Divida.DadosDivida[0].CodigoTitulo])
            return;
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
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");
/* harmony import */ var _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boleto/boleto.component */ "./src/app/boleto/boleto.component.ts");






const routes = [
    { path: '', component: _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_3__["OpcoesRoutletComponent"], pathMatch: 'full' },
    { path: 'negocie-online', component: _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_4__["NegocieOnlineComponent"] },
    { path: 'opcoes-routlet', component: _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_3__["OpcoesRoutletComponent"] },
    { path: 'boleto', component: _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_5__["BoletoComponent"] }
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
            _boleto_boleto_component__WEBPACK_IMPORTED_MODULE_20__["BoletoComponent"]
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

module.exports = "td.BoletoCodigoBanco {font-size: 6mm; font-family: arial, verdana; font-weight : bold; \r\n    FONT-STYLE: italic; text-align: center; vertical-align: bottom;  \r\n    border-bottom: 0.15mm solid #000000; border-right: 0.15mm solid #000000;\r\n    padding-bottom : 1mm}\r\ntd.BoletoLogo { border-bottom: 0.15mm solid #000000;  border-right: 0.15mm solid #000000;\r\ntext-align: center; height: 10mm}\r\ntd.BoletoLinhaDigitavel {font-size: 4 mm; font-family: arial, verdana; font-weight : bold; \r\n       text-align: center; vertical-align: bottom; \r\n        border-bottom: 0.15mm solid #000000; padding-bottom : 1mm; }\r\ntd.BoletoTituloEsquerdo{font-size: 0.2cm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      border-right: 0.15mm solid #000000; text-align: left}\r\ntd.BoletoTituloDireito{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      text-align: left}\r\ntd.BoletoValorEsquerdo{font-size: 3mm; font-family: arial, verdana; text-align: center;\r\n      border-right: 0.15mm solid #000000; font-weight: bold;\r\n      border-bottom: 0.15mm solid #000000; padding-top: 0.5mm}\r\ntd.BoletoValorDireito{font-size: 3mm; font-family: arial, verdana; text-align:right; \r\n    padding-right: 3mm; padding-top: 0.8mm; border-bottom: 0.15mm solid #000000;\r\n     font-weight: bold;}\r\ntd.BoletoTituloSacado{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: top; padding-top : 0.15mm; text-align: left}\r\ntd.BoletoValorSacado{font-size: 3mm; font-family: arial, verdana;  font-weight: bold; \r\n  text-align : left}\r\ntd.BoletoTituloSacador{font-size: 2mm; font-family: arial, verdana; padding-left : 0.15mm;\r\n      vertical-align: bottom; padding-bottom : 0.8mm;\r\n      border-bottom: 0.15mm solid #000000}\r\ntd.BoletoValorSacador{font-size: 3mm; font-family: arial, verdana; vertical-align: bottom; \r\n  padding-bottom : 0.15mm; border-bottom: 0.15mm solid #000000;\r\n   font-weight: bold; text-align: left}\r\ntd.BoletoPontilhado{border-top: 0.3mm dashed #000000; font-size: 1mm}\r\nul.BoletoInstrucoes{font-size : 3mm; font-family : verdana, arial}\t  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9sZXRvL2JvbGV0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO0lBQ2pGLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQjtJQUM5RCxtQ0FBbUMsRUFBRSxrQ0FBa0M7SUFDdkUsb0JBQW9CO0FBQ3hCLGdCQUFnQixtQ0FBbUMsR0FBRyxrQ0FBa0M7QUFDeEYsa0JBQWtCLEVBQUUsWUFBWTtBQUNoQyx5QkFBeUIsZUFBZSxFQUFFLDJCQUEyQixFQUFFLGtCQUFrQjtPQUNsRixrQkFBa0IsRUFBRSxzQkFBc0I7UUFDekMsbUNBQW1DLEVBQUUsb0JBQW9CLEVBQUU7QUFDbkUsd0JBQXdCLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLHFCQUFxQjtNQUN0RixrQ0FBa0MsRUFBRSxnQkFBZ0I7QUFDMUQsdUJBQXVCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUI7TUFDbkYsZ0JBQWdCO0FBQ3RCLHVCQUF1QixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO01BQ2hGLGtDQUFrQyxFQUFFLGlCQUFpQjtNQUNyRCxtQ0FBbUMsRUFBRSxrQkFBa0I7QUFDN0Qsc0JBQXNCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxnQkFBZ0I7SUFDL0Usa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsbUNBQW1DO0tBQzFFLGlCQUFpQixDQUFDO0FBQ3ZCLHNCQUFzQixjQUFjLEVBQUUsMkJBQTJCLEVBQUUscUJBQXFCO01BQ2xGLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQjtBQUNqRSxxQkFBcUIsY0FBYyxFQUFFLDJCQUEyQixHQUFHLGlCQUFpQjtFQUNsRixpQkFBaUI7QUFDbkIsdUJBQXVCLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUI7TUFDbkYsc0JBQXNCLEVBQUUsc0JBQXNCO01BQzlDLG1DQUFtQztBQUN6QyxzQkFBc0IsY0FBYyxFQUFFLDJCQUEyQixFQUFFLHNCQUFzQjtFQUN2Rix1QkFBdUIsRUFBRSxtQ0FBbUM7R0FDM0QsaUJBQWlCLEVBQUUsZ0JBQWdCO0FBQ3RDLG9CQUFvQixnQ0FBZ0MsRUFBRSxjQUFjO0FBQ3BFLG9CQUFvQixlQUFlLEVBQUUsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYm9sZXRvL2JvbGV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQuQm9sZXRvQ29kaWdvQmFuY28ge2ZvbnQtc2l6ZTogNm1tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IGZvbnQtd2VpZ2h0IDogYm9sZDsgXHJcbiAgICBGT05ULVNUWUxFOiBpdGFsaWM7IHRleHQtYWxpZ246IGNlbnRlcjsgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7IGJvcmRlci1yaWdodDogMC4xNW1tIHNvbGlkICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbSA6IDFtbX1cclxudGQuQm9sZXRvTG9nbyB7IGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyAgYm9yZGVyLXJpZ2h0OiAwLjE1bW0gc29saWQgIzAwMDAwMDtcclxudGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDEwbW19XHRcclxudGQuQm9sZXRvTGluaGFEaWdpdGF2ZWwge2ZvbnQtc2l6ZTogNCBtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBmb250LXdlaWdodCA6IGJvbGQ7IFxyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyBcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDsgcGFkZGluZy1ib3R0b20gOiAxbW07IH1cclxudGQuQm9sZXRvVGl0dWxvRXNxdWVyZG97Zm9udC1zaXplOiAwLjJjbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBwYWRkaW5nLWxlZnQgOiAwLjE1bW07XHJcbiAgICAgIGJvcmRlci1yaWdodDogMC4xNW1tIHNvbGlkICMwMDAwMDA7IHRleHQtYWxpZ246IGxlZnR9XHJcbnRkLkJvbGV0b1RpdHVsb0RpcmVpdG97Zm9udC1zaXplOiAybW07IGZvbnQtZmFtaWx5OiBhcmlhbCwgdmVyZGFuYTsgcGFkZGluZy1sZWZ0IDogMC4xNW1tO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0fVxyXG50ZC5Cb2xldG9WYWxvckVzcXVlcmRve2ZvbnQtc2l6ZTogM21tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjE1bW0gc29saWQgIzAwMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMTVtbSBzb2xpZCAjMDAwMDAwOyBwYWRkaW5nLXRvcDogMC41bW19XHJcbnRkLkJvbGV0b1ZhbG9yRGlyZWl0b3tmb250LXNpemU6IDNtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyB0ZXh0LWFsaWduOnJpZ2h0OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNtbTsgcGFkZGluZy10b3A6IDAuOG1tOyBib3JkZXItYm90dG9tOiAwLjE1bW0gc29saWQgIzAwMDAwMDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDt9XHJcbnRkLkJvbGV0b1RpdHVsb1NhY2Fkb3tmb250LXNpemU6IDJtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyBwYWRkaW5nLWxlZnQgOiAwLjE1bW07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IHBhZGRpbmctdG9wIDogMC4xNW1tOyB0ZXh0LWFsaWduOiBsZWZ0fVxyXG50ZC5Cb2xldG9WYWxvclNhY2Fkb3tmb250LXNpemU6IDNtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gIHRleHQtYWxpZ24gOiBsZWZ0fVxyXG50ZC5Cb2xldG9UaXR1bG9TYWNhZG9ye2ZvbnQtc2l6ZTogMm1tOyBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmE7IHBhZGRpbmctbGVmdCA6IDAuMTVtbTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgcGFkZGluZy1ib3R0b20gOiAwLjhtbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDB9XHJcbnRkLkJvbGV0b1ZhbG9yU2FjYWRvcntmb250LXNpemU6IDNtbTsgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hOyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyBcclxuICBwYWRkaW5nLWJvdHRvbSA6IDAuMTVtbTsgYm9yZGVyLWJvdHRvbTogMC4xNW1tIHNvbGlkICMwMDAwMDA7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBsZWZ0fVx0XHJcbnRkLkJvbGV0b1BvbnRpbGhhZG97Ym9yZGVyLXRvcDogMC4zbW0gZGFzaGVkICMwMDAwMDA7IGZvbnQtc2l6ZTogMW1tfVxyXG51bC5Cb2xldG9JbnN0cnVjb2Vze2ZvbnQtc2l6ZSA6IDNtbTsgZm9udC1mYW1pbHkgOiB2ZXJkYW5hLCBhcmlhbH1cdCAgXHJcbiJdfQ== */"

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
    cleanAlerts() {
        this.cpf_inv = false;
        this.cnpj_inv = false;
        this.cpf_sem_debitos = false;
        this.cnpj_sem_debitos = false;
        this.input_inv = false;
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

/***/ "./src/app/negocie-online/negocie-online.component.css":
/*!*************************************************************!*\
  !*** ./src/app/negocie-online/negocie-online.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.produto-heading {\r\nline-height: 44px;\r\nfont-size: 22px;\r\nmargin-left: 10px;    \r\n}\r\n\r\n.logo {\r\n    width: 120px;\r\n    display: block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.produto-img {\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    font-size: 19px;  \r\n}\r\n\r\ntable {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.opcoes-parcelamento {  \r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.opcoes-parcelamento .btn {\r\n    margin-bottom: 25px;\r\n    width: 250px;    \r\n}\r\n\r\n.metodo-pagamento {\r\n    margin-top: 25px;\r\n    border: 1px solid #007bff;\r\n    padding-bottom: 10px;\r\n    margin-left: 7px;\r\n}\r\n\r\n.movelLabel {\r\n    display: inline-block;\r\n    margin-left: 100px;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.panel-collapse > div {\r\n    padding-top: 0 !important\r\n}\r\n\r\n.opcoes-para-parcelamento {\r\n    text-align: right;\r\n}\r\n\r\n.metodo-de-pagamento {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    h3 {\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .opcoes-para-parcelamento {\r\n        text-align: left;\r\n    }    \r\n\r\n    .btn {\r\n        margin-top: 10px;\r\n        font-size: 17px;    \r\n    }\r\n\r\n    .metodo-pagamento {\r\n        margin-top: 0px;\r\n        margin-bottom: 7px;\r\n        margin-left: 0;\r\n    }\r\n    \r\n    .metodo-de-pagamento {\r\n        margin-bottom: 0;\r\n        margin-top: 5px;\r\n        text-align: left;\r\n        font-size: 17px;\r\n    }\r\n\r\n    .btn-accordion {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n      \r\n    table {\r\n        margin-top: -16px;\r\n        margin-bottom: -10px;\r\n    }\r\n\r\n    .movelLabel {\r\n        display: none;\r\n    }\r\n        \r\n}\r\n\r\n.loader-wrap-wrap {\r\n    height: 1500px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUlBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnByb2R1dG8taGVhZGluZyB7XHJcbmxpbmUtaGVpZ2h0OiA0NHB4O1xyXG5mb250LXNpemU6IDIycHg7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4OyAgICBcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLnByb2R1dG8taW1nIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOXB4OyAgXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5vcGNvZXMtcGFyY2VsYW1lbnRvIHsgIFxyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59ICAgIFxyXG4gICAgXHJcblxyXG5cclxuLm9wY29lcy1wYXJjZWxhbWVudG8gLmJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1MHB4OyAgICBcclxufVxyXG5cclxuLm1ldG9kby1wYWdhbWVudG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi5tb3ZlbExhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFuZWwtY29sbGFwc2UgPiBkaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudFxyXG59XHJcblxyXG4ub3Bjb2VzLXBhcmEtcGFyY2VsYW1lbnRvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWV0b2RvLWRlLXBhZ2FtZW50byB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vcGNvZXMtcGFyYS1wYXJjZWxhbWVudG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICAgIH1cclxuXHJcbiAgICAubWV0b2RvLXBhZ2FtZW50byB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1ldG9kby1kZS1wYWdhbWVudG8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdmVsTGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5sb2FkZXItd3JhcC13cmFwIHtcclxuICAgIGhlaWdodDogMTUwMHB4O1xyXG59XHJcblxyXG4iXX0= */"

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
        this.loaderClaroMovel = true;
        this.showFatura = true;
        this.showHeader = true;
        this.parcelado = {};
        this.dadosDivida = [];
        this.opcoesPg = {};
    }
    ngOnInit() {
        this.apiRestService.getDividas();
        if (this.apiRestService.dividas.Divida.DadosDivida.length) {
            this.dadosDivida = this.apiRestService.dividas.Divida.DadosDivida;
        }
        if (this.apiRestService.dividas.Divida.DadosDivida.CodigoDevedor) {
            this.dadosDivida.push(this.apiRestService.dividas.Divida.DadosDivida);
        }
    }
    pagarAVista(codTitulo, valor, plano) {
        this.apiRestService.parcelas = {
            aVista: valor
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    pagarParcelado(ind, codTitulo, plano) {
        this.apiRestService.parcelas = {
            primeira: this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira,
            vezes: ind,
            outrasParcelas: this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas
        };
        this.apiRestService.codTitulo = codTitulo;
        this.apiRestService.plano = plano;
    }
    getAllOpcoesClaroMovel() {
        this.showHeader = false;
        this.movelLabel = true;
        this.apiRestService.getAllOpcoesClaroMovel();
        this.dadosDivida.forEach((dados) => this.sett(dados.CodigoTitulo));
    }
    sett(cod) {
        let dadosDividaCod = this.dadosDivida.filter((dados) => dados.CodigoTitulo === cod);
        this.apiRestService.opcoesPg[dadosDividaCod[0].CodigoTitulo].subscribe(res => {
            this.opcoesPg[dadosDividaCod[0].CodigoTitulo] = res.OpcoesPagamento;
            console.log(res);
            if (!this.loadingParcelados && !res.Carregando) {
                this.loadingParcelados = true;
                setTimeout(() => { this.loaderClaroMovel = false; }, 2000);
            }
            this.cd.detectChanges();
            event.preventDefault();
        });
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
    getOpcao(ind) {
        return this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorPrimeira + " + " + ind + " X R$ " + this.opcoesPg[this.dadosDivida[this.ind_parcelado].CodigoTitulo].OpcaoPagamento[ind].ValorDemaisParcelas;
    }
    showPrazoFinalizacao() {
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

module.exports = "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.back-beje {\r\n    background: #f8f8f8;\r\n}\r\n\r\n/* .back-red {\r\n    height: 100%;\r\n    background: url(/assets/img/back-red.png) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 185px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14.5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 100px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    max-width: 320px;\r\n    margin: 15px auto;\r\n  }\r\n\r\n.fundo-paulista {\r\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\r\n    background-size: cover;\r\n    height: inherit;\r\n}\r\n\r\n.link-voltar {\r\n        font-size: 20px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.bottom-fixed {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        margin-bottom: 0px;\r\n        font-size: 18px;\r\n        padding-right: 17px;\r\n        padding-left: 17px;\r\n        }\r\n\r\n.fiz-pagamento-ok {\r\n        margin-top: 30px;\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .fiz-pagamento-ok {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bottom-fixed {\r\n        font-size: 14px;\r\n        bottom: 26px;        \r\n    }\r\n    \r\n    .logo {\r\n        width: 35%;\r\n        margin: 6px auto 3px;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 8px;  \r\n        height: 90px;     \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        height: 90px;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n   \r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n\r\n    .link-voltar {\r\n        font-size: 18px;\r\n        text-align: center;\r\n    }    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bjb2VzLXJvdXRsZXQvb3Bjb2VzLXJvdXRsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjOztJQUVkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdIQUF3RztJQUF4Ryx3R0FBd0c7QUFDNUc7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHVEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjs7QUFFSjtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7S0FFQztRQUNHLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztLQUVDO1FBQ0csWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9vcGNvZXMtcm91dGxldC9vcGNvZXMtcm91dGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmJhY2stYmVqZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG59XHJcblxyXG4vKiAuYmFjay1yZWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2JhY2stcmVkLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSAqL1xyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNC41cHg7XHJcbn1cclxuXHJcbi5idG4tYWNlc3NhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTMyNjIwO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSxiYWNrZ3JvdW5kIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZ1bmRvLXBhdWxpc3RhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3JlY29ydGVfcGhpeHIuanBnXCIpIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiAgICAubGluay12b2x0YXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbS1maXhlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIC5maXotcGFnYW1lbnRvLW9rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfSAgICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5maXotcGFnYW1lbnRvLW9rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tZml4ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3R0b206IDI2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggYXV0byAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4OyAgXHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCwgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH0gXHJcblxyXG4gICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5idG4tYWNlc3NhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGluay12b2x0YXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9ICAgIFxyXG5cclxufSJdfQ== */"

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
        //public nome: string = this.apiRestService.getNome();
        //////////////////////////////////////////////////////////////
        this.showOpcoes = true;
        this.cardBodyPagamento = true;
    }
    ngOnInit() {
        //////////////////////////////////////////////////////////////// 
        this.apiRestService.dividas = new _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["Divida"]();
        this.apiRestService.dividas.Acordo = new _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["Acordo"]();
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




let PrazoFinalizacaoComponent = class PrazoFinalizacaoComponent {
    constructor(localeService, apiRestService) {
        this.localeService = localeService;
        this.apiRestService = apiRestService;
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
        this.loadingBoleto = true;
        this.apiRestService.getDadosAcordo(this.apiRestService.codTitulo).subscribe(acc => {
            console.log("acc=");
            console.log(acc);
            if (acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.length)
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo[0].CodigoParcelaAcordo;
            else
                codigoParcelaAcordo = acc.Acordo.DadosAcordo.ParcelasAcordo.ParcelaAcordo.CodigoParcelaAcordo;
            this.apiRestService.getBoletoAcordo(this.codAcordo, codigoParcelaAcordo).subscribe((bol) => {
                console.log(bol);
                this.loadingBoleto = false;
                if (bol.BoletoAcordo) {
                    window.open("/boleto?data=" + bol.BoletoAcordo.DataVencimento + "&linha=" + bol.BoletoAcordo.LinhaDigitavel + "&valor=" + bol.BoletoAcordo.Valor);
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
};
PrazoFinalizacaoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsLocaleService"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] }
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