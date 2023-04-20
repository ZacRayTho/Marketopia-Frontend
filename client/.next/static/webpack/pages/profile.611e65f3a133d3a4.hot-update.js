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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction profile() {\n    var logout = function logout() {\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout;\n        router.push(\"/\");\n    };\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"listings/\").then(function(resp) {\n            console.log(resp.data);\n            setListings();\n        });\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"users/\".concat(state.currentUser.user_id, \"/\")).then(function(resp) {\n            console.log(resp);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-52 mt-5 flex-col flex text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n                    children: \"Log out\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Your Listings\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(profile, \"k8YOKq5BiNIjgvyyqqr+yNzcMMY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNLO0FBQ0w7QUFDdEI7QUFDZTtBQUNsQjtBQUMyQjtBQUVyRCxTQUFTUyxVQUFVO1FBZ0JSQyxTQUFULFNBQVNBLFNBQVM7UUFDaEJOLHFFQUFrQjtRQUNsQk8sT0FBT0MsSUFBSSxDQUFDO0lBQ2Q7O0lBbEJBLElBQU1ELFNBQVNMLDBEQUFTQTtJQUN4QixJQUEwQkgsa0JBQUFBLGdGQUFBQSxDQUFBQSxvRUFBY0EsUUFBakNVLFFBQW1CVixvQkFBWlcsV0FBWVg7SUFDMUIsSUFBZ0NELFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXBDYSxXQUF5QmIsY0FBZmMsY0FBZWQ7SUFFaENELGdEQUFTQSxDQUFDLFdBQU07UUFDZE0saURBQVMsQ0FBQ0MsNkRBQU9BLEdBQUcsYUFBYVUsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDOUNDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csSUFBSTtZQUNyQk47UUFDRjtRQUNBVCxpREFBUyxDQUFDQyw2REFBT0EsR0FBRyxTQUFtQyxPQUExQkssTUFBTVUsV0FBVyxDQUFDQyxPQUFPLEVBQUMsTUFDdEROLElBQUksQ0FBQyxTQUFDQyxNQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFPTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUViLDRFQUFDQztvQkFBT0QsV0FBVTtvQkFBTUUsU0FBU3hCLHFFQUFrQjs4QkFBRTs7Ozs7Ozs7Ozs7MEJBSXZELDhEQUFDcUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDtrQ0FBSTs7Ozs7O2tDQUNMLDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVDtHQXZDU2hCOztRQUNRSCxzREFBU0E7UUFDRUgsZ0VBQWNBOzs7QUF1QzFDLCtEQUFlTSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlLmpzP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIHByb2ZpbGUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIGNvbnN0IFtsaXN0aW5ncywgc2V0TGlzdGluZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoQVBJX1VSTCArIFwibGlzdGluZ3MvXCIpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSk7XG4gICAgICBzZXRMaXN0aW5ncygpXG4gICAgfSk7XG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyBgdXNlcnMvJHtzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkfS9gKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICBhdXRoU2VydmljZS5sb2dvdXQ7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgc3BhY2UteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy01MiBtdC01IGZsZXgtY29sIGZsZXggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgey8qIHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17YXV0aFNlcnZpY2UubG9nb3V0fT5cbiAgICAgICAgICBMb2cgb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGdcIj5cbiAgICAgICAgPGRpdj5Zb3VyIExpc3RpbmdzPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2xvYmFsU3RhdGUiLCJhdXRoU2VydmljZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkFQSV9VUkwiLCJwcm9maWxlIiwibG9nb3V0Iiwicm91dGVyIiwicHVzaCIsInN0YXRlIiwiZGlzcGF0Y2giLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});