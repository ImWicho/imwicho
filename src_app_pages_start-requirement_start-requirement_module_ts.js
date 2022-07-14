"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_start-requirement_start-requirement_module_ts"],{

/***/ 9443:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/start-requirement/start-requirement-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartRequirementPageRoutingModule": () => (/* binding */ StartRequirementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _start_requirement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-requirement.page */ 508);




const routes = [
    {
        path: '',
        component: _start_requirement_page__WEBPACK_IMPORTED_MODULE_0__.StartRequirementPage
    }
];
let StartRequirementPageRoutingModule = class StartRequirementPageRoutingModule {
};
StartRequirementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartRequirementPageRoutingModule);



/***/ }),

/***/ 9040:
/*!*********************************************************************!*\
  !*** ./src/app/pages/start-requirement/start-requirement.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartRequirementPageModule": () => (/* binding */ StartRequirementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _start_requirement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-requirement-routing.module */ 9443);
/* harmony import */ var _start_requirement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-requirement.page */ 508);







let StartRequirementPageModule = class StartRequirementPageModule {
};
StartRequirementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_requirement_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartRequirementPageRoutingModule
        ],
        declarations: [_start_requirement_page__WEBPACK_IMPORTED_MODULE_1__.StartRequirementPage]
    })
], StartRequirementPageModule);



/***/ }),

/***/ 508:
/*!*******************************************************************!*\
  !*** ./src/app/pages/start-requirement/start-requirement.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartRequirementPage": () => (/* binding */ StartRequirementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _start_requirement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-requirement.page.html?ngResource */ 2331);
/* harmony import */ var _start_requirement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-requirement.page.scss?ngResource */ 2315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let StartRequirementPage = class StartRequirementPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    start() {
        this.router.navigateByUrl('categories');
    }
};
StartRequirementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StartRequirementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-start-requirement',
        template: _start_requirement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_requirement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartRequirementPage);



/***/ }),

/***/ 2315:
/*!********************************************************************************!*\
  !*** ./src/app/pages/start-requirement/start-requirement.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1yZXF1aXJlbWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2331:
/*!********************************************************************************!*\
  !*** ./src/app/pages/start-requirement/start-requirement.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Datos del cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"wrap-content\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <h1>Nombre del cliente</h1>        \r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <h3>Fecha</h3>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <h5>Tipo de servicio</h5>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-button color=\"primary\" expand=\"full\">\r\n          Llamar al cliente\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-button color=\"primary\" expand=\"full\">\r\n          Enviar nuevo correo al cliente\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"start()\">\r\n    Empezar requerimiento\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_start-requirement_start-requirement_module_ts.js.map