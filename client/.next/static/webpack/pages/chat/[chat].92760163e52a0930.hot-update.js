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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction chat() {\n    var send = // console.log(moment().format(\"MM-DD-YYYY hh:mm\"))\n    function send() {\n        axios.post(\"messages/\", {\n            text: ref,\n            sender: state.currentUser.user_id,\n            recipient: data,\n            viewed: false,\n            date_time_sent: Date.now()\n        }).then(function(resp) {\n            console.log(resp);\n        });\n        window.location.refresh(true);\n    // \n    // \n    // \n    };\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"You're Messaging \",\n                        name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"Qx+QAd422qWnOgjirkKB7KL9bNQ=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNFO0FBQ1Q7QUFDNEI7QUFDL0I7QUFFNUIsU0FBU00sT0FBTztRQVFMQyxPQURQLG1EQUFtRDtJQUNyRCxTQUFTQSxPQUFPO1FBQ2RDLE1BQU1DLElBQUksQ0FBQyxhQUFhO1lBQ3hCQyxNQUFNQztZQUNOQyxRQUFRQyxNQUFNQyxXQUFXLENBQUNDLE9BQU87WUFDakNDLFdBQVdDO1lBQ1hDLFFBQVEsS0FBSztZQUNiQyxnQkFBZ0JDLEtBQUtDLEdBQUc7UUFDeEIsR0FDQ0MsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWjtRQUNBRyxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxJQUFJO0lBQzVCLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNMOztJQXRCRSxJQUEwQnhCLGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDUyxRQUFtQlQsb0JBQVp5QixXQUFZekI7SUFDNUIsSUFBTTBCLFNBQVM1QixzREFBU0E7SUFDeEIsSUFBTWUsT0FBT2EsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRQyxLQUFLLENBQUN6QixJQUFJO0lBQy9CLElBQU0wQixPQUFPRixDQUFBQSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFDLEtBQUssQ0FBQ0UsS0FBSyxJQUFHLE9BQU1ILG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUMsS0FBSyxDQUFDRyxLQUFLO0lBQzVELElBQU12QixNQUFNViw2Q0FBTUE7SUFvQmxCLHFCQUNFLDhEQUFDa0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEOzt3QkFBSTt3QkFBa0JIO3dCQUFLOzs7Ozs7OzhCQUM1Qiw4REFBQ0c7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkgsV0FBVTs0QkFDVnpCLEtBQUtBOzs7Ozs7c0NBRVAsOERBQUM2Qjs0QkFBT0osV0FBVTtzQ0FDaEIsNEVBQUNqQyxtREFBS0E7Z0NBQ0pzQyxLQUFJO2dDQUNKQyxRQUFRO2dDQUNSQyxPQUFPO2dDQUNQQyxLQUFJO2dDQUNKUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBakRTOUI7O1FBQ3FCRixnRUFBY0E7UUFDM0JGLGtEQUFTQTs7O0FBaUQxQiwrREFBZUksSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanM/ZWJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5mdW5jdGlvbiBjaGF0KCkge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRhdGEgPSByb3V0ZXI/LnF1ZXJ5LmNoYXQ7XG4gIGNvbnN0IG5hbWUgPSByb3V0ZXI/LnF1ZXJ5LmZuYW1lICsgXCIgXCIgKyByb3V0ZXI/LnF1ZXJ5LmxuYW1lO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhtb21lbnQoKS5mb3JtYXQoXCJNTS1ERC1ZWVlZIGhoOm1tXCIpKVxuICBmdW5jdGlvbiBzZW5kKCkge1xuICAgIGF4aW9zLnBvc3QoXCJtZXNzYWdlcy9cIiwge1xuICAgIHRleHQ6IHJlZixcbiAgICBzZW5kZXI6IHN0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWQsXG4gICAgcmVjaXBpZW50OiBkYXRhLFxuICAgIHZpZXdlZDogZmFsc2UsXG4gICAgZGF0ZV90aW1lX3NlbnQ6IERhdGUubm93KClcbiAgICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcClcbiAgICB9KVxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWZyZXNoKHRydWUpXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtW2NhbGMoMTAwdmgtNi40cmVtKV0gYm9yZGVyLXItMiBib3JkZXItbC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXRncmF5IG1kOnctMS8yIGgtZnVsbCB0ZXh0LWNlbnRlciBsZzp0ZXh0LXhsIHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXY+WW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB4LTVcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9zZW5kLnN2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52ZXJ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZUdsb2JhbFN0YXRlIiwibW9tZW50IiwiY2hhdCIsInNlbmQiLCJheGlvcyIsInBvc3QiLCJ0ZXh0IiwicmVmIiwic2VuZGVyIiwic3RhdGUiLCJjdXJyZW50VXNlciIsInVzZXJfaWQiLCJyZWNpcGllbnQiLCJkYXRhIiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWZyZXNoIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});