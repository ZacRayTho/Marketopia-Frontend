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

/***/ "./src/components/Chatbox.js":
/*!***********************************!*\
  !*** ./src/components/Chatbox.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageComponent */ \"./src/components/MessageComponent.js\");\n/* harmony import */ var _pusher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pusher */ \"./pusher.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.request */ \"./src/services/api.request.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Chatbox(param) {\n    var state = param.state;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var urldata = router === null || router === void 0 ? void 0 : router.query.chat;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var bottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var fetcher = function(url) {\n        return axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(url).then(function(res) {\n            return res.data;\n        });\n    };\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var _state_currentUser;\n        return router.isReady ? _services_auth_constants__WEBPACK_IMPORTED_MODULE_8__.API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(urldata, \"/\") : null;\n    }, fetcher), data = _useSWR.data, error = _useSWR.error, mutate = _useSWR.mutate;\n    // console.log(data);\n    // useEffect(() => {\n    //   if (!router.isReady) return;\n    //   axios\n    //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //         console.log(resp.data)\n    //     //   setChat(resp.data);\n    //     });\n    //   axios\n    //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //     //   setReview(resp.data);\n    //     });\n    // }, [router.isReady]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _bottom_current;\n        var channel = _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(\"messages\");\n        channel.bind(\"new-message\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function(newData) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                    if (!data) {\n                        mutate(fetcher);\n                    } else {\n                        mutate(fetcher, {\n                            optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                newData\n                            ]),\n                            rollbackOnError: true\n                        });\n                    }\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(newData) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        (_bottom_current = bottom.current) === null || _bottom_current === void 0 ? void 0 : _bottom_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        data,\n        mutate,\n        _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log();\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_8__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: urldata,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment__WEBPACK_IMPORTED_MODULE_9___default()().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp.data, \"CHECK ME OUT HERE\");\n                                mutate((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                    resp.data\n                                ]), {\n                                    optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                        resp.data\n                                    ]),\n                                    rollbackOnError: true\n                                });\n                                ref.current.value = \"\";\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // window.location.reload(true);\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border h-[calc(100vh-10.5rem)]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full  overflow-y-auto\",\n                    children: [\n                        typeof data === \"object\" ? data === null || data === void 0 ? void 0 : data.map(function(message, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-5 px-1 pt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    message: message,\n                                    state: state\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 21\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                lineNumber: 91,\n                                columnNumber: 19\n                            }, _this);\n                        }) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: bottom\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex absolute bottom-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message!\",\n                        className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-mtpurple p-2 rounded-r-full\",\n                        onClick: send,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: \"../img/send.svg\",\n                            height: 25,\n                            width: 25,\n                            alt: \"\",\n                            className: \"invert\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Chatbox, \"mvYocK6ZVMM7TSaqyNx2XgE1crw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Chatbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbox);\nvar _c;\n$RefreshReg$(_c, \"Chatbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ1EsS0FBSyxHQUFHOzRCQUN0Qjs7O3dCQWhCRjs7Ozs7O1FBaUJBLGdDQUFnQztRQUNsQztlQXBCZUw7O0lBc0JmLHFCQUNFLDhEQUFDZTs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7d0JBQ1osT0FBTy9CLFNBQVMsV0FDYkEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZ0MsR0FBRyxDQUFDLFNBQUNDLFNBQVNDLE9BQVU7NEJBQzVCLHFCQUNFLDhEQUFDSjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ3JELHlEQUFnQkE7b0NBQUN1RCxTQUFTQTtvQ0FBUzdDLE9BQU9BOzs7Ozs7K0JBREg4Qzs7Ozs7d0JBcUI5QyxLQUNBLElBQUk7c0NBQ1IsOERBQUNKOzRCQUFJckMsS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDeUM7Z0JBQUtKLFdBQVU7O2tDQUNkLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWlAsV0FBVTt3QkFDVnRDLEtBQUtBOzs7Ozs7a0NBRVAsOERBQUM4Qzt3QkFBT1IsV0FBVTt3QkFBaUNTLFNBQVN6QjtrQ0FDMUQsNEVBQUNqQyxtREFBS0E7NEJBQ0oyRCxLQUFJOzRCQUNKQyxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxLQUFJOzRCQUNKYixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTVIUzVDOztRQUNRSixrREFBU0E7UUFNUUgsMkNBQU1BOzs7S0FQL0JPO0FBOEhULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRib3guanM/YjlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXNzYWdlQ29tcG9uZW50IGZyb20gXCIuL01lc3NhZ2VDb21wb25lbnRcIjtcbmltcG9ydCBwdXNoZXIgZnJvbSBcIi4uLy4uL3B1c2hlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vc2VydmljZXMvYXBpLnJlcXVlc3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZnVuY3Rpb24gQ2hhdGJveCh7IHN0YXRlIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVybGRhdGEgPSByb3V0ZXI/LnF1ZXJ5LmNoYXQ7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBib3R0b20gPSB1c2VSZWYoKTtcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKFxuICAgICgpID0+XG4gICAgICByb3V0ZXIuaXNSZWFkeVxuICAgICAgICA/IEFQSV9VUkwgKyBgbWVzc2FnZV9saXN0LyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYFxuICAgICAgICA6IG51bGwsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAvLyAgIGF4aW9zXG4gIC8vICAgICAuZ2V0KEFQSV9VUkwgKyBgbWVzc2FnZV9saXN0LyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYClcbiAgLy8gICAgIC50aGVuKChyZXNwKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxuICAvLyAgICAgLy8gICBzZXRDaGF0KHJlc3AuZGF0YSk7XG4gIC8vICAgICB9KTtcblxuICAvLyAgIGF4aW9zXG4gIC8vICAgICAuZ2V0KEFQSV9VUkwgKyBgcmV2aWV3X2ZldGNoLyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYClcbiAgLy8gICAgIC50aGVuKChyZXNwKSA9PiB7XG4gIC8vICAgICAvLyAgIHNldFJldmlldyhyZXNwLmRhdGEpO1xuICAvLyAgICAgfSk7XG4gIC8vIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoXCJtZXNzYWdlc1wiKTtcblxuICAgIGNoYW5uZWwuYmluZChcIm5ldy1tZXNzYWdlXCIsIGFzeW5jIChuZXdEYXRhKSA9PiB7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgbXV0YXRlKGZldGNoZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXV0YXRlKGZldGNoZXIsIHtcbiAgICAgICAgICBvcHRpbWlzdGljRGF0YTogWy4uLmRhdGEsIG5ld0RhdGFdLFxuICAgICAgICAgIHJvbGxiYWNrT25FcnJvcjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBib3R0b20uY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSwgW2RhdGEsIG11dGF0ZSwgcHVzaGVyXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZCgpIHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5wb3N0KEFQSV9VUkwgKyBcIm1lc3NhZ2VzL1wiLCB7XG4gICAgICAgIHRleHQ6IHJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzZW5kZXI6IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkLFxuICAgICAgICByZWNpcGllbnQ6IHVybGRhdGEsXG4gICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgIGRhdGVfdGltZV9zZW50OiBEYXRlLm5vdygpLFxuICAgICAgICB0aW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdChcIk1NLURELVlZWVkgaGg6bW1cIiksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhLCBcIkNIRUNLIE1FIE9VVCBIRVJFXCIpO1xuICAgICAgICBtdXRhdGUoWy4uLmRhdGEsIHJlc3AuZGF0YV0sIHtcbiAgICAgICAgICBvcHRpbWlzdGljRGF0YTogWy4uLmRhdGEsIHJlc3AuZGF0YV0sXG4gICAgICAgICAgcm9sbGJhY2tPbkVycm9yOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgfSk7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGgtW2NhbGMoMTAwdmgtMTAuNXJlbSldXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsICBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICB7dHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gZGF0YT8ubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSBweC0xIHB0LTFcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VDb21wb25lbnQgbWVzc2FnZT17bWVzc2FnZX0gc3RhdGU9e3N0YXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAvLyA8ZGl2XG4gICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gXCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA6IFwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgIC8vID5cbiAgICAgICAgICAgICAgICAgIC8vICAgPGRpdlxuICAgICAgICAgICAgICAgICAgLy8gICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZFxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA/IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsIGJvcmRlci1tdHB1cnBsZSB3LWZpdFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDogXCJib3JkZXIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vICAgPlxuICAgICAgICAgICAgICAgICAgLy8gICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8ZGl2IHJlZj17Ym90dG9tfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLXNsYXRlLTEwMCByb3VuZGVkLWwtZnVsbCB3LWZ1bGwgcHgtNVwiXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yIHJvdW5kZWQtci1mdWxsXCIgb25DbGljaz17c2VuZH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIuLi9pbWcvc2VuZC5zdmdcIlxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZlcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Ym94O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTWVzc2FnZUNvbXBvbmVudCIsInB1c2hlciIsInVzZVNXUiIsInJlcXVlc3QiLCJJbWFnZSIsInVzZVJvdXRlciIsIkFQSV9VUkwiLCJheGlvcyIsIm1vbWVudCIsIkNoYXRib3giLCJzdGF0ZSIsInJvdXRlciIsInVybGRhdGEiLCJxdWVyeSIsImNoYXQiLCJyZWYiLCJib3R0b20iLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpc1JlYWR5IiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwiZXJyb3IiLCJtdXRhdGUiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsIm5ld0RhdGEiLCJvcHRpbWlzdGljRGF0YSIsInJvbGxiYWNrT25FcnJvciIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGV4dCIsInZhbHVlIiwic2VuZGVyIiwicmVjaXBpZW50Iiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZm9ybWF0IiwicmVzcCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatbox.js\n"));

/***/ })

});