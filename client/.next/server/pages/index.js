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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/context/GlobalState.js":
/*!************************************!*\
  !*** ./src/context/GlobalState.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"useGlobalState\": () => (/* binding */ useGlobalState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet user;\nif (false) {}\nconst initialState = {\n    currentUser: user ? jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(user.access) : null,\n    currentUserToken: user ? user.access : null\n};\nconst GlobalStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst DispatchStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst GlobalProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, newValue)=>({\n            ...state,\n            ...newValue\n        }), initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStateContext.Provider, {\n        value: state,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DispatchStateContext.Provider, {\n            value: dispatch,\n            children: children\n        }, void 0, false, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/context/GlobalState.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/context/GlobalState.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\nconst useGlobalState = ()=>[\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalStateContext),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DispatchStateContext)\n    ];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9HbG9iYWxTdGF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLZTtBQUVtQjtBQUVsQyxJQUFJTTtBQUVKLElBQUksS0FBa0IsRUFBYSxFQUVsQztBQUVELE1BQU1LLGVBQWU7SUFDakJDLGFBQWFOLE9BQU9ELGlEQUFTQSxDQUFDQyxLQUFLTyxNQUFNLElBQUksSUFBSTtJQUNqREMsa0JBQWtCUixPQUFPQSxLQUFLTyxNQUFNLEdBQUcsSUFBSTtBQUMvQztBQUVBLE1BQU1FLG1DQUFxQmQsb0RBQWFBLENBQUNVO0FBQ3pDLE1BQU1LLHFDQUF1QmYsb0RBQWFBLENBQUNnQjtBQUVwQyxNQUFNQyxpQkFBaUIsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUM1QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR25CLGlEQUFVQSxDQUNoQyxDQUFDa0IsT0FBT0UsV0FBYztZQUFFLEdBQUdGLEtBQUs7WUFBRSxHQUFHRSxRQUFRO1FBQUMsSUFDOUNYO0lBR0oscUJBQ0ksOERBQUNJLG1CQUFtQlEsUUFBUTtRQUFDQyxPQUFPSjtrQkFDaEMsNEVBQUNKLHFCQUFxQk8sUUFBUTtZQUFDQyxPQUFPSDtzQkFDakNGOzs7Ozs7Ozs7OztBQUlqQixFQUFDO0FBRU0sTUFBTU0saUJBQWlCLElBQU07UUFDaEN0QixpREFBVUEsQ0FBQ1k7UUFDWFosaURBQVVBLENBQUNhO0tBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9jb250ZXh0L0dsb2JhbFN0YXRlLmpzPzIyMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gICAgY3JlYXRlQ29udGV4dCxcbiAgICB1c2VSZWR1Y2VyLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSdcblxubGV0IHVzZXI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjdXJyZW50VXNlcjogdXNlciA/IGp3dERlY29kZSh1c2VyLmFjY2VzcykgOiBudWxsLFxuICAgIGN1cnJlbnRVc2VyVG9rZW46IHVzZXIgPyB1c2VyLmFjY2VzcyA6IG51bGxcbn1cblxuY29uc3QgR2xvYmFsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xuY29uc3QgRGlzcGF0Y2hTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZClcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICAgICAgKHN0YXRlLCBuZXdWYWx1ZSkgPT4gKHsgLi4uc3RhdGUsIC4uLm5ld1ZhbHVlIH0pLFxuICAgICAgICBpbml0aWFsU3RhdGVcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdsb2JhbFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICAgICAgPERpc3BhdGNoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9EaXNwYXRjaFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9HbG9iYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsU3RhdGUgPSAoKSA9PiBbXG4gICAgdXNlQ29udGV4dChHbG9iYWxTdGF0ZUNvbnRleHQpLFxuICAgIHVzZUNvbnRleHQoRGlzcGF0Y2hTdGF0ZUNvbnRleHQpXG5dOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImp3dERlY29kZSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJhY2Nlc3MiLCJjdXJyZW50VXNlclRva2VuIiwiR2xvYmFsU3RhdGVDb250ZXh0IiwiRGlzcGF0Y2hTdGF0ZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsIm5ld1ZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/GlobalState.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_1__.GlobalProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"I'm in App component\"\n        }, void 0, false, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFFeEQsU0FBU0MsT0FBTztJQUNaLHFCQUNJLDhEQUFDRCxnRUFBY0E7a0JBQ1gsNEVBQUNFO3NCQUFJOzs7Ozs7Ozs7OztBQUtqQjtBQUVBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxHbG9iYWxQcm92aWRlcj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSSdtIGluIEFwcCBjb21wb25lbnRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dsb2JhbFByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiR2xvYmFsUHJvdmlkZXIiLCJIb21lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();