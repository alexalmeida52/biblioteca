(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-store-book></app-store-book>\n<!-- <app-index-book></app-index-book> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'biblioteca';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_book_store_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store-book/store-book.component */ "./src/app/store-book/store-book.component.ts");
/* harmony import */ var _index_book_index_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-book/index-book.component */ "./src/app/index-book/index-book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _store_book_store_book_component__WEBPACK_IMPORTED_MODULE_4__["StoreBookComponent"],
                _index_book_index_book_component__WEBPACK_IMPORTED_MODULE_5__["IndexBookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index-book/index-book.component.css":
/*!*****************************************************!*\
  !*** ./src/app/index-book/index-book.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4LWJvb2svaW5kZXgtYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/index-book/index-book.component.html":
/*!******************************************************!*\
  !*** ./src/app/index-book/index-book.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"secao-02\" class=\"wrap secao\">\n\n  <div style=\"padding-bottom: 0;\" class=\"jumbotron text-center\">\n    <h1>Book List</h1>\n    <p>View your list of books and their status</p>\n  </div>\n\n  <div class=\"container\" style=\"height: 65%; overflow: auto;\">\n    <input class=\"form-control col-md-2\" id=\"inputFilter\" type=\"text\" placeholder=\"Search..\">\n    <table class=\"table\" style=\"background-color: #fff; border-radius: 5px;\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th class=\"text-center\" scope=\"col\">#</th>\n          <th class=\"text-center\" scope=\"col\">Title</th>\n          <th class=\"text-center\" scope=\"col\">Author</th>\n          <th class=\"text-center\" scope=\"col\">Pages</th>\n          <th class=\"text-center\" scope=\"col\">Status</th>\n          <th class=\"text-center\" scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody id=\"livros\">\n        <tr  *ngFor=\"let book of books\" >\n          <th class=\"text-center\" scope=\"row\"></th>\n          <td class=\"text-center\">{{book.title}}</td>\n          <td class=\"text-center\">{{book.author}}</td>\n          <td class=\"text-center\">{{book.pages}}</td>\n          <td class=\"text-center\">{{book.status}}</td>\n          <td class=\"text-center\"><i class=\"fa fa-trash\" style=\"cursor: pointer\" aria-hidden=\"true\"></i></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <span class=\"icone-scroll\">\n    <span class=\"scroll-top scroll\"></span>\n    <span class=\"scroll-top scroll\"></span>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/index-book/index-book.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index-book/index-book.component.ts ***!
  \****************************************************/
/*! exports provided: IndexBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBookComponent", function() { return IndexBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexBookComponent = /** @class */ (function () {
    function IndexBookComponent() {
        this.books = [];
        this.data = {};
    }
    IndexBookComponent.prototype.ngOnInit = function () {
        this.books = JSON.parse(localStorage.getItem('data'));
    };
    IndexBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-book',
            template: __webpack_require__(/*! ./index-book.component.html */ "./src/app/index-book/index-book.component.html"),
            styles: [__webpack_require__(/*! ./index-book.component.css */ "./src/app/index-book/index-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexBookComponent);
    return IndexBookComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var ApiService = /** @class */ (function () {
    function ApiService() {
        this.url = {
            api: 'http://bibliotecaweb.herokuapp.com'
        };
    }
    ApiService.prototype.store = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_this.url.api + "/book", data).then(function (res) {
                resolve(res.data);
            }).catch(function (err) { reject(err); });
        });
    };
    ApiService.prototype.index = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_this.url.api + "/book").then(function (res) {
                resolve(res.data);
            }).catch(function (err) { reject(err); });
        });
    };
    ApiService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(_this.url.api + "/book/" + id).then(function (res) {
                resolve(res.data);
            }).catch(function (err) { reject(err); });
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/store-book/store-book.component.css":
/*!*****************************************************!*\
  !*** ./src/app/store-book/store-book.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLWJvb2svc3RvcmUtYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/store-book/store-book.component.html":
/*!******************************************************!*\
  !*** ./src/app/store-book/store-book.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"secao-01\" class=\"wrap secao\">\n  <div style=\"padding-bottom: 0;\" class=\"jumbotron text-center\">\n    <h1>THE BOOK LIBRARY</h1>\n    <p>Find here the best books of international literature!</p>\n  </div>\n\n  <div class=\"container\" id=\"container\">\n    <div class=\"row\">\n      <div id=\"formulario\" class=\"col-md-6 div-center\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title:</label>\n          <input [(ngModel)]=\"data.title\" type=\"text\" class=\"form-control\" id=\"title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"author\">Author:</label>\n          <input [(ngModel)]=\"data.author\" type=\"text\" class=\"form-control\" id=\"author\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pages\">Pages:</label>\n          <input [(ngModel)]=\"data.pages\" type=\"text\" class=\"form-control\" id=\"pages\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"sel1\">Status:</label>\n          <select [(ngModel)]=\"data.status\" id=\"status\" class=\"form-control\" id=\"sel1\">\n            <option value=\"Read\">Read</option>\n            <option value=\"Not Read\">Not Read</option>\n          </select>\n        </div>\n        <button style=\"margin-bottom: 0;\" id=\"submit\" class=\"btn btn-primary col-md-12\" data-toggle=\"modal\"\n          data-target=\"#myModal\" (click)=\"submit()\">SUBMIT</button>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"col-md-12\">\n                      <button class=\"col-md-12 btn-primary\" ><i class=\"fa fa-chevron-down\"></i></button>\n                  </div> -->\n  <span class=\"icone-scroll\">\n    <span class=\"scroll-next scroll\"></span>\n  </span>\n</div>\n<div id=\"secao-02\" class=\"wrap secao\">\n\n  <div style=\"padding-bottom: 0;\" class=\"jumbotron text-center\">\n    <h1>Book List</h1>\n    <p>View your list of books and their status</p>\n  </div>\n\n  <div class=\"container\" style=\"height: 65%; overflow: auto;\">\n    <input class=\"form-control col-md-2\" id=\"inputFilter\" type=\"text\" placeholder=\"Search..\">\n    <table class=\"table\" style=\"background-color: #fff; border-radius: 5px;\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th class=\"text-center\" scope=\"col\">#</th>\n          <th class=\"text-center\" scope=\"col\">Title</th>\n          <th class=\"text-center\" scope=\"col\">Author</th>\n          <th class=\"text-center\" scope=\"col\">Pages</th>\n          <th class=\"text-center\" scope=\"col\">Status</th>\n          <th class=\"text-center\" scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody id=\"livros\">\n        <tr  *ngFor=\"let book of books\" >\n          <th class=\"text-center\" scope=\"row\"></th>\n          <td class=\"text-center\">{{book.title}}</td>\n          <td class=\"text-center\">{{book.author}}</td>\n          <td class=\"text-center\">{{book.pages}}</td>\n          <td class=\"text-center\">{{book.status}}</td>\n          <td class=\"text-center\"><i (click)=\"delete(book._id)\" class=\"fa fa-trash\" style=\"cursor: pointer\" aria-hidden=\"true\"></i></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <span class=\"icone-scroll\">\n    <span class=\"scroll-top scroll\"></span>\n    <span class=\"scroll-top scroll\"></span>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/store-book/store-book.component.ts":
/*!****************************************************!*\
  !*** ./src/app/store-book/store-book.component.ts ***!
  \****************************************************/
/*! exports provided: StoreBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreBookComponent", function() { return StoreBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");



var StoreBookComponent = /** @class */ (function () {
    function StoreBookComponent(api) {
        this.api = api;
        this.data = {};
        this.books = [];
    }
    StoreBookComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.data.status = 'Not Read';
                        _a = this;
                        return [4 /*yield*/, this.api.index()];
                    case 1:
                        _a.books = _b.sent();
                        console.log(this.books);
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreBookComponent.prototype.verify = function (data) {
        if (data.title == undefined) {
            return false;
        }
        ;
        if (data.author == undefined) {
            return false;
        }
        ;
        if (data.pages == undefined) {
            return false;
        }
        ;
        if (data.status == undefined) {
            return false;
        }
        ;
        return true;
    };
    StoreBookComponent.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("deletando " + id);
                        this.api.delete(id);
                        _a = this;
                        return [4 /*yield*/, this.api.index()];
                    case 1:
                        _a.books = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreBookComponent.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            function showModal(data) {
                console.log(data);
                var modal = " <div class=\"modal fade\" id=\"myModal\">\n      <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n\n              <!-- Modal Header -->\n              <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Book successfully added</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\u00D7</button>\n              </div>\n\n              <!-- Modal body -->\n              <div class=\"modal-body \" style=\"display: flex;flex-direction: column; text-align: center\">\n                  <span>Title: " + data.title + "</span>\n                  <span>Author: " + data.author + "</span>\n                  <span>Pages: " + data.pages + "</span>\n                  <span>Status: " + data.status + "</span>\n              </div>\n\n              <!-- Modal footer -->\n              <div class=\"modal-footer\">\n                  <button onclick=\"teste()\" id=\"teste\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n              </div>\n\n          </div>\n      </div>\n  </div>";
                var documento = document.getElementById("container");
                var div = document.createElement("div");
                div.innerHTML = modal;
                documento.appendChild(div);
            }
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.data);
                        if (!this.verify(this.data)) return [3 /*break*/, 2];
                        console.log('Salvando ' + this.data.title);
                        console.log(JSON.parse(localStorage.getItem('data')));
                        this.api.store(this.data);
                        showModal(this.data);
                        _a = this;
                        return [4 /*yield*/, this.api.index()];
                    case 1:
                        _a.books = _b.sent();
                        this.data = {};
                        return [3 /*break*/, 3];
                    case 2:
                        alert('Preencha todos os campos');
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StoreBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-book',
            template: __webpack_require__(/*! ./store-book.component.html */ "./src/app/store-book/store-book.component.html"),
            styles: [__webpack_require__(/*! ./store-book.component.css */ "./src/app/store-book/store-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], StoreBookComponent);
    return StoreBookComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/Documentos/UFRN/WEB/biblioteca/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map