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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction chat() {\n    var send = // console.log(moment().format(\"MM-DD-YYYY hh:mm\"))\n    function send() {\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"messages/\", {\n            text: ref.current.value,\n            sender: state.currentUser.user_id,\n            recipient: data,\n            viewed: false,\n            date_time_sent: Date.now()\n        }).then(function(resp) {\n            console.log(resp);\n        });\n        window.location.reload(true);\n    // \n    // \n    // \n    };\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"You're Messaging \",\n                        name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            onClick: send,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"Qx+QAd422qWnOgjirkKB7KL9bNQ=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDVDtBQUM0QjtBQUMvQjtBQUNGO0FBQzhCO0FBRXhELFNBQVNRLE9BQU87UUFRTEMsT0FEUCxtREFBbUQ7SUFDckQsU0FBU0EsT0FBTztRQUVkSCxrREFBVSxDQUFDQyw2REFBT0EsR0FBRyxhQUFhO1lBQ2xDSSxNQUFNQyxJQUFJQyxPQUFPLENBQUNDLEtBQUs7WUFDdkJDLFFBQVFDLE1BQU1DLFdBQVcsQ0FBQ0MsT0FBTztZQUNqQ0MsV0FBV0M7WUFDWEMsUUFBUSxLQUFLO1lBQ2JDLGdCQUFnQkMsS0FBS0MsR0FBRztRQUN4QixHQUNDQyxJQUFJLENBQUMsU0FBQ0MsTUFBUztZQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaO1FBQ0FHLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLElBQUk7SUFDM0IsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0w7O0lBdkJFLElBQTBCM0Isa0JBQUFBLGdGQUFBQSxDQUFBQSxvRUFBY0EsUUFBakNZLFFBQW1CWixvQkFBWjRCLFdBQVk1QjtJQUM1QixJQUFNNkIsU0FBUy9CLHNEQUFTQTtJQUN4QixJQUFNa0IsT0FBT2EsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRQyxLQUFLLENBQUMxQixJQUFJO0lBQy9CLElBQU0yQixPQUFPRixDQUFBQSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFDLEtBQUssQ0FBQ0UsS0FBSyxJQUFHLE9BQU1ILG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUMsS0FBSyxDQUFDRyxLQUFLO0lBQzVELElBQU16QixNQUFNWCw2Q0FBTUE7SUFxQmxCLHFCQUNFLDhEQUFDcUM7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEOzt3QkFBSTt3QkFBa0JIO3dCQUFLOzs7Ozs7OzhCQUM1Qiw4REFBQ0c7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkgsV0FBVTs0QkFDVjNCLEtBQUtBOzs7Ozs7c0NBRVAsOERBQUMrQjs0QkFBT0osV0FBVTs0QkFBaUNLLFNBQVNuQztzQ0FDMUQsNEVBQUNOLG1EQUFLQTtnQ0FDSjBDLEtBQUk7Z0NBQ0pDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0FsRFMvQjs7UUFDcUJKLGdFQUFjQTtRQUMzQkYsa0RBQVNBOzs7QUFrRDFCLCtEQUFlTSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tjaGF0XS5qcz9lYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNoYXQoKSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGF0YSA9IHJvdXRlcj8ucXVlcnkuY2hhdDtcbiAgY29uc3QgbmFtZSA9IHJvdXRlcj8ucXVlcnkuZm5hbWUgKyBcIiBcIiArIHJvdXRlcj8ucXVlcnkubG5hbWU7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKG1vbWVudCgpLmZvcm1hdChcIk1NLURELVlZWVkgaGg6bW1cIikpXG4gIGZ1bmN0aW9uIHNlbmQoKSB7XG5cbiAgICBheGlvcy5wb3N0KEFQSV9VUkwgKyBcIm1lc3NhZ2VzL1wiLCB7XG4gICAgdGV4dDogcmVmLmN1cnJlbnQudmFsdWUsXG4gICAgc2VuZGVyOiBzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkLFxuICAgIHJlY2lwaWVudDogZGF0YSxcbiAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgIGRhdGVfdGltZV9zZW50OiBEYXRlLm5vdygpXG4gICAgfSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgfSlcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtW2NhbGMoMTAwdmgtNi40cmVtKV0gYm9yZGVyLXItMiBib3JkZXItbC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXRncmF5IG1kOnctMS8yIGgtZnVsbCB0ZXh0LWNlbnRlciBsZzp0ZXh0LXhsIHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXY+WW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB4LTVcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiIG9uQ2xpY2s9e3NlbmR9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9zZW5kLnN2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52ZXJ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZUdsb2JhbFN0YXRlIiwibW9tZW50IiwiYXhpb3MiLCJBUElfVVJMIiwiY2hhdCIsInNlbmQiLCJwb3N0IiwidGV4dCIsInJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNlbmRlciIsInN0YXRlIiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwicmVjaXBpZW50IiwiZGF0YSIsInZpZXdlZCIsImRhdGVfdGltZV9zZW50IiwiRGF0ZSIsIm5vdyIsInRoZW4iLCJyZXNwIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ }),

/***/ "./src/services/auth.constants.js":
/*!****************************************!*\
  !*** ./src/services/auth.constants.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"LOGIN_ENDPOINT\": function() { return /* binding */ LOGIN_ENDPOINT; },\n/* harmony export */   \"REFRESH_ENDPOINT\": function() { return /* binding */ REFRESH_ENDPOINT; },\n/* harmony export */   \"REGISTER_ENDPOINT\": function() { return /* binding */ REGISTER_ENDPOINT; }\n/* harmony export */ });\nvar API_URL = \"https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us95.gitpod.io/api/\";\nvar LOGIN_ENDPOINT = \"user/login/\";\nvar REGISTER_ENDPOINT = \"user/signup/\";\nvar REFRESH_ENDPOINT = \"token/refresh/\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC5jb25zdGFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFVBQVUsMEVBQTBFO0FBQzFGLElBQU1DLGlCQUFpQixjQUFhO0FBQ3BDLElBQU1DLG9CQUFvQixlQUFjO0FBQ3hDLElBQU1DLG1CQUFtQixpQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzLmpzP2Q1ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vODAwMC16YWNyYXl0aG8tbWFya2V0b3BpYWJhYy1mNzJzOXBtY3l6Zy53cy11czk1LmdpdHBvZC5pby9hcGkvXCI7XG5leHBvcnQgY29uc3QgTE9HSU5fRU5EUE9JTlQgPSBcInVzZXIvbG9naW4vXCJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9FTkRQT0lOVCA9IFwidXNlci9zaWdudXAvXCJcbmV4cG9ydCBjb25zdCBSRUZSRVNIX0VORFBPSU5UID0gXCJ0b2tlbi9yZWZyZXNoL1wiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJMT0dJTl9FTkRQT0lOVCIsIlJFR0lTVEVSX0VORFBPSU5UIiwiUkVGUkVTSF9FTkRQT0lOVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/auth.constants.js\n"));

/***/ })

});