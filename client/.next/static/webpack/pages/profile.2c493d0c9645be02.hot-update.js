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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction profile() {\n    var _state_currentUser;\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto mt-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                    className: \"btn\",\n                    onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n                    Home: true,\n                    Page: true\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this),\n                (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n                    children: \"Log out\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(profile, \"GnoAqZ0F9AcLGWJKYq8hKIyIHTc=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUMrQjtBQUNMO0FBRW5ELFNBQVNHLFVBQVU7UUFTRkM7O0lBUGIsSUFBMEJILGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDRyxRQUFtQkgsb0JBQVpJLFdBQVlKO0lBRTFCLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUtELFdBQVU7b0JBQU1FLFNBQVNQLHFFQUFrQjtvQkFBRVMsSUFBSTtvQkFBQ0MsSUFBSTs7Ozs7O2dCQUUzRFIsQ0FBQUEscUJBQUFBLE1BQU1TLFdBQVcsY0FBakJULGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBbUJVLE9BQU87OEJBQzNCLDhEQUFDQztvQkFDR1IsV0FBVTtvQkFDVkUsU0FBU1AscUVBQWtCOzhCQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7R0FqQlNDOztRQUVxQkYsZ0VBQWNBOzs7QUFpQjVDLCtEQUFlRSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlLmpzP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5mdW5jdGlvbiBwcm9maWxlKCkge1xuXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgZmxleCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byBtdC01Jz5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0bicgb25DbGljaz17YXV0aFNlcnZpY2UubG9nb3V0fSBIb21lIFBhZ2U+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthdXRoU2VydmljZS5sb2dvdXR9XG4gICAgICAgICAgICAgICAgPkxvZyBvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VHbG9iYWxTdGF0ZSIsImF1dGhTZXJ2aWNlIiwicHJvZmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJMaW5rIiwib25DbGljayIsImxvZ291dCIsIkhvbWUiLCJQYWdlIiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});