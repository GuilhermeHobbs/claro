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

module.exports = "<div class=\"row height-100\">\n    <div class=\"col-lg-3 fundo-paulista\">\n    </div>\n \n    <div class=\"back-beje col-lg-9\">\n                            \n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\n            \n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\n                        \n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\n                <h3 class=\"text-center\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, {{nome}}!</h3>    \n                \n                <div class=\"row\">                    \n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\">\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\n                            <div class=\"card-body\">\n                            <h5 class=\"card-title\">Negocie Online</h5>\n                            <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                            \n                            </div>\n                            <p class=\"btn btn-acessar\">Acessar</p>\n                    </a>\n    \n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Assistente Virtual</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n    \n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Receba nossa Ligação</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n    \n            <div class=\"col-lg-3\" *ngIf=\"fizPagamentoOk\">\n                  <div class=\"container\">\n                        <span class=\"red\">Obrigada!</span><br><br>\n                        As informações de pagamento foram enviadas para a nossa central.<br>\n                        Caso necessário entraremos em contato no nosso número:<br> \n                        0800 208 8080         \n                </div>            \n        </div>\n\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Já fiz o Pagamento</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                        \n                    </div>\n                    <p class=\"btn btn-acessar\">Informar</p>\n                </div>\n    \n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\">\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">Seus Acordos em Andamento</h5>\n                    <p class=\"card-text\">Some quick example text to  bulk of the card's content.</p>\n                    \n                    </div>\n                    <p class=\"btn btn-acessar\">Acessar</p>\n            </a>\n        </div>\n     </div>    \n                <p class=\"bottom-fixed back-beje\">A Fulltimm é uma empresa autorizada pela Claro para a cobrança de débito.</p>\n                \n    </div>    \n\n</div>      "

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

module.exports = ".produto-heading {\n    line-height: 44px;\n    font-size: 22px;\n    margin-left: 10px;    \n    }\n    \n    .logo {\n        width: 120px;\n        display: block;\n        margin: 10px auto;\n    }\n    \n    .produto-img {\n        height: 45px;\n        float: left;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2YiLCJmaWxlIjoiYXBwL2Fjb3Jkb3MtYW5kYW1lbnRvL2Fjb3Jkb3MtYW5kYW1lbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHV0by1oZWFkaW5nIHtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxuICAgIH1cbiAgICBcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAucHJvZHV0by1pbWcge1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH0iXX0= */"

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


let AcordosAndamentoComponent = class AcordosAndamentoComponent {
    constructor() { }
    ngOnInit() {
    }
};
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
/*! exports provided: ApiRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestService", function() { return ApiRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ApiRestService = class ApiRestService {
    constructor() { }
    temDividas(cpf) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    getNome() {
        return ("Guilherme Hobbs");
    }
    meLigue(num) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    fizPagamento() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ApiRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiRestService);



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






const routes = [
    { path: '', component: _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_3__["CpfCnpjBoxComponent"], pathMatch: 'full' },
    { path: 'negocie-online', component: _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_5__["NegocieOnlineComponent"] },
    { path: 'opcoes-routlet', component: _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_4__["OpcoesRoutletComponent"] }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm2015/ngx-soap.js");
/* harmony import */ var _cpf_cnpj_box_cpf_cnpj_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cpf-cnpj-box/cpf-cnpj-box.component */ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.ts");
/* harmony import */ var _negocie_online_negocie_online_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./negocie-online/negocie-online.component */ "./src/app/negocie-online/negocie-online.component.ts");
/* harmony import */ var _opcoes_routlet_opcoes_routlet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opcoes-routlet/opcoes-routlet.component */ "./src/app/opcoes-routlet/opcoes-routlet.component.ts");
/* harmony import */ var _assistente_virtual_assistente_virtual_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assistente-virtual/assistente-virtual.component */ "./src/app/assistente-virtual/assistente-virtual.component.ts");
/* harmony import */ var _receba_nossa_ligacao_receba_nossa_ligacao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./receba-nossa-ligacao/receba-nossa-ligacao.component */ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.ts");
/* harmony import */ var _acordos_andamento_acordos_andamento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./acordos-andamento/acordos-andamento.component */ "./src/app/acordos-andamento/acordos-andamento.component.ts");
/* harmony import */ var _prazo_finalizacao_prazo_finalizacao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prazo-finalizacao/prazo-finalizacao.component */ "./src/app/prazo-finalizacao/prazo-finalizacao.component.ts");

















let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/assistente-virtual/assistente-virtual.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/assistente-virtual/assistente-virtual.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    text-decoration: none !important;\n    color: inherit;\n}\n\n.card {\n    margin: auto;\n    border-radius: 8px;\n    background-color: white;\n    border: 0;\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\n    padding-right: 0;\n    padding-left: 0;\n    margin-top: 20px;\n}\n\n.card-body {\n    height: 200px;\n    \n}\n\n.card-img-top {\n    width: 80px;\n    margin: auto;\n    padding-top: 5px;\n}\n\n.card-title {\n    font-size: 18px;\n    text-align: center;\n}\n\n.btn-acessar {\n    background: #e32620;\n    padding: 8px 16px;\n    font-size: 16px;\n    border-radius: 50px;\n    line-height: 1;\n    \n    color: white;\n    margin: 20px auto;\n    width: 150px;\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n}\n\n@media (max-width: 768px) {\n    .logo {\n        width: 35%;\n        margin: 3px auto;\n    }\n\n    .card {\n        width: 80%;\n        /* text-align: center; */\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        margin-top: 15px;       \n    }\n\n    .card-text, .card-title {\n        font-size: 13px;\n    }\n\n    .card-title { \n        font-weight: bold;\n    }    \n\n     .card-img-top {\n        margin: auto;\n        padding: 5px;\n    } \n\n     .card-body {\n        height: auto;\n        padding-top: 5px;\n        padding-bottom: 5px;\n\n    } \n\n    .card-title {\n        margin-bottom: 0px;\n    }\n\n    .btn-acessar {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Npc3RlbnRlLXZpcnR1YWwvYXNzaXN0ZW50ZS12aXJ0dWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjOztJQUVkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdIQUF3RztJQUF4Ryx3R0FBd0c7QUFDNUc7O0FBR0E7SUFDSTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO1FBQ3hCLDhCQUFtQjtRQUFuQiw2QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztLQUVDO1FBQ0csWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiYXBwL2Fzc2lzdGVudGUtdmlydHVhbC9hc3Npc3RlbnRlLXZpcnR1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSk7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWFjZXNzYXIge1xuICAgIGJhY2tncm91bmQ6ICNlMzI2MjA7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpLGJhY2tncm91bmQgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIG1hcmdpbjogM3B4IGF1dG87XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7ICAgICAgIFxuICAgIH1cblxuICAgIC5jYXJkLXRleHQsIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gICAgXG5cbiAgICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH0gXG5cbiAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgIH0gXG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuYnRuLWFjZXNzYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */"

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

/***/ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n    max-width: 500px;\n    margin: 0 auto;\n}\n\n.form-control {\n    margin-bottom: 15px;\n}\n\n.tela-grid {\n    background: url(/assets/img/back.jpg) 100% 50% no-repeat;\n    height: 100%;\n    position: relative;\n}\n\n.cpf-box {\n    height: 50%;\n    \n    margin: auto;\n    position: absolute;\n    top: 0; bottom: 0; right: 90px; \n    /*\n    position: absolute;\n  right: 20px; \n  margin: auto; */\n  font-family: SourceSansPro;\n  font-weight: 600;\n  font-size: 19px;\n}\n\n.cpf-box .logo {\n    display: block;\n    max-width: 400px;\n    margin: 0px auto 30px;\n}\n\n.cpf-box p {\n    color: aliceblue;\n    text-align: center;\n    \n}\n\n.cpf-box input {\n    font-size: 25px;\n    float: left;\n    /*width: 70%;*/\n    height: 52px;\n}\n\n.cpf-box button {\n    font-family: 'DINOT-Medium';\n    background: #ffbc4a;\n    color: black;\n    padding: 8px 16px;\n    border-radius: 50px;\n    float: left;\n    height: 52px;\n    margin-left: 10px;\n    font-size: 18px;\n}\n\n.input_error {\n    clear: both;    \n}\n\n.auto_inicio {\n    text-align: right;\n    color: white;\n    bottom: 5px;\n    right: 10px;\n  }\n\n@media (max-width: 768px) {\n    .cpf-box {\n     position: static;\n     padding: 10px;\n     height: 100%;   \n    }\n    \n    .cpf-box .logo {\n        width: 60%;\n    }\n    .cpf-box button {\n        margin-left: 0px;\n        margin-top: 10px;\n    }    \n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jcGYtY25wai1ib3gvY3BmLWNucGotYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVztJQUM5Qjs7O2lCQUdhO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0FBRUY7SUFDSTtLQUNDLGdCQUFnQjtLQUNoQixhQUFhO0tBQ2IsWUFBWTtJQUNiOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiYXBwL2NwZi1jbnBqLWJveC9jcGYtY25wai1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udGVsYS1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay5qcGcpIDEwMCUgNTAlIG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3BmLWJveCB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDkwcHg7IFxuICAgIC8qXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDsgXG4gIG1hcmdpbjogYXV0bzsgKi9cbiAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmNwZi1ib3ggLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xufVxuXG4uY3BmLWJveCBwIHtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuLmNwZi1ib3ggaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvKndpZHRoOiA3MCU7Ki9cbiAgICBoZWlnaHQ6IDUycHg7XG59XG5cbi5jcGYtYm94IGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdESU5PVC1NZWRpdW0nO1xuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0X2Vycm9yIHtcbiAgICBjbGVhcjogYm90aDsgICAgXG59XG5cbi5hdXRvX2luaWNpbyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNwZi1ib3gge1xuICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICBoZWlnaHQ6IDEwMCU7ICAgXG4gICAgfVxuICAgIFxuICAgIC5jcGYtYm94IC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gICAgLmNwZi1ib3ggYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9ICAgIFxufSAgICAiXX0= */"

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
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm2015/ngx-soap.js");





let CpfCnpjBoxComponent = class CpfCnpjBoxComponent {
    constructor(soap, router, cd, apiRestService) {
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
            .then(client => {
            console.log('Client', client);
            this.client = client;
        })
            .catch(err => console.log('Error', err));
    }
    sum() {
        const body = {
            intA: this.intA,
            intB: this.intB
        };
        this.client.call('Add', body).subscribe(res => {
            console.log('method response', res);
            this.xmlResponse = res.xml;
            this.message = res.result.AddResult;
        }, err => console.log(err));
    }
    ngOnInit() {
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
        let cpfCnpj = this.cpf_cnpj.replace(/[`\-.\{\}\[\]\\\/]/gi, '');
        switch (cpfCnpj.length) {
            case 11: {
                if (this.testaCPF(cpfCnpj)) {
                    this.verificando = true;
                    this.apiRestService.temDividas(cpfCnpj).subscribe(div => {
                        this.verificando = false;
                        if (div)
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
                    this.verificando = true;
                    this.apiRestService.temDividas(cpfCnpj).subscribe(div => {
                        this.verificando = false;
                        if (div)
                            this.router.navigateByUrl('/opcoes-routlet');
                        else
                            this.cnpj_sem_debitos = true;
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
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_4__["NgxSoapService"] },
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

module.exports = ".produto-heading {\nline-height: 44px;\nfont-size: 22px;\nmargin-left: 10px;    \n}\n\n.logo {\n    width: 120px;\n    display: block;\n    margin: 10px auto;\n}\n\n.produto-img {\n    height: 45px;\n    float: left;\n}\n\n.btn {\n    width: 100%;\n    font-size: 19px;  \n}\n\ntable {\n    margin-bottom: 20px;\n}\n\n.opcoes-parcelamento {\n    margin-bottom: 15px;\n}\n\n.opcoes-parcelamento .btn {\n    margin-bottom: 10px;    \n}\n\n.metodo-pagamento {\n    margin-top: 30px;\n}\n\n.opcoes-para-parcelamento {\n    text-align: right;\n}\n\n.metodo-de-pagamento {\n    text-align: right;\n}\n\n@media (max-width: 768px) {\n\n    .opcoes-para-parcelamento {\n        text-align: left;\n    }    \n\n    .btn {\n        margin-top: 10px;    \n    }\n\n    .metodo-de-pagamento {\n        text-align: left;\n    }\n\n    .btn-accordion {\n        margin: 0;\n        padding: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZWdvY2llLW9ubGluZS9uZWdvY2llLW9ubGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJhcHAvbmVnb2NpZS1vbmxpbmUvbmVnb2NpZS1vbmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdXRvLWhlYWRpbmcge1xubGluZS1oZWlnaHQ6IDQ0cHg7XG5mb250LXNpemU6IDIycHg7XG5tYXJnaW4tbGVmdDogMTBweDsgICAgXG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5wcm9kdXRvLWltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE5cHg7ICBcbn1cblxudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vcGNvZXMtcGFyY2VsYW1lbnRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ub3Bjb2VzLXBhcmNlbGFtZW50byAuYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBcbn1cblxuLm1ldG9kby1wYWdhbWVudG8ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5vcGNvZXMtcGFyYS1wYXJjZWxhbWVudG8ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWV0b2RvLWRlLXBhZ2FtZW50byB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgLm9wY29lcy1wYXJhLXBhcmNlbGFtZW50byB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfSAgICBcblxuICAgIC5idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyAgICBcbiAgICB9XG5cbiAgICAubWV0b2RvLWRlLXBhZ2FtZW50byB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmJ0bi1hY2NvcmRpb24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufSJdfQ== */"

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
    constructor(apiRestService) {
        this.apiRestService = apiRestService;
        this.showFatura = true;
        this.showHeader = true;
        this.metodoPagamento = true;
    }
    ngOnInit() {
    }
    showPrazoFinalizacao() {
        this.prazoFinalizacao = true;
        this.opcoesParcelamento = false;
        this.metodoPagamento = false;
    }
    showOpcoesParcelamento() {
        this.opcoesParcelamento = true;
        this.showFatura = false;
        this.prazoFinalizacao = false;
        this.metodoPagamento = true;
    }
};
NegocieOnlineComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] }
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

module.exports = ".back-beje {\n    background: #f8f8f8;\n}\n\n/* .back-red {\n    height: 100%;\n    background: url(/assets/img/back-red.png) no-repeat;\n    background-size: cover;\n} */\n\n.card {\n    margin: auto;\n    border-radius: 8px;\n    background-color: white;\n    border: 0;\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\n    padding-right: 0;\n    padding-left: 0;\n    margin-top: 20px;\n}\n\n.card-body {\n    height: 200px;\n    \n}\n\n.card-img-top {\n    width: 80px;\n    margin: auto;\n    padding-top: 5px;\n}\n\n.card-title {\n    font-size: 18px;\n}\n\n.btn-acessar {\n    background: #e32620;\n    padding: 8px 16px;\n    font-size: 16px;\n    border-radius: 50px;\n    line-height: 1;\n    \n    color: white;\n    margin: 20px auto;\n    width: 100px;\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\n}\n\n.logo {\n    display: block;\n    max-width: 320px;\n    margin: 15px auto;\n  }\n\n.fundo-paulista {\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\n    background-size: cover;\n}\n\n.link-voltar {\n        font-size: 20px;\n        margin-bottom: 5px;\n    }\n\n.bottom-fixed {\n        position: fixed;\n        bottom: 0px;\n        margin-bottom: 0px;\n        font-size: 18px;\n        padding-right: 17px;\n        padding-left: 17px;\n        }\n\n@media (max-width: 768px) {\n\n    .bottom-fixed {\n        font-size: 14px;\n        bottom: 20px;        \n    }\n    \n    .logo {\n        width: 35%;\n        margin: 3px auto;\n    }\n\n    .card {\n        width: 80%;\n        /* text-align: center; */\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        margin-top: 8px;       \n    }\n\n    .card-text, .card-title {\n        font-size: 13px;\n    }\n\n    .card-title { \n        font-weight: bold;\n    }    \n\n     .card-img-top {\n        margin: auto;\n        padding: 5px;\n    } \n\n     .card-body {\n        height: auto;\n        padding-top: 5px;\n        padding-bottom: 5px;\n\n    } \n\n    .card-title {\n        margin-bottom: 0px;\n    }\n   \n    .btn-acessar {\n        display: none;\n    }\n\n    .link-voltar {\n        font-size: 18px;\n        text-align: center;\n    }    \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcGNvZXMtcm91dGxldC9vcGNvZXMtcm91dGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0dBSUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYzs7SUFFZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnSEFBd0c7SUFBeEcsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx1REFBdUQ7SUFDdkQsc0JBQXNCO0FBQzFCOztBQUVJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCOztBQUdSOztJQUVJO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw4QkFBbUI7UUFBbkIsNkJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0tBRUM7UUFDRyxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7S0FFQztRQUNHLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1COztJQUV2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6ImFwcC9vcGNvZXMtcm91dGxldC9vcGNvZXMtcm91dGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYmVqZSB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLyogLmJhY2stcmVkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2JhY2stcmVkLnBuZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59ICovXG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIFxufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ0bi1hY2Vzc2FyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTMyNjIwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KSxiYWNrZ3JvdW5kIC4xNXMgY3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSk7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICB9XG5cbiAgLmZ1bmRvLXBhdWxpc3RhIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9yZWNvcnRlX3BoaXhyLmpwZ1wiKSBib3R0b207XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuICAgIC5saW5rLXZvbHRhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5ib3R0b20tZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xuICAgICAgICB9XG4gICAgICBcblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuYm90dG9tLWZpeGVkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3R0b206IDIwcHg7ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICBtYXJnaW46IDNweCBhdXRvO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7ICAgICAgIFxuICAgIH1cblxuICAgIC5jYXJkLXRleHQsIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlIHsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gICAgXG5cbiAgICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH0gXG5cbiAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgIH0gXG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICBcbiAgICAuYnRuLWFjZXNzYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5saW5rLXZvbHRhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0gICAgXG5cbn0iXX0= */"

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
        this.showOpcoes = true;
        this.cardBodyPagamento = true;
    }
    ngOnInit() {
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

module.exports = ".btn {\n    width: 100%;\n    font-size: 19px;\n    margin-bottom: 20px;  \n}\n\n.btn-yellow {\n    background: #ffbc4a;\n    color: white;\n}\n\n.escolha-data {\n    text-align: right;\n}\n\n@media (max-width: 768px) {\n \n    .btn {\n        margin-bottom: 0px;\n        margin-top: 20px;\n    }\n\n    .escolha-data {\n        text-align: left;\n        margin-bottom: 10px;\n    }\n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmF6by1maW5hbGl6YWNhby9wcmF6by1maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoiYXBwL3ByYXpvLWZpbmFsaXphY2FvL3ByYXpvLWZpbmFsaXphY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxufVxuXG4uYnRuLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5lc2NvbGhhLWRhdGEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiBcbiAgICAuYnRuIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5lc2NvbGhhLWRhdGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn0gICAgIl19 */"

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


let PrazoFinalizacaoComponent = class PrazoFinalizacaoComponent {
    constructor() {
        this.clickVoltar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opcoesParcelamento = true;
    }
    ngOnInit() {
    }
    showFinalizacao() {
        this.fim = true;
        this.opcoesParcelamento = false;
    }
    mudarData() {
        this.fim = false;
        this.opcoesParcelamento = true;
    }
    voltar() {
        this.clickVoltar.emit(true);
    }
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



/***/ }),

/***/ "./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/receba-nossa-ligacao/receba-nossa-ligacao.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tel-box {\n    margin: 50px auto;\n    width: 75%;\n}\n\n.tel-box p {\n    text-align: center;\n    font-size: 21px;\n    \n}\n\n.tel-box input {\n    font-size: 25px;\n    float: left;\n    /*width: 70%;*/\n    height: 52px;\n}\n\n.tel-box button {\n    font-family: 'DINOT-Medium';\n    background: #ffbc4a;\n    color: black;\n    padding: 8px 16px;\n    border-radius: 50px;\n    float: left;\n    height: 52px;\n    margin-left: 10px;\n    font-size: 18px;\n}\n\n.input_error {\n    clear: both;\n    padding-top: 10px;\n}\n\n@media (max-width: 768px) {\n    .tel-box {\n     padding: 5px;\n     width: 100%;   \n    }\n    \n    .tel-box .logo {\n        width: 60%;\n    }\n    .tel-box button {\n        margin-left: 0px;\n        margin-top: 10px;\n    }    \n}    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWNlYmEtbm9zc2EtbGlnYWNhby9yZWNlYmEtbm9zc2EtbGlnYWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7S0FDQyxZQUFZO0tBQ1osV0FBVztJQUNaOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiYXBwL3JlY2ViYS1ub3NzYS1saWdhY2FvL3JlY2ViYS1ub3NzYS1saWdhY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsLWJveCB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLnRlbC1ib3ggcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBcbn1cblxuLnRlbC1ib3ggaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvKndpZHRoOiA3MCU7Ki9cbiAgICBoZWlnaHQ6IDUycHg7XG59XG5cbi50ZWwtYm94IGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdESU5PVC1NZWRpdW0nO1xuICAgIGJhY2tncm91bmQ6ICNmZmJjNGE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0X2Vycm9yIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRlbC1ib3gge1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIHdpZHRoOiAxMDAlOyAgIFxuICAgIH1cbiAgICBcbiAgICAudGVsLWJveCAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICAgIC50ZWwtYm94IGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfSAgICBcbn0gICAgIl19 */"

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

module.exports = __webpack_require__(/*! /home/guilherme/claro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map