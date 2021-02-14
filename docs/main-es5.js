(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      __webpack_exports__["default"] = ".hoverBorder:hover {\r\n    box-shadow: inset 0 0 60px white;\r\n}\r\n\r\n.hoverBorder {\r\n    cursor: pointer;\r\n}\r\n\r\n.shadowEffect {\r\n    box-shadow: inset 0 0 60px white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBR0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUdJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlckJvcmRlcjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHdoaXRlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNjBweCB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHdoaXRlO1xyXG59XHJcblxyXG4uaG92ZXJCb3JkZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2hhZG93RWZmZWN0IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDYwcHggd2hpdGU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2MHB4IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDYwcHggd2hpdGU7XHJcbn0iXX0= */";
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

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.booAndromeia = false;
          this.booAntisora99 = false;
          this.booAswraith = false;
          this.booDrewzerr = false;
          this.booDumberto = false;
          this.booDumbertoRandom = false;
          this.booEskimo = false;
          this.booGiucci = false;
          this.booGodspath = false;
          this.booHermitknob = false;
          this.booHermitknobRandom = false;
          this.booHeyitssunny = false;
          this.booImSteven = false;
          this.booInstablade = false;
          this.booJenntart = false;
          this.booJesses = false;
          this.booJulian = false;
          this.booMuito = false;
          this.booOgjoseph = false;
          this.booOvanilla = false;
          this.booPopyzera = false;
          this.booQuesti = false;
          this.booSlain = false;
          this.booSmooveSaiyan = false;
          this.booSpiritmoon = false;
          this.booSummerskin = false;
          this.booTiffie44 = false;
          this.booTitanium = false;
          this.booZull = false;
          this.booArcher = false;
          this.booMage = false;
          this.booPirate = false;
          this.booThief = false;
          this.booWarrior = false;
          this.booPolitoed = false;
          this.randNumb = Math.random();
          this.charIGN = '';
          this.randMethod = ['pressedAndromeia', 'pressedAntisora99', 'pressedAswraith', 'pressedDrewzerr', 'pressedDumberto', 'pressedEskimo', 'pressedGiucci', 'pressedGodspath', 'pressedHermitnobb', 'pressedHeyitssunny', 'pressedImsteven', 'pressedInstablade', 'pressedJenntart', 'pressedJesses', 'pressedJulian', 'pressedMuito', 'pressedOgjoseph', 'pressedOvanilla', 'pressedPopyzera', 'pressedQuesti', 'pressedSlain', 'pressedSmooveSaiyan', 'pressedSpiritmoon', 'pressedSummerskin', 'pressedTiffie44', 'pressedTitanium', 'pressedZull'];
        }

        _createClass(AppComponent, [{
          key: "pressedAndromeia",
          value: function pressedAndromeia() {
            //change style to perma hover effect on andromeia
            this.charIGN = 'Andromeia';
            this.booAndromeia = true;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedAntisora99",
          value: function pressedAntisora99() {
            this.charIGN = 'Antisora99';
            this.booAndromeia = false;
            this.booAntisora99 = true;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = true;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedAswraith",
          value: function pressedAswraith() {
            this.charIGN = 'Aswraith';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = true;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedDrewzerr",
          value: function pressedDrewzerr() {
            if (this.randNumb > 0.7) {
              this.charIGN = 'Cursus';
              this.randNumb = Math.random();
            } else {
              this.charIGN = 'Drewzer';
              this.randNumb = Math.random();
            }

            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = true;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = true;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedDumberto",
          value: function pressedDumberto() {
            this.charIGN = 'dumberto';
            this.booPolitoed = false;
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;

            if (this.randNumb > 0.5) {
              this.booDumbertoRandom = true;
              this.booDumberto = false;
              this.booPolitoed = true;
              this.randNumb = Math.random();
            } else {
              this.booDumberto = true;
              this.booDumbertoRandom = false;
              this.randNumb = Math.random();
            }

            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = true;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
          }
        }, {
          key: "pressedEskimo",
          value: function pressedEskimo() {
            this.charIGN = 'Eskimo';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = true;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedGiucci",
          value: function pressedGiucci() {
            this.charIGN = 'giucci';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = true;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedGodspath",
          value: function pressedGodspath() {
            this.charIGN = 'GodsPath';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = true;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedHermitnobb",
          value: function pressedHermitnobb() {
            this.charIGN = 'HermitNobb';
            this.booPolitoed = false;
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumbertoRandom = false;
            this.booDumberto = false;

            if (this.randNumb > 0.5) {
              this.booHermitknobRandom = true;
              this.booHermitknob = false;
              this.booPolitoed = true;
              this.randNumb = Math.random();
            } else {
              this.booHermitknob = true;
              this.booHermitknobRandom = false;
              this.randNumb = Math.random();
            }

            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = true;
            this.booWarrior = false;
          }
        }, {
          key: "pressedHeyitssunny",
          value: function pressedHeyitssunny() {
            this.charIGN = 'HeyItsSunny';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = true;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedImsteven",
          value: function pressedImsteven() {
            this.charIGN = 'ImSteven';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = true;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedInstablade",
          value: function pressedInstablade() {
            this.charIGN = 'InstaBlade';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = true;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = true;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedJenntart",
          value: function pressedJenntart() {
            this.charIGN = 'JENNTART';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = true;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedJesses",
          value: function pressedJesses() {
            this.charIGN = 'Jesses';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = true;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedJulian",
          value: function pressedJulian() {
            this.charIGN = 'Julian';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = true;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedMuito",
          value: function pressedMuito() {
            if (this.randNumb > 0.7) {
              this.charIGN = 'Tupinga';
              this.randNumb = Math.random();
            } else {
              this.charIGN = 'Muito';
              this.randNumb = Math.random();
            }

            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = true;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedOgjoseph",
          value: function pressedOgjoseph() {
            this.charIGN = 'OgJoseph';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = true;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedOvanilla",
          value: function pressedOvanilla() {
            this.charIGN = 'oVanilla';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = true;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedPopyzera",
          value: function pressedPopyzera() {
            this.charIGN = 'popyZera';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = true;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = true;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedQuesti",
          value: function pressedQuesti() {
            this.charIGN = 'questi';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = true;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedSlain",
          value: function pressedSlain() {
            this.charIGN = 'Slain';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = true;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedSmooveSaiyan",
          value: function pressedSmooveSaiyan() {
            this.charIGN = 'SmooveSaiyan';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = true;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = true;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedSpiritmoon",
          value: function pressedSpiritmoon() {
            this.charIGN = 'SpiritMoon';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = true;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = true;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedSummerskin",
          value: function pressedSummerskin() {
            this.charIGN = 'SummerSkin';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = true;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = true;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedTiffie44",
          value: function pressedTiffie44() {
            this.charIGN = 'Tiffie44';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = true;
            this.booTitanium = false;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = true;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedTitanium",
          value: function pressedTitanium() {
            if (this.randNumb > 0.7) {
              this.charIGN = 'HerosRampage';
              this.randNumb = Math.random();
            } else {
              this.charIGN = 'Titanium';
              this.randNumb = Math.random();
            }

            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = true;
            this.booZull = false;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = true;
            this.booWarrior = false;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedZull",
          value: function pressedZull() {
            this.charIGN = 'Zull';
            this.booAndromeia = false;
            this.booAntisora99 = false;
            this.booAswraith = false;
            this.booDrewzerr = false;
            this.booDumberto = false;
            this.booDumbertoRandom = false;
            this.booEskimo = false;
            this.booGiucci = false;
            this.booGodspath = false;
            this.booHermitknob = false;
            this.booHermitknobRandom = false;
            this.booHeyitssunny = false;
            this.booImSteven = false;
            this.booInstablade = false;
            this.booJenntart = false;
            this.booJesses = false;
            this.booJulian = false;
            this.booMuito = false;
            this.booOgjoseph = false;
            this.booOvanilla = false;
            this.booPopyzera = false;
            this.booQuesti = false;
            this.booSlain = false;
            this.booSmooveSaiyan = false;
            this.booSpiritmoon = false;
            this.booSummerskin = false;
            this.booTiffie44 = false;
            this.booTitanium = false;
            this.booZull = true;
            this.booArcher = false;
            this.booMage = false;
            this.booPirate = false;
            this.booThief = false;
            this.booWarrior = true;
            this.booPolitoed = false;
          }
        }, {
          key: "pressedRuin",
          value: function pressedRuin() {
            this[this.randMethod[Math.floor(Math.random() * this.randMethod.length)]]();
          }
        }]);

        return AppComponent;
      }();

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


      __webpack_exports__["default"] = "<div class=\"row\" style=\"position: relative;\">\r\n    <img src=\"assets/background.png\" style=\"position: absolute; z-index: -1\">\r\n    <img src=\"assets/drawings/andromeia_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booAndromeia\">\r\n    <img src=\"assets/drawings/antisora99_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booAntisora99\">\r\n    <img src=\"assets/drawings/aswraith_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booAswraith\">\r\n    <img src=\"assets/drawings/drewzerr_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booDrewzerr\">\r\n    <img src=\"assets/drawings/dumberto_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booDumberto\">\r\n    <img src=\"assets/drawings/dumbertoRandom_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booDumbertoRandom\">\r\n    <img src=\"assets/drawings/eskimo_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booEskimo\">\r\n    <img src=\"assets/drawings/giucci_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booGiucci\">\r\n    <img src=\"assets/drawings/godspath_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booGodspath\">\r\n    <img src=\"assets/drawings/hermitknob_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booHermitknob\">\r\n    <img src=\"assets/drawings/hermitknobRandom_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booHermitknobRandom\">\r\n    <img src=\"assets/drawings/heyitssunny_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booHeyitssunny\">\r\n    <img src=\"assets/drawings/imsteven_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booImSteven\">\r\n    <img src=\"assets/drawings/instablade_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booInstablade\">\r\n    <img src=\"assets/drawings/jenntart_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booJenntart\">\r\n    <img src=\"assets/drawings/jesses_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booJesses\">\r\n    <img src=\"assets/drawings/julian_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booJulian\">\r\n    <img src=\"assets/drawings/muito_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booMuito\">\r\n    <img src=\"assets/drawings/ogjoseph_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booOgjoseph\">\r\n    <img src=\"assets/drawings/ovanilla_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booOvanilla\">\r\n    <img src=\"assets/drawings/popyzera_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booPopyzera\">\r\n    <img src=\"assets/drawings/questi_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booQuesti\">\r\n    <img src=\"assets/drawings/slain_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booSlain\">\r\n    <img src=\"assets/drawings/smoovesaiyan_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booSmooveSaiyan\">\r\n    <img src=\"assets/drawings/spiritmoon_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booSpiritmoon\">\r\n    <img src=\"assets/drawings/summerskin_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booSummerskin\">\r\n    <img src=\"assets/drawings/tiffie44_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booTiffie44\">\r\n    <img src=\"assets/drawings/titanium_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booTitanium\">\r\n    <img src=\"assets/drawings/zull_Thumbnail.png\" style=\"position: absolute; z-index: 0\" *ngIf=\"booZull\">\r\n    <img src=\"assets/divider.png\" style=\"position: absolute; z-index: 1\">\r\n    <img src=\"assets/icons/icon_Archer.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booArcher\">\r\n    <img src=\"assets/icons/icon_Mage.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booMage\">\r\n    <img src=\"assets/icons/icon_Pirate.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booPirate\">\r\n    <img src=\"assets/icons/icon_Thief.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booThief\">\r\n    <img src=\"assets/icons/icon_Warrior.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booWarrior\">\r\n    <img src=\"assets/icons/concernedpolitoed.png\" style=\"z-index:2; position: absolute; left:65px; top: 991px\" *ngIf=\"booPolitoed\">\r\n\r\n    <img src=\"assets/icons/ruin.png\" style=\"z-index: 2; position: absolute; left:1626px; top:935px;\" class=\"hoverBorder\" (click)=\"pressedRuin()\">\r\n\r\n    <div style=\"position:absolute; left: 840px; top: 90px; z-index:2\">\r\n        <img src=\"assets/thumbnails/andromeia_Thumbnail.png\" [ngClass]=\"booAndromeia?'shadowEffect':'hoverBorder'\" (click)=\"pressedAndromeia()\">\r\n        <img src=\"assets/thumbnails/antisora99_Thumbnail.png\" [ngClass]=\"booAntisora99?'shadowEffect':'hoverBorder'\" (click)=\"pressedAntisora99()\">\r\n        <img src=\"assets/thumbnails/aswraith_Thumbnail.png\" [ngClass]=\"booAswraith?'shadowEffect':'hoverBorder'\" (click)=\"pressedAswraith()\">\r\n        <img src=\"assets/thumbnails/drewzerr_Thumbnail.png\" [ngClass]=\"booDrewzerr?'shadowEffect':'hoverBorder'\" (click)=\"pressedDrewzerr()\">\r\n        <img src=\"assets/thumbnails/dumberto_Thumbnail.png\" [ngClass]=\"booDumberto||booDumbertoRandom?'shadowEffect':'hoverBorder'\" (click)=\"pressedDumberto()\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 254px; z-index:2\">\r\n        <img src=\"assets/thumbnails/eskimo_Thumbnail.png\" [ngClass]=\"booEskimo?'shadowEffect':'hoverBorder'\" (click)=\"pressedEskimo()\">\r\n        <img src=\"assets/thumbnails/giucci_Thumbnail.png\" [ngClass]=\"booGiucci?'shadowEffect':'hoverBorder'\" (click)=\"pressedGiucci()\">\r\n        <img src=\"assets/thumbnails/godspath_Thumbnail.png\" [ngClass]=\"booGodspath?'shadowEffect':'hoverBorder'\" (click)=\"pressedGodspath()\">\r\n        <img src=\"assets/thumbnails/hermitnobb_Thumbnail.png\" [ngClass]=\"booHermitknob||booHermitknobRandom?'shadowEffect':'hoverBorder'\" (click)=\"pressedHermitnobb()\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 840px; top: 418px;  z-index:2\">\r\n        <img src=\"assets/thumbnails/heyitssunny_Thumbnail.png\" [ngClass]=\"booHeyitssunny?'shadowEffect':'hoverBorder'\" (click)=\"pressedHeyitssunny()\">\r\n        <img src=\"assets/thumbnails/imsteven_Thumbnail.png\" [ngClass]=\"booImSteven?'shadowEffect':'hoverBorder'\" (click)=\"pressedImsteven()\">\r\n        <img src=\"assets/thumbnails/instablade_Thumbnail.png\" [ngClass]=\"booInstablade?'shadowEffect':'hoverBorder'\" (click)=\"pressedInstablade()\">\r\n        <img src=\"assets/thumbnails/jenntart_Thumbnail.png\" [ngClass]=\"booJenntart?'shadowEffect':'hoverBorder'\" (click)=\"pressedJenntart()\">\r\n        <img src=\"assets/thumbnails/jesses_Thumbnail.png\" [ngClass]=\"booJesses?'shadowEffect':'hoverBorder'\" (click)=\"pressedJesses()\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 582px;  z-index:2\">\r\n        <img src=\"assets/thumbnails/julian_Thumbnail.png\" [ngClass]=\"booJulian?'shadowEffect':'hoverBorder'\" (click)=\"pressedJulian()\">\r\n        <img src=\"assets/thumbnails/muito_Thumbnail.png\" [ngClass]=\"booMuito?'shadowEffect':'hoverBorder'\" (click)=\"pressedMuito()\">\r\n        <img src=\"assets/thumbnails/ogjoseph_Thumbnail.png\" [ngClass]=\"booOgjoseph?'shadowEffect':'hoverBorder'\" (click)=\"pressedOgjoseph()\">\r\n        <img src=\"assets/thumbnails/ovanilla_Thumbnail.png\" [ngClass]=\"booOvanilla?'shadowEffect':'hoverBorder'\" (click)=\"pressedOvanilla()\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 840px; top: 746px;  z-index:2\">\r\n        <img src=\"assets/thumbnails/popyzera_Thumbnail.png\" [ngClass]=\"booPopyzera?'shadowEffect':'hoverBorder'\" (click)=\"pressedPopyzera()\">\r\n        <img src=\"assets/thumbnails/questi_Thumbnail.png\" [ngClass]=\"booQuesti?'shadowEffect':'hoverBorder'\" (click)=\"pressedQuesti()\">\r\n        <img src=\"assets/thumbnails/slain_Thumbnail.png\" [ngClass]=\"booSlain?'shadowEffect':'hoverBorder'\" (click)=\"pressedSlain()\">\r\n        <img src=\"assets/thumbnails/smoovesaiyan_Thumbnail.png\" [ngClass]=\"booSmooveSaiyan?'shadowEffect':'hoverBorder'\" (click)=\"pressedSmooveSaiyan()\">\r\n        <img src=\"assets/thumbnails/spiritmoon_Thumbnail.png\" [ngClass]=\"booSpiritmoon?'shadowEffect':'hoverBorder'\" (click)=\"pressedSpiritmoon()\">\r\n    </div>\r\n    <div style=\"position:absolute; left: 924px; top: 910px; z-index:2\">\r\n        <img src=\"assets/thumbnails/summerskin_Thumbnail.png\" [ngClass]=\"booSummerskin?'shadowEffect':'hoverBorder'\" (click)=\"pressedSummerskin()\">\r\n        <img src=\"assets/thumbnails/tiffie44_Thumbnail.png\" [ngClass]=\"booTiffie44?'shadowEffect':'hoverBorder'\" (click)=\"pressedTiffie44()\">\r\n        <img src=\"assets/thumbnails/titanium_Thumbnail.png\" [ngClass]=\"booTitanium?'shadowEffect':'hoverBorder'\" (click)=\"pressedTitanium()\">\r\n        <img src=\"assets/thumbnails/zull_Thumbnail.png\" [ngClass]=\"booZull?'shadowEffect':'hoverBorder'\" (click)=\"pressedZull()\">\r\n    </div>\r\n\r\n    <div style=\"position:absolute; left: 145px; top: 989px; z-index: 2\">\r\n        <p style=\"font-size: 50px; font-variant: small-caps; font-weight: 700; color: white; text-shadow: 2px 2px 25px black; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: black;\">{{charIGN}}</p>\r\n    </div>\r\n</div>";
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