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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/content_script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/content_script.js":
/*!**********************************!*\
  !*** ./src/js/content_script.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(function () {\n  Array.prototype.forEach.call(document.querySelectorAll(\"form input[type=password]\"), function (pass) {\n    var form = pass.closest(\"form\");\n    var users = Array.prototype.filter.call(form.querySelectorAll(\"input\"), function (input) {\n      return input.type == \"text\" || input.type == \"email\";\n    });\n\n    function getPos(el) {\n      // yay readability\n      for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);\n\n      return {\n        x: lx,\n        y: ly\n      };\n    }\n\n    if (users.length == 1) {\n      var user = users[0]; // code for popup inside website\n\n      var button = document.createElement(\"button\");\n      button.innerText = \"🛡\";\n      var positionFeilds = getPos(user);\n      var topButton = positionFeilds.y + user.offsetHeight / 6;\n      var leftButton = positionFeilds.x + user.offsetWidth - 50;\n      button.style.cssText = \"position:absolute;top:\" + topButton + \"px;left:\" + leftButton + \"px;display:block; z-index:1000;border: none;background-image: none;background-color: Transparent;\";\n      button.addEventListener(\"click\", function () {\n        var frame = document.getElementById(\"safeguardIframe\");\n\n        if (frame) {\n          frame.remove();\n        } else {\n          console.log(\"hmm\");\n          var topPopupIframe = positionFeilds.y + user.offsetHeight + 2;\n          var leftPopupIframe = positionFeilds.x;\n          var iframeWidth = user.offsetWidth > 300 ? user.offsetWidth : 300;\n          var iframe = document.createElement(\"iframe\");\n          iframe.id = \"safeguardIframe\";\n          iframe.src = \"https://safeguard.icu/\" + location.host;\n          iframe.style.cssText = \"position:fixed;top:\" + topPopupIframe + \"px;left:\" + leftPopupIframe + \"px;display:block;\" + \"width:\" + iframeWidth + \"px;height:300px;z-index:1000;\";\n          document.body.appendChild(iframe);\n        }\n      }, false);\n      document.body.appendChild(button);\n      var eventMethod = window.addEventListener ? \"addEventListener\" : \"attachEvent\";\n      var eventer = window[eventMethod];\n      var messageEvent = eventMethod === \"attachEvent\" ? \"onmessage\" : \"message\";\n      eventer(messageEvent, function (e) {\n        // if (e.origin !== 'http://the-trusted-iframe-origin.com') return;\n        // if (e.data === \"myevent\" || e.message === \"myevent\")\n        var data = e.data;\n\n        if (data.app === \"safeguard-web\") {\n          user.value = data.username;\n          pass.value = data.password;\n          user.style.backgroundColor = \"#edffe3\";\n          pass.style.backgroundColor = \"#edffe3\";\n        }\n      }); // code for popup inside website ends\n      // code for popup.html injection\n\n      chrome.runtime.onMessage.addListener(function (message, sender, respond) {\n        if (message.from == \"popup\") {\n          if (message.action == \"do_fill\") {\n            console.log(\"message recived\");\n            user.value = message.user;\n            pass.value = message.pass;\n            user.style.backgroundColor = \"#edffe3\";\n            pass.style.backgroundColor = \"#edffe3\";\n          }\n        }\n      }); // code for popup.html injection ends\n\n      chrome.runtime.sendMessage(\"\", {\n        from: \"content_script\",\n        action: \"fill_available\"\n      });\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudF9zY3JpcHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGVudF9zY3JpcHQuanM/MGQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF1cIiksXG4gICAgZnVuY3Rpb24ocGFzcykge1xuICAgICAgdmFyIGZvcm0gPSBwYXNzLmNsb3Nlc3QoXCJmb3JtXCIpO1xuXG4gICAgICB2YXIgdXNlcnMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLFxuICAgICAgICBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgIHJldHVybiBpbnB1dC50eXBlID09IFwidGV4dFwiIHx8IGlucHV0LnR5cGUgPT0gXCJlbWFpbFwiO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBnZXRQb3MoZWwpIHtcbiAgICAgICAgLy8geWF5IHJlYWRhYmlsaXR5XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIGx4ID0gMCwgbHkgPSAwO1xuICAgICAgICAgIGVsICE9IG51bGw7XG4gICAgICAgICAgbHggKz0gZWwub2Zmc2V0TGVmdCwgbHkgKz0gZWwub2Zmc2V0VG9wLCBlbCA9IGVsLm9mZnNldFBhcmVudFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyB4OiBseCwgeTogbHkgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVzZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHZhciB1c2VyID0gdXNlcnNbMF07XG5cbiAgICAgICAgLy8gY29kZSBmb3IgcG9wdXAgaW5zaWRlIHdlYnNpdGVcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIvCfm6FcIjtcbiAgICAgICAgdmFyIHBvc2l0aW9uRmVpbGRzID0gZ2V0UG9zKHVzZXIpO1xuICAgICAgICB2YXIgdG9wQnV0dG9uID0gcG9zaXRpb25GZWlsZHMueSArIHVzZXIub2Zmc2V0SGVpZ2h0IC8gNjtcbiAgICAgICAgdmFyIGxlZnRCdXR0b24gPSBwb3NpdGlvbkZlaWxkcy54ICsgdXNlci5vZmZzZXRXaWR0aCAtIDUwO1xuICAgICAgICBidXR0b24uc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgXCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6XCIgK1xuICAgICAgICAgIHRvcEJ1dHRvbiArXG4gICAgICAgICAgXCJweDtsZWZ0OlwiICtcbiAgICAgICAgICBsZWZ0QnV0dG9uICtcbiAgICAgICAgICBcInB4O2Rpc3BsYXk6YmxvY2s7IHotaW5kZXg6MTAwMDtib3JkZXI6IG5vbmU7YmFja2dyb3VuZC1pbWFnZTogbm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcIjtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhZmVndWFyZElmcmFtZVwiKTtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICBmcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG1tXCIpO1xuICAgICAgICAgICAgICB2YXIgdG9wUG9wdXBJZnJhbWUgPSBwb3NpdGlvbkZlaWxkcy55ICsgdXNlci5vZmZzZXRIZWlnaHQgKyAyO1xuICAgICAgICAgICAgICB2YXIgbGVmdFBvcHVwSWZyYW1lID0gcG9zaXRpb25GZWlsZHMueDtcblxuICAgICAgICAgICAgICB2YXIgaWZyYW1lV2lkdGggPSB1c2VyLm9mZnNldFdpZHRoID4gMzAwID8gdXNlci5vZmZzZXRXaWR0aCA6IDMwMDtcblxuICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgaWZyYW1lLmlkID0gXCJzYWZlZ3VhcmRJZnJhbWVcIjtcbiAgICAgICAgICAgICAgaWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly9zYWZlZ3VhcmQuaWN1L1wiICsgbG9jYXRpb24uaG9zdDtcbiAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgICAgIFwicG9zaXRpb246Zml4ZWQ7dG9wOlwiICtcbiAgICAgICAgICAgICAgICB0b3BQb3B1cElmcmFtZSArXG4gICAgICAgICAgICAgICAgXCJweDtsZWZ0OlwiICtcbiAgICAgICAgICAgICAgICBsZWZ0UG9wdXBJZnJhbWUgK1xuICAgICAgICAgICAgICAgIFwicHg7ZGlzcGxheTpibG9jaztcIiArXG4gICAgICAgICAgICAgICAgXCJ3aWR0aDpcIiArXG4gICAgICAgICAgICAgICAgaWZyYW1lV2lkdGggK1xuICAgICAgICAgICAgICAgIFwicHg7aGVpZ2h0OjMwMHB4O3otaW5kZXg6MTAwMDtcIjtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgdmFyIGV2ZW50TWV0aG9kID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgICA/IFwiYWRkRXZlbnRMaXN0ZW5lclwiXG4gICAgICAgICAgOiBcImF0dGFjaEV2ZW50XCI7XG4gICAgICAgIHZhciBldmVudGVyID0gd2luZG93W2V2ZW50TWV0aG9kXTtcbiAgICAgICAgdmFyIG1lc3NhZ2VFdmVudCA9XG4gICAgICAgICAgZXZlbnRNZXRob2QgPT09IFwiYXR0YWNoRXZlbnRcIiA/IFwib25tZXNzYWdlXCIgOiBcIm1lc3NhZ2VcIjtcbiAgICAgICAgZXZlbnRlcihtZXNzYWdlRXZlbnQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAvLyBpZiAoZS5vcmlnaW4gIT09ICdodHRwOi8vdGhlLXRydXN0ZWQtaWZyYW1lLW9yaWdpbi5jb20nKSByZXR1cm47XG4gICAgICAgICAgLy8gaWYgKGUuZGF0YSA9PT0gXCJteWV2ZW50XCIgfHwgZS5tZXNzYWdlID09PSBcIm15ZXZlbnRcIilcbiAgICAgICAgICB2YXIgZGF0YSA9IGUuZGF0YTtcbiAgICAgICAgICBpZiAoZGF0YS5hcHAgPT09IFwic2FmZWd1YXJkLXdlYlwiKSB7XG4gICAgICAgICAgICB1c2VyLnZhbHVlID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgICAgIHBhc3MudmFsdWUgPSBkYXRhLnBhc3N3b3JkO1xuXG4gICAgICAgICAgICB1c2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2VkZmZlM1wiO1xuICAgICAgICAgICAgcGFzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZGZmZTNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvZGUgZm9yIHBvcHVwIGluc2lkZSB3ZWJzaXRlIGVuZHNcblxuICAgICAgICAvLyBjb2RlIGZvciBwb3B1cC5odG1sIGluamVjdGlvblxuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIHNlbmRlcixcbiAgICAgICAgICByZXNwb25kXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChtZXNzYWdlLmZyb20gPT0gXCJwb3B1cFwiKSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT0gXCJkb19maWxsXCIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlIHJlY2l2ZWRcIik7XG4gICAgICAgICAgICAgIHVzZXIudmFsdWUgPSBtZXNzYWdlLnVzZXI7XG4gICAgICAgICAgICAgIHBhc3MudmFsdWUgPSBtZXNzYWdlLnBhc3M7XG5cbiAgICAgICAgICAgICAgdXNlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZGZmZTNcIjtcbiAgICAgICAgICAgICAgcGFzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZGZmZTNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb2RlIGZvciBwb3B1cC5odG1sIGluamVjdGlvbiBlbmRzXG5cbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXCJcIiwge1xuICAgICAgICAgIGZyb206IFwiY29udGVudF9zY3JpcHRcIixcbiAgICAgICAgICBhY3Rpb246IFwiZmlsbF9hdmFpbGFibGVcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/content_script.js\n");

/***/ })

/******/ });