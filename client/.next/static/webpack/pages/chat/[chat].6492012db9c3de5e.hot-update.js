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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction chat() {\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = // console.log(moment().format(\"MM-DD-YYYY hh:mm\"))\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: state.currentUser.user_id,\n                                recipient: data,\n                                viewed: false,\n                                date_time_sent: Date.now()\n                            }).then(function(resp) {\n                                console.log(resp);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        window.location.reload(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        //\n        //\n        //\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"You're Messaging \",\n                        name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            onClick: send,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"Qx+QAd422qWnOgjirkKB7KL9bNQ=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9bY2hhdF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNFO0FBQ1Q7QUFDNEI7QUFDL0I7QUFDRjtBQUM4QjtBQUV4RCxTQUFTUSxPQUFPOztJQUNkLElBQTBCSixrQkFBQUEsZ0ZBQUFBLENBQUFBLG9FQUFjQSxRQUFqQ0ssUUFBbUJMLG9CQUFaTSxXQUFZTjtJQUMxQixJQUFNTyxTQUFTVCxzREFBU0E7SUFDeEIsSUFBTVUsT0FBT0QsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxLQUFLLENBQUNMLElBQUk7SUFDL0IsSUFBTU0sT0FBT0gsQ0FBQUEsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxLQUFLLENBQUNFLEtBQUssSUFBRyxPQUFNSixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFFLEtBQUssQ0FBQ0csS0FBSztJQUM1RCxJQUFNQyxNQUFNaEIsNkNBQU1BO2FBR0hpQjtlQUFBQTs7YUFBQUE7UUFBQUEsUUFEZixtREFBbUQ7UUFDbkQsK0ZBQXNCOzs7O3dCQUNwQjs7NEJBQU1aLG1EQUNDLENBQUNDLDZEQUFPQSxHQUFHLGFBQWE7Z0NBQzNCYSxNQUFNSCxJQUFJSSxPQUFPLENBQUNDLEtBQUs7Z0NBQ3ZCQyxRQUFRZCxNQUFNZSxXQUFXLENBQUNDLE9BQU87Z0NBQ2pDQyxXQUFXZDtnQ0FDWGUsUUFBUSxLQUFLO2dDQUNiQyxnQkFBZ0JDLEtBQUtDLEdBQUc7NEJBQzFCLEdBQ0NDLElBQUksQ0FBQyxTQUFDQyxNQUFTO2dDQUNkQyxRQUFRQyxHQUFHLENBQUNGOzRCQUNkOzs7d0JBVkY7d0JBV0FHLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLElBQUk7Ozs7OztRQUMzQixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDSjtlQWhCZW5COztJQWtCZixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs7d0JBQUk7d0JBQWtCeEI7d0JBQUs7Ozs7Ozs7OEJBQzVCLDhEQUFDd0I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkgsV0FBVTs0QkFDVnRCLEtBQUtBOzs7Ozs7c0NBRVAsOERBQUMwQjs0QkFBT0osV0FBVTs0QkFBaUNLLFNBQVMxQjtzQ0FDMUQsNEVBQUNmLG1EQUFLQTtnQ0FDSjBDLEtBQUk7Z0NBQ0pDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0FsRFMvQjs7UUFDbUJKLGdFQUFjQTtRQUN6QkYsa0RBQVNBOzs7QUFrRDFCLCtEQUFlTSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tjaGF0XS5qcz9lYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY2hhdCgpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGF0YSA9IHJvdXRlcj8ucXVlcnkuY2hhdDtcbiAgY29uc3QgbmFtZSA9IHJvdXRlcj8ucXVlcnkuZm5hbWUgKyBcIiBcIiArIHJvdXRlcj8ucXVlcnkubG5hbWU7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKG1vbWVudCgpLmZvcm1hdChcIk1NLURELVlZWVkgaGg6bW1cIikpXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5wb3N0KEFQSV9VUkwgKyBcIm1lc3NhZ2VzL1wiLCB7XG4gICAgICAgIHRleHQ6IHJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzZW5kZXI6IHN0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWQsXG4gICAgICAgIHJlY2lwaWVudDogZGF0YSxcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgZGF0ZV90aW1lX3NlbnQ6IERhdGUubm93KCksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVtjYWxjKDEwMHZoLTYuNHJlbSldIGJvcmRlci1yLTIgYm9yZGVyLWwtMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW10Z3JheSBtZDp3LTEvMiBoLWZ1bGwgdGV4dC1jZW50ZXIgbGc6dGV4dC14bCByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2PllvdSdyZSBNZXNzYWdpbmcge25hbWV9ITwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYmctc2xhdGUtMTAwIHJvdW5kZWQtbC1mdWxsIHctZnVsbCBweC01XCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1tdHB1cnBsZSBwLTIgcm91bmRlZC1yLWZ1bGxcIiBvbkNsaWNrPXtzZW5kfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWcvc2VuZC5zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludmVydFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJ1c2VHbG9iYWxTdGF0ZSIsIm1vbWVudCIsImF4aW9zIiwiQVBJX1VSTCIsImNoYXQiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiZGF0YSIsInF1ZXJ5IiwibmFtZSIsImZuYW1lIiwibG5hbWUiLCJyZWYiLCJzZW5kIiwicG9zdCIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiLCJzZW5kZXIiLCJjdXJyZW50VXNlciIsInVzZXJfaWQiLCJyZWNpcGllbnQiLCJ2aWV3ZWQiLCJkYXRlX3RpbWVfc2VudCIsIkRhdGUiLCJub3ciLCJ0aGVuIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});