"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categories_photos_photos_module_ts"],{

/***/ 7620:
/*!******************************************************************!*\
  !*** ./src/app/pages/categories/photos/photos-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPageRoutingModule": () => (/* binding */ PhotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _photos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos.page */ 2242);




const routes = [
    {
        path: '',
        component: _photos_page__WEBPACK_IMPORTED_MODULE_0__.PhotosPage
    }
];
let PhotosPageRoutingModule = class PhotosPageRoutingModule {
};
PhotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhotosPageRoutingModule);



/***/ }),

/***/ 3863:
/*!**********************************************************!*\
  !*** ./src/app/pages/categories/photos/photos.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPageModule": () => (/* binding */ PhotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos-routing.module */ 7620);
/* harmony import */ var _photos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos.page */ 2242);







let PhotosPageModule = class PhotosPageModule {
};
PhotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotosPageRoutingModule
        ],
        declarations: [_photos_page__WEBPACK_IMPORTED_MODULE_1__.PhotosPage]
    })
], PhotosPageModule);



/***/ }),

/***/ 2242:
/*!********************************************************!*\
  !*** ./src/app/pages/categories/photos/photos.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosPage": () => (/* binding */ PhotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _photos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos.page.html?ngResource */ 9500);
/* harmony import */ var _photos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos.page.scss?ngResource */ 8517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let PhotosPage = class PhotosPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    saveData() {
        this.router.navigateByUrl('categories');
    }
    startEvent(item) {
    }
};
PhotosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PhotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-photos',
        template: _photos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotosPage);



/***/ }),

/***/ 8517:
/*!*********************************************************************!*\
  !*** ./src/app/pages/categories/photos/photos.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90b3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9500:
/*!*********************************************************************!*\
  !*** ./src/app/pages/categories/photos/photos.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Fotografias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <!-- <div class=\"wrap-content\"> -->\r\n    <ion-list> \r\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\r\n        <ion-avatar slot=\"end\" (click)=\"startEvent(item)\">\r\n          <img src=\"../../../assets/icon/favicon.png\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Fotografia {{ item }}</h2>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  <!-- </div> -->\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"saveData()\">\r\n    Guardar y regresar\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_photos_photos_module_ts.js.map