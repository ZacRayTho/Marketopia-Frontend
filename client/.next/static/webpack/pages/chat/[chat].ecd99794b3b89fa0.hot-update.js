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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MessageComponent(param) {\n    var message = param.message, state = param.state;\n    console.log(state.currentUser.user_id);\n    console.log(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-fit items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[0.65rem] \",\n                children: message.timestamp\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-fit border rounded-full px-2 \".concat(message.sender == state.currentUser.user_id ? \"\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: message.text\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MessageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComponent);\nvar _c;\n$RefreshReg$(_c, \"MessageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxpQkFBaUIsS0FBa0IsRUFBRTtRQUFsQkMsVUFBRixNQUFFQSxTQUFTQyxRQUFYLE1BQVdBO0lBQ25DQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTztJQUNyQ0gsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFZOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQW1CUCxRQUFRUSxTQUFTOzs7Ozs7MEJBQ3JELDhEQUFDRjtnQkFDQ0MsV0FBVyxrQ0FJVixPQUhDUCxRQUFRUyxNQUFNLElBQUlSLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTyxHQUN2QyxLQUNBLEVBQUU7MEJBR1IsNEVBQUNDOzhCQUFLTixRQUFRVSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtLQWpCU1g7QUFtQlQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50LmpzP2JiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNZXNzYWdlQ29tcG9uZW50KHsgbWVzc2FnZSwgc3RhdGUgfSkge1xuICBjb25zb2xlLmxvZyhzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkKTtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IHctZml0IGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzAuNjVyZW1dIFwiPnttZXNzYWdlLnRpbWVzdGFtcH08L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1maXQgYm9yZGVyIHJvdW5kZWQtZnVsbCBweC0yICR7XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXIudXNlcl9pZFxuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXY+e21lc3NhZ2UudGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVzc2FnZUNvbXBvbmVudCIsIm1lc3NhZ2UiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlciIsInVzZXJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aW1lc3RhbXAiLCJzZW5kZXIiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MessageComponent.js\n"));

/***/ })

});