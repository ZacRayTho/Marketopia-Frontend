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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MessageComponent(param) {\n    var message = param.message, state = param.state;\n    console.log(state.currentUser.user_id);\n    console.log(message);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-fit  \".concat(message.sender == state.currentUser.user_id ? \"ml-auto\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[0.65rem] \".concat(message.sender == state.currentUser.user_id ? \"\" : \"order-2\"),\n                children: message.timestamp\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-fit border rounded-lg px-2 py-1 \".concat(message.sender == state.currentUser.user_id ? \"bg-mtpurple\" : \"bg-mtmedium\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white\",\n                    children: message.text\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/MessageComponent.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MessageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageComponent);\nvar _c;\n$RefreshReg$(_c, \"MessageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxpQkFBaUIsS0FBa0IsRUFBRTtRQUFsQkMsVUFBRixNQUFFQSxTQUFTQyxRQUFYLE1BQVdBO0lBQ25DQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTztJQUNyQ0gsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXLGVBQTRFLE9BQTdEUCxRQUFRUSxNQUFNLElBQUlQLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTyxHQUFHLFlBQVksRUFBRTs7MEJBQ3pGLDhEQUFDQztnQkFBSUMsV0FBVyxrQkFBK0UsT0FBN0RQLFFBQVFRLE1BQU0sSUFBSVAsTUFBTUcsV0FBVyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxTQUFTOzBCQUFLTCxRQUFRUyxTQUFTOzs7Ozs7MEJBQ3BILDhEQUFDSDtnQkFDQ0MsV0FBVyxxQ0FFVixPQURDUCxRQUFRUSxNQUFNLElBQUlQLE1BQU1HLFdBQVcsQ0FBQ0MsT0FBTyxHQUFHLGdCQUFnQixhQUFhOzBCQUc3RSw0RUFBQ0M7b0JBQUlDLFdBQVU7OEJBQWNQLFFBQVFVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpEO0tBZlNYO0FBaUJULCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC5qcz9iYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTWVzc2FnZUNvbXBvbmVudCh7IG1lc3NhZ2UsIHN0YXRlIH0pIHtcbiAgY29uc29sZS5sb2coc3RhdGUuY3VycmVudFVzZXIudXNlcl9pZCk7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCB3LWZpdCAgJHttZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkID8gXCJtbC1hdXRvXCIgOiBcIlwifWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LVswLjY1cmVtXSAke21lc3NhZ2Uuc2VuZGVyID09IHN0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWQgPyBcIlwiIDogXCJvcmRlci0yXCJ9YH0+e21lc3NhZ2UudGltZXN0YW1wfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2B3LWZpdCBib3JkZXIgcm91bmRlZC1sZyBweC0yIHB5LTEgJHtcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkID8gXCJiZy1tdHB1cnBsZVwiIDogXCJiZy1tdG1lZGl1bVwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57bWVzc2FnZS50ZXh0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNZXNzYWdlQ29tcG9uZW50IiwibWVzc2FnZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsImRpdiIsImNsYXNzTmFtZSIsInNlbmRlciIsInRpbWVzdGFtcCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MessageComponent.js\n"));

/***/ })

});