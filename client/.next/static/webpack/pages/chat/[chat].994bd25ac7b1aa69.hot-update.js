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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction chat() {\n    var send = function send() {\n    // axios.post(\"messages/\", {\n    // text: ref,\n    // sender: state.currentUser.id\n    // })\n    // \n    // \n    // \n    // \n    };\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"You're Messaging \",\n                        name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"Qx+QAd422qWnOgjirkKB7KL9bNQ=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUNUO0FBQzRCO0FBRTNELFNBQVNLLE9BQU87UUFPTEMsT0FBVCxTQUFTQSxPQUFPO0lBQ2QsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsS0FBSztJQUNMLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDTDs7SUFmRSxJQUEwQkYsa0JBQUFBLGdGQUFBQSxDQUFBQSxvRUFBY0EsUUFBakNHLFFBQW1CSCxvQkFBWkksV0FBWUo7SUFDNUIsSUFBTUssU0FBU1Asc0RBQVNBO0lBQ3hCLElBQU1RLE9BQU9ELG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsS0FBSyxDQUFDTixJQUFJO0lBQy9CLElBQU1PLE9BQU9ILENBQUFBLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsS0FBSyxDQUFDRSxLQUFLLElBQUcsT0FBTUosbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxLQUFLLENBQUNHLEtBQUs7SUFDNUQsSUFBTUMsTUFBTWQsNkNBQU1BO0lBYWxCLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7O3dCQUFJO3dCQUFrQko7d0JBQUs7Ozs7Ozs7OEJBQzVCLDhEQUFDSTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaSCxXQUFVOzRCQUNWRixLQUFLQTs7Ozs7O3NDQUVQLDhEQUFDTTs0QkFBT0osV0FBVTtzQ0FDaEIsNEVBQUNkLG1EQUFLQTtnQ0FDSm1CLEtBQUk7Z0NBQ0pDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0ExQ1NaOztRQUNxQkQsZ0VBQWNBO1FBQzNCRixrREFBU0E7OztBQTBDMUIsK0RBQWVHLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW2NoYXRdLmpzP2ViYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcblxuZnVuY3Rpb24gY2hhdCgpIHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkYXRhID0gcm91dGVyPy5xdWVyeS5jaGF0O1xuICBjb25zdCBuYW1lID0gcm91dGVyPy5xdWVyeS5mbmFtZSArIFwiIFwiICsgcm91dGVyPy5xdWVyeS5sbmFtZTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAvLyBheGlvcy5wb3N0KFwibWVzc2FnZXMvXCIsIHtcbiAgICAvLyB0ZXh0OiByZWYsXG4gICAgLy8gc2VuZGVyOiBzdGF0ZS5jdXJyZW50VXNlci5pZFxuICAgIC8vIH0pXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtW2NhbGMoMTAwdmgtNi40cmVtKV0gYm9yZGVyLXItMiBib3JkZXItbC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXRncmF5IG1kOnctMS8yIGgtZnVsbCB0ZXh0LWNlbnRlciBsZzp0ZXh0LXhsIHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXY+WW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB4LTVcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9zZW5kLnN2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52ZXJ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZUdsb2JhbFN0YXRlIiwiY2hhdCIsInNlbmQiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiZGF0YSIsInF1ZXJ5IiwibmFtZSIsImZuYW1lIiwibG5hbWUiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});