"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_new-requirement_new-requirement_module_ts"],{

/***/ 2309:
/*!*************************************************************************!*\
  !*** ./src/app/pages/new-requirement/new-requirement-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequirementPageRoutingModule": () => (/* binding */ NewRequirementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _new_requirement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-requirement.page */ 7225);




const routes = [
    {
        path: '',
        component: _new_requirement_page__WEBPACK_IMPORTED_MODULE_0__.NewRequirementPage
    },
    {
        path: 'add-client',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_new-requirement_add-client_add-client_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-client/add-client.module */ 3627)).then(m => m.AddClientPageModule)
    }
];
let NewRequirementPageRoutingModule = class NewRequirementPageRoutingModule {
};
NewRequirementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewRequirementPageRoutingModule);



/***/ }),

/***/ 9971:
/*!*****************************************************************!*\
  !*** ./src/app/pages/new-requirement/new-requirement.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequirementPageModule": () => (/* binding */ NewRequirementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_requirement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-requirement-routing.module */ 2309);
/* harmony import */ var _new_requirement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-requirement.page */ 7225);







let NewRequirementPageModule = class NewRequirementPageModule {
};
NewRequirementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_requirement_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRequirementPageRoutingModule
        ],
        declarations: [_new_requirement_page__WEBPACK_IMPORTED_MODULE_1__.NewRequirementPage]
    })
], NewRequirementPageModule);



/***/ }),

/***/ 7225:
/*!***************************************************************!*\
  !*** ./src/app/pages/new-requirement/new-requirement.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequirementPage": () => (/* binding */ NewRequirementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_requirement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-requirement.page.html?ngResource */ 7378);
/* harmony import */ var _new_requirement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-requirement.page.scss?ngResource */ 3558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let NewRequirementPage = class NewRequirementPage {
    constructor(router) {
        this.router = router;
        this.clients = [];
        this.typeServices = [];
    }
    ngOnInit() {
        for (const item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
            this.clients.push({
                id: item,
                name: `cliente ${item}`
            });
            this.typeServices.push({
                id: item,
                name: `Servicio #${item}`
            });
        }
    }
    addNewClient() {
        this.router.navigateByUrl('new-requirement/add-client');
    }
    create() {
        this.router.navigateByUrl('categories');
    }
};
NewRequirementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NewRequirementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-new-requirement',
        template: _new_requirement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_requirement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewRequirementPage);



/***/ }),

/***/ 3558:
/*!****************************************************************************!*\
  !*** ./src/app/pages/new-requirement/new-requirement.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcmVxdWlyZW1lbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7378:
/*!****************************************************************************!*\
  !*** ./src/app/pages/new-requirement/new-requirement.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuevo Requerimiento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <div class=\"wrap-content\">\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"stacked\">Clientes existentes</ion-label>\r\n            <ion-select [multiple]=\"true\">\r\n              <ion-select-option *ngFor=\"let client of clients\" [value]=\"client\">{{ client.name }}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"stacked\">Tipo de servicios</ion-label>\r\n          <ion-select [multiple]=\"true\">\r\n            <ion-select-option *ngFor=\"let service of typeServices\" [value]=\"service\">{{ service.name }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"addNewClient()\">\r\n          Agregar cliente nuevo\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"create()\">\r\n    Elaborar requerimiento\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-requirement_new-requirement_module_ts.js.map