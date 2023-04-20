"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction profile() {\n    var logout = function logout() {\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout;\n        router.push(\"/\");\n    };\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"listings/\").then(function(resp) {\n            console.log(resp);\n            console.log(state);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"users/${state.currentUser.user_id}\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-52 mt-5 flex-col flex text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n                    children: \"Log out\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Your Listings\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(profile, \"HmtO9x13atgy/frR5KM3RHtKAPE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNlO0FBQ0w7QUFDdEI7QUFDZTtBQUNsQjtBQUMyQjtBQUVyRCxTQUFTUSxVQUFVO1FBWVJDLFNBQVQsU0FBU0EsU0FBUztRQUNoQk4scUVBQWtCO1FBQ2xCTyxPQUFPQyxJQUFJLENBQUM7SUFDZDs7SUFkQSxJQUFNRCxTQUFTTCwwREFBU0E7SUFDeEIsSUFBMEJILGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDVSxRQUFtQlYsb0JBQVpXLFdBQVlYO0lBRTFCRCxnREFBU0EsQ0FBQyxXQUFNO1FBQ2RLLGlEQUFTLENBQUNDLDZEQUFPQSxHQUFHLGFBQWFRLElBQUksQ0FBQyxTQUFDQyxNQUFTO1lBQzVDQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ047UUFDaEI7UUFDQU4saURBQVMsQ0FBQ0MsNkRBQU9BLEdBQUc7SUFDdEIsR0FBRyxFQUFFO0lBT0wscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ0M7b0JBQU9ELFdBQVU7b0JBQU1FLFNBQVNuQixxRUFBa0I7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUl2RCw4REFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0EvQlNYOztRQUNRSCxzREFBU0E7UUFDRUgsZ0VBQWNBOzs7QUErQjFDLCtEQUFlTSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlLmpzP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IGF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gcHJvZmlsZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChBUElfVVJMICsgXCJsaXN0aW5ncy9cIikudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICB9KTtcbiAgICBheGlvcy5nZXQoQVBJX1VSTCArIFwidXNlcnMvJHtzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkfVwiKVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIGF1dGhTZXJ2aWNlLmxvZ291dDtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBzcGFjZS15LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTUyIG10LTUgZmxleC1jb2wgZmxleCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICB7Lyoge3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfSAqL31cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXthdXRoU2VydmljZS5sb2dvdXR9PlxuICAgICAgICAgIExvZyBvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZ1wiPlxuICAgICAgICA8ZGl2PllvdXIgTGlzdGluZ3M8L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlR2xvYmFsU3RhdGUiLCJhdXRoU2VydmljZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkFQSV9VUkwiLCJwcm9maWxlIiwibG9nb3V0Iiwicm91dGVyIiwicHVzaCIsInN0YXRlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});