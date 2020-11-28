(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100vh;\">\r\n    <mat-toolbar color=\"primary\"> <i class=\"fa fa-book fa-2x\"></i> &nbsp; &nbsp;Book Store\r\n        <div class=\"ml-auto\" fxShow=\"true\" fxHide.lt-md=\"true\">\r\n            <button mat-button [routerLink]=\"['/add']\" routerLinkActive=\"active-link\"><i\r\n          class=\"fa fa-plus-circle fa-2x\"></i>&nbsp; &nbsp;ADD BOOK</button>\r\n            <button mat-button [routerLink]=\"['/list']\" routerLinkActive=\"active-link\"> <i class=\"fa fa-list fa-2x\"></i>&nbsp;\r\n        &nbsp; ALL BOOKS</button>\r\n            <button mat-button [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\"><i class=\"fa fa-phone fa-2x\"></i>\r\n        &nbsp; Contact Us</button>\r\n        </div>\r\n        <div fxShow=\"true\" fxHide.gt-sm=\"true\" class=\"ml-auto\">\r\n            <a href=\"#\" (click)=\"sidenav.toggle()\" class=\" text-light\"><i class=\"fa fa-bars\"></i></a>\r\n        </div>\r\n    </mat-toolbar>\r\n\r\n\r\n    <mat-sidenav-container fxFlexFill>\r\n        <mat-sidenav #sidenav fxLayout=\"column\">\r\n            <div fxLayout=\"column \" class=\"p-4 \">\r\n\r\n                <button mat-button [routerLink]=\"['/add']\" routerLinkActive=\"active-link\"><i\r\n            class=\"fa fa-plus-circle fa-2x\"></i>&nbsp; &nbsp;ADD BOOK</button>\r\n                <button mat-button [routerLink]=\"['/list']\" routerLinkActive=\"active-link\"> <i\r\n            class=\"fa fa-list fa-2x\"></i>&nbsp;\r\n          &nbsp; ALL BOOKS</button>\r\n                <button mat-button [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\"><i class=\"fa fa-phone fa-2x\"></i>\r\n          &nbsp; Contact Us</button>\r\n\r\n            </div>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content fxFlexFill>\r\n\r\n\r\n            <div class=\"container\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-add/book-add.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-add/book-add.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card p-4 bg-light shadow mt-3\">\n    <form (submit)=addBook() #bookForm=\"ngForm\" enctype=\"multipart/form-data\" method=\"post\">\n        <mat-card-header>\n            <mat-card-title>ADD BOOK</mat-card-title>\n        </mat-card-header>\n\n\n        <div *ngIf=\"imagePreview !== '' && imagePreview\" class=\"text-center\">\n            <img [src]=\"imagePreview\" mat-card-image class=\"img-fluid img-thumbnail mt-2\" style=\"max-height: 300px\" />\n        </div>\n\n        <mat-card-content>\n            <mat-form-field class=\"w-100\">\n\n                <input matInput type=\"text\" name=\"title\" class=\"bg-light\" [(ngModel)]=\"book.title\" required #title='ngModel' minlength=\"3\" placeholder=\"Book Title\" />\n\n                <mat-error *ngIf=\"title.errors?.required\">\n                    Book Title required</mat-error>\n                <mat-error *ngIf=\"title.errors?.minlength\">\n                    Minimum 3 Letters Title</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"w-100\">\n                <input matInput type=\"text\" name=\"isbn\" class=\"\" [(ngModel)]=\"book.isbn\" #isbn='ngModel' placeholder=\"Book ISBN\" />\n            </mat-form-field>\n            <mat-form-field class=\"w-100\">\n                <input matInput type=\"text\" name=\"author\" class=\"bg-light\" [(ngModel)]=\"book.author\" #author='ngModel' placeholder=\"Book Author\" />\n            </mat-form-field>\n            <mat-form-field class=\"w-100\">\n                <input matInput type=\"text\" name=\"price\" class=\"bg-light\" [(ngModel)]=\"book.price\" #price='ngModel' placeholder=\"Book Price\" />\n            </mat-form-field>\n\n            <ckeditor id=\"editor\" class=\"editor text-left mb-5 mt-\" name=\"disc\" [(ngModel)]=\"book.disc\" #disc=\"ngModel\" required></ckeditor>\n\n            <mat-error *ngIf=\"disc.errors?.required&& disc.touched\">\n                <small>Book discription is required</small></mat-error>\n\n        </mat-card-content>\n        <hr />\n\n        <button mat-raised-button type=\"submit\" color=\"accent\" class=\"float-right\" [disabled]=\"!bookForm.valid\">\n      ADD\n    </button>\n\n\n        <div class=\"\">\n            <button mat-stroked-button color=\"accent\" type=\"button\" (click)=\"filePicker.click()\">\n        Pick Image\n      </button>\n            <input class=\"d-none\" type=\"file\" name=\"postImage\" #filePicker ([ngModel])=\"fileToUpload\" (change)=\"onImagePicked($event)\" />\n        </div>\n    </form>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-5\" *ngIf=\"book\">\n\n    <mat-card class=\"w-card mt-4 ml-1 shadow\">\n        <mat-card-header class=\"d-flex justify-content-center\">\n            <mat-card-title>{{book.title}}</mat-card-title>\n            <mat-card-subtitle>{{book.date | date}}</mat-card-subtitle>\n        </mat-card-header>\n        <div class=\"d-flex justify-content-center\">\n            <img class=\"feature-image img-fluid\" src={{book.image}}>\n        </div>\n        <mat-card-content>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item my-2 img-fluid\" id=\"disc\" innerHTML={{book.disc}}></li>\n            </ul>\n\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\"><b>Author:</b><span class=\"float-right\">{{book.author}}</span></li>\n                <li class=\"list-group-item\"><b>ISBN:</b><span class=\"float-right\">{{book.isbn}}</span></li>\n                <li class=\"list-group-item\"><b>PRICE:</b> <span class=\"float-right\">{{book.price | currency:USD}} </span></li>\n            </ul>\n        </mat-card-content>\n\n        <mat-card-actions>\n            <div class=\"text-right\">\n                <button mat-button color=\"accent\"> <i class=\"fa fa-edit\"></i> DELETE</button>\n                <button mat-button color=\"primary\"> <i class=\"fa fa-edit\"></i> EDIT</button>\n                <button class=\"btn btn-primary\"><i class=\"fa fa-shopping-cart\"></i>   Add to Cart</button>\n            </div>\n\n        </mat-card-actions>\n\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-5\" *ngIf=\"bookService.books && bookService.books.length > 0\">\n\n    <div class=\"row\">\n        <div *ngFor=\"let book of bookService.books\" class=\"card-col col-12 col-lg-4\">\n\n            <mat-card class=\"w-card mt-4 ml-1 shadow\">\n                <mat-card-header class=\"d-flex justify-content-center\">\n                    <mat-card-title>{{book.title}}</mat-card-title>\n                    <mat-card-subtitle>{{book.date | date}}</mat-card-subtitle>\n                </mat-card-header>\n                <div class=\"d-flex justify-content-center\">\n                    <img class=\"feature-image\" src={{book.image}}>\n                </div>\n                <mat-card-content>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item my-2 truncate\" innerHTML={{book.disc|slice:0:100}}>\n                    </ul>\n\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><b>Author:</b><span class=\"float-right\">{{book.author}}</span></li>\n                        <li class=\"list-group-item\"><b>ISBN:</b><span class=\"float-right\">{{book.isbn}}</span></li>\n                        <li class=\"list-group-item\"><b>PRICE:</b> <span class=\"float-right\">{{book.price | currency:USD}} </span></li>\n                    </ul>\n                </mat-card-content>\n                <mat-card-actions>\n                    <div class=\"text-right\">\n                        <button mat-button color=\"accent\" (click)=\"deleteBook(book)\"> DELETE</button>\n                        <button mat-button color=\"primary\" [routerLink]=\"['/detail', book._id]\">MORE</button>\n                    </div>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mt-5 shadow\" style=\"background-color: #3f51b5\">\n\n    <h1 class=\"text-center text-light mb-5\"> Contact Us</h1>\n\n    <mat-card class=\"\">\n\n        <form (submit)=sendMail() #contactForm=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Name</mat-label>\n                        <input type=\"tel\" matInput placeholder=\"Name\" name=\"name\" [(ngModel)]=\"mail.name\">\n                        <mat-icon matSuffix>person</mat-icon>\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Telephone</mat-label>\n                        <input type=\"tel\" matInput placeholder=\"Telephone\" name=\"tel\" [(ngModel)]=\"mail.tel\">\n                        <mat-icon matSuffix>mode_edit</mat-icon>\n                    </mat-form-field>\n\n                </div>\n\n\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"outline\">\n                        <mat-label>Email To </mat-label>\n                        <input matInput placeholder=\"Email To\" name=\"to\" [(ngModel)]=\"mail.to\">\n                        <mat-icon matSuffix>mail</mat-icon>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"w-100\" appearance=\"outline\">\n                        <mat-label>Email From </mat-label>\n                        <input matInput placeholder=\"Email From\" name=\"from\" [(ngModel)]=\"mail.from\">\n                        <mat-icon matSuffix>mail</mat-icon>\n                    </mat-form-field>\n                </div>\n            </div>\n\n\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Subject</mat-label>\n                <input matInput placeholder=\"Subject\" name=\"subject\" [(ngModel)]=\"mail.subject\">\n\n            </mat-form-field>\n\n\n            <ckeditor placeholder=\"Message Body\" name=\"text\" [(ngModel)]=\"mail.text\"></ckeditor>\n\n            <div class=\"text-center mt-3\">\n                <mat-radio-group name=\"sendtype\" [(ngModel)]=\"mail.sendtype\">\n                    <mat-radio-button value=\"email\" class=\"mx-5\">Email</mat-radio-button>\n                    <mat-radio-button value=\"sms\" class=\"mx-5\">SMS</mat-radio-button>\n                </mat-radio-group>\n\n            </div>\n            <div class=\"action text-center mt-5\">\n                <button mat-raised-button color=\"accent\" type=\"submit\">SEND <mat-icon matSuffix>send</mat-icon></button>\n\n            </div>\n        </form>\n    </mat-card>\n\n\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.modules.ts": 
        /*!****************************************!*\
          !*** ./src/app/app-routing.modules.ts ***!
          \****************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-add/book-add.component */ "./src/app/book-add/book-add.component.ts");
            /* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
            var routes = [
                { path: '', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"] },
                { path: 'add', component: _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_3__["BookAddComponent"] },
                { path: 'list', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"] },
                { path: 'detail/:id', component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".active-link{\r\n    color:lightcoral;\r\n    border: 1px solid orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWxpbmt7XHJcbiAgICBjb2xvcjpsaWdodGNvcmFsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'restaurant';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_routing_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.modules */ "./src/app/app-routing.modules.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
            /* harmony import */ var _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-add/book-add.component */ "./src/app/book-add/book-add.component.ts");
            /* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
            /* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _book_add_book_add_component__WEBPACK_IMPORTED_MODULE_10__["BookAddComponent"],
                        _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_11__["BookListComponent"],
                        _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _app_routing_modules__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/book-add/book-add.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/book-add/book-add.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\r\n    min-height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/book-add/book-add.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/book-add/book-add.component.ts ***!
          \************************************************/
        /*! exports provided: BookAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAddComponent", function () { return BookAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BookAddComponent = /** @class */ (function () {
                function BookAddComponent(http, bookservice, router) {
                    this.http = http;
                    this.bookservice = bookservice;
                    this.router = router;
                    this.book = {
                        title: '',
                        disc: '',
                        price: null,
                        author: '',
                        isbn: null
                    };
                }
                BookAddComponent.prototype.ngOnInit = function () {
                };
                BookAddComponent.prototype.addBook = function () {
                    this.bookservice.addBook(this.book);
                    this.book = {
                        title: '',
                        disc: '',
                        price: null,
                        author: '',
                        isbn: null
                    };
                    this.router.navigate(['/list']);
                };
                BookAddComponent.prototype.onImagePicked = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    console.log(file);
                    this.book.image = file;
                    var reader = new FileReader();
                    reader.onload = function () {
                        _this.imagePreview = reader.result;
                        console.log(reader.result);
                    };
                    reader.readAsDataURL(file);
                };
                return BookAddComponent;
            }());
            BookAddComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            BookAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-add/book-add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-add.component.css */ "./src/app/book-add/book-add.component.css")).default]
                })
            ], BookAddComponent);
            /***/ 
        }),
        /***/ "./src/app/book-detail/book-detail.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/book-detail/book-detail.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("li.img-fluid img {\r\n    width: 100px;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkuaW1nLWZsdWlkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/book-detail/book-detail.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/book-detail/book-detail.component.ts ***!
          \******************************************************/
        /*! exports provided: BookDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function () { return BookDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BookDetailComponent = /** @class */ (function () {
                function BookDetailComponent(http, bookservice, router, route) {
                    this.http = http;
                    this.bookservice = bookservice;
                    this.router = router;
                    this.route = route;
                }
                BookDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bookId = this.route.params.subscribe(function (params) {
                        _this.bookservice.getBook(params['id']).subscribe(function (book) {
                            _this.book = book;
                            console.log(_this.book);
                        });
                    });
                };
                return BookDetailComponent;
            }());
            BookDetailComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            BookDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")).default]
                })
            ], BookDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/book-list/book-list.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/book-list/book-list.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".feature-image {\r\n    width: 250px;\r\n    height: 250px;\r\n}\r\n\r\n.truncate {\r\n    overflow-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4udHJ1bmNhdGUge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/book-list/book-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/book-list/book-list.component.ts ***!
          \**************************************************/
        /*! exports provided: BookListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function () { return BookListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
            var BookListComponent = /** @class */ (function () {
                function BookListComponent(bookService) {
                    this.bookService = bookService;
                    this.books = [];
                }
                BookListComponent.prototype.ngOnInit = function () {
                    this.bookService.updateBookList();
                };
                BookListComponent.prototype.deleteBook = function (book) {
                    var _this = this;
                    this.bookService.deleteBook(book).subscribe(function () {
                        _this.bookService.updateBookList();
                    });
                };
                return BookListComponent;
            }());
            BookListComponent.ctorParameters = function () { return [
                { type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
            ]; };
            BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")).default]
                })
            ], BookListComponent);
            /***/ 
        }),
        /***/ "./src/app/book.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/book.service.ts ***!
          \*********************************/
        /*! exports provided: BookService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function () { return BookService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var BookService = /** @class */ (function () {
                function BookService(http) {
                    this.http = http;
                    this.books = [];
                }
                BookService.prototype.addBook = function (book) {
                    var _this = this;
                    var bookData = new FormData();
                    bookData.append("title", book.title);
                    bookData.append("disc", book.disc);
                    bookData.append("author", book.author);
                    bookData.append("isbn", book.isbn);
                    bookData.append("price", book.price);
                    bookData.append("date", Date.now().toString());
                    bookData.append("image", book.image);
                    this.http.post('https://restaurant-msin.herokuapp.com/api/book', bookData)
                        .subscribe(function (res) {
                        var resbook = res.book;
                        _this.books.push(resbook);
                        _this.updateBookList();
                    });
                };
                BookService.prototype.deleteBook = function (book) {
                    return this.http.delete("https://restaurant-msin.herokuapp.com/api/book/" + book._id);
                };
                BookService.prototype.getBook = function (id) {
                    return this.http.get("https://restaurant-msin.herokuapp.com/api/book/" + id);
                };
                BookService.prototype.getBooks = function () {
                    return this.http.get("https://restaurant-msin.herokuapp.com/api/book/");
                };
                BookService.prototype.updateBookList = function () {
                    var _this = this;
                    this.getBooks().subscribe(function (bookslist) {
                        _this.books = bookslist['Books'];
                        console.log(_this.books);
                    });
                };
                return BookService;
            }());
            BookService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BookService);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/contact/contact.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent(http, router) {
                    this.http = http;
                    this.router = router;
                    this.mail = { to: "", from: "", subject: "", text: "", name: "", tel: "", sendtype: "" };
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                ContactComponent.prototype.sendMail = function () {
                    console.log(this.mail);
                    this.http.post('https://restaurant-msin.herokuapp.com/api/email', this.mail)
                        .subscribe(function (res) {
                        console.log(res);
                    });
                };
                return ContactComponent;
            }());
            ContactComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/valyun4ik/Desktop/restaurant_V2/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map