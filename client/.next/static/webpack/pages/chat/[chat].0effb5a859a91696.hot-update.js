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

/***/ "./src/pages/chat/[chat].js":
/*!**********************************!*\
  !*** ./src/pages/chat/[chat].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction chat() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl\",\n            children: [\n                \"You're Messaging \",\n                name,\n                \"!\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 12,\n                    columnNumber: 33\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"border bg-slate-100 rounded-l-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNUO0FBRS9CLFNBQVNHLE9BQU87O0lBQ2QsSUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLElBQU1JLE9BQU9ELG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsS0FBSyxDQUFDSCxJQUFJO0lBQy9CLElBQU1JLE9BQU9ILENBQUFBLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsS0FBSyxDQUFDRSxLQUFLLElBQUcsT0FBTUosbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxLQUFLLENBQUNHLEtBQUs7SUFDNUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7O2dCQUFtRDtnQkFDOUNKO2dCQUFLOzhCQUFDLDhEQUFDRzs7Ozs7OEJBQ3pCLDhEQUFDQTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMRixXQUFVOzs7Ozs7c0NBRVosOERBQUNHOzRCQUFPSCxXQUFVO3NDQUNoQiw0RUFBQ1QsbURBQUtBO2dDQUFDYSxLQUFJO2dDQUFrQkMsUUFBUTtnQ0FBSUMsT0FBTztnQ0FBSUMsS0FBSTtnQ0FBR1AsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRjtHQXBCU1I7O1FBQ1FGLGtEQUFTQTs7O0FBcUIxQiwrREFBZUUsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanM/ZWJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBjaGF0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGF0YSA9IHJvdXRlcj8ucXVlcnkuY2hhdDtcbiAgY29uc3QgbmFtZSA9IHJvdXRlcj8ucXVlcnkuZm5hbWUgKyBcIiBcIiArIHJvdXRlcj8ucXVlcnkubG5hbWU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bY2FsYygxMDB2aC02LjRyZW0pXSBib3JkZXItci0yIGJvcmRlci1sLTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1tdGdyYXkgbWQ6dy0xLzIgaC1mdWxsIHRleHQtY2VudGVyIGxnOnRleHQteGxcIj5cbiAgICAgICAgWW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYmctc2xhdGUtMTAwIHJvdW5kZWQtbC1mdWxsIHctZnVsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi4uL2ltZy9zZW5kLnN2Z1wiIGhlaWdodD17MjV9IHdpZHRoPXsyNX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW52ZXJ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkltYWdlIiwiY2hhdCIsInJvdXRlciIsImRhdGEiLCJxdWVyeSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});