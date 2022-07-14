"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_update-password-page_update-password-page_module_ts"],{

/***/ 8564:
/*!**********************************************************************************!*\
  !*** ./src/app/auth/update-password-page/update-password-page-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPagePageRoutingModule": () => (/* binding */ UpdatePasswordPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_password_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-password-page.page */ 9298);




const routes = [
    {
        path: '',
        component: _update_password_page_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePasswordPagePage
    }
];
let UpdatePasswordPagePageRoutingModule = class UpdatePasswordPagePageRoutingModule {
};
UpdatePasswordPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdatePasswordPagePageRoutingModule);



/***/ }),

/***/ 1846:
/*!**************************************************************************!*\
  !*** ./src/app/auth/update-password-page/update-password-page.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPagePageModule": () => (/* binding */ UpdatePasswordPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_password_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-password-page-routing.module */ 8564);
/* harmony import */ var _update_password_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-password-page.page */ 9298);







let UpdatePasswordPagePageModule = class UpdatePasswordPagePageModule {
};
UpdatePasswordPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_password_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePasswordPagePageRoutingModule
        ],
        declarations: [_update_password_page_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePasswordPagePage]
    })
], UpdatePasswordPagePageModule);



/***/ }),

/***/ 9298:
/*!************************************************************************!*\
  !*** ./src/app/auth/update-password-page/update-password-page.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPagePage": () => (/* binding */ UpdatePasswordPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_password_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-password-page.page.html?ngResource */ 815);
/* harmony import */ var _update_password_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-password-page.page.scss?ngResource */ 8619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login-service.service */ 1897);







let UpdatePasswordPagePage = class UpdatePasswordPagePage {
    constructor(router, service, toast) {
        this.router = router;
        this.service = service;
        this.toast = toast;
        this.dataInputs = { email: '', password: '', password_confirmation: '' };
    }
    ngOnInit() {
    }
    updatePassword() {
        if (this.validateInputs()) {
            if (!this.checkPassword()) {
                return;
            }
            this.service.changePassword(this.dataInputs).subscribe((res) => {
                if (res.status) {
                    this.toast.showToast(res.message, 2000, 'checkmark-outline', 'success').then(() => this.router.navigateByUrl('/login'));
                }
            }, (error) => {
                this.toast.showToast(error.error.message, 2000, 'close-outline', 'danger');
            });
        }
        else {
            this.toast.showToast('Favor de llenar los campos', 2000, 'warning-outline', 'warning');
        }
    }
    validateInputs() {
        const email = this.dataInputs.email.trim();
        const password = this.dataInputs.password.trim();
        const password_confirmation = this.dataInputs.password_confirmation.trim();
        return (this.dataInputs.email &&
            this.dataInputs.password &&
            this.dataInputs.password_confirmation &&
            email.length > 0 &&
            password.length > 0 &&
            password_confirmation.length > 0);
    }
    checkPassword() {
        if (this.dataInputs.password !== this.dataInputs.password_confirmation) {
            this.toast.showToast('La contraseña y confirmar contraseña no son iguales.', 2000, 'warning-outline', 'warning');
            return false;
        }
        return true;
    }
};
UpdatePasswordPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__.LoginServiceService },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
UpdatePasswordPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update-password-page',
        template: _update_password_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_password_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdatePasswordPagePage);



/***/ }),

/***/ 8619:
/*!*************************************************************************************!*\
  !*** ./src/app/auth/update-password-page/update-password-page.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcGFzc3dvcmQtcGFnZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 815:
/*!*************************************************************************************!*\
  !*** ./src/app/auth/update-password-page/update-password-page.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Recuperar contraseña </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"wrap-content\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item fill=\"outline\">\r\n            <ion-label position=\"stacked\">Correo</ion-label>\r\n            <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"dataInputs.email\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item fill=\"outline\">\r\n            <ion-label position=\"stacked\">Nueva Contraseña</ion-label>\r\n            <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"dataInputs.password\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item fill=\"outline\">\r\n            <ion-label position=\"stacked\">Confirmar Contraseña</ion-label>\r\n            <ion-input type=\"password\" name=\"password_confirmation\" [(ngModel)]=\"dataInputs.password_confirmation\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"updatePassword()\"> Actualizar </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_update-password-page_update-password-page_module_ts.js.map