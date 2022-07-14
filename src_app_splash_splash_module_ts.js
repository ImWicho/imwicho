"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splash_splash_module_ts"],{

/***/ 3523:
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 4399);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 9623:
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 3523);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 4399);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 4399:
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page.html?ngResource */ 3610);
/* harmony import */ var _splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss?ngResource */ 9898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('/login');
        }, 3700);
    }
    ngOnInit() {
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashPage);



/***/ }),

/***/ 9898:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".container {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.container img {\n  height: 100px;\n  top: 60%;\n}\n.tracking-in-expand {\n  animation: tracking-in-expand 1.2s ease-out infinite alternate;\n  font-size: 2rem;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2022-7-12 11:42:15\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation tracking-in-expand\n * ----------------------------------------\n */\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQ0o7QUFHQTtFQUVTLDhEQUFBO0VBQ0MsZUFBQTtBQUFWO0FBR0E7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQWlCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VBREY7RUFHQTtJQUNFLFlBQUE7RUFERjtFQUdBO0lBQ0UsVUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB0b3A6IDYwJVxyXG4gIH1cclxufVxyXG5cclxuLnRyYWNraW5nLWluLWV4cGFuZCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAxLjJzIGVhc2Utb3V0IGluZmluaXRlIGFsdGVybmF0ZSA7XHJcblx0ICAgICAgICBhbmltYXRpb246IHRyYWNraW5nLWluLWV4cGFuZCAxLjJzIGVhc2Utb3V0IGluZmluaXRlIGFsdGVybmF0ZSA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjItNy0xMiAxMTo0MjoxNVxyXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXHJcbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXHJcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBhbmltYXRpb24gdHJhY2tpbmctaW4tZXhwYW5kXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kIHtcclxuICAwJSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNWVtO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHRyYWNraW5nLWluLWV4cGFuZCB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3610:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n    <img src=\"../../assets/img/Logo.png\">\r\n    <br>\r\n    <h3 class=\"tracking-in-expand\"> Cargando...</h3>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_splash_splash_module_ts.js.map