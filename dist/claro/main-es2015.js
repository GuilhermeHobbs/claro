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

module.exports = "<div class=\"row\">\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n            <img src=\"assets/icons/messenger.png\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n            <h5 class=\"card-title\">MESSENGER</h5>\r\n            <p class=\"card-text\">Converse conosco pelo messenger do Facebook!</p>\r\n            </div>\r\n            <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" target=\" _blank\">\r\n        <img src=\"assets/icons/virtual_assistant.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n        <p class=\"card-text\">Converse conosco pelo chat!</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n\r\n    <a class=\"card col-lg-3\" href=\"\" target=\" _blank\">\r\n        <img src=\"assets/icons/telegram.png\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n        <h5 class=\"card-title\">TELEGRAM</h5>\r\n        <p class=\"card-text\">Converse conosco pelo Telegram!</p>\r\n        \r\n        </div>\r\n        <p class=\"btn btn-acessar\">Quero negociar!</p>\r\n    </a>\r\n</div>    "

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

module.exports = "<header *ngIf=\"showHeader\">\r\n  <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\">\r\n  <h3 class=\"text-center\">Selecione um contrato para avaliar as condições de negociação:</h3>\r\n</header>\r\n\r\n<accordion [isAnimated]=\"true\" [closeOthers]=\"true\">\r\n  \r\n  <accordion-group *ngIf=\"apiRestService.getDividasClaroMovel().length\" (click)=\"showHeader = false\">\r\n    <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading (click)=\"apiRestService.getAllOpcoesClaroMovel()\">\r\n      <img src=\"assets/icons/phone.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\">Claro Móvel</div>  \r\n    </button>\r\n    <p>Débitos para serem negociados:</p>\r\n\r\n    <!--      \r\n    <div class=\"row opcoes-parcelamento\" *ngIf=\"opcoesParcelamento\"> <!-- *ngFor=\"let div of apiRestService.getDividasClaroMovel()\">\r\n      <div class=\"col-sm-3 opcoes-para-parcelamento\">\r\n       Valor total: R$ <!--{{ dividasClaroMovel.Parcelas.ParcelaDivida.Valor }}\r\n      </div>  \r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showPrazoFinalizacao()\">\r\n          R$15000,28 + 1 x R$150,27\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          R$150,28 + 1 x R$150,27\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          R$150,28 + 1 x R$150,27\r\n        </button>\r\n      </div>    \r\n    </div>  -->\r\n  \r\n    <app-prazo-finalizacao *ngIf=\"prazoFinalizacao\" (clickVoltar)=\"showOpcoesParcelamento()\"></app-prazo-finalizacao>\r\n      \r\n    \r\n    <div class=\"row metodo-pagamento\" [hidden]=\"!metodoPagamento\" *ngFor=\"let div of apiRestService.getDividasClaroMovel(); let ind = index\">\r\n      <div class=\"col-sm-5 metodo-de-pagamento\">\r\n        Valor total: R$ {{ apiRestService.getDividasClaroMovel()[ind].Parcelas.ParcelaDivida.Valor }}\r\n      </div>\r\n      <div class=\"col-6 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\">\r\n          À vista: R$ {{ apiRestService.opcoesPg[apiRestService.getDividasClaroMovel()[ind].CodigoTitulo] | async }}  \r\n            getOpcaoAVista(apiRestService.getDividasClaroMovel()[ind].CodigoTitulo) \r\n            apiRestService.getOpcaoAVista(apiRestService.getDividasClaroMovel()[ind].CodigoTitulo) \r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showOpcoesParcelamento()\">\r\n          Parcelado\r\n        </button> \r\n      </div>  \r\n    </div>\r\n    \r\n  </accordion-group>\r\n  <accordion-group *ngIf=\"apiRestService.getDividasClaroInternet().length\">\r\n    <button class=\"btn btn-link btn-accordion\" accordion-heading>\r\n      <img src=\"assets/icons/internet.jpg\" class=\"produto-img\" alt=\"...\">\r\n      <div class=\"pull-left float-left produto-heading\">Claro Internet</div>\r\n    </button>\r\n  </accordion-group>\r\n  <accordion-group *ngIf=\"apiRestService.getDividasClaroTv().length\">\r\n      <button class=\"btn btn-link btn-block clearfix btn-accordion\" accordion-heading>\r\n        <img src=\"assets/icons/tv.jpg\" class=\"produto-img\" alt=\"...\">\r\n        <div class=\"pull-left float-left produto-heading\">Claro TV</div>\r\n      </button>\r\n    </accordion-group>\r\n</accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opcoes-routlet/opcoes-routlet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opcoes-routlet/opcoes-routlet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row height-100\">\r\n    <div class=\"col-lg-3 fundo-paulista\">\r\n    </div>\r\n \r\n    <div class=\"back-beje col-lg-9\">\r\n                            \r\n            <p class=\"link-voltar btn-link\" (click)=\"voltarMenu()\" *ngIf=\"!showOpcoes\">Voltar ao Menu Principal</p>        \r\n            <img src=\"assets/img/logo.png\" alt=\"Claro\" class=\"logo\" [hidden]=\"logo_menor\">\r\n            \r\n            <app-negocie-online *ngIf=\"showNegocieOnline\"></app-negocie-online>\r\n            <app-assistente-virtual *ngIf=\"showAssistenteVirtual\"></app-assistente-virtual>\r\n            <app-receba-nossa-ligacao *ngIf=\"showRecebaNossaLigacao\"></app-receba-nossa-ligacao>\r\n            <app-acordos-andamento *ngIf=\"showAcordosAndamento\"></app-acordos-andamento>\r\n                        \r\n            <div class=\"padding-right-10px\" *ngIf=\"showOpcoes\">\r\n                <h3 class=\"text-center\" *ngIf=\"!fizPagamentoOk\">Bem-vindo, <span class=\"text-capitalize\">{{nome}}</span>!</h3>    \r\n                \r\n                <div class=\"row\">                    \r\n                    <a class=\"card col-lg-2\" (click)=\"negocieOnline()\">\r\n                            <img src=\"assets/icons/negocie_online.png\" class=\"card-img-top\" alt=\"...\">\r\n                            <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">NEGOCIE ONLINE</h5>\r\n                            <p class=\"card-text\">Clique e tenha as melhores condições para negociar com a Claro de forma rápida e prática.</p>\r\n                            \r\n                            </div>\r\n                            <p class=\"btn btn-acessar\">Acessar</p>\r\n                    </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"assistenteVirtual()\">\r\n                    <img src=\"assets/icons/assistente-virtual.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">ASSISTENTE VIRTUAL</h5>\r\n                    <p class=\"card-text\">Converse agora com nosso Assistente Virtual, não perca tempo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"recebaNossaLigacao()\">\r\n                    <img src=\"assets/icons/receber-ligacao.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">RECEBA NOSSA LIGAÇÃO</h5>\r\n                    <p class=\"card-text\">Quer receber uma ligação de nosso agente digital? Aqui é o lugar certo!</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n    \r\n            <div class=\"col-lg-3 fiz-pagamento-ok\" *ngIf=\"fizPagamentoOk\">\r\n                  <div class=\"container\">\r\n                        <span class=\"red\">Obrigada!</span><br>\r\n                        As informações de pagamento foram enviadas para a nossa central.<br>\r\n                        Caso necessário entraremos em contato no nosso número:<br> \r\n                        0800 208 8080         \r\n                </div>            \r\n        </div>\r\n\r\n            <div class=\"card col-lg-2\" *ngIf=\"cardBodyPagamento\" (click)=\"fizPagamento()\">\r\n                    <img src=\"assets/icons/fiz-pagamento.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">JÁ FIZ O PAGAMENTO</h5>\r\n                    <p class=\"card-text\">Já realizou o pagamento de seus débitos com a claro? pressione o botão abaixo!</p>\r\n                        \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Informar</p>\r\n                </div>\r\n    \r\n            <a class=\"card col-lg-2\" (click)=\"acordosAndamento()\">\r\n                    <img src=\"assets/icons/acordos.png\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">SEUS ACORDOS EM ANDAMENTO</h5>\r\n                    <p class=\"card-text\">Se tiver um acordo em andamento, acesse aqui para retirar a 2ª via.</p>\r\n                    \r\n                    </div>\r\n                    <p class=\"btn btn-acessar\">Acessar</p>\r\n            </a>\r\n        </div>\r\n     </div>    \r\n                <a class=\"bottom-fixed back-beje\" target=\"_blank\" href=\"http://www.fulltimesolucoes.com.br/\">A Fulltime é uma empresa autorizada pela Claro para a cobrança de débito.</a>\r\n                \r\n    </div>    \r\n\r\n</div>      "

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

module.exports = ".produto-heading {\r\n    line-height: 44px;\r\n    font-size: 22px;\r\n    margin-left: 10px;    \r\n    }\r\n    \r\n    .logo {\r\n        width: 120px;\r\n        display: block;\r\n        margin: 10px auto;\r\n    }\r\n    \r\n    .produto-img {\r\n        height: 45px;\r\n        float: left;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY29yZG9zLWFuZGFtZW50by9hY29yZG9zLWFuZGFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2YiLCJmaWxlIjoiYXBwL2Fjb3Jkb3MtYW5kYW1lbnRvL2Fjb3Jkb3MtYW5kYW1lbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHV0by1oZWFkaW5nIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZHV0by1pbWcge1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH0iXX0= */"

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
/*! exports provided: ApiRestService, Divida, Devedor, OpcoesPagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestService", function() { return ApiRestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divida", function() { return Divida; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devedor", function() { return Devedor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcoesPagamento", function() { return OpcoesPagamento; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiRestService = class ApiRestService {
    constructor(http) {
        this.http = http;
        this.opcoesPgTitulo = {};
        this.opcoesPg = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.opcoesPgTitulo);
        this.urlDadosDevedor = '../apiresposta/apirequest_getdadosdevedor.php';
        this.urlDadosDivida = '../apiresposta/apirequest_getdadosdivida.php';
        this.urlOpcoesPagamento = '../apiresposta/apirequest_getdadosopcoespagamento.php';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    temDividasouAcordo(cpfCnpj) {
        return this.getDadosDevedor(cpfCnpj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])((devedor) => {
            this.devedor = devedor;
            return this.getDadosDivida(cpfCnpj, devedor.Devedores.Devedor.CodigoDevedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((divida) => {
                this.dividas = divida;
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
        const cpfCnpjParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('codigotitulo', codTitulo);
        return this.http.post(this.urlOpcoesPagamento, cpfCnpjParam, this.httpOptions);
    }
    getDividasClaroMovel() {
        this.dividasClaroMovel = new Divida();
        this.dividasClaroMovel = {
            Divida: {
                DadosDivida: []
            }
        };
        this.dividasClaroMovel.Divida.DadosDivida = this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Móvel");
        this.dividasClaroMovel.Divida.DadosDivida.forEach((divida) => {
            this.opcoesPgTitulo[divida.CodigoTitulo] = new OpcoesPagamento();
            //  this.opcoesPgTitulo[divida.CodigoTitulo] = {
            //  OpcaoPagamento: {
            //   OpcaoPagamento: {
            //      ValorNegociar: Number
            //    }  
            //   }
            //  }      
        });
        return this.dividasClaroMovel.Divida.DadosDivida;
    }
    getAllOpcoesClaroMovel() {
        this.dividasClaroMovel.Divida.DadosDivida.forEach((divida) => {
            this.getOpcoesPagamento(divida.CodigoTitulo).subscribe(opc => {
                this.opcoesPgTitulo[divida.CodigoTitulo] = opc;
                this.opcoesPg.next(this.opcoesPgTitulo[divida.CodigoTitulo]);
                console.log(this.opcoesPg);
            });
        });
    }
    getDividasClaroInternet() {
        return this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro Internet");
    }
    getDividasClaroTv() {
        return this.dividas.Divida.DadosDivida.filter(div => div.Produto === "Claro TV");
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"].forRoot()
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

/***/ "./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cpf-cnpj-box/cpf-cnpj-box.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.tela-grid {\r\n    background: url(/assets/img/back.jpg) 100% 50% no-repeat;\r\n    height: 100%;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n.cpf-box {\r\n    height: 50%;\r\n    \r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; bottom: 0; right: 90px; \r\n    /*\r\n    position: absolute;\r\n  right: 20px; \r\n  margin: auto; */\r\n  font-family: SourceSansPro;\r\n  font-weight: 600;\r\n  font-size: 19px;\r\n}\r\n\r\n.cpf-box .logo {\r\n    display: block;\r\n    max-width: 400px;\r\n    margin: 0px auto 30px;\r\n}\r\n\r\n.cpf-box p {\r\n    color: aliceblue;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.cpf-box input {\r\n    font-size: 25px;\r\n    float: left;\r\n    /*width: 70%;*/\r\n    height: 52px;\r\n}\r\n\r\n.cpf-box button {\r\n    font-family: 'DINOT-Medium';\r\n    background: #ffbc4a;\r\n    color: black;\r\n    padding: 8px 16px;\r\n    border-radius: 50px;\r\n    float: left;\r\n    height: 52px;\r\n    margin-left: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input_error {\r\n    clear: both;    \r\n}\r\n\r\n.auto_inicio {\r\n    text-align: right;\r\n    color: white;\r\n    bottom: 5px;\r\n    right: 10px;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .cpf-box {\r\n     position: static;\r\n     padding: 10px;\r\n     height: 100%;   \r\n    }\r\n    \r\n    .cpf-box .logo {\r\n        width: 60%;\r\n    }\r\n    .cpf-box button {\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jcGYtY25wai1ib3gvY3BmLWNucGotYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVc7SUFDOUI7OztpQkFHYTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVGO0lBQ0k7S0FDQyxnQkFBZ0I7S0FDaEIsYUFBYTtLQUNiLFlBQVk7SUFDYjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImFwcC9jcGYtY25wai1ib3gvY3BmLWNucGotYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRlbGEtZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay5qcGcpIDEwMCUgNTAlIG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jcGYtYm94IHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDkwcHg7IFxyXG4gICAgLypcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDsgXHJcbiAgbWFyZ2luOiBhdXRvOyAqL1xyXG4gIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uY3BmLWJveCAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XHJcbn1cclxuXHJcbi5jcGYtYm94IHAge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uY3BmLWJveCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8qd2lkdGg6IDcwJTsqL1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4uY3BmLWJveCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdESU5PVC1NZWRpdW0nO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dF9lcnJvciB7XHJcbiAgICBjbGVhcjogYm90aDsgICAgXHJcbn1cclxuXHJcbi5hdXRvX2luaWNpbyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jcGYtYm94IHtcclxuICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3BmLWJveCAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC5jcGYtYm94IGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfSAgICBcclxufSAgICAiXX0= */"

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

module.exports = ".produto-heading {\r\nline-height: 44px;\r\nfont-size: 22px;\r\nmargin-left: 10px;    \r\n}\r\n\r\n.logo {\r\n    width: 120px;\r\n    display: block;\r\n    margin: 10px auto;\r\n}\r\n\r\n.produto-img {\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    font-size: 19px;  \r\n}\r\n\r\ntable {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.opcoes-parcelamento {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.opcoes-parcelamento .btn {\r\n    margin-bottom: 10px;    \r\n}\r\n\r\n.metodo-pagamento {\r\n    margin-top: 30px;\r\n}\r\n\r\n.opcoes-para-parcelamento {\r\n    text-align: right;\r\n}\r\n\r\n.metodo-de-pagamento {\r\n    text-align: right;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    h3 {\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .opcoes-para-parcelamento {\r\n        text-align: left;\r\n    }    \r\n\r\n    .btn {\r\n        margin-top: 10px;    \r\n    }\r\n\r\n    .metodo-pagamento {\r\n        margin-top: 0px;\r\n    }\r\n    \r\n    .metodo-de-pagamento {\r\n        text-align: left;\r\n    }\r\n\r\n    .btn-accordion {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n      \r\n    table {\r\n        margin-top: -16px;\r\n        margin-bottom: -10px;\r\n    }\r\n        \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZWdvY2llLW9ubGluZS9uZWdvY2llLW9ubGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0FBRUoiLCJmaWxlIjoiYXBwL25lZ29jaWUtb25saW5lL25lZ29jaWUtb25saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHV0by1oZWFkaW5nIHtcclxubGluZS1oZWlnaHQ6IDQ0cHg7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4ucHJvZHV0by1pbWcge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7ICBcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm9wY29lcy1wYXJjZWxhbWVudG8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm9wY29lcy1wYXJjZWxhbWVudG8gLmJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBcclxufVxyXG5cclxuLm1ldG9kby1wYWdhbWVudG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm9wY29lcy1wYXJhLXBhcmNlbGFtZW50byB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1ldG9kby1kZS1wYWdhbWVudG8ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vcGNvZXMtcGFyYS1wYXJjZWxhbWVudG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5tZXRvZG8tcGFnYW1lbnRvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZXRvZG8tZGUtcGFnYW1lbnRvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWNjb3JkaW9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn0iXX0= */"

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
        this.opcoesPg = this.apiRestService.opcoesPgTitulo;
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
    getOpcaoAVista(codTitulo) {
        //console.log (this.apiRestService.opcoesPgTitulo);
        //console.log(codTitulo);
        return this.apiRestService.opcoesPgTitulo[codTitulo].OpcaoPagamento.OpcaoPagamento.ValorNegociar;
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

module.exports = "h3 {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.back-beje {\r\n    background: #f8f8f8;\r\n}\r\n\r\n/* .back-red {\r\n    height: 100%;\r\n    background: url(/assets/img/back-red.png) no-repeat;\r\n    background-size: cover;\r\n} */\r\n\r\n.card {\r\n    margin: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.075);\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card-body {\r\n    height: 185px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    width: 80px;\r\n    margin: auto;\r\n    padding-top: 5px;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14.5px;\r\n}\r\n\r\n.btn-acessar {\r\n    background: #e32620;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 50px;\r\n    line-height: 1;\r\n    \r\n    color: white;\r\n    margin: 20px auto;\r\n    width: 100px;\r\n    -webkit-transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n    transition: color .15s cubic-bezier(.455,.03,.515,.955),background .15s cubic-bezier(.455,.03,.515,.955);\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    max-width: 320px;\r\n    margin: 15px auto;\r\n  }\r\n\r\n.fundo-paulista {\r\n    background: url(\"/assets/img/recorte_phixr.jpg\") bottom;\r\n    background-size: cover;\r\n}\r\n\r\n.link-voltar {\r\n        font-size: 20px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.bottom-fixed {\r\n        position: fixed;\r\n        bottom: 0px;\r\n        margin-bottom: 0px;\r\n        font-size: 18px;\r\n        padding-right: 17px;\r\n        padding-left: 17px;\r\n        }\r\n\r\n.fiz-pagamento-ok {\r\n        margin-top: 30px;\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .fiz-pagamento-ok {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .bottom-fixed {\r\n        font-size: 14px;\r\n        bottom: 26px;        \r\n    }\r\n    \r\n    .logo {\r\n        width: 35%;\r\n        margin: 6px auto 3px;\r\n    }\r\n\r\n    .card {\r\n        width: 80%;\r\n        /* text-align: center; */\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: row;\r\n        margin-top: 8px;  \r\n        height: 90px;     \r\n    }\r\n\r\n    .card-text, .card-title {\r\n        font-size: 13px;\r\n    }\r\n\r\n     .card-img-top {\r\n        margin: auto;\r\n        padding: 5px;\r\n    } \r\n\r\n     .card-body {\r\n        height: 90px;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n\r\n    } \r\n\r\n    .card-title {\r\n        margin-bottom: 0px;\r\n    }\r\n   \r\n    .btn-acessar {\r\n        display: none;\r\n    }\r\n\r\n    .link-voltar {\r\n        font-size: 18px;\r\n        text-align: center;\r\n    }    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcGNvZXMtcm91dGxldC9vcGNvZXMtcm91dGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0dBSUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7O0lBRWQsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0hBQXdHO0lBQXhHLHdHQUF3RztBQUM1Rzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsdURBQXVEO0lBQ3ZELHNCQUFzQjtBQUMxQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjs7QUFFSjtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsOEJBQW1CO1FBQW5CLDZCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7S0FFQztRQUNHLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztLQUVDO1FBQ0csWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUoiLCJmaWxlIjoiYXBwL29wY29lcy1yb3V0bGV0L29wY29lcy1yb3V0bGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYmFjay1iZWplIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbn1cclxuXHJcbi8qIC5iYWNrLXJlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvYmFjay1yZWQucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovXHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0LjVweDtcclxufVxyXG5cclxuLmJ0bi1hY2Vzc2FyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMzI2MjA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpLGJhY2tncm91bmQgLjE1cyBjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZnVuZG8tcGF1bGlzdGEge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvcmVjb3J0ZV9waGl4ci5qcGdcIikgYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuICAgIC5saW5rLXZvbHRhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tLWZpeGVkIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgLmZpei1wYWdhbWVudG8tb2sge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9ICAgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLmZpei1wYWdhbWVudG8tb2sge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbS1maXhlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvdHRvbTogMjZweDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBtYXJnaW46IDZweCBhdXRvIDNweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7ICBcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7ICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0LCAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICB9IFxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmJ0bi1hY2Vzc2FyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rLXZvbHRhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH0gICAgXHJcblxyXG59Il19 */"

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

module.exports = ".btn {\r\n    width: 100%;\r\n    font-size: 19px;\r\n    margin-bottom: 20px;  \r\n}\r\n\r\n.btn-yellow {\r\n    background: #ffbc4a;\r\n    color: white;\r\n}\r\n\r\n.escolha-data {\r\n    text-align: right;\r\n}\r\n\r\n.detalhes-titulo {\r\n    font-weight: bold;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n \r\n    .btn {\r\n        margin-bottom: 0px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .escolha-data {\r\n        text-align: left;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .detalhes-titulo {\r\n        margin-bottom: 0;\r\n        \r\n    }    \r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcmF6by1maW5hbGl6YWNhby9wcmF6by1maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCOztJQUVwQjtBQUNKIiwiZmlsZSI6ImFwcC9wcmF6by1maW5hbGl6YWNhby9wcmF6by1maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICBcclxufVxyXG5cclxuLmJ0bi15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzY29saGEtZGF0YSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRldGFsaGVzLXRpdHVsbyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiBcclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lc2NvbGhhLWRhdGEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWxoZXMtdGl0dWxvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxufSAgICAiXX0= */"

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

module.exports = __webpack_require__(/*! C:\Users\Francisco\claro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map