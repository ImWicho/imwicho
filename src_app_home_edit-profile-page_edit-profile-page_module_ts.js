"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_edit-profile-page_edit-profile-page_module_ts"],{

/***/ 2481:
/*!****************************************************************************!*\
  !*** ./src/app/home/edit-profile-page/edit-profile-page-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePagePageRoutingModule": () => (/* binding */ EditProfilePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-page.page */ 5251);




const routes = [
    {
        path: '',
        component: _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePagePage
    }
];
let EditProfilePagePageRoutingModule = class EditProfilePagePageRoutingModule {
};
EditProfilePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePagePageRoutingModule);



/***/ }),

/***/ 8432:
/*!********************************************************************!*\
  !*** ./src/app/home/edit-profile-page/edit-profile-page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePagePageModule": () => (/* binding */ EditProfilePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-page-routing.module */ 2481);
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile-page.page */ 5251);







let EditProfilePagePageModule = class EditProfilePagePageModule {
};
EditProfilePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePagePageRoutingModule
        ],
        declarations: [_edit_profile_page_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePagePage]
    })
], EditProfilePagePageModule);



/***/ }),

/***/ 5251:
/*!******************************************************************!*\
  !*** ./src/app/home/edit-profile-page/edit-profile-page.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePagePage": () => (/* binding */ EditProfilePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_profile_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-page.page.html?ngResource */ 6739);
/* harmony import */ var _edit_profile_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile-page.page.scss?ngResource */ 4096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EditProfilePagePage = class EditProfilePagePage {
    constructor() {
        this.url_img = '';
        this.name = '';
        this.email = '';
    }
    ngOnInit() {
        this.url_img = 'assets/img/user-default.png';
        this.name = 'prueba user';
        this.email = 'prueba@test.com';
    }
    getDataUser() {
    }
};
EditProfilePagePage.ctorParameters = () => [];
EditProfilePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-edit-profile-page',
        template: _edit_profile_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfilePagePage);



/***/ }),

/***/ 4096:
/*!*******************************************************************************!*\
  !*** ./src/app/home/edit-profile-page/edit-profile-page.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".content {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59Il19 */";

/***/ }),

/***/ 6739:
/*!*******************************************************************************!*\
  !*** ./src/app/home/edit-profile-page/edit-profile-page.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title> Editar Perfil </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <div class=\"content\">\r\n    <ion-img [src]=\"url_img\"></ion-img>\r\n    <br>\r\n    <h2>{{ name }}</h2>\r\n    <h4>{{ email }}</h4>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_edit-profile-page_edit-profile-page_module_ts.js.map