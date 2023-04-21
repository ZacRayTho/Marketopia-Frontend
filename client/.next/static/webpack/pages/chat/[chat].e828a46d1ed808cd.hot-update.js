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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction chat() {\n    var _this = this;\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), _$chat = _useState[0], setChat = _useState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _state_currentUser;\n        if (!router.isReady) return;\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(data, \"/\")).then(function(resp) {\n            setChat(resp.data);\n        });\n    }, [\n        router.isReady\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: data,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment__WEBPACK_IMPORTED_MODULE_5___default()().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        window.location.reload(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _send.apply(this, arguments);\n    }\n    console.log(_$chat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative overflow-y-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"You're Messaging \",\n                        name,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                \"div\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border h-[calc(100vh-10.5rem)]\",\n                    children: _$chat.map(function(message) {\n                        var _state_currentUser, _state_currentUser1;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: message.sender == ((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id) ? \"w-full flex justify-end\" : \"w-full flex justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: message.sender == ((_state_currentUser1 = state.currentUser) === null || _state_currentUser1 === void 0 ? void 0 : _state_currentUser1.user_id) ? \"border px-4 rounded-full border-mtpurple w-fit\" : \"border px-4 rounded-full\",\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            onClick: send,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(chat, \"LtyH2uugQJzkAu+WXiPgCHkdhiQ=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztzQ0FDYiw4REFBQ0c7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pMLFdBQVU7NEJBQ1YxQixLQUFLQTs7Ozs7O3NDQUVQLDhEQUFDZ0M7NEJBQU9OLFdBQVU7NEJBQWlDTyxTQUFTMUI7c0NBQzFELDRFQUFDdEIsbURBQUtBO2dDQUNKaUQsS0FBSTtnQ0FDSkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUEMsS0FBSTtnQ0FDSlgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQWpGU3BDOztRQUNtQkosZ0VBQWNBO1FBRXpCRixrREFBU0E7OztBQWdGMUIsK0RBQWVNLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW2NoYXRdLmpzP2ViYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjaGF0KCkge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIGNvbnN0IFtjaGF0LCBzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRhdGEgPSByb3V0ZXI/LnF1ZXJ5LmNoYXQ7XG4gIGNvbnN0IG5hbWUgPSByb3V0ZXI/LnF1ZXJ5LmZuYW1lICsgXCIgXCIgKyByb3V0ZXI/LnF1ZXJ5LmxuYW1lO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICBheGlvc1xuICAgICAgLmdldChBUElfVVJMICsgYG1lc3NhZ2VfbGlzdC8ke3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfS8ke2RhdGF9L2ApXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBzZXRDaGF0KHJlc3AuZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZCgpIHtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoQVBJX1VSTCArIFwibWVzc2FnZXMvXCIsIHtcbiAgICAgICAgdGV4dDogcmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHNlbmRlcjogc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWQsXG4gICAgICAgIHJlY2lwaWVudDogZGF0YSxcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgZGF0ZV90aW1lX3NlbnQ6IERhdGUubm93KCksXG4gICAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KFwiTU0tREQtWVlZWSBoaDptbVwiKSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH1cbiAgY29uc29sZS5sb2coY2hhdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bY2FsYygxMDB2aC02LjRyZW0pXSBib3JkZXItci0yIGJvcmRlci1sLTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1tdGdyYXkgbWQ6dy0xLzIgaC1mdWxsIHRleHQtY2VudGVyIGxnOnRleHQteGwgcmVsYXRpdmUgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxkaXY+WW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPC9kaXY+XG4gICAgICAgIGRpdlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBoLVtjYWxjKDEwMHZoLTEwLjVyZW0pXVwiPlxuICAgICAgICAgIHtjaGF0Lm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICA/IFwidy1mdWxsIGZsZXgganVzdGlmeS1lbmRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsIGJvcmRlci1tdHB1cnBsZSB3LWZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlciBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFic29sdXRlIGJvdHRvbS0wIHctZnVsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZSFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLXNsYXRlLTEwMCByb3VuZGVkLWwtZnVsbCB3LWZ1bGwgcHgtNVwiXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yIHJvdW5kZWQtci1mdWxsXCIgb25DbGljaz17c2VuZH0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiLi4vaW1nL3NlbmQuc3ZnXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZlcnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJ1c2VHbG9iYWxTdGF0ZSIsIm1vbWVudCIsImF4aW9zIiwiQVBJX1VSTCIsImNoYXQiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0Q2hhdCIsInJvdXRlciIsImRhdGEiLCJxdWVyeSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwicmVmIiwiaXNSZWFkeSIsImdldCIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsInRoZW4iLCJyZXNwIiwic2VuZCIsInBvc3QiLCJ0ZXh0IiwiY3VycmVudCIsInZhbHVlIiwic2VuZGVyIiwicmVjaXBpZW50Iiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVzc2FnZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});