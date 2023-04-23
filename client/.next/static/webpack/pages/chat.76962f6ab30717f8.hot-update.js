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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction index() {\n    var _this = this;\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), chats = _useState[0], setChats = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_2__.API_URL + \"chat_list/\".concat(state.currentUser.user_id, \"/\")).then(function(resp) {\n            setChats(resp.data);\n        });\n    }, []);\n    console.log(chats);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: \"Recent Chats!\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1\",\n                children: chats.map(function(chat) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mx-auto py-2 border rounded-lg w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/chat/\".concat(chat.id),\n                            children: [\n                                chat.first_name,\n                                \" \",\n                                chat.last_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 87\n                        }, _this)\n                    }, chat.id, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"mRfxsMGL5VbB+snkFVzwPWqYSrg=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN5QjtBQUNLO0FBQ0k7QUFDOUI7QUFFN0IsU0FBU08sUUFBUTs7O0lBRWYsSUFBMEJGLGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDRyxRQUFtQkgsb0JBQVpJLFdBQVlKO0lBQzFCLElBQTBCRixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE5Qk8sUUFBbUJQLGNBQVpRLFdBQVlSO0lBRTFCRCxnREFBU0EsQ0FBQyxXQUFNO1FBQ2RGLGlEQUFTLENBQUNJLDZEQUFPQSxHQUFHLGFBQXVDLE9BQTFCSSxNQUFNSyxXQUFXLENBQUNDLE9BQU8sRUFBQyxNQUMxREMsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDZEwsU0FBU0ssS0FBS0MsSUFBSTtRQUNwQjtJQUNGLEdBQUUsRUFBRTtJQUNOQyxRQUFRQyxHQUFHLENBQUNUO0lBSVYscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQWM7Ozs7OzswQkFDN0IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUVYWCxNQUFNWSxHQUFHLENBQUMsU0FBQ0M7eUNBQ1QsOERBQUNIO3dCQUFrQkMsV0FBVTtrQ0FBNkMsNEVBQUNmLGtEQUFJQTs0QkFBQ2tCLE1BQU0sU0FBaUIsT0FBUkQsS0FBS0UsRUFBRTs7Z0NBQUtGLEtBQUtHLFVBQVU7Z0NBQUM7Z0NBQUVILEtBQUtJLFNBQVM7Ozs7Ozs7dUJBQWpJSixLQUFLRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU03QjtHQTNCU2xCOztRQUVtQkYsZ0VBQWNBOzs7QUEyQjFDLCtEQUFlRSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L2luZGV4LmpzPzE2MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50cydcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoQVBJX1VSTCArIGBjaGF0X2xpc3QvJHtzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkfS9gKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBzZXRDaGF0cyhyZXNwLmRhdGEpXG4gICAgfSlcbiAgfSxbXSlcbmNvbnNvbGUubG9nKGNoYXRzKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlJlY2VudCBDaGF0cyE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xJz5cbiAgICAgICAge1xuICAgICAgICAgIGNoYXRzLm1hcCgoY2hhdCkgPT4gXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2hhdC5pZH0gY2xhc3NOYW1lPSdmbGV4IG14LWF1dG8gcHktMiBib3JkZXIgcm91bmRlZC1sZyB3LWZ1bGwnPjxMaW5rIGhyZWY9e2AvY2hhdC8ke2NoYXQuaWR9YH0+e2NoYXQuZmlyc3RfbmFtZX0ge2NoYXQubGFzdF9uYW1lfTwvTGluaz48L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9VUkwiLCJ1c2VHbG9iYWxTdGF0ZSIsIkxpbmsiLCJpbmRleCIsInN0YXRlIiwiZGlzcGF0Y2giLCJjaGF0cyIsInNldENoYXRzIiwiZ2V0IiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwidGhlbiIsInJlc3AiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNoYXQiLCJocmVmIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/index.js\n"));

/***/ })

});