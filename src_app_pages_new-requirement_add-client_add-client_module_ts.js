"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_new-requirement_add-client_add-client_module_ts"],{

/***/ 5939:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/new-requirement/add-client/add-client-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientPageRoutingModule": () => (/* binding */ AddClientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client.page */ 5137);




const routes = [
    {
        path: '',
        component: _add_client_page__WEBPACK_IMPORTED_MODULE_0__.AddClientPage
    }
];
let AddClientPageRoutingModule = class AddClientPageRoutingModule {
};
AddClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddClientPageRoutingModule);



/***/ }),

/***/ 3627:
/*!***********************************************************************!*\
  !*** ./src/app/pages/new-requirement/add-client/add-client.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientPageModule": () => (/* binding */ AddClientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client-routing.module */ 5939);
/* harmony import */ var _add_client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-client.page */ 5137);







let AddClientPageModule = class AddClientPageModule {
};
AddClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddClientPageRoutingModule
        ],
        declarations: [_add_client_page__WEBPACK_IMPORTED_MODULE_1__.AddClientPage]
    })
], AddClientPageModule);



/***/ }),

/***/ 5137:
/*!*********************************************************************!*\
  !*** ./src/app/pages/new-requirement/add-client/add-client.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientPage": () => (/* binding */ AddClientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client.page.html?ngResource */ 354);
/* harmony import */ var _add_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-client.page.scss?ngResource */ 4805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let AddClientPage = class AddClientPage {
    constructor(router) {
        this.router = router;
        this.typeServices = [];
    }
    ngOnInit() {
        for (const item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
            this.typeServices.push({
                id: item,
                name: `Servicio #${item}`
            });
        }
    }
    create() {
        this.router.navigateByUrl('categories');
    }
};
AddClientPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AddClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-client',
        template: _add_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddClientPage);



/***/ }),

/***/ 4805:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-requirement/add-client/add-client.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2xpZW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 354:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-requirement/add-client/add-client.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Agregar cliente nuevo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"wrap-content\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\" mode=\"md\">\r\n          <ion-label position=\"stacked\">Nombre del cliente</ion-label>\r\n          <ion-input></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\" mode=\"md\">\r\n          <ion-label position=\"stacked\">Telefono</ion-label>\r\n          <ion-input></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\" mode=\"md\">\r\n          <ion-label position=\"stacked\">Correo electronico</ion-label>\r\n          <ion-input></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"stacked\">Tipo de servicio</ion-label>\r\n          <ion-select [multiple]=\"true\">\r\n            <ion-select-option *ngFor=\"let service of typeServices\" [value]=\"service\">{{ service.name }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"create()\">\r\n    Elaborar requerimiento\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-requirement_add-client_add-client_module_ts.js.map