"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[chat]",{

/***/ "./src/components/MessageComponent.js":
/*!********************************************!*\
  !*** ./src/components/MessageComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MessageComponent(param) {\n    var message = param.message, state = param.state;\n    console.log(state.currentUser.user_id);\n    console.log(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(message.sender == state.currentUser.user_id ? \"border rounded-full\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm\",\n                    children: message.timestamp\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                message.text\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MessageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComponent);\nvar _c;\n$RefreshReg$(_c, \"MessageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxpQkFBaUIsS0FBa0IsRUFBRTtRQUFsQkMsVUFBRixNQUFFQSxTQUFTQyxRQUFYLE1BQVdBO0lBQ25DQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTztJQUNyQ0gsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFZO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFXLEdBQTRFLE9BQXpFUCxRQUFRUSxNQUFNLElBQUlQLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTyxHQUFHLHdCQUF3QixFQUFFOzs4QkFDekYsOERBQUNDO29CQUFJQyxXQUFVOzhCQUFXUCxRQUFRUyxTQUFTOzs7Ozs7Z0JBQzFDVCxRQUFRVSxJQUFJOzs7Ozs7Ozs7Ozs7QUFJckI7S0FYU1g7QUFhVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VDb21wb25lbnQuanM/YmI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1lc3NhZ2VDb21wb25lbnQoeyBtZXNzYWdlLCBzdGF0ZSB9KSB7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWQpO1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkID8gXCJib3JkZXIgcm91bmRlZC1mdWxsXCIgOiBcIlwifWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj57bWVzc2FnZS50aW1lc3RhbXB9PC9kaXY+XG4gICAgICAgIHttZXNzYWdlLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lc3NhZ2VDb21wb25lbnQiLCJtZXNzYWdlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VuZGVyIiwidGltZXN0YW1wIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MessageComponent.js\n"));

/***/ })

});