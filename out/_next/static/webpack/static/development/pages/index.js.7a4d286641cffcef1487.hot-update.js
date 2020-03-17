webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/get-started/GetStarted.jsx":
/*!***********************************************!*\
  !*** ./components/get-started/GetStarted.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getStarted_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getStarted.scss */ "./components/get-started/getStarted.scss");
/* harmony import */ var _getStarted_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_getStarted_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/janndeterling/Documents/projects/rokkit.ts/project-page/components/get-started/GetStarted.jsx";



var GetStarted = function GetStarted(props) {
  var install = "install";
  var create = "create";
  var deploy = "deploy";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var installRokkit = state && state === install ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Install Rokkit.ts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Before hacking with Rokkit.ts, you need to install its modules. Rokkit.ts is splitted into functional modules to reduce size and seperate concerns. Depending on the application you want to build you can install different modules. The major module is the \"Rokkit.ts core\". The core helps you starting and preconfiguring other modules. Moreover this module is capable of the framework's dependency injection.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "Currentlty there is only one further module the web module. Its purpose is to build restful APIs or to query other services. It comes with a buildin web-server (restify) and provides you the ability to easily create controllers. We will discover this functionallity a bit later. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "To use Rokkit.ts make sure you have typescript installed and that you created a simple \"tsconfig.json\" Now you can just run the install commands on the right.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/install.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Use the Rokkit.ts CLI"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Beside creating your project from scratch you can also use the Rokkit.ts CLI. The cli currently supports three commands.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Init -- initialize a new project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Build -- build the application"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Run -- run the application")), "The cli comes with our core package and can easily be used. We recommend it to create your first project. Just use the same command as provided on the right side.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/cli.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))) : null;
  var createApp = state && state === create ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Base class"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Now that you have installed the needed modules of Rokkit.ts let's starting developing. We will build a simple REST API that returns hello world.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "We will start with our base class. Rokkit.ts needs an entry point to your project. As you can see on the right. The base class is quite empty and just annotated with the \"RokkitRunner\" decorator. This decorator tells Rokkit.ts to run the start procedure. You have to provide the root path of your source directory to the decorator. We need this path to find your further classes. You don't even need a constructor in this class, we are planning to provide more functionality for the base class in the future. For now it is just an entry point to the project.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/init-class.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Building a controller"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "So we created our base class let's create a controller to send our hello world message. On the right you can see a new class for our controller. It is marked with the controller decorator. the controller decorator expects an uri base path. We use \"/sample\" here. This means that our controller will be available on the following URI: \"http://host:port/sample\".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), "Within our controller we now want to add some functionality. Therefore we can add a method that will respond to a request on a mapped path. In our code on the right we have the method \"greetWorld\". Because of its decorator it will respond to every GET request against our resource. You can also fill a request path into the decorator to specify the whole path. The result of the method will be used as the result of the request.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/simple-controller.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Using dependency injection"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "We managed to create a basic controller, but how about extending this one by using the Rokkit.ts dependency injection. As you can see we added a constructor to our class. With two arguments. The first argument is a \"GreetingGenerator\". It's just another user class which hold some kind of logic. The second argument is a basic string. In order to use the dependency injection for native objects like strings, numbers, booleans, you have to use the annotation \"Inject\" and provide the value that will be injected. In our case \"Hello\" will be injected we the class is created. You can also use this decorator for user classes but there is a easier way. Because the \"GreetingGenerator\" is a registered class of the project. Rokkit.ts is able to automatically inject an instance. So you just have to declare it a the constructor. There is only one thing you need to do, you need to annotate the user comoponent that will be inejcted with one of the following decorators \"Component\", \"Controller\", \"Service\". This tells Rokkit.ts that this class is important for the dependency injection. Classes without that decorators won't be recognized.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/controller.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })))) : null;
  var deployApp = state && state === deploy ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Running an app in development mode"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "After completing your first controller let's start your application and test it. In order to run Rokkit.ts in development mode you need to install ts-node. After installing it, just use it to run your entry point class.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/dev.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "highlight-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Running an app in production mode"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "When you finished your development and want to run the application in production mode, you need to build it. There are two steps to build the application currentlty: 1. Run the application with ts-node. This will generate an directory with an declaration file. This file is needed for Rokkit.ts in production. This file provides important information for the dependency injection and speeds up the whole starting process. In development mode the file will be recreate every time. After running the app in development mode use the TypeScript compiler to build the project. At this time you need to use \"build\" as the outDir in the \"tsconfig.json\". After build your application just run the entrypoint class with Node.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "code-img",
    src: "../../static/images/prod.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })))) : null;

  var setActive = function setActive(action) {
    setState(action);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: state === install ? "active-button" : "",
    onClick: function onClick() {
      return setActive(install);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Install Rokkit.ts"), installRokkit, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: state === create ? "active-button" : "",
    onClick: function onClick() {
      return setActive(create);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Creating your first app"), createApp, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: state === deploy ? "active-button" : "",
    onClick: function onClick() {
      return setActive(deploy);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Deploying the application"), deployApp);
};

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ })

})
//# sourceMappingURL=index.js.7a4d286641cffcef1487.hot-update.js.map