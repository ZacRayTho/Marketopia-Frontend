"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/pages/chat/index.js":
/*!*********************************!*\
  !*** ./src/pages/chat/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction index() {\n    var _this = this;\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), chats = _useState[0], setChats = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_2__.API_URL + \"chat_list/\".concat(state.currentUser.user_id, \"/\")).then(function(resp) {\n            setChats(resp.data);\n        });\n    }, []);\n    console.log(chats);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: \"Recent Chats!\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 max-w-\",\n                children: chats.map(function(chat) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2  my-2 border rounded-lg w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/chat/\".concat(chat.id),\n                            className: \"flex justify-center\",\n                            children: [\n                                chat.first_name,\n                                \" \",\n                                chat.last_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 80\n                        }, _this)\n                    }, chat.id, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"mRfxsMGL5VbB+snkFVzwPWqYSrg=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN5QjtBQUNLO0FBQ0k7QUFDOUI7QUFFN0IsU0FBU08sUUFBUTs7O0lBRWYsSUFBMEJGLGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDRyxRQUFtQkgsb0JBQVpJLFdBQVlKO0lBQzFCLElBQTBCRixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE5Qk8sUUFBbUJQLGNBQVpRLFdBQVlSO0lBRTFCRCxnREFBU0EsQ0FBQyxXQUFNO1FBQ2RGLGlEQUFTLENBQUNJLDZEQUFPQSxHQUFHLGFBQXVDLE9BQTFCSSxNQUFNSyxXQUFXLENBQUNDLE9BQU8sRUFBQyxNQUMxREMsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDZEwsU0FBU0ssS0FBS0MsSUFBSTtRQUNwQjtJQUNGLEdBQUUsRUFBRTtJQUNOQyxRQUFRQyxHQUFHLENBQUNUO0lBSVYscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQWM7Ozs7OzswQkFDN0IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUVYWCxNQUFNWSxHQUFHLENBQUMsU0FBQ0M7eUNBQ1QsOERBQUNIO3dCQUFrQkMsV0FBVTtrQ0FBc0MsNEVBQUNmLGtEQUFJQTs0QkFBQ2tCLE1BQU0sU0FBaUIsT0FBUkQsS0FBS0UsRUFBRTs0QkFBSUosV0FBVTs7Z0NBQXVCRSxLQUFLRyxVQUFVO2dDQUFDO2dDQUFFSCxLQUFLSSxTQUFTOzs7Ozs7O3VCQUExSkosS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I7R0EzQlNsQjs7UUFFbUJGLGdFQUFjQTs7O0FBMkIxQywrREFBZUUsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9pbmRleC5qcz8xNjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5jb25zdGFudHMnXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyBgY2hhdF9saXN0LyR7c3RhdGUuY3VycmVudFVzZXIudXNlcl9pZH0vYClcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgc2V0Q2hhdHMocmVzcC5kYXRhKVxuICAgIH0pXG4gIH0sW10pXG5jb25zb2xlLmxvZyhjaGF0cylcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5SZWNlbnQgQ2hhdHMhPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtYXgtdy0nPlxuICAgICAgICB7XG4gICAgICAgICAgY2hhdHMubWFwKChjaGF0KSA9PiBcbiAgICAgICAgICAgIDxkaXYga2V5PXtjaGF0LmlkfSBjbGFzc05hbWU9J3B5LTIgIG15LTIgYm9yZGVyIHJvdW5kZWQtbGcgdy1mdWxsJz48TGluayBocmVmPXtgL2NoYXQvJHtjaGF0LmlkfWB9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+e2NoYXQuZmlyc3RfbmFtZX0ge2NoYXQubGFzdF9uYW1lfTwvTGluaz48L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9VUkwiLCJ1c2VHbG9iYWxTdGF0ZSIsIkxpbmsiLCJpbmRleCIsInN0YXRlIiwiZGlzcGF0Y2giLCJjaGF0cyIsInNldENoYXRzIiwiZ2V0IiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwidGhlbiIsInJlc3AiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNoYXQiLCJocmVmIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/index.js\n"));

/***/ })

});