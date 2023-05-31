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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageComponent */ \"./src/components/MessageComponent.js\");\n/* harmony import */ var _pusher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pusher */ \"./pusher.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.request */ \"./src/services/api.request.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Chatbox() {\n    var _this = this;\n    _s();\n    var bottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var fetcher = function(url) {\n        return axios.get(url).then(function(res) {\n            return res.data;\n        });\n    };\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var _state_currentUser;\n        return router.isReady ? API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(urldata, \"/\") : null;\n    }, fetcher), data = _useSWR.data, error = _useSWR.error, mutate = _useSWR.mutate;\n    // console.log(data);\n    // useEffect(() => {\n    //   if (!router.isReady) return;\n    //   axios\n    //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //       setChat(resp.data);\n    //     });\n    //   axios\n    //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //       setReview(resp.data);\n    //     });\n    // }, [router.isReady]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _bottom_current;\n        var channel = _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(\"messages\");\n        channel.bind(\"new-message\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(newData) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                    if (!data) {\n                        mutate(fetcher);\n                    } else {\n                        mutate(fetcher, {\n                            optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data).concat([\n                                newData\n                            ]),\n                            rollbackOnError: true\n                        });\n                    }\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(newData) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        (_bottom_current = bottom.current) === null || _bottom_current === void 0 ? void 0 : _bottom_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        data,\n        mutate,\n        _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios.post(API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: urldata,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp.data, \"CHECK ME OUT HERE\");\n                                mutate((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data).concat([\n                                    resp.data\n                                ]), {\n                                    optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data).concat([\n                                        resp.data\n                                    ]),\n                                    rollbackOnError: true\n                                });\n                                ref.current.value = \"\";\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // window.location.reload(true);\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border h-[calc(100vh-10.5rem)]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full  overflow-y-auto\",\n                    children: [\n                        typeof data === \"object\" ? data === null || data === void 0 ? void 0 : data.map(function(message, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-5 px-1 pt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    message: message,\n                                    state: state\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                lineNumber: 83,\n                                columnNumber: 19\n                            }, _this);\n                        }) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: bottom\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex absolute bottom-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message!\",\n                        className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-mtpurple p-2 rounded-r-full\",\n                        onClick: send,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                            src: \"../img/send.svg\",\n                            height: 25,\n                            width: 25,\n                            alt: \"\",\n                            className: \"invert\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Chatbox, \"gtuOAk66KO5yJ0c3sskZFd9WT9Q=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Chatbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbox);\nvar _c;\n$RefreshReg$(_c, \"Chatbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFVOzRCQUM1QixxQkFDRSw4REFBQ0o7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsRCx5REFBZ0JBO29DQUFDb0QsU0FBU0E7b0NBQVN0QyxPQUFPQTs7Ozs7OytCQURIdUM7Ozs7O3dCQXFCOUMsS0FDQSxJQUFJO3NDQUNSLDhEQUFDSjs0QkFBSWQsS0FBSzdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2dEO2dCQUFLSixXQUFVOztrQ0FDZCw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pQLFdBQVU7d0JBQ1ZmLEtBQUtBOzs7Ozs7a0NBRVAsOERBQUN1Qjt3QkFBT1IsV0FBVTt3QkFBaUNTLFNBQVMzQjtrQ0FDMUQsNEVBQUM0Qjs0QkFDQ0MsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEMsS0FBSTs0QkFDSmQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0F4SFM3Qzs7UUFLMkJILDJDQUFNQTs7O0tBTGpDRztBQTBIVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0Ym94LmpzP2I5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lc3NhZ2VDb21wb25lbnQgZnJvbSBcIi4vTWVzc2FnZUNvbXBvbmVudFwiO1xuaW1wb3J0IHB1c2hlciBmcm9tIFwiLi4vLi4vcHVzaGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkucmVxdWVzdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENoYXRib3goKSB7XG4gICAgXG4gICAgY29uc3QgYm90dG9tID0gdXNlUmVmKCk7XG4gICAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoXG4gICAgICAoKSA9PlxuICAgICAgICByb3V0ZXIuaXNSZWFkeVxuICAgICAgICAgID8gQVBJX1VSTCArIGBtZXNzYWdlX2xpc3QvJHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0vJHt1cmxkYXRhfS9gXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgZmV0Y2hlclxuICAgICk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIC8vICAgYXhpb3NcbiAgICAvLyAgICAgLmdldChBUElfVVJMICsgYG1lc3NhZ2VfbGlzdC8ke3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfS8ke3VybGRhdGF9L2ApXG4gICAgLy8gICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgLy8gICAgICAgc2V0Q2hhdChyZXNwLmRhdGEpO1xuICAgIC8vICAgICB9KTtcbiAgXG4gICAgLy8gICBheGlvc1xuICAgIC8vICAgICAuZ2V0KEFQSV9VUkwgKyBgcmV2aWV3X2ZldGNoLyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYClcbiAgICAvLyAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAvLyAgICAgICBzZXRSZXZpZXcocmVzcC5kYXRhKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSwgW3JvdXRlci5pc1JlYWR5XSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShcIm1lc3NhZ2VzXCIpO1xuICBcbiAgICAgIGNoYW5uZWwuYmluZChcIm5ldy1tZXNzYWdlXCIsIGFzeW5jIChuZXdEYXRhKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIG11dGF0ZShmZXRjaGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtdXRhdGUoZmV0Y2hlciwge1xuICAgICAgICAgICAgb3B0aW1pc3RpY0RhdGE6IFsuLi5kYXRhLCBuZXdEYXRhXSxcbiAgICAgICAgICAgIHJvbGxiYWNrT25FcnJvcjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgYm90dG9tLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0sIFtkYXRhLCBtdXRhdGUsIHB1c2hlcl0pO1xuICBcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwibWVzc2FnZXMvXCIsIHtcbiAgICAgICAgICB0ZXh0OiByZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICBzZW5kZXI6IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkLFxuICAgICAgICAgIHJlY2lwaWVudDogdXJsZGF0YSxcbiAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgIGRhdGVfdGltZV9zZW50OiBEYXRlLm5vdygpLFxuICAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KFwiTU0tREQtWVlZWSBoaDptbVwiKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEsIFwiQ0hFQ0sgTUUgT1VUIEhFUkVcIik7XG4gICAgICAgICAgbXV0YXRlKFsuLi5kYXRhLCByZXNwLmRhdGFdLCB7XG4gICAgICAgICAgICBvcHRpbWlzdGljRGF0YTogWy4uLmRhdGEsIHJlc3AuZGF0YV0sXG4gICAgICAgICAgICByb2xsYmFja09uRXJyb3I6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGgtW2NhbGMoMTAwdmgtMTAuNXJlbSldXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsICBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICB7dHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gZGF0YT8ubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSBweC0xIHB0LTFcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VDb21wb25lbnQgbWVzc2FnZT17bWVzc2FnZX0gc3RhdGU9e3N0YXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAvLyA8ZGl2XG4gICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gXCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA6IFwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgIC8vID5cbiAgICAgICAgICAgICAgICAgIC8vICAgPGRpdlxuICAgICAgICAgICAgICAgICAgLy8gICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZFxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA/IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsIGJvcmRlci1tdHB1cnBsZSB3LWZpdFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDogXCJib3JkZXIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vICAgPlxuICAgICAgICAgICAgICAgICAgLy8gICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8ZGl2IHJlZj17Ym90dG9tfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLXNsYXRlLTEwMCByb3VuZGVkLWwtZnVsbCB3LWZ1bGwgcHgtNVwiXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yIHJvdW5kZWQtci1mdWxsXCIgb25DbGljaz17c2VuZH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIuLi9pbWcvc2VuZC5zdmdcIlxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZlcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Ym94O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTWVzc2FnZUNvbXBvbmVudCIsInB1c2hlciIsInVzZVNXUiIsInJlcXVlc3QiLCJ1c2VFZmZlY3QiLCJDaGF0Ym94IiwiYm90dG9tIiwiZmV0Y2hlciIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdGF0ZSIsInJvdXRlciIsImlzUmVhZHkiLCJBUElfVVJMIiwidXJsZGF0YSIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsImVycm9yIiwibXV0YXRlIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJuZXdEYXRhIiwib3B0aW1pc3RpY0RhdGEiLCJyb2xsYmFja09uRXJyb3IiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNlbmQiLCJwb3N0IiwidGV4dCIsInJlZiIsInZhbHVlIiwic2VuZGVyIiwicmVjaXBpZW50Iiwidmlld2VkIiwiZGF0ZV90aW1lX3NlbnQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwibW9tZW50IiwiZm9ybWF0IiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiSW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatbox.js\n"));

/***/ })

});