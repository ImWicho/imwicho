"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categories_questions_questions_module_ts"],{

/***/ 9066:
/*!************************************************************************!*\
  !*** ./src/app/pages/categories/questions/questions-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageRoutingModule": () => (/* binding */ QuestionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.page */ 3968);




const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage
    }
];
let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {
};
QuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionsPageRoutingModule);



/***/ }),

/***/ 5898:
/*!****************************************************************!*\
  !*** ./src/app/pages/categories/questions/questions.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageModule": () => (/* binding */ QuestionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-routing.module */ 9066);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page */ 3968);







let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsPageRoutingModule
        ],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_1__.QuestionsPage]
    })
], QuestionsPageModule);



/***/ }),

/***/ 3968:
/*!**************************************************************!*\
  !*** ./src/app/pages/categories/questions/questions.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPage": () => (/* binding */ QuestionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _questions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.page.html?ngResource */ 1421);
/* harmony import */ var _questions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page.scss?ngResource */ 1997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let QuestionsPage = class QuestionsPage {
    constructor(router) {
        this.router = router;
        this.questions = [];
    }
    ngOnInit() {
        for (const item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
            this.questions.push({ nameQuestion: `Pregunta #${item}`, res: '' });
        }
    }
    saveData() {
        console.log(this.questions);
        // this.router.navigateByUrl('categories');
    }
};
QuestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
QuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-questions',
        template: _questions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_questions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionsPage);



/***/ }),

/***/ 1997:
/*!***************************************************************************!*\
  !*** ./src/app/pages/categories/questions/questions.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  margin: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICBtYXJnaW46IDAuOHJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 1421:
/*!***************************************************************************!*\
  !*** ./src/app/pages/categories/questions/questions.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Preguntas </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n    <ion-list>\r\n      <ion-item fill=\"outline\" *ngFor=\"let item of questions; let i = index\">\r\n        <ion-label position=\"stacked\">{{ item.nameQuestion }}</ion-label>\r\n        <ion-input [(ngModel)]=\"questions[i].res\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-button class=\"btn-footer\" color=\"primary\" expand=\"full\" (click)=\"saveData()\">\r\n    Guardar y regresar\r\n  </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_questions_questions_module_ts.js.map