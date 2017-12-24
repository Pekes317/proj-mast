(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("core-js/es6/symbol");
__webpack_require__("core-js/es6/object");
__webpack_require__("core-js/es6/function");
__webpack_require__("core-js/es6/parse-int");
__webpack_require__("core-js/es6/parse-float");
__webpack_require__("core-js/es6/number");
__webpack_require__("core-js/es6/math");
__webpack_require__("core-js/es6/string");
__webpack_require__("core-js/es6/date");
__webpack_require__("core-js/es6/array");
__webpack_require__("core-js/es6/regexp");
__webpack_require__("core-js/es6/map");
__webpack_require__("core-js/es6/set");
__webpack_require__("core-js/es6/reflect");
__webpack_require__("core-js/es7/array");
__webpack_require__("core-js/es7/reflect");
__webpack_require__("zone.js/dist/zone");
__webpack_require__("web-animations-js");
__webpack_require__("hammerjs");


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/polyfills.ts");


/***/ }),

/***/ "core-js/es6/array":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ }),

/***/ "core-js/es6/date":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ }),

/***/ "core-js/es6/function":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ }),

/***/ "core-js/es6/map":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ }),

/***/ "core-js/es6/math":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ }),

/***/ "core-js/es6/number":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ }),

/***/ "core-js/es6/object":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ }),

/***/ "core-js/es6/parse-float":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ }),

/***/ "core-js/es6/parse-int":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ }),

/***/ "core-js/es6/reflect":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ }),

/***/ "core-js/es6/regexp":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ }),

/***/ "core-js/es6/set":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ }),

/***/ "core-js/es6/string":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ }),

/***/ "core-js/es6/symbol":
/***/ (function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ }),

/***/ "core-js/es7/array":
/***/ (function(module, exports) {

module.exports = require("core-js/es7/array");

/***/ }),

/***/ "core-js/es7/reflect":
/***/ (function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ }),

/***/ "hammerjs":
/***/ (function(module, exports) {

module.exports = require("hammerjs");

/***/ }),

/***/ "web-animations-js":
/***/ (function(module, exports) {

module.exports = require("web-animations-js");

/***/ }),

/***/ "zone.js/dist/zone":
/***/ (function(module, exports) {

module.exports = require("zone.js/dist/zone");

/***/ })

/******/ })));