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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Chat() {\n    var _this = this;\n    var newReview = function newReview(stars) {\n        if (review.length == 0) {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"reviews/\", {\n                seller: data,\n                reviewer: state.currentUser.user_id,\n                rating: stars\n            }).then(function(resp) {\n                // console.log(resp, \"REVIEW RESP\")\n                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"REVIEW POSTED\");\n            });\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].patch(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"reviews/\".concat(review[0].id, \"/\"), {\n                rating: stars\n            }).then(function(resp) {\n                // console.log(resp, \"PATCHED\")\n                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"REVIEW UPDATED\");\n            });\n        }\n    };\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), chat = _useState[0], setChat = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), review = _useState1[0], setReview = _useState1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _state_currentUser, _state_currentUser1;\n        if (!router.isReady) return;\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(data, \"/\")).then(function(resp) {\n            setChat(resp.data);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"review_fetch/\".concat((_state_currentUser1 = state.currentUser) === null || _state_currentUser1 === void 0 ? void 0 : _state_currentUser1.user_id, \"/\").concat(data, \"/\")).then(function(resp) {\n            setReview(resp.data);\n        });\n    }, [\n        router.isReady\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: data,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment__WEBPACK_IMPORTED_MODULE_5___default()().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        window.location.reload(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[calc(100vh-3.4rem)] lg:h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative overflow-y-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between px-2 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"items-center\",\n                            children: [\n                                \"You're Messaging \",\n                                name,\n                                \"!\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm space-x-2 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(1);\n                                            },\n                                            className: \"rounded-l-lg bg-mtpurple p-2\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(2);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(3);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(4);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(5);\n                                            },\n                                            className: \"rounded-r-lg bg-mtpurple p-2\",\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border h-[calc(100vh-10.5rem)]\",\n                    children: chat.map(function(message) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageComponent, {\n                            message: message\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            onClick: send,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"yitPzzc0h9rlqdFzrczLoQyAJT4=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ZyQixLQUFLQTs7Ozs7O3NDQUVQLDhEQUFDc0I7NEJBQU9ELFdBQVU7NEJBQWlDRSxTQUFTcEI7c0NBQzFELDRFQUFDbkMsbURBQUtBO2dDQUNKOEQsS0FBSTtnQ0FDSkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUEMsS0FBSTtnQ0FDSlosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQTVJUy9DOztRQUNtQkwsZ0VBQWNBO1FBR3pCRixrREFBU0E7OztLQUpqQk87QUE4SVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW2NoYXRdLmpzP2ViYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50c1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuZnVuY3Rpb24gQ2hhdCgpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkYXRhID0gcm91dGVyPy5xdWVyeS5jaGF0O1xuICBjb25zdCBuYW1lID0gcm91dGVyPy5xdWVyeS5mbmFtZSArIFwiIFwiICsgcm91dGVyPy5xdWVyeS5sbmFtZTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQVBJX1VSTCArIGBtZXNzYWdlX2xpc3QvJHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0vJHtkYXRhfS9gKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgc2V0Q2hhdChyZXNwLmRhdGEpO1xuICAgICAgfSk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChBUElfVVJMICsgYHJldmlld19mZXRjaC8ke3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfS8ke2RhdGF9L2ApXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBzZXRSZXZpZXcocmVzcC5kYXRhKTtcbiAgICAgIH0pO1xuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kKCkge1xuICAgIGF3YWl0IGF4aW9zXG4gICAgICAucG9zdChBUElfVVJMICsgXCJtZXNzYWdlcy9cIiwge1xuICAgICAgICB0ZXh0OiByZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc2VuZGVyOiBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZCxcbiAgICAgICAgcmVjaXBpZW50OiBkYXRhLFxuICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlX3RpbWVfc2VudDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGltZXN0YW1wOiBtb21lbnQoKS5mb3JtYXQoXCJNTS1ERC1ZWVlZIGhoOm1tXCIpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld1JldmlldyhzdGFycykge1xuICAgIGlmIChyZXZpZXcubGVuZ3RoID09IDApIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KEFQSV9VUkwgKyBcInJldmlld3MvXCIsIHtcbiAgICAgICAgICBzZWxsZXI6IGRhdGEsXG4gICAgICAgICAgcmV2aWV3ZXI6IHN0YXRlLmN1cnJlbnRVc2VyLnVzZXJfaWQsXG4gICAgICAgICAgcmF0aW5nOiBzdGFycyxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwLCBcIlJFVklFVyBSRVNQXCIpXG4gICAgICAgICAgdG9hc3QoXCJSRVZJRVcgUE9TVEVEXCIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBhdGNoKEFQSV9VUkwgKyBgcmV2aWV3cy8ke3Jldmlld1swXS5pZH0vYCwge1xuICAgICAgICAgIHJhdGluZzogc3RhcnMsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcCwgXCJQQVRDSEVEXCIpXG4gICAgICAgICAgdG9hc3QoXCJSRVZJRVcgVVBEQVRFRFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVtjYWxjKDEwMHZoLTMuNHJlbSldIGxnOmgtW2NhbGMoMTAwdmgtNi40cmVtKV0gYm9yZGVyLXItMiBib3JkZXItbC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXRncmF5IG1kOnctMS8yIGgtZnVsbCB0ZXh0LWNlbnRlciBsZzp0ZXh0LXhsIHJlbGF0aXZlIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXJcIj5Zb3UncmUgTWVzc2FnaW5nIHtuYW1lfSE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gc3BhY2UteC0yIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlJldmlldzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5ld1JldmlldygxKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWwtbGcgYmctbXRwdXJwbGUgcC0yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3UmV2aWV3KDIpfSBjbGFzc05hbWU9XCJiZy1tdHB1cnBsZSBwLTJcIj5cbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1JldmlldygzKX0gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yXCI+XG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdSZXZpZXcoNCl9IGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMlwiPlxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXdSZXZpZXcoNSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1yLWxnIGJnLW10cHVycGxlIHAtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBoLVtjYWxjKDEwMHZoLTEwLjVyZW0pXVwiPlxuICAgICAgICAgIHtjaGF0Lm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1lc3NhZ2VDb21wb25lbnQgbWVzc2FnZT17bWVzc2FnZX0vPlxuICAgICAgICAgICAgICAvLyA8ZGl2XG4gICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2Uuc2VuZGVyID09IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkXG4gICAgICAgICAgICAgIC8vICAgICAgID8gXCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgIC8vICAgICAgIDogXCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LXN0YXJ0XCJcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vID5cbiAgICAgICAgICAgICAgLy8gICA8ZGl2XG4gICAgICAgICAgICAgIC8vICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAvLyAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZFxuICAgICAgICAgICAgICAvLyAgICAgICAgID8gXCJib3JkZXIgcHgtNCByb3VuZGVkLWZ1bGwgYm9yZGVyLW10cHVycGxlIHctZml0XCJcbiAgICAgICAgICAgICAgLy8gICAgICAgICA6IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgLy8gICA+XG4gICAgICAgICAgICAgIC8vICAgICB7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYmctc2xhdGUtMTAwIHJvdW5kZWQtbC1mdWxsIHctZnVsbCBweC01XCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1tdHB1cnBsZSBwLTIgcm91bmRlZC1yLWZ1bGxcIiBvbkNsaWNrPXtzZW5kfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIuLi9pbWcvc2VuZC5zdmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludmVydFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZUdsb2JhbFN0YXRlIiwibW9tZW50IiwiYXhpb3MiLCJBUElfVVJMIiwidG9hc3QiLCJDaGF0IiwibmV3UmV2aWV3Iiwic3RhcnMiLCJyZXZpZXciLCJsZW5ndGgiLCJwb3N0Iiwic2VsbGVyIiwiZGF0YSIsInJldmlld2VyIiwic3RhdGUiLCJjdXJyZW50VXNlciIsInVzZXJfaWQiLCJyYXRpbmciLCJ0aGVuIiwicmVzcCIsInBhdGNoIiwiaWQiLCJkaXNwYXRjaCIsImNoYXQiLCJzZXRDaGF0Iiwic2V0UmV2aWV3Iiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiZm5hbWUiLCJsbmFtZSIsInJlZiIsImlzUmVhZHkiLCJnZXQiLCJzZW5kIiwidGV4dCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNlbmRlciIsInJlY2lwaWVudCIsInZpZXdlZCIsImRhdGVfdGltZV9zZW50IiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJtZXNzYWdlIiwiTWVzc2FnZUNvbXBvbmVudCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});