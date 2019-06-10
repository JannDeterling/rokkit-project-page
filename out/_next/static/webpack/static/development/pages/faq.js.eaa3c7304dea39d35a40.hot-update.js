webpackHotUpdate("static\\development\\pages\\faq.js",{

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _logo_rokkitLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo/rokkitLogo */ "./components/header/logo/rokkitLogo.js");
/* harmony import */ var _link_imageLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link/imageLink */ "./components/header/link/imageLink.js");
/* harmony import */ var _link_customLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./link/customLink */ "./components/header/link/customLink.js");
/* harmony import */ var _mobile_nav_menuButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile-nav/menuButton */ "./components/header/mobile-nav/menuButton.js");





var _jsxFileName = "D:\\Jann\\Documents\\UNI-MA\\MasterArbeit\\rokkit.ts\\rokkit.ts-next-app\\components\\header\\header.js";







var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      open: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.open;
      var menu = undefined;

      if (isOpen) {
        menu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mobile-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Documentation",
          link: "/documentation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Guides",
          link: "/guides",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "FAQ",
          link: "/faq",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "About",
          link: "/about",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_logo_rokkitLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Documentation",
        link: "/documentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Guides",
        link: "/guides",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "FAQ",
        link: "/faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_customLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "About",
        link: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-social-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_imageLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        link: "https://github.com/rokkit-ts",
        image: "../../static/github.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_link_imageLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        link: "https://twitter.com/JDeterling",
        image: "../../static/twitter.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-navigation-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_mobile_nav_menuButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          _this2.toggleMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-navigation-mobile-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, menu)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=faq.js.eaa3c7304dea39d35a40.hot-update.js.map