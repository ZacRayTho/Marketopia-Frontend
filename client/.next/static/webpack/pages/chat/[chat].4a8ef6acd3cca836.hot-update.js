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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Chat() {\n    var _this = this;\n    var newReview = function newReview(stars) {\n        if (review.length == 0) {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"reviews/\", {\n                seller: data,\n                reviewer: state.currentUser.user_id,\n                rating: stars\n            }).then(function(resp) {\n                // console.log(resp, \"REVIEW RESP\")\n                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"REVIEW POSTED\");\n            });\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].patch(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"reviews/\".concat(review[0].id, \"/\"), {\n                rating: stars\n            }).then(function(resp) {\n                // console.log(resp, \"PATCHED\")\n                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"REVIEW UPDATED\");\n            });\n        }\n    };\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), chat = _useState[0], setChat = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), review = _useState1[0], setReview = _useState1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var data = router === null || router === void 0 ? void 0 : router.query.chat;\n    var name = (router === null || router === void 0 ? void 0 : router.query.fname) + \" \" + (router === null || router === void 0 ? void 0 : router.query.lname);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _state_currentUser, _state_currentUser1;\n        if (!router.isReady) return;\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(data, \"/\")).then(function(resp) {\n            setChat(resp.data);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"review_fetch/\".concat((_state_currentUser1 = state.currentUser) === null || _state_currentUser1 === void 0 ? void 0 : _state_currentUser1.user_id, \"/\").concat(data, \"/\")).then(function(resp) {\n            setReview(resp.data);\n        });\n    }, [\n        router.isReady\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: data,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment__WEBPACK_IMPORTED_MODULE_5___default()().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        window.location.reload(true);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full lgh-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative overflow-y-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between px-2 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"items-center\",\n                            children: [\n                                \"You're Messaging \",\n                                name,\n                                \"!\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm space-x-2 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(1);\n                                            },\n                                            className: \"rounded-l-lg bg-mtpurple p-2\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(2);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(3);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(4);\n                                            },\n                                            className: \"bg-mtpurple p-2\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return newReview(5);\n                                            },\n                                            className: \"rounded-r-lg bg-mtpurple p-2\",\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border h-[calc(100vh-10.5rem)]\",\n                    children: chat.map(function(message) {\n                        var _state_currentUser, _state_currentUser1;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: message.sender == ((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id) ? \"w-full flex justify-end\" : \"w-full flex justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: message.sender == ((_state_currentUser1 = state.currentUser) === null || _state_currentUser1 === void 0 ? void 0 : _state_currentUser1.user_id) ? \"border px-4 rounded-full border-mtpurple w-fit\" : \"border px-4 rounded-full\",\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 116,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex absolute bottom-0 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type your message!\",\n                            className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                            ref: ref\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-mtpurple p-2 rounded-r-full\",\n                            onClick: send,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"../img/send.svg\",\n                                height: 25,\n                                width: 25,\n                                alt: \"\",\n                                className: \"invert\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/[chat].js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"yitPzzc0h9rlqdFzrczLoQyAJT4=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLElBQ3hDLDRCQUNBLDJCQUEyQjtzQ0FHakMsNEVBQUNtQztnQ0FDQ0MsV0FDRUksUUFBUWxCLE1BQU0sSUFBSXhCLENBQUFBLENBQUFBLHNCQUFBQSxNQUFNQyxXQUFXLGNBQWpCRCxpQ0FBQUEsS0FBQUEsSUFBQUEsb0JBQW1CRSxPQUFPLElBQ3hDLG1EQUNBLDBCQUEwQjswQ0FHL0J3QyxRQUFRckIsSUFBSTs7Ozs7Ozs7Ozs7b0JBSXJCOzs7Ozs7OEJBRUYsOERBQUNnQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaUCxXQUFVOzRCQUNWckIsS0FBS0E7Ozs7OztzQ0FFUCw4REFBQ3NCOzRCQUFPRCxXQUFVOzRCQUFpQ0UsU0FBU3BCO3NDQUMxRCw0RUFBQ25DLG1EQUFLQTtnQ0FDSjZELEtBQUk7Z0NBQ0pDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0EzSVMvQzs7UUFDbUJMLGdFQUFjQTtRQUd6QkYsa0RBQVNBOzs7S0FKakJPO0FBNklULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tjaGF0XS5qcz9lYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5jb25zdGFudHNcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmZ1bmN0aW9uIENoYXQoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGF0YSA9IHJvdXRlcj8ucXVlcnkuY2hhdDtcbiAgY29uc3QgbmFtZSA9IHJvdXRlcj8ucXVlcnkuZm5hbWUgKyBcIiBcIiArIHJvdXRlcj8ucXVlcnkubG5hbWU7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KEFQSV9VUkwgKyBgbWVzc2FnZV9saXN0LyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7ZGF0YX0vYClcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHNldENoYXQocmVzcC5kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQVBJX1VSTCArIGByZXZpZXdfZmV0Y2gvJHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0vJHtkYXRhfS9gKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgc2V0UmV2aWV3KHJlc3AuZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZCgpIHtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoQVBJX1VSTCArIFwibWVzc2FnZXMvXCIsIHtcbiAgICAgICAgdGV4dDogcmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHNlbmRlcjogc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWQsXG4gICAgICAgIHJlY2lwaWVudDogZGF0YSxcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgZGF0ZV90aW1lX3NlbnQ6IERhdGUubm93KCksXG4gICAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KFwiTU0tREQtWVlZWSBoaDptbVwiKSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXdSZXZpZXcoc3RhcnMpIHtcbiAgICBpZiAocmV2aWV3Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChBUElfVVJMICsgXCJyZXZpZXdzL1wiLCB7XG4gICAgICAgICAgc2VsbGVyOiBkYXRhLFxuICAgICAgICAgIHJldmlld2VyOiBzdGF0ZS5jdXJyZW50VXNlci51c2VyX2lkLFxuICAgICAgICAgIHJhdGluZzogc3RhcnMsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcCwgXCJSRVZJRVcgUkVTUFwiKVxuICAgICAgICAgIHRvYXN0KFwiUkVWSUVXIFBPU1RFRFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wYXRjaChBUElfVVJMICsgYHJldmlld3MvJHtyZXZpZXdbMF0uaWR9L2AsIHtcbiAgICAgICAgICByYXRpbmc6IHN0YXJzLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3AsIFwiUEFUQ0hFRFwiKVxuICAgICAgICAgIHRvYXN0KFwiUkVWSUVXIFVQREFURURcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGdoLVtjYWxjKDEwMHZoLTYuNHJlbSldIGJvcmRlci1yLTIgYm9yZGVyLWwtMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW10Z3JheSBtZDp3LTEvMiBoLWZ1bGwgdGV4dC1jZW50ZXIgbGc6dGV4dC14bCByZWxhdGl2ZSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+WW91J3JlIE1lc3NhZ2luZyB7bmFtZX0hPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNwYWNlLXgtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5SZXZpZXc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXdSZXZpZXcoMSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sLWxnIGJnLW10cHVycGxlIHAtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1JldmlldygyKX0gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yXCI+XG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdSZXZpZXcoMyl9IGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMlwiPlxuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3UmV2aWV3KDQpfSBjbGFzc05hbWU9XCJiZy1tdHB1cnBsZSBwLTJcIj5cbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmV3UmV2aWV3KDUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtci1sZyBiZy1tdHB1cnBsZSBwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgaC1bY2FsYygxMDB2aC0xMC41cmVtKV1cIj5cbiAgICAgICAgICB7Y2hhdC5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgPyBcInctZnVsbCBmbGV4IGp1c3RpZnktZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID09IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlciBweC00IHJvdW5kZWQtZnVsbCBib3JkZXItbXRwdXJwbGUgdy1maXRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB4LTVcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiIG9uQ2xpY2s9e3NlbmR9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9zZW5kLnN2Z1wiXG4gICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52ZXJ0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwidXNlR2xvYmFsU3RhdGUiLCJtb21lbnQiLCJheGlvcyIsIkFQSV9VUkwiLCJ0b2FzdCIsIkNoYXQiLCJuZXdSZXZpZXciLCJzdGFycyIsInJldmlldyIsImxlbmd0aCIsInBvc3QiLCJzZWxsZXIiLCJkYXRhIiwicmV2aWV3ZXIiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsInJhdGluZyIsInRoZW4iLCJyZXNwIiwicGF0Y2giLCJpZCIsImRpc3BhdGNoIiwiY2hhdCIsInNldENoYXQiLCJzZXRSZXZpZXciLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJmbmFtZSIsImxuYW1lIiwicmVmIiwiaXNSZWFkeSIsImdldCIsInNlbmQiLCJ0ZXh0IiwiY3VycmVudCIsInZhbHVlIiwic2VuZGVyIiwicmVjaXBpZW50Iiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIm1lc3NhZ2UiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[chat].js\n"));

/***/ })

});