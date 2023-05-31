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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageComponent */ \"./src/components/MessageComponent.js\");\n/* harmony import */ var _pusher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pusher */ \"./pusher.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.request */ \"./src/services/api.request.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Chatbox(param) {\n    var state = param.state, urldata = param.urldata;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var bottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var fetcher = function(url) {\n        return axios.get(url).then(function(res) {\n            return res.data;\n        });\n    };\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var _state_currentUser;\n        // router.isReady\n        //   ? \n        return API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(urldata, \"/\");\n    }, fetcher), data = _useSWR.data, error = _useSWR.error, mutate = _useSWR.mutate;\n    console.log(state);\n    console.log(data);\n    // useEffect(() => {\n    //   if (!router.isReady) return;\n    //   axios\n    //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //       setChat(resp.data);\n    //     });\n    //   axios\n    //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //       setReview(resp.data);\n    //     });\n    // }, [router.isReady]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _bottom_current;\n        var channel = _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(\"messages\");\n        channel.bind(\"new-message\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(newData) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    if (!data) {\n                        mutate(fetcher);\n                    } else {\n                        mutate(fetcher, {\n                            optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data).concat([\n                                newData\n                            ]),\n                            rollbackOnError: true\n                        });\n                    }\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(newData) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        (_bottom_current = bottom.current) === null || _bottom_current === void 0 ? void 0 : _bottom_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        data,\n        mutate,\n        _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios.post(API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: urldata,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp.data, \"CHECK ME OUT HERE\");\n                                mutate((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data).concat([\n                                    resp.data\n                                ]), {\n                                    optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data).concat([\n                                        resp.data\n                                    ]),\n                                    rollbackOnError: true\n                                });\n                                ref.current.value = \"\";\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // window.location.reload(true);\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border h-[calc(100vh-10.5rem)]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full  overflow-y-auto\",\n                    children: [\n                        typeof data === \"object\" ? data === null || data === void 0 ? void 0 : data.map(function(message, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-5 px-1 pt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    message: message,\n                                    state: state\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 21\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                lineNumber: 86,\n                                columnNumber: 19\n                            }, _this);\n                        }) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: bottom\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex absolute bottom-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message!\",\n                        className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-mtpurple p-2 rounded-r-full\",\n                        onClick: send,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: \"../img/send.svg\",\n                            height: 25,\n                            width: 25,\n                            alt: \"\",\n                            className: \"invert\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Chatbox, \"byzv/gvwHlC0czkFeI2XU+HoHrU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Chatbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbox);\nvar _c;\n$RefreshReg$(_c, \"Chatbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzt3QkFDWixPQUFPaEMsU0FBUyxXQUNiQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1pQyxHQUFHLENBQUMsU0FBQ0MsU0FBU0MsT0FBVTs0QkFDNUIscUJBQ0UsOERBQUNKO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDaEQseURBQWdCQTtvQ0FBQ2tELFNBQVNBO29DQUFTNUMsT0FBT0E7Ozs7OzsrQkFESDZDOzs7Ozt3QkFxQjlDLEtBQ0EsSUFBSTtzQ0FDUiw4REFBQ0o7NEJBQUl2QyxLQUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUMyQztnQkFBS0osV0FBVTs7a0NBQ2QsOERBQUNLO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaUCxXQUFVO3dCQUNWeEMsS0FBS0E7Ozs7OztrQ0FFUCw4REFBQ2dEO3dCQUFPUixXQUFVO3dCQUFpQ1MsU0FBU3hCO2tDQUMxRCw0RUFBQzdCLG1EQUFLQTs0QkFDSnNELEtBQUk7NEJBQ0pDLFFBQVE7NEJBQ1JDLE9BQU87NEJBQ1BDLEtBQUk7NEJBQ0piLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBM0hTM0M7O1FBTTJCSCwyQ0FBTUE7OztLQU5qQ0c7QUE2SFQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdGJveC5qcz9iOWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lc3NhZ2VDb21wb25lbnQgZnJvbSBcIi4vTWVzc2FnZUNvbXBvbmVudFwiO1xuaW1wb3J0IHB1c2hlciBmcm9tIFwiLi4vLi4vcHVzaGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkucmVxdWVzdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmZ1bmN0aW9uIENoYXRib3goe3N0YXRlLCB1cmxkYXRhfSkge1xuICAgIFxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKFxuICAgICAgKCkgPT5cbiAgICAgICAgLy8gcm91dGVyLmlzUmVhZHlcbiAgICAgICAgLy8gICA/IFxuICAgICAgICAgIEFQSV9VUkwgKyBgbWVzc2FnZV9saXN0LyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYFxuICAgICAgICAvLyAgIDogbnVsbFxuICAgICAgICAsXG4gICAgICBmZXRjaGVyXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICAvLyAgIGF4aW9zXG4gICAgLy8gICAgIC5nZXQoQVBJX1VSTCArIGBtZXNzYWdlX2xpc3QvJHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0vJHt1cmxkYXRhfS9gKVxuICAgIC8vICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIC8vICAgICAgIHNldENoYXQocmVzcC5kYXRhKTtcbiAgICAvLyAgICAgfSk7XG4gIFxuICAgIC8vICAgYXhpb3NcbiAgICAvLyAgICAgLmdldChBUElfVVJMICsgYHJldmlld19mZXRjaC8ke3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfS8ke3VybGRhdGF9L2ApXG4gICAgLy8gICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgLy8gICAgICAgc2V0UmV2aWV3KHJlc3AuZGF0YSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoXCJtZXNzYWdlc1wiKTtcbiAgXG4gICAgICBjaGFubmVsLmJpbmQoXCJuZXctbWVzc2FnZVwiLCBhc3luYyAobmV3RGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBtdXRhdGUoZmV0Y2hlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXV0YXRlKGZldGNoZXIsIHtcbiAgICAgICAgICAgIG9wdGltaXN0aWNEYXRhOiBbLi4uZGF0YSwgbmV3RGF0YV0sXG4gICAgICAgICAgICByb2xsYmFja09uRXJyb3I6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIGJvdHRvbS5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9LCBbZGF0YSwgbXV0YXRlLCBwdXNoZXJdKTtcbiAgXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KEFQSV9VUkwgKyBcIm1lc3NhZ2VzL1wiLCB7XG4gICAgICAgICAgdGV4dDogcmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgc2VuZGVyOiBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZCxcbiAgICAgICAgICByZWNpcGllbnQ6IHVybGRhdGEsXG4gICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICBkYXRlX3RpbWVfc2VudDogRGF0ZS5ub3coKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdChcIk1NLURELVlZWVkgaGg6bW1cIiksXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhLCBcIkNIRUNLIE1FIE9VVCBIRVJFXCIpO1xuICAgICAgICAgIG11dGF0ZShbLi4uZGF0YSwgcmVzcC5kYXRhXSwge1xuICAgICAgICAgICAgb3B0aW1pc3RpY0RhdGE6IFsuLi5kYXRhLCByZXNwLmRhdGFdLFxuICAgICAgICAgICAgcm9sbGJhY2tPbkVycm9yOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBoLVtjYWxjKDEwMHZoLTEwLjVyZW0pXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAge3R5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IGRhdGE/Lm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTUgcHgtMSBwdC0xXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQ29tcG9uZW50IG1lc3NhZ2U9e21lc3NhZ2V9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgLy8gPGRpdlxuICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2Uuc2VuZGVyID09IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA/IFwidy1mdWxsIGZsZXgganVzdGlmeS1lbmRcIlxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgOiBcInctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAvLyA+XG4gICAgICAgICAgICAgICAgICAvLyAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgLy8gICAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPyBcImJvcmRlciBweC00IHJvdW5kZWQtZnVsbCBib3JkZXItbXRwdXJwbGUgdy1maXRcIlxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA6IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyAgID5cbiAgICAgICAgICAgICAgICAgIC8vICAgICB7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPGRpdiByZWY9e2JvdHRvbX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGFic29sdXRlIGJvdHRvbS0wIHctZnVsbFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZSFcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sLWZ1bGwgdy1mdWxsIHB4LTVcIlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW10cHVycGxlIHAtMiByb3VuZGVkLXItZnVsbFwiIG9uQ2xpY2s9e3NlbmR9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiLi4vaW1nL3NlbmQuc3ZnXCJcbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52ZXJ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdGJveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIk1lc3NhZ2VDb21wb25lbnQiLCJwdXNoZXIiLCJ1c2VTV1IiLCJyZXF1ZXN0IiwiSW1hZ2UiLCJDaGF0Ym94Iiwic3RhdGUiLCJ1cmxkYXRhIiwicmVmIiwiYm90dG9tIiwiZmV0Y2hlciIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJBUElfVVJMIiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwiZXJyb3IiLCJtdXRhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJuZXdEYXRhIiwib3B0aW1pc3RpY0RhdGEiLCJyb2xsYmFja09uRXJyb3IiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNlbmQiLCJwb3N0IiwidGV4dCIsInZhbHVlIiwic2VuZGVyIiwicmVjaXBpZW50Iiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwibW9tZW50IiwiZm9ybWF0IiwicmVzcCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatbox.js\n"));

/***/ })

});