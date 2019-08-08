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

module.exports = "<img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\n<h3 class=\"text-center\">Selecione o produto que deseja o reenvio de boleto:</h3>\n\n    <accordion [isAnimated]=\"true\">\n        <accordion-group>\n          <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n            <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\n            <div class=\"pull-left float-left produto-heading\">Claro Móvel</div>\n          </button>\n                    \n      \n        </accordion-group>\n        <accordion-group>\n          <button class=\"btn btn-link\" accordion-heading>\n            <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\n            <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\n          </button>\n        </accordion-group>\n        <accordion-group>\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\n              <div class=\"pull-left float-left produto-heading\">Claro TV</div>\n            </button>\n          </accordion-group>\n      </accordion>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assistente-virtual/assistente-virtual.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assistente-virtual/assistente-virtual.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <a class=\"card col-lg-3\" href=\"http://m.me/negociaclaro\" target=\" _blank\">\n            <img src=\"assets/icons/messenger.png\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">Messenger</h5>\n            <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n            </div>\n            <p class=\"btn btn-acessar\">Quero negociar!</p>\n    </a>\n\n    <a class=\"card col-lg-3\" target=\" _blank\">\n        <img src=\"assets/icons/virtual_assistant.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">Assistente Virtual</h5>\n        <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n        \n        </div>\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\n    </a>\n\n    <a class=\"card col-lg-3\" href=\"https://telegram.me/negociaclaro_bot\" target=\" _blank\">\n        <img src=\"assets/icons/telegram.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">Telegram</h5>\n        <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n        \n        </div>\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\n    </a>\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpf-cnpj-box/cpf-cnpj-box.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tela-grid\">\n\n    \n\n <div class=\"cpf-box\">\n    <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\n    <p>Quer negociar seus débitos com a Claro? <br> Inicie aqui uma consulta sem custo!  </p>\n        <div class=\"form-group\"> \n            <input type=\"text\" [textMask]=\"mask()\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu CPF ou CNPJ\" [(ngModel)]=\"cpf_cnpj\" (input)=\"cleanAlerts()\" (keydown.backspace)=\"backspacePress($event)\" (keydown.enter)=\"valida()\">\n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"valida()\">Verificar</button>            \n        <div class=\"input_error\">\n            <p *ngIf=\"cpf_inv\">CPF inválido.</p>\n            <p *ngIf=\"cnpj_inv\">CNPJ inválido.</p>\n            <p *ngIf=\"input_inv\">Por favor, informe um CPF ou CNPJ.</p>\n            <p *ngIf=\"verificando\">Aguarde, estamos verificando. . .</p>\n            <p *ngIf=\"cpf_sem_debitos\">O CPF informado não tem débitos.</p>\n            <p *ngIf=\"cnpj_sem_debitos\">O CNPJ informado não tem débitos.</p>\n        </div>        \n    </div> \n </div>\n\n <p class=\"fixed-bottom auto_inicio\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</p>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/negocie-online/negocie-online.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/negocie-online/negocie-online.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"showHeader\">\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\n</header>\n\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\n  <accordion-group>\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"showHeader = false\">\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\n      <div class=\"pull-left float-left produto-heading\">Claro Móvel</div>  \n    </button>\n    \n    <div class=\"table-responsive-lg\" *ngIf=\"showFatura\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Fatura - Vencimento</th>\n            <th scope=\"col\">Descrição</th>\n            <th scope=\"col\">Valor (R$)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">10/07/2007</th>\n            <td>1</td>\n            <td>R$ 546,00</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Total</th>\n            <td></td>\n            <td>R$ 546,00</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>  \n    \n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\n      <div class=\"col-sm-3 opcoes-para-parcelamento\">\n        Opções para parcelamento:\n      </div>  \n      <div class=\"col-sm-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao()\">\n          R$15000,28 + 1 x R$150,27\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">\n          R$150,28 + 1 x R$150,27\n        </button>\n      </div>\n      <div class=\"col-sm-4\">\n        <button type=\"button\" class=\"btn btn-primary\">\n          R$150,28 + 1 x R$150,27\n        </button>\n      </div>    \n    </div>\n  \n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\"></app-prazo-finalizacao>\n\n    <div class=\"row metodo-pagamento\" *ngIf=\"metodoPagamento\">\n      <div class=\"col-sm-5 metodo-de-pagamento\">\n        Método de pagamento:\n      </div>\n      <div class=\"col-sm-3\">\n        <button type=\"button\" class=\"btn btn-primary\">\n          À vista: R$ 100,00\n        </button>\n      </div>\n      <div class=\"col-sm-3\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento()\">\n          Parcelado\n        </button> \n      </div>  \n    </div>\n    \n  </accordion-group>\n  <accordion-group>\n    <button class=\"btn btn-link btn-accordion\" accordion-heading>\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\n      <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\n    </button>\n  </accordion-group>\n  <accordion-group>\n      <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\n        <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\n        <div class=\"pull-left float-left produto-heading\">Claro TV</div>\n      </button>\n    </accordion-group>\n</accordion>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\n    <div class=\"col-lg-3 fundo-paulista\">\n    </div>\n \n    <div class=\"back-beje col-lg-9\">\n                            \n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\n            \n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\n                        \n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\n                <h3 class=\"text-center\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, {{nome}}!</h3>    \n                \n                <div class=\"row\">                    \n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\">\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\n                            <div class=\"card-body\">\n                            <h5 class=\"card-title\">Negocie Online</h5>\n                            <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                            \n                            </div>\n                            <p class=\"btn btn-acessar\">Acessar</p>\n                    </a>\n    \n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Assistente Virtual</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n    \n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Receba nossa Ligação</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n    \n            <div class=\"col-lg-3\" *ngIf=\"fizPagamentoOk\">\n                  <div class=\"container\">\n                        <span class=\"red\">Obrigada!</span><br><br>\n                        As informações de pagamento foram enviadas para a nossa central.<br>\n                        Caso necessário entraremos em contato no nosso número:<br> \n                        0800 208 8080         \n                </div>            \n        </div>\n\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Já fiz o Pagamento</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                        \n                    </div>\n                    <p class=\"btn btn-acessar\">Informar</p>\n                </div>\n    \n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\">\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Seus Acordos em Andamento</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n        </div>\n     </div>    \n                <p class=\"bottom-fixed back-beje\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</p>\n                \n    </div>    \n\n</div>      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/prazo-finalizacao/prazo-finalizacao.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prazo-finalizacao/prazo-finalizacao.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fim\">\n  <p>Detalhes do acordo:</p>\n  <p>Data do primeiro pagamento: 14/02/2019</p>\n  <p>Valor da parcela: R$ 10,00</p>\n  <p>Demais parcelas: 2 x R$ 10,00</p>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-yellow\">\n        Confirmar acordo\n      </button>\n    </div>\n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"mudarData()\">\n        Mudar data\n      </button>\n    </div>\n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar()\">\n        Mudar parcelamento\n      </button>\n    </div>            \n  </div>\n</div>\n\n<div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\">\n    <div class=\"col-sm-3 escolha-data\">\n        Escolha uma data para pagamento:\n    </div>  \n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"showFinalizacao()\">\n        Pagamento até amanhã\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\">\n        Pagamento em até 5 dias\n      </button>\n    </div>\n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary\">\n        Pagamento em até 10 dias\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"voltar()\">\n        Voltar\n      </button>\n    </div>    \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tel-box\">\n    <p>Informe seu número de telefone, fixo ou celular, para que possamos te ligar.</p>\n        <div class=\"form-group\"> \n            <input type=\"text\" [textMask]=\"{mask: telMask}\" class=\"form-control col-sm-8\" aria-describedby=\"emailHelp\" placeholder=\"(DDD) TELEFONE\" [(ngModel)]=\"tel\" (input)=\"cleanAlerts()\"> \n            <button type=\"submit\" class=\"col-sm-3\" (click)=\"envia()\">Enviar</button>\n            <div class=\"input_error\">\n                <p *ngIf=\"tel_inv\">Telefone inválido.</p>\n                <p *ngIf=\"verificando\">Aguarde . . .</p>\n                <p *ngIf=\"cadastrado\">Telefone cadastrado com sucesso.</p>\n                <p *ngIf=\"houve_erro\">Houve um erro. Tente novamente, por favor.</p>\n            </div>            \n    </div>\n</div>    "

/***/ }),

/***/ "./src/app/acordos-andamento/acordos-andamento.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/acordos-andamento/acordos-andamento.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-heading {\n    line-height: 44px;\n    font-size: 22px;\n    margin-left: 10px;    \n    }\n    \n    .logo {\n        width: 120px;\n        display: block;\n        margin: 10px auto;\n    }\n    \n    .produto-img {\n        height: 45px;\n        float: left;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmIiwiZmlsZSI6InNyYy9hcHAvYWNvcmRvcy1hbmRhbWVudG8vYWNvcmRvcy1hbmRhbWVudG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdXRvLWhlYWRpbmcge1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgXG4gICAgfVxuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5wcm9kdXRvLWltZyB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfSJdfQ== */"

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

module.exports = "a {\n    text-decoration: none !important;\n    color: inherit;\n}\n\n.card {\n    margin: auto;\n    border-radius: 8px;\n    background-color: white;\n    border: 0;\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\n    padding-right: 0;\n    padding-left: 0;\n    margin-top: 20px;\n}\n\n.card-body {\n    height: 200px;\n    \n}\n\n.card-img-top {\n    width: 80px;\n    margin: auto;\n    padding-top: 5px;\n}\n\n.card-title {\n    font-size: 18px;\n    text-align: center;\n}\n\n.btn-acessar {\n    background: #e32620;\n    padding: 8px 16px;\n    font-size: 16px;\n    border-radius: 50px;\n    line-height: 1;\n    \n    color: white;\n    margin: 20px auto;\n    width: 150px;\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n}\n\n@media (max-width: 768px) {\n    .logo {\n        width: 35%;\n        margin: 3px auto;\n    }\n\n    .card {\n        width: 80%;\n        /* text-align: center; */\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        margin-top: 15px;       \n    }\n\n    .card-text, .card-title {\n        font-size: 13px;\n    }\n\n    .card-title { \n        font-weight: bold;\n    }    \n\n     .card-img-top {\n        margin: auto;\n        padding: 5px;\n    } \n\n     .card-body {\n        height: auto;\n        padding-top: 5px;\n        padding-bottom: 5px;\n\n    } \n\n    .card-title {\n        margin-bottom: 0px;\n    }\n\n    .btn-acessar {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnSEFBd0c7SUFBeEcsd0dBQXdHO0FBQzVHOztBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7S0FFQztRQUNHLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztLQUVDO1FBQ0csWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXNzaXN0ZW50ZS12aXJ0dWFsL2Fzc2lzdGVudGUtdmlydHVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIFxufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYWNlc3NhciB7XG4gICAgYmFja2dyb3VuZDogI2UzMjYyMDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSksYmFja2dyb3VuZCAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgbWFyZ2luOiAzcHggYXV0bztcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDsgICAgICAgXG4gICAgfVxuXG4gICAgLmNhcmQtdGV4dCwgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUgeyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSAgICBcblxuICAgICAuY2FyZC1pbWctdG9wIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfSBcblxuICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgfSBcblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIC5idG4tYWNlc3NhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */"

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

module.exports = ".form-group {\n    max-width: 500px;\n    margin: 0 auto;\n}\n\n.form-control {\n    margin-bottom: 15px;\n}\n\n.tela-grid {\n    background: url(/assets/img/back.jpg) 100% 50% no-repeat;\n    height: 100%;\n    position: relative;\n}\n\n.cpf-box {\n    height: 50%;\n    \n    margin: auto;\n    position: absolute;\n    top: 0; bottom: 0; right: 90px; \n    /*\n    position: absolute;\n  right: 20px; \n  margin: auto; */\n  font-family: SourceSansPro;\n  font-weight: 600;\n  font-size: 19px;\n}\n\n.cpf-box .logo {\n    display: block;\n    max-width: 400px;\n    margin: 0px auto 30px;\n}\n\n.cpf-box p {\n    color: aliceblue;\n    text-align: center;\n    \n}\n\n.cpf-box input {\n    font-size: 25px;\n    float: left;\n    /*width: 70%;*/\n    height: 52px;\n}\n\n.cpf-box button {\n    font-family: 'DINOT-Medium';\n    background: #ffbc4a;\n    color: black;\n    padding: 8px 16px;\n    border-radius: 50px;\n    float: left;\n    height: 52px;\n    margin-left: 10px;\n    font-size: 18px;\n}\n\n.input_error {\n    clear: both;    \n}\n\n.auto_inicio {\n    text-align: right;\n    color: white;\n    bottom: 5px;\n    right: 10px;\n  }\n\n@media (max-width: 768px) {\n    .cpf-box {\n     position: static;\n     padding: 10px;\n     height: 100%;   \n    }\n    \n    .cpf-box .logo {\n        width: 60%;\n    }\n    .cpf-box button {\n        margin-left: 0px;\n        margin-top: 10px;\n    }    \n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3BmLWNucGotYm94L2NwZi1jbnBqLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVc7SUFDOUI7OztpQkFHYTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVGO0lBQ0k7S0FDQyxnQkFBZ0I7S0FDaEIsYUFBYTtLQUNiLFlBQVk7SUFDYjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3BmLWNucGotYm94L2NwZi1jbnBqLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50ZWxhLWdyaWQge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrLmpwZykgMTAwJSA1MCUgbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcGYtYm94IHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogOTBweDsgXG4gICAgLypcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4OyBcbiAgbWFyZ2luOiBhdXRvOyAqL1xuICBmb250LWZhbWlseTogU291cmNlU2Fuc1BybztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uY3BmLWJveCAubG9nbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XG59XG5cbi5jcGYtYm94IHAge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuXG4uY3BmLWJveCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8qd2lkdGg6IDcwJTsqL1xuICAgIGhlaWdodDogNTJweDtcbn1cblxuLmNwZi1ib3ggYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXRfZXJyb3Ige1xuICAgIGNsZWFyOiBib3RoOyAgICBcbn1cblxuLmF1dG9faW5pY2lvIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY3BmLWJveCB7XG4gICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIGhlaWdodDogMTAwJTsgICBcbiAgICB9XG4gICAgXG4gICAgLmNwZi1ib3ggLmxvZ28ge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAuY3BmLWJveCBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH0gICAgXG59ICAgICJdfQ== */"

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

module.exports = ".produto-heading {\nline-height: 44px;\nfont-size: 22px;\nmargin-left: 10px;    \n}\n\n.logo {\n    width: 120px;\n    display: block;\n    margin: 10px auto;\n}\n\n.produto-img {\n    height: 45px;\n    float: left;\n}\n\n.btn {\n    width: 100%;\n    font-size: 19px;  \n}\n\ntable {\n    margin-bottom: 20px;\n}\n\n.opcoes-parcelamento {\n    margin-bottom: 15px;\n}\n\n.opcoes-parcelamento .btn {\n    margin-bottom: 10px;    \n}\n\n.metodo-pagamento {\n    margin-top: 30px;\n}\n\n.opcoes-para-parcelamento {\n    text-align: right;\n}\n\n.metodo-de-pagamento {\n    text-align: right;\n}\n\n@media (max-width: 768px) {\n\n    .opcoes-para-parcelamento {\n        text-align: left;\n    }    \n\n    .btn {\n        margin-top: 10px;    \n    }\n\n    .metodo-de-pagamento {\n        text-align: left;\n    }\n\n    .btn-accordion {\n        margin: 0;\n        padding: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uZWdvY2llLW9ubGluZS9uZWdvY2llLW9ubGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1dG8taGVhZGluZyB7XG5saW5lLWhlaWdodDogNDRweDtcbmZvbnQtc2l6ZTogMjJweDtcbm1hcmdpbi1sZWZ0OiAxMHB4OyAgICBcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLnByb2R1dG8taW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTlweDsgIFxufVxuXG50YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm9wY29lcy1wYXJjZWxhbWVudG8ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5vcGNvZXMtcGFyY2VsYW1lbnRvIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgIFxufVxuXG4ubWV0b2RvLXBhZ2FtZW50byB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm9wY29lcy1wYXJhLXBhcmNlbGFtZW50byB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tZXRvZG8tZGUtcGFnYW1lbnRvIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAub3Bjb2VzLXBhcmEtcGFyY2VsYW1lbnRvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9ICAgIFxuXG4gICAgLmJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7ICAgIFxuICAgIH1cblxuICAgIC5tZXRvZG8tZGUtcGFnYW1lbnRvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAuYnRuLWFjY29yZGlvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59Il19 */"

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

module.exports = ".back-beje {\n    background: #f8f8f8;\n}\n\n/* .back-red {\n    height: 100%;\n    background: url(/assets/img/back-red.png) no-repeat;\n    background-size: cover;\n} */\n\n.card {\n    margin: auto;\n    border-radius: 8px;\n    background-color: white;\n    border: 0;\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\n    padding-right: 0;\n    padding-left: 0;\n    margin-top: 20px;\n}\n\n.card-body {\n    height: 200px;\n    \n}\n\n.card-img-top {\n    width: 80px;\n    margin: auto;\n    padding-top: 5px;\n}\n\n.card-title {\n    font-size: 18px;\n}\n\n.btn-acessar {\n    background: #e32620;\n    padding: 8px 16px;\n    font-size: 16px;\n    border-radius: 50px;\n    line-height: 1;\n    \n    color: white;\n    margin: 20px auto;\n    width: 100px;\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n}\n\n.logo {\n    display: block;\n    max-width: 320px;\n    margin: 15px auto;\n  }\n\n.fundo-paulista {\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\n    background-size: cover;\n}\n\n.link-voltar {\n        font-size: 20px;\n        margin-bottom: 5px;\n    }\n\n.bottom-fixed {\n        position: fixed;\n        bottom: 0px;\n        margin-bottom: 0px;\n        font-size: 18px;\n        padding-right: 17px;\n        padding-left: 17px;\n        }\n\n@media (max-width: 768px) {\n\n    .bottom-fixed {\n        font-size: 14px;\n        bottom: 26px;        \n    }\n    \n    .logo {\n        width: 35%;\n        margin: 3px auto;\n    }\n\n    .card {\n        width: 80%;\n        /* text-align: center; */\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        margin-top: 8px;       \n    }\n\n    .card-text, .card-title {\n        font-size: 13px;\n    }\n\n    .card-title { \n        font-weight: bold;\n    }    \n\n     .card-img-top {\n        margin: auto;\n        padding: 5px;\n    } \n\n     .card-body {\n        height: auto;\n        padding-top: 5px;\n        padding-bottom: 5px;\n\n    } \n\n    .card-title {\n        margin-bottom: 0px;\n    }\n   \n    .btn-acessar {\n        display: none;\n    }\n\n    .link-voltar {\n        font-size: 18px;\n        text-align: center;\n    }    \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bjb2VzLXJvdXRsZXQvb3Bjb2VzLXJvdXRsZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0hBQXdHO0lBQXhHLHdHQUF3RztBQUM1Rzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdURBQXVEO0lBQ3ZELHNCQUFzQjtBQUMxQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjs7QUFHUjs7SUFFSTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztLQUVDO1FBQ0csWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL29wY29lcy1yb3V0bGV0L29wY29lcy1yb3V0bGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1iZWplIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG4vKiAuYmFjay1yZWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay1yZWQucG5nKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0gKi9cblxuLmNhcmQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgXG59XG5cbi5jYXJkLWltZy10b3Age1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYnRuLWFjZXNzYXIge1xuICAgIGJhY2tncm91bmQ6ICNlMzI2MjA7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpLGJhY2tncm91bmQgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KTtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIH1cblxuICAuZnVuZG8tcGF1bGlzdGEge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3JlY29ydGVfcGhpeHIuanBnXCIpIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4gICAgLmxpbmstdm9sdGFyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmJvdHRvbS1maXhlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgICAgIH1cbiAgICAgIFxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgIC5ib3R0b20tZml4ZWQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvdHRvbTogMjZweDsgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIG1hcmdpbjogM3B4IGF1dG87XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDsgICAgICAgXG4gICAgfVxuXG4gICAgLmNhcmQtdGV4dCwgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUgeyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSAgICBcblxuICAgICAuY2FyZC1pbWctdG9wIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfSBcblxuICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgfSBcblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgIFxuICAgIC5idG4tYWNlc3NhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxpbmstdm9sdGFyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfSAgICBcblxufSJdfQ== */"

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

module.exports = ".btn {\n    width: 100%;\n    font-size: 19px;\n    margin-bottom: 20px;  \n}\n\n.btn-yellow {\n    background: #ffbc4a;\n    color: white;\n}\n\n.escolha-data {\n    text-align: right;\n}\n\n@media (max-width: 768px) {\n \n    .btn {\n        margin-bottom: 0px;\n        margin-top: 20px;\n    }\n\n    .escolha-data {\n        text-align: left;\n        margin-bottom: 10px;\n    }\n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhem8tZmluYWxpemFjYW8vcHJhem8tZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJhem8tZmluYWxpemFjYW8vcHJhem8tZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXG59XG5cbi5idG4teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZiYzRhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVzY29saGEtZGF0YSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuIFxuICAgIC5idG4ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmVzY29saGEtZGF0YSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufSAgICAiXX0= */"

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

module.exports = ".tel-box {\n    margin: 50px auto;\n    width: 75%;\n}\n\n.tel-box p {\n    text-align: center;\n    font-size: 21px;\n    \n}\n\n.tel-box input {\n    font-size: 25px;\n    float: left;\n    /*width: 70%;*/\n    height: 52px;\n}\n\n.tel-box button {\n    font-family: 'DINOT-Medium';\n    background: #ffbc4a;\n    color: black;\n    padding: 8px 16px;\n    border-radius: 50px;\n    float: left;\n    height: 52px;\n    margin-left: 10px;\n    font-size: 18px;\n}\n\n.input_error {\n    clear: both;\n    padding-top: 10px;\n}\n\n@media (max-width: 768px) {\n    .tel-box {\n     padding: 5px;\n     width: 100%;   \n    }\n    \n    .tel-box .logo {\n        width: 60%;\n    }\n    .tel-box button {\n        margin-left: 0px;\n        margin-top: 10px;\n    }    \n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWJhLW5vc3NhLWxpZ2FjYW8vcmVjZWJhLW5vc3NhLWxpZ2FjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0tBQ0MsWUFBWTtLQUNaLFdBQVc7SUFDWjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVjZWJhLW5vc3NhLWxpZ2FjYW8vcmVjZWJhLW5vc3NhLWxpZ2FjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWwtYm94IHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB3aWR0aDogNzUlO1xufVxuXG4udGVsLWJveCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIFxufVxuXG4udGVsLWJveCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8qd2lkdGg6IDcwJTsqL1xuICAgIGhlaWdodDogNTJweDtcbn1cblxuLnRlbC1ib3ggYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ0RJTk9ULU1lZGl1bSc7XG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXRfZXJyb3Ige1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudGVsLWJveCB7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgd2lkdGg6IDEwMCU7ICAgXG4gICAgfVxuICAgIFxuICAgIC50ZWwtYm94IC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gICAgLnRlbC1ib3ggYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9ICAgIFxufSAgICAiXX0= */"

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

module.exports = __webpack_require__(/*! /home/guilherme/claro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map