"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categories_observations_observations_module_ts"],{

/***/ 9609:
/*!******************************************************************************!*\
  !*** ./src/app/pages/categories/observations/observations-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationsPageRoutingModule": () => (/* binding */ ObservationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _observations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observations.page */ 4217);




const routes = [
    {
        path: '',
        component: _observations_page__WEBPACK_IMPORTED_MODULE_0__.ObservationsPage
    }
];
let ObservationsPageRoutingModule = class ObservationsPageRoutingModule {
};
ObservationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ObservationsPageRoutingModule);



/***/ }),

/***/ 2949:
/*!**********************************************************************!*\
  !*** ./src/app/pages/categories/observations/observations.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationsPageModule": () => (/* binding */ ObservationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _observations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observations-routing.module */ 9609);
/* harmony import */ var _observations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observations.page */ 4217);







let ObservationsPageModule = class ObservationsPageModule {
};
ObservationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _observations_routing_module__WEBPACK_IMPORTED_MODULE_0__.ObservationsPageRoutingModule
        ],
        declarations: [_observations_page__WEBPACK_IMPORTED_MODULE_1__.ObservationsPage]
    })
], ObservationsPageModule);



/***/ }),

/***/ 4217:
/*!********************************************************************!*\
  !*** ./src/app/pages/categories/observations/observations.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationsPage": () => (/* binding */ ObservationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _observations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observations.page.html?ngResource */ 5833);
/* harmony import */ var _observations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observations.page.scss?ngResource */ 9741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let ObservationsPage = class ObservationsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    saveData() {
        this.router.navigateByUrl('categories');
    }
};
ObservationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ObservationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-observations',
        template: _observations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_observations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ObservationsPage);



/***/ }),

/***/ 9741:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/categories/observations/observations.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhdGlvbnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5833:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/categories/observations/observations.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Observaciones del requerimiento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div class=\"wrap-content\">\r\n    <ion-item fill=\"outline\">\r\n      <ion-label position=\"stacked\">Observacion</ion-label>\r\n      <ion-textarea rows=\"10\" cols=\"30\"></ion-textarea>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"saveData()\">\r\n    Guardar y regresar\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_observations_observations_module_ts.js.map