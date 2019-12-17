/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/icon-128.png":
/*!******************************!*\
  !*** ./src/img/icon-128.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-128.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMTI4LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvaWNvbi0xMjgucG5nPzM1MGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaWNvbi0xMjgucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-128.png\n");

/***/ }),

/***/ "./src/img/icon-34.png":
/*!*****************************!*\
  !*** ./src/img/icon-34.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-34.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMzQucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29uLTM0LnBuZz9mZGY2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImljb24tMzQucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-34.png\n");

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-128.png */ \"./src/img/icon-128.png\");\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icon-34.png */ \"./src/img/icon-34.png\");\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n // chrome.runtime.onMessage.addListener(function (message, sender, respond) {\n//     if (message.from == 'content_script') {\n//         if (message.action = 'fill_available') {\n//             chrome.pageAction.show(sender.tab.id);\n//         }\n//     }\n//     else if (message.from == 'popup') {\n//         if (message.action == 'do_fill') {\n//             var url = new URL(message.tab.url);\n//             chrome.runtime.sendNativeMessage('com.leoxiong.chromepass', {\n//                 type: 'autofill_request',\n//                 host: url.host\n//             }, function (reply) {\n//                 if (reply.type == 'autofill_response') {\n// chrome.tabs.sendMessage(message.tab.id, {\n//     from: 'background',\n//     action: 'do_fill',\n//     user: reply.user,\n//     pass: reply.pass\n// });\n//                     respond();\n//                 }\n//             });\n//         }\n//     }\n//     // Keep the respond method after function return as we will need it after\n//     // an async callback.\n//     return true;\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvaWNvbi0xMjgucG5nJ1xuaW1wb3J0ICcuLi9pbWcvaWNvbi0zNC5wbmcnXG5cblxuLy8gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtZXNzYWdlLCBzZW5kZXIsIHJlc3BvbmQpIHtcbi8vICAgICBpZiAobWVzc2FnZS5mcm9tID09ICdjb250ZW50X3NjcmlwdCcpIHtcbi8vICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID0gJ2ZpbGxfYXZhaWxhYmxlJykge1xuLy8gICAgICAgICAgICAgY2hyb21lLnBhZ2VBY3Rpb24uc2hvdyhzZW5kZXIudGFiLmlkKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmIChtZXNzYWdlLmZyb20gPT0gJ3BvcHVwJykge1xuLy8gICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT0gJ2RvX2ZpbGwnKSB7XG4vLyAgICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTChtZXNzYWdlLnRhYi51cmwpO1xuXG4vLyAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTmF0aXZlTWVzc2FnZSgnY29tLmxlb3hpb25nLmNocm9tZXBhc3MnLCB7XG4vLyAgICAgICAgICAgICAgICAgdHlwZTogJ2F1dG9maWxsX3JlcXVlc3QnLFxuLy8gICAgICAgICAgICAgICAgIGhvc3Q6IHVybC5ob3N0XG4vLyAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVwbHkpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAocmVwbHkudHlwZSA9PSAnYXV0b2ZpbGxfcmVzcG9uc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKG1lc3NhZ2UudGFiLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmcm9tOiAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhY3Rpb246ICdkb19maWxsJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVzZXI6IHJlcGx5LnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXNzOiByZXBseS5wYXNzXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc3BvbmQoKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIEtlZXAgdGhlIHJlc3BvbmQgbWV0aG9kIGFmdGVyIGZ1bmN0aW9uIHJldHVybiBhcyB3ZSB3aWxsIG5lZWQgaXQgYWZ0ZXJcbi8vICAgICAvLyBhbiBhc3luYyBjYWxsYmFjay5cbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vIH0pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

/******/ });