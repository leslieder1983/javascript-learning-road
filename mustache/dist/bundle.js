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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parseTemplateToTokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTemplateToTokens */ \"./src/parseTemplateToTokens.js\");\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate.js\");\n\r\n\r\nwindow.kyleslie = {\r\n    render(templateStr, data) {\r\n        let tokens = Object(_parseTemplateToTokens__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(templateStr);\r\n        let domStr = Object(_renderTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens,data);\r\n        return domStr;\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lookup.js":
/*!***********************!*\
  !*** ./src/lookup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lookup; });\n/**\r\n * lookup函数:\r\n功能是可以在data0bj对象中，寻找用连续点符号的keyName属性比如，data0bj是\r\n{\r\n    a: {\r\n        b: {\r\n            c: 100\r\n        }\r\n    }\r\n\r\n}\r\n那么lookup(data0bj, 'a.b.c‘)结果就是100\r\n */\r\nfunction lookup(dataObj, keyName) {\r\n    if (keyName.indexOf('.') <=0) {\r\n        return dataObj[keyName];\r\n    } else {\r\n        let obj = dataObj;\r\n        let keys = keyName.split('.');\r\n        keys.forEach(element => {\r\n            obj = obj[element];\r\n        });\r\n        return obj;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/lookup.js?");

/***/ }),

/***/ "./src/nestTokens.js":
/*!***************************!*\
  !*** ./src/nestTokens.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nestTokens; });\nfunction nestTokens(tokens) {\r\n    let nestTokens = [];\r\n    let collector = nestTokens;\r\n    let sections = [];\r\n\r\n    let token;\r\n\r\n    for (let i = 0, length = tokens.length; i < length; i++) {\r\n        token = tokens[i];\r\n        switch (token[0]) {\r\n            case '#':\r\n                collector.push(token);\r\n                sections.push(token);\r\n                collector = token[2] = [];\r\n                break;\r\n            case '/':\r\n                sections.pop();\r\n                collector = sections.length > 0 ? sections[length - 1][2] : nestTokens;\r\n                break;\r\n            default:\r\n                collector.push(token);\r\n                break;\r\n\r\n        }\r\n    }\r\n\r\n  return nestTokens;\r\n}\n\n//# sourceURL=webpack:///./src/nestTokens.js?");

/***/ }),

/***/ "./src/parseArray.js":
/*!***************************!*\
  !*** ./src/parseArray.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseArray; });\n/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ \"./src/lookup.js\");\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate.js\");\n/**\r\n * 处理数组，结合renderTemplate实现递归\r\n * 注意参数接受的是token,而不是tokens,\r\n * \r\n * 这个函数调用的次数由data决定：类比于x-repeat v-for\r\n */\r\n\r\n\r\n function parseArray(token,data){\r\nlet value = Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data,token[1]);\r\nlet resultStr = '';\r\nfor(let i=0; i<value.length;i++){\r\n    resultStr += Object(_renderTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(token[2],{\r\n        '.':value[i],\r\n        ...value[i]\r\n    });\r\n}\r\n\r\nreturn resultStr;\r\n }\n\n//# sourceURL=webpack:///./src/parseArray.js?");

/***/ }),

/***/ "./src/parseTemplateToTokens.js":
/*!**************************************!*\
  !*** ./src/parseTemplateToTokens.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTemplateToTokens; });\n/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ \"./src/scanner.js\");\n/* harmony import */ var _nestTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nestTokens */ \"./src/nestTokens.js\");\n\r\n\r\n/**\r\n * 将模板字符串转化为tokens     \r\n * @param {待转化的模板字符串} templateStr \r\n */\r\nfunction parseTemplateToTokens(templateStr) {\r\n\r\n    let tokens = [];\r\n    let words;\r\n    let scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__[\"default\"](templateStr);\r\n    \r\n    while (!scanner.eof()) {\r\n        words = scanner.scanUntil('{{');\r\n        if(words!='')\r\n        tokens.push(['text', words]);\r\n        scanner.scan('{{');\r\n        words = scanner.scanUntil('}}');\r\n        if(words!=''){\r\n            if(words[0] == '#'){\r\n              tokens.push(['#',words.substring(1)])\r\n            }\r\n            else if(words[0] =='/'){\r\n               tokens.push(['/',words.substring(1)]) \r\n            }\r\n            else\r\n            tokens.push(['name', words]);\r\n        }\r\n       \r\n        scanner.scan('}}');\r\n    }\r\n\r\n    return Object(_nestTokens__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens);\r\n}\n\n//# sourceURL=webpack:///./src/parseTemplateToTokens.js?");

/***/ }),

/***/ "./src/renderTemplate.js":
/*!*******************************!*\
  !*** ./src/renderTemplate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTemplate; });\n/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ \"./src/lookup.js\");\n/* harmony import */ var _parseArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseArray */ \"./src/parseArray.js\");\n\r\n\r\nfunction renderTemplate(tokens, data) {\r\n    let templateStr = '';\r\n    for (let i = 0; i < tokens.length; i++) {\r\n        let token = tokens[i];\r\n        if (token[0] == 'text') {\r\n            templateStr += token[1];\r\n        } else if (token[0] == 'name') {\r\n            templateStr += Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, token[1]);\r\n        } else if (token[0] == '#') {\r\n            templateStr += Object(_parseArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(token,data);\r\n        }\r\n    };\r\n    return templateStr;\r\n}\n\n//# sourceURL=webpack:///./src/renderTemplate.js?");

/***/ }),

/***/ "./src/scanner.js":
/*!************************!*\
  !*** ./src/scanner.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scanner; });\n/**\r\n * 扫描器类\r\n */\r\nclass Scanner {\r\n    constructor(templateStr) {\r\n        this.templateStr = templateStr;\r\n        this.pos = 0;\r\n        this.tail = templateStr;\r\n    };\r\n    eof() {\r\n        return this.pos >= this.templateStr.length;\r\n    }\r\n    scan(stopTag){\r\n        while(this.tail.indexOf(stopTag)==0){\r\n            this.pos+=2;\r\n            this.tail=this.templateStr.substring(this.pos);\r\n        };\r\n        return;\r\n    }\r\n\r\n    scanUntil(stopTag){\r\n        const pos_backend = this.pos;\r\n        while(this.tail.indexOf(stopTag)!=0&&!this.eof()){\r\n            this.pos++;\r\n            this.tail = this.templateStr.substring(this.pos);\r\n        };\r\n        return this.templateStr.substring(pos_backend,this.pos);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/scanner.js?");

/***/ })

/******/ });