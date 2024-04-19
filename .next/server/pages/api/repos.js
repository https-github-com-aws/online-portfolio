"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/repos";
exports.ids = ["pages/api/repos"];
exports.modules = {

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "(api)/./pages/api/repos.jsx":
/*!*****************************!*\
  !*** ./pages/api/repos.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetch = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\nlet key1 = 'ghp_VzcC7gx0GXzOVP1';\nlet key2 = '7kIiTmNtBqj2sOC0S0zxD';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let _ = await (await fetch('https://api.github.com/users/nextthread/repos', {\n        headers: {\n            Authorization: 'token ' + key1 + key2\n        }\n    })).json();\n    try {\n        res.send([\n            ..._\n        ]);\n    } catch  {\n        res.status(500);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVwb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFFMUMsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBcUI7QUFDaEMsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBdUI7QUFFbEMsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsR0FBRyxDQUFDQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQ04sS0FBSyxDQUFDLENBQStDLGdEQUFFLENBQUM7UUFDekVPLE9BQU8sRUFBRSxDQUFDO1lBQ05DLGFBQWEsRUFBRSxDQUFRLFVBQUNOLElBQUksR0FBQ0MsSUFBSTtRQUNyQyxDQUFDO0lBQ0wsQ0FBQyxHQUFHTSxJQUFJO0lBR1IsR0FBRyxDQUFDLENBQUM7UUFDREosR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztlQUFHSixDQUFDO1FBQUEsQ0FBQztJQUNuQixDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDTEQsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRztJQUNsQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vcGFnZXMvYXBpL3JlcG9zLmpzeD8xYTIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoID0gcmVxdWlyZSgnaXNvbW9ycGhpYy11bmZldGNoJylcclxuXHJcbmxldCBrZXkxID0gJ2docF9WemNDN2d4MEdYek9WUDEnO1xyXG5sZXQga2V5MiA9ICc3a0lpVG1OdEJxajJzT0MwUzB6eEQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBsZXQgXyA9IGF3YWl0IChhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9uZXh0dGhyZWFkL3JlcG9zJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ3Rva2VuICcra2V5MStrZXkyXHJcbiAgICAgICAgfVxyXG4gICAgfSkpLmpzb24oKTtcclxuXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzLnNlbmQoWy4uLl9dKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJrZXkxIiwia2V5MiIsInJlcSIsInJlcyIsIl8iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb24iLCJzZW5kIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/repos.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/repos.jsx"));
module.exports = __webpack_exports__;

})();