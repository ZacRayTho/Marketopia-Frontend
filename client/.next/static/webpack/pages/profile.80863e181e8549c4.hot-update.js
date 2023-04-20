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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var _components_ListingCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ListingCard */ \"./src/components/ListingCard.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction profile() {\n    var _this = this;\n    var logout = function logout() {\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout;\n        router.push(\"/\");\n    };\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), user = _useState1[0], setUser = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"listings/\").then(function(resp) {\n            setListings(resp.data);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"users/\".concat(state.currentUser.user_id, \"/\")).then(function(resp) {\n            console.log(resp);\n            setUser(\"\".concat(resp.data.first_name, \" \").concat(resp.data.last_name));\n            console.log(user);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-52 mt-5 flex-col flex text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout,\n                    children: \"Log out\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Your Listings\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: listings// .filter((listing) => listing.seller == )\n                        .map(function(listing) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListingCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                listing: listing\n                            }, listing.id, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/profile.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(profile, \"OQvL6ZpKqvjH7mqUVTnm5M0deOc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profile);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSztBQUNMO0FBQ3RCO0FBQ2U7QUFDbEI7QUFDMkI7QUFDRDtBQUVwRCxTQUFTVSxVQUFVOztRQWtCTkMsU0FBVCxTQUFTQSxTQUFTO1FBQ2RQLHFFQUFrQjtRQUNsQlEsT0FBT0MsSUFBSSxDQUFDO0lBQ2hCOztJQXBCQSxJQUFNRCxTQUFTTiwwREFBU0E7SUFDeEIsSUFBMEJILGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDVyxRQUFtQlgsb0JBQVpZLFdBQVlaO0lBQzFCLElBQWdDRCxZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUFwQ2MsV0FBeUJkLGNBQWZlLGNBQWVmO0lBQ2hDLElBQXdCQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBMUJnQixPQUFpQmhCLGVBQVhpQixVQUFXakI7SUFFeEJELGdEQUFTQSxDQUFDLFdBQU07UUFDWk0saURBQVMsQ0FBQ0MsNkRBQU9BLEdBQUcsYUFBYWEsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDaERMLFlBQVlLLEtBQUtDLElBQUk7UUFDckI7UUFDQWhCLGlEQUFTLENBQUNDLDZEQUFPQSxHQUFHLFNBQW1DLE9BQTFCTSxNQUFNVSxXQUFXLENBQUNDLE9BQU8sRUFBQyxNQUN0REosSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDWkksUUFBUUMsR0FBRyxDQUFDTDtZQUNaSCxRQUFRLEdBQTJCRyxPQUF4QkEsS0FBS0MsSUFBSSxDQUFDSyxVQUFVLEVBQUMsS0FBdUIsT0FBcEJOLEtBQUtDLElBQUksQ0FBQ00sU0FBUztZQUN0REgsUUFBUUMsR0FBRyxDQUFDVDtRQUNoQjtJQUNKLEdBQUcsRUFBRTtJQU9MLHFCQUNBLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNDO29CQUFPRCxXQUFVO29CQUFNRSxTQUFTN0IscUVBQWtCOzhCQUFFOzs7Ozs7Ozs7OzswQkFJdkQsOERBQUMwQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO3dCQUFJQyxXQUFVO2tDQUVQZixRQUNBLDJDQUEyQzt5QkFDMUNrQixHQUFHLENBQUMsU0FBQ0M7aURBQ0YsOERBQUMxQiwrREFBV0E7Z0NBRVYwQixTQUFTQTsrQkFESkEsUUFBUUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckM7R0EvQ1MxQjs7UUFDVUosc0RBQVNBO1FBQ0VILGdFQUFjQTs7O0FBK0M1QywrREFBZU8sT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS5qcz9lYjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50c1wiO1xuaW1wb3J0IExpc3RpbmdDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RpbmdDYXJkXCI7XG5cbmZ1bmN0aW9uIHByb2ZpbGUoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICAgIGNvbnN0IFtsaXN0aW5ncywgc2V0TGlzdGluZ3NdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChBUElfVVJMICsgXCJsaXN0aW5ncy9cIikudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBzZXRMaXN0aW5ncyhyZXNwLmRhdGEpXG4gICAgICAgIH0pO1xuICAgICAgICBheGlvcy5nZXQoQVBJX1VSTCArIGB1c2Vycy8ke3N0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWR9L2ApXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxuICAgICAgICAgICAgc2V0VXNlcihgJHtyZXNwLmRhdGEuZmlyc3RfbmFtZX0gJHtyZXNwLmRhdGEubGFzdF9uYW1lfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgYXV0aFNlcnZpY2UubG9nb3V0O1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgc3BhY2UteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy01MiBtdC01IGZsZXgtY29sIGZsZXggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgey8qIHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17YXV0aFNlcnZpY2UubG9nb3V0fT5cbiAgICAgICAgICBMb2cgb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGdcIj5cbiAgICAgICAgPGRpdj5Zb3VyIExpc3RpbmdzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RpbmdzXG4gICAgICAgICAgICAgICAgLy8gLmZpbHRlcigobGlzdGluZykgPT4gbGlzdGluZy5zZWxsZXIgPT0gKVxuICAgICAgICAgICAgICAgIC5tYXAoKGxpc3RpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpc3RpbmdDYXJkXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtsaXN0aW5nLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGxpc3Rpbmc9e2xpc3Rpbmd9XG4gICAgICAgICAgICAgICAgICAgIC8+KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2xvYmFsU3RhdGUiLCJhdXRoU2VydmljZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkFQSV9VUkwiLCJMaXN0aW5nQ2FyZCIsInByb2ZpbGUiLCJsb2dvdXQiLCJyb3V0ZXIiLCJwdXNoIiwic3RhdGUiLCJkaXNwYXRjaCIsImxpc3RpbmdzIiwic2V0TGlzdGluZ3MiLCJ1c2VyIiwic2V0VXNlciIsImdldCIsInRoZW4iLCJyZXNwIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImxpc3RpbmciLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});