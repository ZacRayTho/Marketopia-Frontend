"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Header_js",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-between py-2 items-center px-4 border-b-2 drop-shadow z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-righteous lg:text-4xl text-mtpurple\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"MARKETOPIA\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: !state.currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"btn\",\n                            href: \"/login\",\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"btn\",\n                            href: \"/register\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"btn\",\n                            href: \"/chat\",\n                            children: \"Messages\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"btn\",\n                            href: \"/profile\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Header.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"rlSaj1+FYD0HSDiEf0Hzf7KaONA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUMyQjtBQUNaO0FBRTVDLFNBQVNJLFNBQVM7O0lBQ2hCLElBQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixJQUEwQkQsa0JBQUFBLGdGQUFBQSxDQUFBQSxvRUFBY0EsUUFBakNJLFFBQW1CSixvQkFBWkssV0FBWUw7SUFFMUIscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1Isa0RBQUlBO29CQUFDUyxNQUFLOzhCQUFJOzs7Ozs7Ozs7OzswQkFFakIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUlaLENBQUNILE1BQU1LLFdBQVcsaUJBQ2pCLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNSLGtEQUFJQTs0QkFBQ1EsV0FBVTs0QkFBTUMsTUFBSztzQ0FBUzs7Ozs7O3NDQUdwQyw4REFBQ1Qsa0RBQUlBOzRCQUFDUSxXQUFVOzRCQUFNQyxNQUFLO3NDQUFZOzs7Ozs7Ozs7Ozt5Q0FLekMsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1Isa0RBQUlBOzRCQUFDUSxXQUFVOzRCQUFNQyxNQUFLO3NDQUFROzs7Ozs7c0NBR25DLDhEQUFDVCxrREFBSUE7NEJBQUNRLFdBQVU7NEJBQU1DLE1BQUs7c0NBQVc7Ozs7Ozs7Ozs7O3dCQUl6Qzs7Ozs7Ozs7Ozs7O0FBSVQ7R0FuQ1NOOztRQUNRRCxzREFBU0E7UUFDRUQsZ0VBQWNBOzs7S0FGakNFO0FBcUNULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz8zMzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTIgaXRlbXMtY2VudGVyIHB4LTQgYm9yZGVyLWItMiBkcm9wLXNoYWRvdyB6LTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtcmlnaHRlb3VzIGxnOnRleHQtNHhsIHRleHQtbXRwdXJwbGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NQVJLRVRPUElBPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+IFxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsZzpoaWRkZW5cIj5GaWx0ZXJzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgeyFzdGF0ZS5jdXJyZW50VXNlciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6c3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiL2NoYXRcIj5cbiAgICAgICAgICAgICAgTWVzc2FnZXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZUdsb2JhbFN0YXRlIiwidXNlUm91dGVyIiwiSGVhZGVyIiwicm91dGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJjdXJyZW50VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});