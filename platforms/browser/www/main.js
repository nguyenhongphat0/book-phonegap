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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-listing/book-listing.component */ "./src/app/book-listing/book-listing.component.ts");
/* harmony import */ var _book_reader_book_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-reader/book-reader.component */ "./src/app/book-reader/book-reader.component.ts");
/* harmony import */ var _book_contact_book_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-contact/book-contact.component */ "./src/app/book-contact/book-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_3__["BookListingComponent"] },
    { path: 'contacts', component: _book_contact_book_contact_component__WEBPACK_IMPORTED_MODULE_5__["BookContactComponent"] },
    { path: 'books/:id/reader', component: _book_reader_book_reader_component__WEBPACK_IMPORTED_MODULE_4__["BookReaderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"!removeNavbar()\"></app-navbar>\n<div class=\"wrapper\">\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AppComponent = /** @class */ (function () {
    function AppComponent(document, scrollSpyService, renderer, router, element, location) {
        this.document = document;
        this.scrollSpyService = scrollSpyService;
        this.renderer = renderer;
        this.router = router;
        this.element = element;
        this.location = location;
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        this.readCode();
    };
    AppComponent.prototype.readCode = function () {
        var native = this.element.nativeElement;
        var code = native.getAttribute('code');
        if (code) {
            localStorage.setItem('code', code);
        }
        else {
            localStorage.removeItem('code');
        }
    };
    AppComponent.prototype.removeNavbar = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'login' || titlee.startsWith('books')) {
            // console.log('removing navbar');
            return true;
        }
        else {
            console.log('keeping navbar ', titlee);
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, ngx_scrollspy__WEBPACK_IMPORTED_MODULE_5__["ScrollSpyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-listing/book-listing.component */ "./src/app/book-listing/book-listing.component.ts");
/* harmony import */ var _book_reader_book_reader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-reader/book-reader.component */ "./src/app/book-reader/book-reader.component.ts");
/* harmony import */ var _book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-modal-toc/book-modal-toc.component */ "./src/app/book-modal-toc/book-modal-toc.component.ts");
/* harmony import */ var _book_contact_book_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-contact/book-contact.component */ "./src/app/book-contact/book-contact.component.ts");
/* harmony import */ var _book_chapter_book_chapter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-chapter/book-chapter.component */ "./src/app/book-chapter/book-chapter.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _book_listing_book_listing_component__WEBPACK_IMPORTED_MODULE_9__["BookListingComponent"],
                _book_reader_book_reader_component__WEBPACK_IMPORTED_MODULE_10__["BookReaderComponent"],
                _book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_11__["BookModalTocComponent"],
                _book_contact_book_contact_component__WEBPACK_IMPORTED_MODULE_12__["BookContactComponent"],
                _book_chapter_book_chapter_component__WEBPACK_IMPORTED_MODULE_13__["BookChapterComponent"]
            ],
            entryComponents: [_book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_11__["BookModalTocComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ngx_scrollspy__WEBPACK_IMPORTED_MODULE_3__["ScrollSpyModule"].forRoot(),
                ngx_scrollspy__WEBPACK_IMPORTED_MODULE_3__["ScrollSpyIndexModule"],
                ngx_scrollspy__WEBPACK_IMPORTED_MODULE_3__["ScrollSpyAffixModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-chapter/book-chapter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-chapter/book-chapter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4 id=\"chapter-{{chapter.id}}\">{{chapter.name}}</h4>\n  <p [innerHtml]=\"chapter.text\"></p>\n  <ng-container *ngIf=\"chapter.children != null\">\n    <app-book-chapter *ngFor='let child of chapter.children' class=\"sub-chapter\" [class.padding-navbar]=\"isScrolledToView(child.id)\" [scrollToChapterId]=\"scrollToChapterId\" [chapter]=\"child\" [attr.data-id]=\"child.id\" [attr.data-content]=\"child.name\"></app-book-chapter>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/book-chapter/book-chapter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/book-chapter/book-chapter.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-chapter/book-chapter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-chapter/book-chapter.component.ts ***!
  \********************************************************/
/*! exports provided: BookChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookChapterComponent", function() { return BookChapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_book_chapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/book-chapter */ "./src/app/model/book-chapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookChapterComponent = /** @class */ (function () {
    function BookChapterComponent() {
    }
    BookChapterComponent.prototype.ngOnInit = function () {
    };
    BookChapterComponent.prototype.isScrolledToView = function () {
        // console.log('this.scrollToChapterId is ',this.scrollToChapterId,'id param is', this.chapter.id);
        return this.scrollToChapterId === this.chapter.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_book_chapter__WEBPACK_IMPORTED_MODULE_1__["BookChapter"])
    ], BookChapterComponent.prototype, "chapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BookChapterComponent.prototype, "scrollToChapterId", void 0);
    BookChapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-chapter',
            template: __webpack_require__(/*! ./book-chapter.component.html */ "./src/app/book-chapter/book-chapter.component.html"),
            styles: [__webpack_require__(/*! ./book-chapter.component.scss */ "./src/app/book-chapter/book-chapter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookChapterComponent);
    return BookChapterComponent;
}());



/***/ }),

/***/ "./src/app/book-contact/book-contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-contact/book-contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"text-center form-group\">\n            <input type=\"text\" value=\"\" placeholder=\"Search by Name, Phone, Email or Title\" class=\"form-control\"/>\n        </div>\n        <div class=\"list-per-letter\">\n            <div class=\"\">\n                <button type=\"button\" class=\"btn btn-lg btn-info btn-outline-default btn-just-icon\">\n                    <span class=\"letter-head\">P</span>\n                </button>\n            </div>\n            <div class=\"row\">\n                <blockquote class=\"blockquote employee-info col-md-4\">\n                    <p class=\"mb-0\"><strong><code>Peter Bean</code></strong></p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-mobile\"></i></strong> 0938190244</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-email-85\"></i></strong> binh@sunrise.vn</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-single-02\"></i></strong> CTO</p>\n                    <!--<footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>-->\n                </blockquote>\n                <blockquote class=\"blockquote employee-info col-md-4\">\n                    <p class=\"mb-0\"><strong><code>Peter Bean</code></strong></p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-mobile\"></i></strong> 0938190244</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-email-85\"></i></strong> binh@sunrise.vn</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-single-02\"></i></strong> CTO</p>\n                    <!--<footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>-->\n                </blockquote>\n                <blockquote class=\"blockquote employee-info col-md-4\">\n                    <p class=\"mb-0\"><strong><code>Peter Bean</code></strong></p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-mobile\"></i></strong> 0938190244</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-email-85\"></i></strong> binh@sunrise.vn</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-single-02\"></i></strong> CTO</p>\n                    <!--<footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>-->\n                </blockquote>\n                <blockquote class=\"blockquote employee-info col-md-4\">\n                    <p class=\"mb-0\"><strong><code>Peter Bean</code></strong></p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-mobile\"></i></strong> 0938190244</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-email-85\"></i></strong> binh@sunrise.vn</p>\n                    <p class=\"mb-0\"><strong><i class=\"nc-icon nc-single-02\"></i></strong> CTO</p>\n                    <!--<footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>-->\n                </blockquote>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-contact/book-contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/book-contact/book-contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letter-head {\n  font-size: 20px; }\n\n.btn-just-icon.btn-lg {\n  padding: 0px; }\n\n.employee-info {\n  text-align: left; }\n\n.section {\n  padding: 80px 0; }\n"

/***/ }),

/***/ "./src/app/book-contact/book-contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-contact/book-contact.component.ts ***!
  \********************************************************/
/*! exports provided: BookContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookContactComponent", function() { return BookContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookContactComponent = /** @class */ (function () {
    function BookContactComponent() {
    }
    BookContactComponent.prototype.ngOnInit = function () {
    };
    BookContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-contact',
            template: __webpack_require__(/*! ./book-contact.component.html */ "./src/app/book-contact/book-contact.component.html"),
            styles: [__webpack_require__(/*! ./book-contact.component.scss */ "./src/app/book-contact/book-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookContactComponent);
    return BookContactComponent;
}());



/***/ }),

/***/ "./src/app/book-listing/book-listing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-listing/book-listing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"book-listing container tim-container\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th width=\"10%\">#</th>\n                <th>Book Title</th>\n            </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let book of bookList; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td><a routerLink=\"/books/{{book.id}}/reader\">{{book.name}}</a></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/book-listing/book-listing.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/book-listing/book-listing.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-listing/book-listing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-listing/book-listing.component.ts ***!
  \********************************************************/
/*! exports provided: BookListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListingComponent", function() { return BookListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var _model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/data-transfer.service */ "./src/app/model/data-transfer.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-modal-toc/book-modal-toc.component */ "./src/app/book-modal-toc/book-modal-toc.component.ts");
/* harmony import */ var _model_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/book.service */ "./src/app/model/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookListingComponent = /** @class */ (function () {
    function BookListingComponent(modalService, dataTransfer, scrollSpyService, scrollSpyIndex, bookService) {
        this.modalService = modalService;
        this.dataTransfer = dataTransfer;
        this.scrollSpyService = scrollSpyService;
        this.scrollSpyIndex = scrollSpyIndex;
        this.bookService = bookService;
        this.bookHeading = 'Your Books on the Cloud';
        this.bookSubHeading = '';
        this.inSubChapter = false;
    }
    BookListingComponent.prototype.openToc = function () {
        var modalRef = this.modalService.open(_book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_4__["BookModalTocComponent"]);
        modalRef.componentInstance.name = 'World';
    };
    BookListingComponent.prototype.ngAfterViewInit = function () {
    };
    BookListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.all().subscribe(function (books) {
            console.log(books);
            _this.bookList = books;
        });
    };
    BookListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-listing',
            template: __webpack_require__(/*! ./book-listing.component.html */ "./src/app/book-listing/book-listing.component.html"),
            styles: [__webpack_require__(/*! ./book-listing.component.scss */ "./src/app/book-listing/book-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"],
            ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyService"],
            ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyIndexService"],
            _model_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"]])
    ], BookListingComponent);
    return BookListingComponent;
}());



/***/ }),

/***/ "./src/app/book-modal-toc/book-modal-toc.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-modal-toc/book-modal-toc.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title text-center\">{{book.name}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <ul>\n      <li *ngFor=\"let chapter of chapters\"><span (click)=\"scrollToChapter(chapter.id, 50)\">{{chapter.name}}</span>\n          <ul>\n              <li *ngFor=\"let child of chapter.children\" (click)=\"scrollToChapter(child.id, 70)\">{{child.name}}</li>\n          </ul>\n      </li>\n  </ul>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"left-side\">\n    <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">CLOSE</button>\n  </div>\n\n  <!--<div class=\"divider\"></div>-->\n  <!--<div class=\"right-side\">-->\n  <!--<button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">-->\n  <!--DELETE-->\n  <!--</button>-->\n  <!--</div>-->\n</div>"

/***/ }),

/***/ "./src/app/book-modal-toc/book-modal-toc.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/book-modal-toc/book-modal-toc.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  padding: 5px; }\n\n.modal-header {\n  padding: 10px; }\n\n.modal-header button.close {\n  margin-top: -40px; }\n\nli {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/book-modal-toc/book-modal-toc.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-modal-toc/book-modal-toc.component.ts ***!
  \************************************************************/
/*! exports provided: BookModalTocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModalTocComponent", function() { return BookModalTocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookModalTocComponent = /** @class */ (function () {
    function BookModalTocComponent(activeModal) {
        this.activeModal = activeModal;
    }
    BookModalTocComponent.prototype.ngOnInit = function () {
    };
    BookModalTocComponent.prototype.scrollToChapter = function (id, up) {
        document.querySelector("#chapter-" + id).scrollIntoView();
        window.scrollTo(window.scrollX, window.scrollY - up);
        this.activeModal.close('Scroll to chapter');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookModalTocComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookModalTocComponent.prototype, "chapters", void 0);
    BookModalTocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-modal-toc',
            template: __webpack_require__(/*! ./book-modal-toc.component.html */ "./src/app/book-modal-toc/book-modal-toc.component.html"),
            styles: [__webpack_require__(/*! ./book-modal-toc.component.scss */ "./src/app/book-modal-toc/book-modal-toc.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], BookModalTocComponent);
    return BookModalTocComponent;
}());



/***/ }),

/***/ "./src/app/book-reader/book-reader.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-reader/book-reader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-light\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <!--<a class=\"navbar-brand\" href=\"/\">{{ navBarTitle }}</a>-->\n            <div class=\"navbar-brand chapter-spy\">\n                <span ngbDropdown class=\"heading d-inline-block dropdown\">\n                    <span class=\"nav-link chapter-dropdown\" id=\"dropdownHeading\"\n                          ngbDropdownToggle>{{ bookHeading }}</span>\n                    <span ngbDropdownMenu aria-labelledby=\"dropdownHeading\" class=\"dropdown-primary dropdown-content\">\n                        <a class=\"dropdown-item\" *ngFor=\"let chapter of chapters\" (click)=\"scrollToChapter(chapter.id, 50)\">{{chapter.name}}</a>\n                    </span>\n                </span>\n\n                <span *ngIf=\"inSubChapter\" ngbDropdown class=\"sub-heading d-inline-block dropdown\">\n                    <span class=\"nav-link chapter-dropdown\" id=\"dropdownSubHeading\" ngbDropdownToggle>{{ bookSubHeading }}</span>\n                    <span ngbDropdownMenu aria-labelledby=\"dropdownSubHeading\"\n                          class=\"dropdown-primary dropdown-content\">\n                        <a class=\"dropdown-item\" *ngFor=\"let chapter of getViewingSubChapters()\" (click)=\"scrollToChapter(chapter.id, 70)\">{{chapter.name}}</a>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</nav>\n<nav class=\"navbar navbar-expand-lg fixed-bottom navbar-light\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <a routerLink=\"/dashboard\" class=\"btn btn-outline-primary btn-sm btn-border btn-round\">HOME</a>\n        <a routerLink=\"/contacts\" class=\"btn btn-sm btn-outline-primary btn-border btn-round\">CONTACTS</a>\n        <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-border btn-round\" (click)=\"openToc()\">BOOK TOC\n        </button>\n    </div>\n</nav>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"d-none d-md-block col-md-4 book-chapters\">\n                <h3>Table of Contents</h3>\n                <ul>\n                    <li *ngFor=\"let chapter of chapters\"><span (click)=\"scrollToChapter(chapter.id, 50)\">{{chapter.name}}</span>\n                        <ul>\n                            <li *ngFor=\"let child of chapter.children\" (click)=\"scrollToChapter(child.id, 70)\">{{child.name}}</li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-8 book-reader\">\n                <h3 *ngIf=\"book\">{{book.name}}</h3>\n                <i *ngIf=\"book\">{{book.description}}</i>\n                <div scrollSpy [scrollSpyIndex]=\"{id: 'chapters', selector: 'chapter'}\">\n                    <div [scrollSpyIndex]=\"{id: 'subChapters', selector: 'sub-chapter'}\">\n                        <app-book-chapter *ngFor='let chapter of chapters' [class.sub-chapter]=\"isSubChapter(chapter.id)\" [class.chapter]=\"!isSubChapter(chapter.id)\" [class.padding-navbar]=\"isScrolledToView(chapter.id)\" [scrollToChapterId]=[scrollToChapterId] [chapter]=\"chapter\" [attr.data-id]=\"chapter.id\" [attr.data-content]=\"chapter.name\">\n                        </app-book-chapter>\n\n\n                        <div #view1 [class.padding-navbar]=\"isScrolledToView(21)\" data-id=\"21\" class=\"chapter\" data-content=\"Hello Chapter 2\">\n                            <h1>Imhere</h1>\n                        </div>    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/book-reader/book-reader.component.scss":
/*!********************************************************!*\
  !*** ./src/app/book-reader/book-reader.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-content {\n  overflow-y: scroll;\n  max-height: 420px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.navbar-nav .dropdown-item.show .dropdown-menu, .dropdown.show .dropdown-menu, .dropdown-btn.show .dropdown-menu {\n  -webkit-transform: translate3d(0px, -10px, 0px);\n  transform: translate3d(0px, -10px, 0px); }\n\n.dropdown .dropdown-menu {\n  background-color: #FFFFFF;\n  border: 0 none;\n  border-radius: 12px;\n  display: block;\n  margin-top: 10px;\n  padding: 0px;\n  position: absolute;\n  opacity: 1;\n  filter: alpha(opacity=0);\n  box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(17, 16, 15, 0.1); }\n\n.dropdown .dropdown-menu.dropdown-primary .dropdown-item:hover, .dropdown .dropdown-menu.dropdown-primary .dropdown-item:focus {\n  background-color: #6dd3d6; }\n\n.dropdown .dropdown-menu .dropdown-item:first-child a, .dropdown .dropdown-menu .dropdown-item:first-child {\n  border-top-right-radius: 12px;\n  border-top-left-radius: 12px; }\n\n.dropdown .dropdown-menu .dropdown-item:last-child a, .dropdown .dropdown-menu .dropdown-item:last-child {\n  border-bottom-right-radius: 12px;\n  border-bottom-left-radius: 12px; }\n\n.chapter-dropdown {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.navbar .navbar-brand {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.heading {\n  display: block !important; }\n\n.sub-heading {\n  font-size: 11px; }\n\n.chapter-spy, .heading, .sub-heading, .dropdown-content, .dropdown-item {\n  width: 100%;\n  white-space: normal !important; }\n\n.navbar-brand.chapter-spy {\n  padding-right: 5px;\n  padding-left: 5px; }\n\n.navbar > .container, .navbar > .container-fluid {\n  justify-content: center; }\n\n.section {\n  padding: 0px 0; }\n\n.padding-navbar {\n  padding: 70px 0; }\n\n.book-chapters li {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/book-reader/book-reader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-reader/book-reader.component.ts ***!
  \******************************************************/
/*! exports provided: BookReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReaderComponent", function() { return BookReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-scrollspy */ "./node_modules/ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var _model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/data-transfer.service */ "./src/app/model/data-transfer.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-modal-toc/book-modal-toc.component */ "./src/app/book-modal-toc/book-modal-toc.component.ts");
/* harmony import */ var _model_book_chapter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/book-chapter.service */ "./src/app/model/book-chapter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/book.service */ "./src/app/model/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookReaderComponent = /** @class */ (function () {
    function BookReaderComponent(bookService, bookChapterService, hostElement, modalService, dataTransfer, scrollSpyService, scrollSpyIndex, activeRoute) {
        this.bookService = bookService;
        this.bookChapterService = bookChapterService;
        this.hostElement = hostElement;
        this.modalService = modalService;
        this.dataTransfer = dataTransfer;
        this.scrollSpyService = scrollSpyService;
        this.scrollSpyIndex = scrollSpyIndex;
        this.activeRoute = activeRoute;
        this.test1 = 1;
        this.scrollToChapterId = 0;
        this.bookHeading = 'Your Books on the Cloud';
        this.bookSubHeading = '';
        this.inSubChapter = false;
    }
    BookReaderComponent.prototype.scroll = function (el) {
        // console.log('after scroll',el.scrollTop);
        var parent = el.parentNode;
        console.log(this.hostElement, el);
        // console.log('before scroll', el.offsetTop);
        this.scrollToChapterId = parseInt(el.getAttribute('data-id'));
        var intersectionObserver = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            if (entry.isIntersecting) {
                setTimeout(function () {
                    // alert(`${entry.target.id} is visible!!!`);
                    // console.log('after top', el.offsetTop);
                }, 500);
            }
        });
        // start observing
        intersectionObserver.observe(el);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // window.scrollBy(0, -70);
    };
    BookReaderComponent.prototype.isSubChapter = function (id) {
        return false;
    };
    ;
    BookReaderComponent.prototype.isScrolledToView = function (id) {
        // console.log('this.scrollToChapterId is ',this.scrollToChapterId,'id param is',id);
        this.viewingChapter = id;
        return this.scrollToChapterId === id;
    };
    BookReaderComponent.prototype.openToc = function () {
        var modalRef = this.modalService.open(_book_modal_toc_book_modal_toc_component__WEBPACK_IMPORTED_MODULE_4__["BookModalTocComponent"]);
        modalRef.componentInstance.book = this.book;
        modalRef.componentInstance.chapters = this.chapters;
    };
    BookReaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollSpyService.getObservable('window').subscribe(function (e) {
            // console.log('e.target.pageYOffset: ', e.target.pageYOffset, 'e.target.scrollY: ', e.target.scrollY, 'e.target.scrollingElement.scrollTop: ', e.target.scrollingElement.scrollTop);
            var currentScrollPosition;
            if (typeof e.target.scrollingElement !== 'undefined') {
                currentScrollPosition = e.target.scrollingElement.scrollTop;
            }
            else if (typeof e.target.scrollY !== 'undefined') {
                currentScrollPosition = e.target.scrollY;
            }
            else if (typeof e.target.pageYOffset !== 'undefined') {
                currentScrollPosition = e.target.pageYOffset;
            }
            var items = _this.scrollSpyIndex.getIndex('chapters');
            if (!items || !items.length) {
                return;
            }
            var contextData;
            for (var i = items.length - 1; i >= 0; i--) {
                if (currentScrollPosition - items[i].offsetTop >= 0) {
                    // console.log('items[i]',items[i]);
                    contextData = items[i].getAttribute('data-content');
                    break;
                }
            }
            // console.log('/////////////////////////////', 'contextData Id is ', contextData);
            // this.selectContext$.next(contextId);
            // this.dataTransfer.setbookHeading(contextData);
            if (contextData != undefined && contextData != null && contextData != '') {
                _this.bookHeading = contextData;
            }
            else {
                _this.bookHeading = 'Your Books on the Cloud';
            }
            var subChapters = _this.scrollSpyIndex.getIndex('subChapters');
            // console.log('subChapters', subChapters);
            if (!subChapters || !subChapters.length) {
                return;
            }
            contextData = '';
            for (var i = subChapters.length - 1; i >= 0; i--) {
                if (currentScrollPosition - subChapters[i].offsetTop >= 0) {
                    // console.log('items[i]',items[i]);
                    contextData = subChapters[i].getAttribute('data-content');
                    break;
                }
            }
            // console.log('/////////////////////////////', 'subChapters contextData Id is ', contextData);
            // this.selectContext$.next(contextId);
            // this.dataTransfer.setbookHeading(contextData);
            if (contextData != undefined && contextData != null && contextData != '') {
                _this.bookSubHeading = contextData;
                _this.inSubChapter = true;
            }
            else {
                _this.inSubChapter = false;
                _this.bookSubHeading = '';
            }
        });
        // let items: any[] = this.scrollSpyIndex.getIndex('contexts');
        // console.log('items í ', items);
    };
    BookReaderComponent.prototype.loadBookInfo = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.bookId = params['id'];
            _this.bookService.get(_this.bookId).subscribe(function (book) { return _this.book = book; });
            _this.loadChapters();
        });
    };
    BookReaderComponent.prototype.loadChapters = function () {
        var _this = this;
        this.bookChapterService.getBookChapters(this.bookId).subscribe(function (chapters) {
            _this.chapters = chapters;
        });
    };
    BookReaderComponent.prototype.getViewingSubChapters = function () {
        var _this = this;
        return this.chapters.find(function (chapter) { return chapter.name == _this.bookHeading; }).children;
    };
    BookReaderComponent.prototype.scrollToChapter = function (id, up) {
        document.querySelector("#chapter-" + id).scrollIntoView();
        window.scrollTo(window.scrollX, window.scrollY - up);
    };
    BookReaderComponent.prototype.ngOnInit = function () {
        this.loadBookInfo();
    };
    BookReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-reader',
            template: __webpack_require__(/*! ./book-reader.component.html */ "./src/app/book-reader/book-reader.component.html"),
            styles: [__webpack_require__(/*! ./book-reader.component.scss */ "./src/app/book-reader/book-reader.component.scss")]
        }),
        __metadata("design:paramtypes", [_model_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"],
            _model_book_chapter_service__WEBPACK_IMPORTED_MODULE_5__["BookChapterService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"],
            ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyService"],
            ngx_scrollspy__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyIndexService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], BookReaderComponent);
    return BookReaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" href=\"http://www.magentapulse.com\">Your Books on the Cloud</a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"wrapper\">\n  <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n    <div class=\"filter\"></div>\n    <div class=\"content-center\" style=\"z-index: 900;\">\n      <div class=\"container\">\n        <div class=\"title-brand\">\n          <div class=\"angular-logo\">\n            <!-- <img src=\"assets/img/angular2-logo.png\" alt=\"\"> -->\n          </div>\n          <!-- <h1 class=\"presentation-title\">Paper Kit 2</h1> -->\n          <div class=\"fog-low\">\n            <img src=\"assets/img/fog-low.png\" alt=\"\">\n          </div>\n          <div class=\"fog-low right\">\n            <img src=\"assets/img/fog-low.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"text-center logo\"><img width=\"40%\" src=\"https://www.magenta-wellness.com/assets/evoucher/img/logo.jpg\" /></div>\n        <h2 class=\"presentation-subtitle text-center\">Sign in with your NRIC and Date of Birth</h2>\n        <form class=\"register-form\">\n          <div class=\"input-group form-group-no-border\" *ngIf=\"!coded\">\n                      <span class=\"input-group-addon pk-input-group-addon rounded-right-0\">\n                          <i class=\"nc-icon nc-badge\"></i>\n                      </span>\n            <input type=\"text\" name=\"code\" [(ngModel)]=\"code\" class=\"form-control\" placeholder=\"Company Code\">\n          </div>\n          <div class=\"input-group form-group-no-border\">\n                      <span class=\"input-group-addon pk-input-group-addon rounded-right-0\">\n                          <i class=\"nc-icon nc-badge\"></i>\n                      </span>\n            <input type=\"text\" name=\"nric\" [(ngModel)]=\"nric\" class=\"form-control\" placeholder=\"NRIC/Work Permit Number\">\n          </div>\n          <div class=\"input-group form-group-no-border\">\n            <div class=\"input-group date\">\n                          <span class=\"input-group-addon pk-input-group-addon\">\n                              <i class=\"nc-icon nc-calendar-60\"></i>\n                          </span>\n              <input class=\"form-control\" placeholder=\"Date of Birth\"\n                     name=\"dp\" [(ngModel)]=\"dob\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"{year: 1900, month: 1, day: 1}\" (click)=\"d.toggle()\">\n            </div>\n          </div>\n          <button class=\"btn btn-danger btn-block btn-round\" (click)=\"login()\">Register</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fog-low {\n  z-index: -1; }\n\n.register-form .input-group {\n  margin-bottom: 7px; }\n\n.logo img {\n  border-radius: 10px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/security.service */ "./src/app/model/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(securityService) {
        this.securityService = securityService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.code = localStorage.getItem('code');
        if (this.code) {
            this.coded = true;
        }
        else {
            this.coded = false;
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.dob && this.code && this.nric) {
            var username = this.code + "@at@" + this.nric;
            var year = this.dob.year.toString();
            var month = this.dob.month.toString();
            if (month.length == 1)
                month = '0' + month;
            var day = this.dob.day.toString();
            if (day.length == 1)
                day = '0' + day;
            var password = "" + year + month + day;
            console.log(username, password);
            this.securityService.checkLogin(username, password).subscribe(function (res) {
                console.log(res);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_model_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/book-chapter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/model/book-chapter.service.ts ***!
  \***********************************************/
/*! exports provided: BookChapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookChapterService", function() { return BookChapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookChapterService = /** @class */ (function () {
    function BookChapterService(http) {
        this.http = http;
    }
    BookChapterService.prototype.getBookChapters = function (bookId) {
        var _this = this;
        return this.getRootChapters(bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chapters) {
            chapters.forEach(function (chapter) {
                _this.getSubChapters(chapter.id).subscribe(function (subChapters) {
                    chapter.children = subChapters;
                });
            });
            return chapters;
        }));
    };
    BookChapterService.prototype.getRootChapters = function (bookId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndPoint + "/books/" + bookId + "/root-chapters")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['hydra:member']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRootChapters', [])));
    };
    BookChapterService.prototype.getSubChapters = function (chapterId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndPoint + "/chapters/" + chapterId + "/sub-chapters")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['hydra:member']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSubChapters', [])));
    };
    BookChapterService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    BookChapterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookChapterService);
    return BookChapterService;
}());



/***/ }),

/***/ "./src/app/model/book-chapter.ts":
/*!***************************************!*\
  !*** ./src/app/model/book-chapter.ts ***!
  \***************************************/
/*! exports provided: BookChapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookChapter", function() { return BookChapter; });
var BookChapter = /** @class */ (function () {
    function BookChapter() {
    }
    return BookChapter;
}());



/***/ }),

/***/ "./src/app/model/book.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/book.service.ts ***!
  \***************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.all = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndPoint + "/org-books")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['hydra:member']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get all book', [])));
    };
    BookService.prototype.get = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndPoint + "/org-books/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get a book', [])));
    };
    BookService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/model/data-transfer.service.ts":
/*!************************************************!*\
  !*** ./src/app/model/data-transfer.service.ts ***!
  \************************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataTransferService = /** @class */ (function () {
    function DataTransferService() {
        this.navBarTitle = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.cast = this.navBarTitle.asObservable();
    }
    DataTransferService.prototype.setNavBarTitle = function (data) {
        this.navBarTitle.next(data);
    };
    DataTransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataTransferService);
    return DataTransferService;
}());



/***/ }),

/***/ "./src/app/model/security.service.ts":
/*!*******************************************!*\
  !*** ./src/app/model/security.service.ts ***!
  \*******************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecurityService = /** @class */ (function () {
    function SecurityService(http) {
        this.http = http;
        this.loginUrl = '/login_check_org_code_nric';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
    }
    SecurityService.prototype.checkLogin = function (username, password) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoint + this.loginUrl, {
            _username: username,
            _password: password
        }, {
            headers: this.headers
        }).pipe();
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" routerLink=\"/dashboard\">{{ navBarTitle }}</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\"\n                    data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Dashboard\" data-placement=\"bottom\" routerLink=\"/dashboard\">\n                        <i class=\"nc-icon nc-bullet-list-67\"></i>\n                        <p class=\"\">HOME</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Employee Contacts\" data-placement=\"bottom\"\n                       routerLink=\"/contacts\">\n                        <i class=\"nc-icon nc-layout-11\"></i>\n                        <p class=\"\">CONTACT</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar .navbar-brand {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/data-transfer.service */ "./src/app/model/data-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dataTransfer, location, element) {
        this.dataTransfer = dataTransfer;
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
        this.navBarTitle = 'Your Books on the Cloud';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        // this.dataTransfer.navBarTitle.subscribe(res => {
        //     if (res != undefined && res != null && res != '') {
        //         this.navBarTitle = res
        //     } else {
        //         this.navBarTitle = 'Your Books on the Cloud';
        //     }
        // }) // var is the property that you want to assign the data to it.
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/' || titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_model_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiEndPoint: 'http://dev-book.magentapulse.com/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /srv/http/dev-book/libraries/spa/ngx-book-reader/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map