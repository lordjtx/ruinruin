(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\littl\IdeaProjects\ruinruin\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1VHI":
    /*!************************************!*\
      !*** ./src/app/hello.component.ts ***!
      \************************************/

    /*! exports provided: HelloComponent */

    /***/
    function VHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelloComponent", function () {
        return HelloComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: "<h1>Hello {{name}}!</h1>",
        styles: ["h1 { font-family: Lato; }"]
      })], HelloComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hoverBorder:hover {\r\n    box-shadow: inset 0 0 60px white;\r\n}\r\n\r\n.hoverBorder {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBR0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlckJvcmRlcjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHdoaXRlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNjBweCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHdoaXRlO1xyXG59XHJcblxyXG4uaG92ZXJCb3JkZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].major;
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" style=\"position: relative;\">\r\n    <img src=\"assets/background.png\" style=\"position: absolute; z-index: -1\">\r\n    <img src=\"assets/drawings/andromeia.png\" style=\"position: absolute; z-index: 0\">\r\n    <img src=\"assets/divider.png\" style=\"position: absolute; z-index: 1\">\r\n    <div style=\"position:absolute; left: 840px; top: 90px; z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/andromeia_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/antisora99_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/aswraith_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/drewzerr_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/dumberto_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 254px; z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/eskimo_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/giucci_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/godspath_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/hermitnobb_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 840px; top: 418px;  z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/heyitssunny_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/imsteven_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/instablade_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/jenntart_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/jesses_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 582px;  z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/julian_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/muito_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/ogjoseph_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/ovanilla_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 840px; top: 746px;  z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/popyzera_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/questi_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/slain_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/smoovesaiyan_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/spiritmoon_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 910px; z-index:2\" class=\"\">\r\n        <img src=\"assets/thumbnails/summerskin_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/tiffie44_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/titanium_Thumbnail.png\" class=\"hoverBorder\">\r\n        <img src=\"assets/thumbnails/zull_Thumbnail.png\" class=\"hoverBorder\">\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hello.component */
      "1VHI");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/localize/init */
      "N/DB");
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
      /***************************************************************************************************
       * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
       */

      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map