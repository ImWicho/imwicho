"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ 5738);




const routes = [
    {
        path: '',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
    },
    {
        path: 'update-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_update-password-page_update-password-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-password-page/update-password-page.module */ 1846)).then(m => m.UpdatePasswordPagePageModule)
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ 5738);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
    })
], AuthModule);



/***/ }),

/***/ 5738:
/*!*********************************************************!*\
  !*** ./src/app/auth/login-page/login-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.component.html?ngResource */ 1782);
/* harmony import */ var _login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.scss?ngResource */ 1677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login-service.service */ 1897);







let LoginPageComponent = class LoginPageComponent {
    constructor(router, toastService, service) {
        this.router = router;
        this.toastService = toastService;
        this.service = service;
        this.getDataInputs = { email: '', password: '' };
    }
    ngOnInit() { }
    login() {
        if (this.validateInputs()) {
            this.service.login(this.getDataInputs).subscribe((res) => {
                if (res.status) {
                    console.log(res);
                    this.toastService.showToast(`${res.message}.`, 2500, 'checkmark-outline', 'success').then(() => this.router.navigateByUrl('/meeting'));
                    // Storing the User data.
                    // this.storageService.store(AuthConstants.AUTH, res.userData);
                }
                else {
                    this.toastService.showToast(res.message, 2800, 'warning-outline', 'warning');
                }
            }, (error) => {
                this.toastService.showToast(error.error.message, 3000, 'close-outline', 'danger');
            });
        }
        else {
            this.toastService.showToast('Los campos de usuario y contaseña no pueden estar vacios.', 2800, 'warning-outline', 'warning');
        }
    }
    validateInputs() {
        const email = this.getDataInputs.email.trim();
        const password = this.getDataInputs.password.trim();
        return (this.getDataInputs.email &&
            this.getDataInputs.password &&
            email.length > 0 &&
            password.length > 0);
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__.LoginServiceService }
];
LoginPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-page',
        template: _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPageComponent);



/***/ }),

/***/ 1897:
/*!********************************************************!*\
  !*** ./src/app/auth/services/login-service.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginServiceService": () => (/* binding */ LoginServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);




let LoginServiceService = class LoginServiceService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    login(credentials) {
        return this.http.post(`${this.ApiUrl}/api/v1/prequoter/login`, credentials);
    }
    refreshToken() {
        return this.http.post(`${this.ApiUrl}/api/v1/prequoter/refreshToken`, {});
    }
    changePassword(credentialsUser) {
        return this.http.post(`${this.ApiUrl}/api/v1/prequoter/changePassword`, credentialsUser);
    }
    logout() {
        return this.http.post(`${this.ApiUrl}/api/v1/prequoter/logout`, {});
    }
};
LoginServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoginServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginServiceService);



/***/ }),

/***/ 1443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var C_Users_luisc_OneDrive_Desktop_idistel_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let ToastService = class ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  }

  showToast(messageNew, duration, nameIcon, colorName) {
    var _this = this;

    return (0,C_Users_luisc_OneDrive_Desktop_idistel_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: messageNew,
        duration: duration ? duration : 2500,
        icon: nameIcon,
        position: 'bottom',
        color: colorName,
        animated: true
      });
      yield toast.present();
      yield toast.onDidDismiss();
    })();
  }

};

ToastService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}];

ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 1677:
/*!**********************************************************************!*\
  !*** ./src/app/auth/login-page/login-page.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  text-align: center;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1782:
/*!**********************************************************************!*\
  !*** ./src/app/auth/login-page/login-page.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"wrap-content\">\r\n    <ion-grid>\r\n      <h1>Bienvenido</h1>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item fill=\"outline\">\r\n            <ion-label position=\"stacked\">Correo</ion-label>\r\n            <ion-input type=\"email\" inputmode=\"email\" name=\"email\" [(ngModel)]=\"getDataInputs.email\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item fill=\"outline\">\r\n            <ion-label position=\"stacked\">Contraseña</ion-label>\r\n            <ion-input type=\"password\" inputmode=\"password\" name=\"password\" [(ngModel)]=\"getDataInputs.password\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-router-link routerLink=\"update-password\" class=\"underline\">\r\n            ¿Olvidaste tu contraseña?\r\n          </ion-router-link>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"login()\">Iniciar Sesión</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map