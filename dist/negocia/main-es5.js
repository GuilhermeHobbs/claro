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

module.exports = "<img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n<h3 class=\"text-center\">Selecione o produto que deseja o reenvio de boleto:</h3>\r\n\r\n    <accordion [isAnimated]=\"true\">\r\n        <accordion-group>\r\n          <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n            <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n            <div class=\"pull-left float-left produto-heading\">Claro Móvel</div>\r\n          </button>\r\n                    \r\n      \r\n        </accordion-group>\r\n        <accordion-group>\r\n          <button class=\"btn btn-link\" accordion-heading>\r\n            <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n            <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\r\n          </button>\r\n        </accordion-group>\r\n        <accordion-group>\r\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n              <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n              <div class=\"pull-left float-left produto-heading\">Claro TV</div>\r\n            </button>\r\n          </accordion-group>\r\n      </accordion>\r\n      "

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

module.exports = "<div class=\"row\">\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n            <img src=\"assets/icons/messenger.png\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Messenger</h5>\r\n            <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\r\n            </div>\r\n            <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" target=\" _blank\">\r\n        <img src=\"assets/icons/virtual_assistant.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Assistente Virtual</h5>\r\n        <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n        <img src=\"assets/icons/telegram.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Telegram</h5>\r\n        <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tela-grid\">\r\n\r\n    \r\n\r\n <div class=\"cpf-box\">\r\n    <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n    <p>Quer negociar seus débitos com a Claro? <br> Inicie aqui uma consulta sem custo!  </p>\r\n        <div class=\"form-group\"> \r\n            <input type=\"text\" [textMask]=\"mask()\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu CPF ou CNPJ\" [(ngModel)]=\"cpf_cnpj\" (input)=\"cleanAlerts()\" (keydown.backspace)=\"backspacePress($event)\" (keydown.enter)=\"valida()\">\r\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"valida()\">Verificar</button>            \r\n        <div class=\"input_error\">\r\n            <p *ngIf=\"cpf_inv\">CPF inválido.</p>\r\n            <p *ngIf=\"cnpj_inv\">CNPJ inválido.</p>\r\n            <p *ngIf=\"input_inv\">Por favor, informe um CPF ou CNPJ.</p>\r\n            <p *ngIf=\"verificando\">Aguarde, estamos verificando. . .</p>\r\n            <p *ngIf=\"cpf_sem_debitos\">O CPF informado não tem débitos.</p>\r\n            <p *ngIf=\"cnpj_sem_debitos\">O CNPJ informado não tem débitos.</p>\r\n        </div>        \r\n    </div> \r\n </div>\r\n\r\n    <a class=\"fixed-bottom auto_inicio\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/negocie-online/negocie-online.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"showHeader\">\r\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\r\n</header>\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n  <accordion-group>\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"showHeader = false\">\r\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\">Claro Móvel</div>  \r\n    </button>\r\n    \r\n    <div class=\"table-responsive-lg\" *ngIf=\"showFatura\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Fatura - Vencimento</th>\r\n            <th scope=\"col\">Descrição</th>\r\n            <th scope=\"col\">Valor (R$)</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">13/07/2007</th>\r\n            <td>1</td>\r\n            <td>R$ 546,00</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Total</th>\r\n            <td></td>\r\n            <td>R$ 546,00</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>  \r\n    \r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n      <div class=\"col-sm-3 opcoes-para-parcelamento\">\r\n        Opções para parcelamento:\r\n      </div>  \r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao()\">\r\n          R$15000,28 + 1 x R$150,27\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          R$150,28 + 1 x R$150,27\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          R$150,28 + 1 x R$150,27\r\n        </button>\r\n      </div>    \r\n    </div>\r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n\r\n    <div class=\"row metodo-pagamento\" *ngIf=\"metodoPagamento\">\r\n      <div class=\"col-sm-5 metodo-de-pagamento\">\r\n        Método de pagamento:\r\n      </div>\r\n      <div class=\"col-6 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          À vista: R$ 100,00\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento()\">\r\n          Parcelado\r\n        </button> \r\n      </div>  \r\n    </div>\r\n    \r\n  </accordion-group>\r\n  <accordion-group>\r\n    <button class=\"btn btn-link btn-accordion\" accordion-heading>\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\r\n    </button>\r\n  </accordion-group>\r\n  <accordion-group>\r\n      <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n        <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n        <div class=\"pull-left float-left produto-heading\">Claro TV</div>\r\n      </button>\r\n    </accordion-group>\r\n</accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\r\n    <div class=\"col-lg-3 fundo-paulista\">\r\n    </div>\r\n \r\n    <div class=\"back-beje col-lg-9\">\r\n                            \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \r\n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\r\n            \r\n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\r\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\r\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\r\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\r\n                        \r\n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\r\n                <h3 class=\"text-center\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, {{nome}}!</h3>    \r\n                \r\n                <div class=\"row\">                    \r\n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\">\r\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\r\n                            <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">Negocie Online</h5>\r\n                            <p class=\"card-text\">NEGOCIE AGORA SEUS DÉBITOS COM A CLARO DE FORMA PRÁTICA E RÁPIDA</p>\r\n                            \r\n                            </div>\r\n                            <p class=\"btn btn-acessar\">Acessar</p>\r\n                    </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\r\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Assistente Virtual</h5>\r\n                    <p class=\"card-text\">FALE COM O NOSSO ASSITENTE VIRTUAL E NEGOCIE SEUS DÉBITOS COM A CLARO\r\n                </p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\r\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Receba nossa Ligação</h5>\r\n                    <p class=\"card-text\">QUER RECEBER UMA LIGAÇÃO DE NOSSO AGENTE DIGITAL? AQUI É O LUGAR CERTO!\r\n                </p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <div class=\"col-lg-3 fiz-pagamento-ok\" *ngIf=\"fizPagamentoOk\">\r\n                  <div class=\"container\">\r\n                        <span class=\"red\">Obrigada!</span><br>\r\n                        As informações de pagamento foram enviadas para a nossa central.<br>\r\n                        Caso necessário entraremos em contato no nosso número:<br> \r\n                        0800 208 8080         \r\n                </div>            \r\n        </div>\r\n\r\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\r\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Já fiz o Pagamento</h5>\r\n                    <p class=\"card-text\">JÁ REALIZOU O PAGAMENTO DE SEUS DÉBITOS COM A CLARO? PRESSIONE O BOTÃO ABAIXO!\r\n                </p>\r\n                        \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Informar</p>\r\n                </div>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\">\r\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Seus Acordos em Andamento</h5>\r\n                    <p class=\"card-text\">SE TIVER UM ACORDO EM ANDAMENTO, ACESSE AQUI PARA RETIRAR A 2ª VIA.\r\n                </p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n        </div>\r\n     </div>    \r\n                <a class=\"bottom-fixed back-beje\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n                \r\n    </div>    \r\n\r\n</div>      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prazo-finalizacao/prazo-finalizacao.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fim\">\r\n  <p class=\"detalhes-titulo\">Detalhes do acordo:</p>\r\n  <p>Data do primeiro pagamento: 14/02/2019</p>\r\n  <p>Valor da parcela: R$ 10,00</p>\r\n  <p>Demais parcelas: 2 x R$ 10,00</p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-yellow\">\r\n        Confirmar acordo\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"mudarData()\">\r\n        Mudar data\r\n      </button>\r\n    </div>\r\n    <div class=\"col-6 col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar()\">\r\n        Mudar parcelamento\r\n      </button>\r\n    </div>            \r\n  </div>\r\n</div>\r\n\r\n<div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\r\n    <div class=\"col-sm-3 escolha-data\">\r\n        Escolha uma data para pagamento:\r\n    </div>  \r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"showFinalizacao()\">\r\n        Pagamento até amanhã\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        Pagamento em até 5 dias\r\n      </button>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\">\r\n        Pagamento em até 10 dias\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar()\">\r\n        Voltar\r\n      </button>\r\n    </div>    \r\n  </div>"

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

module.exports = ".produto-heading {\r\n    line-height: 44px;\r\n    font-size: 22px;\r\n    margin-left: 10px;    \r\n    }\r\n    \r\n    .logo {\r\n        width: 120px;\r\n        display: block;\r\n        margin: 10px auto;\r\n    }\r\n    \r\n    .produto-img {\r\n        height: 45px;\r\n        float: left;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmIiwiZmlsZSI6InNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdXRvLWhlYWRpbmcge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdXRvLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcordosAndamentoComponent = /** @class */ (function () {
    function AcordosAndamentoComponent() {
    }
    AcordosAndamentoComponent.prototype.ngOnInit = function () {
    };
    AcordosAndamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acordos-andamento',
            template: __webpack_require__(/*! raw-loader!./acordos-andamento.component.html */ "./node_modules/raw-loader/index.js!./src/app/acordos-andamento/acordos-andamento.component.html"),
            styles: [__webpack_require__(/*! ./acordos-andamento.component.css */ "./src/app/acordos-andamento/acordos-andamento.component.css")]
        })
    ], AcordosAndamentoComponent);
    return AcordosAndamentoComponent;
}());



/***/ }),

/***/ "./src/app/api-rest.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-rest.service.ts ***!
  \*************************************/
/*! exports provided: ApiRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestService", function() { return ApiRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ApiRestService = /** @class */ (function () {
    function ApiRestService() {
    }
    ApiRestService.prototype.temDividas = function (cpf) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    ApiRestService.prototype.getNome = function () {
        return ("Guilherme Hobbs");
    };
    ApiRestService.prototype.meLigue = function (num) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    ApiRestService.prototype.fizPagamento = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    ApiRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiRestService);
    return ApiRestService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cpf-cnpj-box/cpf-cnpj-box.component */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts");
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");






var routes = [
    { path: '', component: _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_3__["CpfCnpjBoxComponent"], pathMatch: 'full' },
    { path: 'negocie-online', component: _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_5__["NegocieOnlineComponent"] },
    { path: 'opcoes-routlet', component: _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_4__["OpcoesRoutletComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'negocia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm5/ngx-soap.js");
/* harmony import */ var _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cpf-cnpj-box/cpf-cnpj-box.component */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _assistente_virtual_assistente_virtual_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assistente-virtual/assistente-virtual.component */ "./src/app/assistente-virtual/assistente-virtual.component.ts");
/* harmony import */ var _receba_nossa_ligacao_receba_nossa_ligacao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./receba-nossa-ligacao/receba-nossa-ligacao.component */ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.ts");
/* harmony import */ var _acordos_andamento_acordos_andamento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./acordos-andamento/acordos-andamento.component */ "./src/app/acordos-andamento/acordos-andamento.component.ts");
/* harmony import */ var _prazo_finalizacao_prazo_finalizacao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prazo-finalizacao/prazo-finalizacao.component */ "./src/app/prazo-finalizacao/prazo-finalizacao.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_10__["CpfCnpjBoxComponent"],
                _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_11__["NegocieOnlineComponent"],
                _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_12__["OpcoesRoutletComponent"],
                _assistente_virtual_assistente_virtual_component__WEBPACK_IMPORTED_MODULE_13__["AssistenteVirtualComponent"],
                _receba_nossa_ligacao_receba_nossa_ligacao_component__WEBPACK_IMPORTED_MODULE_14__["RecebaNossaLigacaoComponent"],
                _acordos_andamento_acordos_andamento_component__WEBPACK_IMPORTED_MODULE_15__["AcordosAndamentoComponent"],
                _prazo_finalizacao_prazo_finalizacao_component__WEBPACK_IMPORTED_MODULE_16__["PrazoFinalizacaoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_soap__WEBPACK_IMPORTED_MODULE_9__["NgxSoapModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assistente-virtual/assistente-virtual.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/assistente-virtual/assistente-virtual.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none !important;\r\n    color: inherit;\r\n}\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 200px;\r\n    \r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-title {\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 150px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .logo {\r\n        width: 35%;\r\n        margin: 3px auto;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 15px;   \r\n        height: 90px;    \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .card-title { \r\n        font-weight: bold;\r\n    }    \r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnSEFBd0c7SUFBeEcsd0dBQXdHO0FBQzVHOztBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztLQUVDO1FBQ0csWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0tBRUM7UUFDRyxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWFjZXNzYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UzMjYyMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSksYmFja2dyb3VuZCAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBtYXJnaW46IDNweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7ICAgXHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0LCAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHsgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNlc3NhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssistenteVirtualComponent = /** @class */ (function () {
    function AssistenteVirtualComponent() {
    }
    AssistenteVirtualComponent.prototype.ngOnInit = function () {
    };
    AssistenteVirtualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assistente-virtual',
            template: __webpack_require__(/*! raw-loader!./assistente-virtual.component.html */ "./node_modules/raw-loader/index.js!./src/app/assistente-virtual/assistente-virtual.component.html"),
            styles: [__webpack_require__(/*! ./assistente-virtual.component.css */ "./src/app/assistente-virtual/assistente-virtual.component.css")]
        })
    ], AssistenteVirtualComponent);
    return AssistenteVirtualComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm5/ngx-soap.js");





var CpfCnpjBoxComponent = /** @class */ (function () {
    function CpfCnpjBoxComponent(soap, router, cd, apiRestService) {
        var _this = this;
        this.soap = soap;
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
        this.soap.createClient('https://integracaonegociafacilclaro.mfmti.com.br/WebService.asmx?wsdl')
            .then(function (client) {
            console.log('Client', client);
            _this.client = client;
        })
            .catch(function (err) { return console.log('Error', err); });
    }
    CpfCnpjBoxComponent.prototype.sum = function () {
        var _this = this;
        var body = {
            intA: this.intA,
            intB: this.intB
        };
        this.client.call('Add', body).subscribe(function (res) {
            console.log('method response', res);
            _this.xmlResponse = res.xml;
            _this.message = res.result.AddResult;
        }, function (err) { return console.log(err); });
    };
    CpfCnpjBoxComponent.prototype.ngOnInit = function () {
    };
    CpfCnpjBoxComponent.prototype.cleanAlerts = function () {
        this.cpf_inv = false;
        this.cnpj_inv = false;
        this.cpf_sem_debitos = false;
        this.cnpj_sem_debitos = false;
        this.input_inv = false;
    };
    CpfCnpjBoxComponent.prototype.backspacePress = function (event) {
        if (event.target.value.substr(event.target.value.length - 1) == '.' ||
            event.target.value.substr(event.target.value.length - 1) == '/' ||
            event.target.value.substr(event.target.value.length - 1) == '-') {
            this.cd.detectChanges();
            event.preventDefault();
            this.cpf_cnpj = this.cpf_cnpj.slice(0, -1);
        }
    };
    CpfCnpjBoxComponent.prototype.mask = function () {
        var _this = this;
        return {
            mask: function (value) {
                if (value.length <= 14)
                    return _this.cpfMask;
                else
                    return _this.cnpjMask;
            },
            guide: false
        };
    };
    CpfCnpjBoxComponent.prototype.valida = function () {
        var _this = this;
        var cpfCnpj = this.cpf_cnpj.replace(/[`\-.\{\}\[\]\\\/]/gi, '');
        switch (cpfCnpj.length) {
            case 11: {
                if (this.testaCPF(cpfCnpj)) {
                    this.verificando = true;
                    this.apiRestService.temDividas(cpfCnpj).subscribe(function (div) {
                        _this.verificando = false;
                        if (div)
                            _this.router.navigateByUrl('/opcoes-routlet');
                        else
                            _this.cpf_sem_debitos = true;
                    });
                }
                else
                    this.cpf_inv = true;
                break;
            }
            case 14: {
                if (this.testaCNPJ(cpfCnpj)) {
                    this.verificando = true;
                    this.apiRestService.temDividas(cpfCnpj).subscribe(function (div) {
                        _this.verificando = false;
                        if (div)
                            _this.router.navigateByUrl('/opcoes-routlet');
                        else
                            _this.cnpj_sem_debitos = true;
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
    };
    CpfCnpjBoxComponent.prototype.testaCPF = function (strCPF) {
        var Soma, Resto, i;
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
    };
    CpfCnpjBoxComponent.prototype.testaCNPJ = function (cnpj) {
        // Valida a quantidade de caracteres
        if (cnpj.length !== 14)
            return false;
        // Elimina inválidos com todos os caracteres iguais
        if (/^(\d)\1+$/.test(cnpj))
            return false;
        // Cáculo de validação
        var t = cnpj.length - 2, d = cnpj.substring(t), d1 = parseInt(d.charAt(0)), d2 = parseInt(d.charAt(1)), calc = function (x) {
            var n = cnpj.substring(0, x), y = x - 7, s = 0, r = 0;
            for (var i = x; i >= 1; i--) {
                s += +n.charAt(x - i) * y--;
                if (y < 2)
                    y = 9;
            }
            r = 11 - s % 11;
            return r > 9 ? 0 : r;
        };
        return calc(t) === d1 && calc(t + 1) === d2;
    };
    CpfCnpjBoxComponent.ctorParameters = function () { return [
        { type: ngx_soap__WEBPACK_IMPORTED_MODULE_4__["NgxSoapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] }
    ]; };
    CpfCnpjBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cpf-cnpj-box',
            template: __webpack_require__(/*! raw-loader!./cpf-cnpj-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html"),
            styles: [__webpack_require__(/*! ./cpf-cnpj-box.component.css */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css")]
        })
    ], CpfCnpjBoxComponent);
    return CpfCnpjBoxComponent;
}());



/***/ }),

/***/ "./src/app/negocie-online/negocie-online.component.css":
/*!*************************************************************!*\
  !*** ./src/app/negocie-online/negocie-online.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-heading {\r\nline-height: 44px;\r\nfont-size: 22px;\r\nmargin-left: 10px;    \r\n}\r\n\r\n.logo {\r\n    width: 120px;\r\n    display: block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.produto-img {\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    font-size: 19px;  \r\n}\r\n\r\ntable {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.opcoes-parcelamento {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.opcoes-parcelamento .btn {\r\n    margin-bottom: 10px;    \r\n}\r\n\r\n.metodo-pagamento {\r\n    margin-top: 30px;\r\n}\r\n\r\n.opcoes-para-parcelamento {\r\n    text-align: right;\r\n}\r\n\r\n.metodo-de-pagamento {\r\n    text-align: right;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    h3 {\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .opcoes-para-parcelamento {\r\n        text-align: left;\r\n    }    \r\n\r\n    .btn {\r\n        margin-top: 10px;    \r\n    }\r\n\r\n    .metodo-pagamento {\r\n        margin-top: 0px;\r\n    }\r\n    \r\n    .metodo-de-pagamento {\r\n        text-align: left;\r\n    }\r\n\r\n    .btn-accordion {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n      \r\n    table {\r\n        margin-top: -16px;\r\n        margin-bottom: -10px;\r\n    }\r\n        \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdXRvLWhlYWRpbmcge1xyXG5saW5lLWhlaWdodDogNDRweDtcclxuZm9udC1zaXplOiAyMnB4O1xyXG5tYXJnaW4tbGVmdDogMTBweDsgICAgXHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5wcm9kdXRvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDsgIFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ub3Bjb2VzLXBhcmNlbGFtZW50byB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ub3Bjb2VzLXBhcmNlbGFtZW50byAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgIFxyXG59XHJcblxyXG4ubWV0b2RvLXBhZ2FtZW50byB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ub3Bjb2VzLXBhcmEtcGFyY2VsYW1lbnRvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWV0b2RvLWRlLXBhZ2FtZW50byB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9wY29lcy1wYXJhLXBhcmNlbGFtZW50byB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm1ldG9kby1wYWdhbWVudG8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1ldG9kby1kZS1wYWdhbWVudG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1hY2NvcmRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuICAgICAgICBcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



var NegocieOnlineComponent = /** @class */ (function () {
    function NegocieOnlineComponent(apiRestService) {
        this.apiRestService = apiRestService;
        this.showFatura = true;
        this.showHeader = true;
        this.metodoPagamento = true;
    }
    NegocieOnlineComponent.prototype.ngOnInit = function () {
    };
    NegocieOnlineComponent.prototype.showPrazoFinalizacao = function () {
        this.prazoFinalizacao = true;
        this.opcoesParcelamento = false;
        this.metodoPagamento = false;
    };
    NegocieOnlineComponent.prototype.showOpcoesParcelamento = function () {
        this.opcoesParcelamento = true;
        this.showFatura = false;
        this.prazoFinalizacao = false;
        this.metodoPagamento = true;
    };
    NegocieOnlineComponent.ctorParameters = function () { return [
        { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
    ]; };
    NegocieOnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-negocie-online',
            template: __webpack_require__(/*! raw-loader!./negocie-online.component.html */ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html"),
            styles: [__webpack_require__(/*! ./negocie-online.component.css */ "./src/app/negocie-online/negocie-online.component.css")]
        })
    ], NegocieOnlineComponent);
    return NegocieOnlineComponent;
}());



/***/ }),

/***/ "./src/app/opcoes-routlet/opcoes-routlet.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opcoes-routlet/opcoes-routlet.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.back-beje {\r\n    background: #f8f8f8;\r\n}\r\n\r\n/* .back-red {\r\n    height: 100%;\r\n    background: url(/assets/img/back-red.png) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 185px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-title {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14.5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 100px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    max-width: 320px;\r\n    margin: 15px auto;\r\n  }\r\n\r\n.fundo-paulista {\r\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\r\n    background-size: cover;\r\n}\r\n\r\n.link-voltar {\r\n        font-size: 20px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.bottom-fixed {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        margin-bottom: 0px;\r\n        font-size: 18px;\r\n        padding-right: 17px;\r\n        padding-left: 17px;\r\n        }\r\n\r\n.fiz-pagamento-ok {\r\n        margin-top: 30px;\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .fiz-pagamento-ok {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bottom-fixed {\r\n        font-size: 14px;\r\n        bottom: 26px;        \r\n    }\r\n    \r\n    .logo {\r\n        width: 35%;\r\n        margin: 6px auto 3px;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 8px;  \r\n        height: 90px;     \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        height: 90px;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n   \r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n\r\n    .link-voltar {\r\n        font-size: 18px;\r\n        text-align: center;\r\n    }    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bjb2VzLXJvdXRsZXQvb3Bjb2VzLXJvdXRsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnSEFBd0c7SUFBeEcsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx1REFBdUQ7SUFDdkQsc0JBQXNCO0FBQzFCOztBQUVJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCOztBQUVKO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztLQUVDO1FBQ0csWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL29wY29lcy1yb3V0bGV0L29wY29lcy1yb3V0bGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYmFjay1iZWplIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbn1cclxuXHJcbi8qIC5iYWNrLXJlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay1yZWQucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovXHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNC41cHg7XHJcbn1cclxuXHJcbi5idG4tYWNlc3NhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTMyNjIwO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSxiYWNrZ3JvdW5kIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZ1bmRvLXBhdWxpc3RhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3JlY29ydGVfcGhpeHIuanBnXCIpIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiAgICAubGluay12b2x0YXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbS1maXhlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIC5maXotcGFnYW1lbnRvLW9rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfSAgICBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5maXotcGFnYW1lbnRvLW9rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tZml4ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3R0b206IDI2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggYXV0byAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4OyAgXHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCwgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH0gXHJcblxyXG4gICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5idG4tYWNlc3NhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGluay12b2x0YXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9ICAgIFxyXG5cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



var OpcoesRoutletComponent = /** @class */ (function () {
    function OpcoesRoutletComponent(apiRestService) {
        this.apiRestService = apiRestService;
        this.nome = this.apiRestService.getNome();
        this.showOpcoes = true;
        this.cardBodyPagamento = true;
    }
    OpcoesRoutletComponent.prototype.ngOnInit = function () {
    };
    OpcoesRoutletComponent.prototype.negocieOnline = function () {
        this.showOpcoes = false;
        this.showNegocieOnline = true;
        this.logo_menor = true;
    };
    OpcoesRoutletComponent.prototype.assistenteVirtual = function () {
        this.showOpcoes = false;
        this.showAssistenteVirtual = true;
    };
    OpcoesRoutletComponent.prototype.recebaNossaLigacao = function () {
        this.showOpcoes = false;
        this.showRecebaNossaLigacao = true;
    };
    OpcoesRoutletComponent.prototype.fizPagamento = function () {
        var _this = this;
        this.apiRestService.fizPagamento().subscribe(function (res) {
            if (res) {
                _this.cardBodyPagamento = false;
                _this.fizPagamentoOk = true;
            }
        });
    };
    OpcoesRoutletComponent.prototype.acordosAndamento = function () {
        this.showOpcoes = false;
        this.showAcordosAndamento = true;
        this.logo_menor = true;
    };
    OpcoesRoutletComponent.prototype.voltarMenu = function () {
        this.showOpcoes = true;
        this.showNegocieOnline = false;
        this.showAssistenteVirtual = false;
        this.showRecebaNossaLigacao = false;
        this.showAcordosAndamento = false;
        this.logo_menor = false;
    };
    OpcoesRoutletComponent.ctorParameters = function () { return [
        { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
    ]; };
    OpcoesRoutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opcoes-routlet',
            template: __webpack_require__(/*! raw-loader!./opcoes-routlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html"),
            styles: [__webpack_require__(/*! ./opcoes-routlet.component.css */ "./src/app/opcoes-routlet/opcoes-routlet.component.css")]
        })
    ], OpcoesRoutletComponent);
    return OpcoesRoutletComponent;
}());



/***/ }),

/***/ "./src/app/prazo-finalizacao/prazo-finalizacao.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/prazo-finalizacao/prazo-finalizacao.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    width: 100%;\r\n    font-size: 19px;\r\n    margin-bottom: 20px;  \r\n}\r\n\r\n.btn-yellow {\r\n    background: #ffbc4a;\r\n    color: white;\r\n}\r\n\r\n.escolha-data {\r\n    text-align: right;\r\n}\r\n\r\n.detalhes-titulo {\r\n    font-weight: bold;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n \r\n    .btn {\r\n        margin-bottom: 0px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .escolha-data {\r\n        text-align: left;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .detalhes-titulo {\r\n        margin-bottom: 0;\r\n        \r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhem8tZmluYWxpemFjYW8vcHJhem8tZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjs7SUFFcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ByYXpvLWZpbmFsaXphY2FvL3ByYXpvLWZpbmFsaXphY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxyXG59XHJcblxyXG4uYnRuLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXNjb2xoYS1kYXRhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGV0YWxoZXMtdGl0dWxvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVzY29saGEtZGF0YSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhbGhlcy10aXR1bG8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG59ICAgICJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrazoFinalizacaoComponent = /** @class */ (function () {
    function PrazoFinalizacaoComponent() {
        this.clickVoltar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opcoesParcelamento = true;
    }
    PrazoFinalizacaoComponent.prototype.ngOnInit = function () {
    };
    PrazoFinalizacaoComponent.prototype.showFinalizacao = function () {
        this.fim = true;
        this.opcoesParcelamento = false;
    };
    PrazoFinalizacaoComponent.prototype.mudarData = function () {
        this.fim = false;
        this.opcoesParcelamento = true;
    };
    PrazoFinalizacaoComponent.prototype.voltar = function () {
        this.clickVoltar.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PrazoFinalizacaoComponent.prototype, "clickVoltar", void 0);
    PrazoFinalizacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prazo-finalizacao',
            template: __webpack_require__(/*! raw-loader!./prazo-finalizacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html"),
            styles: [__webpack_require__(/*! ./prazo-finalizacao.component.css */ "./src/app/prazo-finalizacao/prazo-finalizacao.component.css")]
        })
    ], PrazoFinalizacaoComponent);
    return PrazoFinalizacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");



var RecebaNossaLigacaoComponent = /** @class */ (function () {
    function RecebaNossaLigacaoComponent(cd, apiRestService) {
        this.cd = cd;
        this.apiRestService = apiRestService;
        this.telMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    RecebaNossaLigacaoComponent.prototype.ngOnInit = function () {
    };
    RecebaNossaLigacaoComponent.prototype.cleanAlerts = function () {
        this.tel_inv = false;
    };
    RecebaNossaLigacaoComponent.prototype.envia = function () {
        var _this = this;
        var telNum = this.tel.replace(/[`\-()_.\{\}\[\]\\\/]/gi, '');
        var ddd = telNum.slice(0, 2);
        if (telNum.length < 11 || telNum.length > 12 || +ddd < 10) {
            this.tel_inv = true;
            return;
        }
        this.cadastrado = false;
        this.houve_erro = false;
        this.apiRestService.meLigue(telNum).subscribe(function (res) {
            if (res)
                _this.cadastrado = true;
            else
                _this.houve_erro = true;
        });
    };
    RecebaNossaLigacaoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
    ]; };
    RecebaNossaLigacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receba-nossa-ligacao',
            template: __webpack_require__(/*! raw-loader!./receba-nossa-ligacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html"),
            styles: [__webpack_require__(/*! ./receba-nossa-ligacao.component.css */ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css")]
        })
    ], RecebaNossaLigacaoComponent);
    return RecebaNossaLigacaoComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Francisco\claro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map