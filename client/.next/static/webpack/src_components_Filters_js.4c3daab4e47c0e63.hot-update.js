"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Filters_js",{

/***/ "./src/components/Filters.js":
/*!***********************************!*\
  !*** ./src/components/Filters.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Filters() {\n    var _this = this;\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_4__.API_URL + \"categories/\").then(resp);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 border-r-2 flex flex-col justify-between \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center flex flex-col\",\n                children: [\n                    !state.currentUser ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/newListing\",\n                        className: \"btn mt-2\",\n                        children: \"New Listing\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-full w-5/6 mx-3 my-4 py-2 px-4 outline-none bg-mtgray placeholder:text-gray-600\",\n                        placeholder: \"Search Marketopia\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"category\",\n                                children: \"Category:\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"border\",\n                                onChange: function(e) {\n                                    console.log(e.target.value);\n                                    handleChange(\"category\", e.target.value);\n                                },\n                                id: \"category\",\n                                required: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"Category\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    categories === null || categories === void 0 ? void 0 : categories.map(function(category) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: category.id,\n                                            children: category.name\n                                        }, category.id, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 24\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"bottom\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Filters.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Filters, \"CmMROJyAqe4hUW+6ZPg0Imhoewk=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n_c = Filters;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filters);\nvar _c;\n$RefreshReg$(_c, \"Filters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1k7QUFDZ0I7QUFDOUI7QUFDMkI7QUFFckQsU0FBU00sVUFBVTs7O0lBRWpCLElBQTBCSCxrQkFBQUEsZ0ZBQUFBLENBQUFBLG9FQUFjQSxRQUFqQ0ksUUFBbUJKLG9CQUFaSyxXQUFZTDtJQUUxQkQsZ0RBQVNBLENBQUMsV0FBTTtRQUNkRSxpREFBUyxDQUFDQyw2REFBT0EsR0FBRyxlQUNuQkssSUFBSSxDQUFDQztJQUNSLEdBQUUsRUFBRTtJQUdKLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUVYLENBQUNOLE1BQU1PLFdBQVcsR0FDaEIsSUFBSSxpQkFFSiw4REFBQ2Qsa0RBQUlBO3dCQUFDZSxNQUFNO3dCQUFlRixXQUFVO2tDQUFXOzs7Ozs0QkFHakQ7a0NBRUgsOERBQUNHO3dCQUNDSCxXQUFVO3dCQUNWSSxhQUFZOzs7Ozs7a0NBRWQsOERBQUNMOzswQ0FDQyw4REFBQ007Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDUCxXQUFVO2dDQUNWUSxVQUFVLFNBQUNDLEdBQU07b0NBQ2ZDLFFBQVFDLEdBQUcsQ0FBQ0YsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO29DQUMxQkMsYUFBYSxZQUFZTCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7Z0NBQ3pDO2dDQUNBRSxJQUFHO2dDQUNIQyxRQUFROztrREFFUiw4REFBQ0M7a0RBQU87Ozs7OztvQ0FFTkMsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZQyxHQUFHLENBQUVDLFNBQUFBLFVBQVk7d0NBQzNCLHFCQUFPLDhEQUFDSDs0Q0FBT0osT0FBT08sU0FBU0wsRUFBRTtzREFBcUJLLFNBQVNDLElBQUk7MkNBQTNCRCxTQUFTTCxFQUFFOzs7OztvQ0FDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1IsOERBQUNoQjswQkFBSTs7Ozs7Ozs7Ozs7O0FBSVg7R0FsRFNOOztRQUVtQkgsZ0VBQWNBOzs7S0FGakNHO0FBb0RULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlcnMuanM/MWYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIEZpbHRlcnMoKSB7XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyBcImNhdGVnb3JpZXMvXCIpXG4gICAgLnRoZW4ocmVzcClcbiAgfSxbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSBib3JkZXItci0yIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuICc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbXMtY2VudGVyIGZsZXggZmxleC1jb2wnPlxuICAgICAgICB7XG4gICAgICAgICAgIXN0YXRlLmN1cnJlbnRVc2VyID8gKFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9uZXdMaXN0aW5nXCJ9IGNsYXNzTmFtZT0nYnRuIG10LTInPlxuICAgICAgICAgICAgICBOZXcgTGlzdGluZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCB3LTUvNiBteC0zIG15LTQgcHktMiBweC00IG91dGxpbmUtbm9uZSBiZy1tdGdyYXkgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTYwMCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIE1hcmtldG9waWEnPlxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjYXRlZ29yeSc+Q2F0ZWdvcnk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlcidcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKCdjYXRlZ29yeScsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlkPSdjYXRlZ29yeSdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbj5DYXRlZ29yeTwvb3B0aW9uPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzPy5tYXAoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuaWR9IGtleT17Y2F0ZWdvcnkuaWR9PntjYXRlZ29yeS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+Ym90dG9tPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUdsb2JhbFN0YXRlIiwiYXhpb3MiLCJBUElfVVJMIiwiRmlsdGVycyIsInN0YXRlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcCIsImRpdiIsImNsYXNzTmFtZSIsImN1cnJlbnRVc2VyIiwiaHJlZiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInJlcXVpcmVkIiwib3B0aW9uIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Filters.js\n"));

/***/ })

});