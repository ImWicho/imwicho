"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categories_categories_module_ts"],{

/***/ 5353:
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageRoutingModule": () => (/* binding */ CategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page */ 8002);




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage,
    },
    {
        path: 'questions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categories_questions_questions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./questions/questions.module */ 5898)).then(m => m.QuestionsPageModule)
    },
    {
        path: 'observations',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categories_observations_observations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./observations/observations.module */ 2949)).then(m => m.ObservationsPageModule)
    },
    {
        path: 'photos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categories_photos_photos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./photos/photos.module */ 3863)).then(m => m.PhotosPageModule)
    },
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ 3472:
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageModule": () => (/* binding */ CategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-routing.module */ 5353);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page */ 8002);







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesPageRoutingModule
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_1__.CategoriesPage]
    })
], CategoriesPageModule);



/***/ }),

/***/ 8002:
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page.html?ngResource */ 4895);
/* harmony import */ var _categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page.scss?ngResource */ 5306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let CategoriesPage = class CategoriesPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    viewQuestion() {
        this.router.navigateByUrl('categories/questions');
    }
    viewObservation() {
        this.router.navigateByUrl('categories/observations');
    }
    viewPhotos() {
        this.router.navigateByUrl('categories/photos');
    }
    finishRequest() {
        this.router.navigateByUrl('meeting');
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories',
        template: _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoriesPage);



/***/ }),

/***/ 5306:
/*!******************************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4895:
/*!******************************************************************!*\
  !*** ./src/app/pages/categories/categories.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Categoria de requerimientos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-list> \r\n    <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\r\n      <!-- <ion-avatar slot=\"start\">\r\n        <img src=\"../../../assets/icon/favicon.png\" />\r\n      </ion-avatar> -->\r\n      <ion-label>\r\n        <h2>Categoria {{ item }}</h2>\r\n        <!-- <h3>Datos {{ item }}</h3> -->\r\n        <p> 0 / 5</p>\r\n      </ion-label>\r\n      <ion-button (click)=\"viewQuestion()\" >\r\n        <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Categoria abierta</h2>\r\n      </ion-label>\r\n      <ion-button (click)=\"viewObservation()\">\r\n        <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Fotografias</h2>\r\n      </ion-label>\r\n      <ion-button (click)=\"viewPhotos()\">\r\n        <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" expand=\"full\" (click)=\"finishRequest()\">\r\n    Terminar\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_categories_module_ts.js.map