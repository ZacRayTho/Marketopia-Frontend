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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageComponent */ \"./src/components/MessageComponent.js\");\n/* harmony import */ var _pusher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pusher */ \"./pusher.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.request */ \"./src/services/api.request.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Chatbox(param) {\n    var state = param.state;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var urldata = router === null || router === void 0 ? void 0 : router.query.chat;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var bottom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var fetcher = function(url) {\n        return axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(url).then(function(res) {\n            return res.data;\n        });\n    };\n    var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var _state_currentUser;\n        return router.isReady ? _services_auth_constants__WEBPACK_IMPORTED_MODULE_8__.API_URL + \"message_list/\".concat((_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id, \"/\").concat(urldata, \"/\") : null;\n    }, fetcher), data = _useSWR.data, error = _useSWR.error, mutate = _useSWR.mutate;\n    // console.log(data);\n    // useEffect(() => {\n    //   if (!router.isReady) return;\n    //   axios\n    //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //         console.log(resp.data)\n    //     //   setChat(resp.data);\n    //     });\n    //   axios\n    //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)\n    //     .then((resp) => {\n    //     //   setReview(resp.data);\n    //     });\n    // }, [router.isReady]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _bottom_current;\n        var channel = _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(\"messages\");\n        channel.bind(\"new-message\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function(newData) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                    if (!data) {\n                        mutate(fetcher);\n                    } else {\n                        mutate(fetcher, {\n                            optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                newData\n                            ]),\n                            rollbackOnError: true\n                        });\n                    }\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function(newData) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        (_bottom_current = bottom.current) === null || _bottom_current === void 0 ? void 0 : _bottom_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        data,\n        mutate,\n        _pusher__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ]);\n    function send() {\n        return _send.apply(this, arguments);\n    }\n    function _send() {\n        _send = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function() {\n            var _state_currentUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(_services_auth_constants__WEBPACK_IMPORTED_MODULE_8__.API_URL + \"messages/\", {\n                                text: ref.current.value,\n                                sender: (_state_currentUser = state.currentUser) === null || _state_currentUser === void 0 ? void 0 : _state_currentUser.user_id,\n                                recipient: urldata,\n                                viewed: false,\n                                date_time_sent: Date.now(),\n                                timestamp: moment__WEBPACK_IMPORTED_MODULE_9___default()().format(\"MM-DD-YYYY hh:mm\")\n                            }).then(function(resp) {\n                                console.log(resp.data, \"CHECK ME OUT HERE\");\n                                mutate((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                    resp.data\n                                ]), {\n                                    optimisticData: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(data).concat([\n                                        resp.data\n                                    ]),\n                                    rollbackOnError: true\n                                });\n                                ref.current.value = \"\";\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // window.location.reload(true);\n        });\n        return _send.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border h-[calc(100vh-10.5rem)]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full  overflow-y-auto\",\n                    children: [\n                        typeof data === \"object\" ? data === null || data === void 0 ? void 0 : data.map(function(message, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-5 px-1 pt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    message: message,\n                                    state: state\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 21\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                                lineNumber: 90,\n                                columnNumber: 19\n                            }, _this);\n                        }) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: bottom\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex absolute bottom-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message!\",\n                        className: \"border bg-slate-100 rounded-l-full w-full px-5\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-mtpurple p-2 rounded-r-full\",\n                        onClick: send,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: \"../img/send.svg\",\n                            height: 25,\n                            width: 25,\n                            alt: \"\",\n                            className: \"invert\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Chatbox.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Chatbox, \"mvYocK6ZVMM7TSaqyNx2XgE1crw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Chatbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbox);\nvar _c;\n$RefreshReg$(_c, \"Chatbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUN0Qjs7O3dCQWhCRjs7Ozs7O1FBaUJBLGdDQUFnQztRQUNsQztlQW5CZUg7O0lBcUJqQixxQkFDRSw4REFBQ2U7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUNaLE9BQU8vQixTQUFTLFdBQ2JBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWdDLEdBQUcsQ0FBQyxTQUFDQyxTQUFTQyxPQUFVOzRCQUM1QixxQkFDRSw4REFBQ0o7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNyRCx5REFBZ0JBO29DQUFDdUQsU0FBU0E7b0NBQVM3QyxPQUFPQTs7Ozs7OytCQURIOEM7Ozs7O3dCQXFCOUMsS0FDQSxJQUFJO3NDQUNSLDhEQUFDSjs0QkFBSXJDLEtBQUtDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ3lDO2dCQUFLSixXQUFVOztrQ0FDZCw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pQLFdBQVU7d0JBQ1Z0QyxLQUFLQTs7Ozs7O2tDQUVQLDhEQUFDOEM7d0JBQU9SLFdBQVU7d0JBQWlDUyxTQUFTekI7a0NBQzFELDRFQUFDakMsbURBQUtBOzRCQUNKMkQsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEMsS0FBSTs0QkFDSmIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0EzSFM1Qzs7UUFDVUosa0RBQVNBO1FBTVFILDJDQUFNQTs7O0tBUGpDTztBQTZIVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0Ym94LmpzP2I5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVzc2FnZUNvbXBvbmVudCBmcm9tIFwiLi9NZXNzYWdlQ29tcG9uZW50XCI7XG5pbXBvcnQgcHVzaGVyIGZyb20gXCIuLi8uLi9wdXNoZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS5yZXF1ZXN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLmNvbnN0YW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmZ1bmN0aW9uIENoYXRib3goe3N0YXRlfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgdXJsZGF0YSA9IHJvdXRlcj8ucXVlcnkuY2hhdDtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBib3R0b20gPSB1c2VSZWYoKTtcbiAgICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUihcbiAgICAgICgpID0+IFxuICAgICAgICByb3V0ZXIuaXNSZWFkeVxuICAgICAgICAgID8gQVBJX1VSTCArIGBtZXNzYWdlX2xpc3QvJHtzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZH0vJHt1cmxkYXRhfS9gXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgZmV0Y2hlclxuICAgICk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIC8vICAgYXhpb3NcbiAgICAvLyAgICAgLmdldChBUElfVVJMICsgYG1lc3NhZ2VfbGlzdC8ke3N0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkfS8ke3VybGRhdGF9L2ApXG4gICAgLy8gICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEpXG4gICAgLy8gICAgIC8vICAgc2V0Q2hhdChyZXNwLmRhdGEpO1xuICAgIC8vICAgICB9KTtcbiAgXG4gICAgLy8gICBheGlvc1xuICAgIC8vICAgICAuZ2V0KEFQSV9VUkwgKyBgcmV2aWV3X2ZldGNoLyR7c3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWR9LyR7dXJsZGF0YX0vYClcbiAgICAvLyAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAvLyAgICAgLy8gICBzZXRSZXZpZXcocmVzcC5kYXRhKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSwgW3JvdXRlci5pc1JlYWR5XSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShcIm1lc3NhZ2VzXCIpO1xuICBcbiAgICAgIGNoYW5uZWwuYmluZChcIm5ldy1tZXNzYWdlXCIsIGFzeW5jIChuZXdEYXRhKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIG11dGF0ZShmZXRjaGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtdXRhdGUoZmV0Y2hlciwge1xuICAgICAgICAgICAgb3B0aW1pc3RpY0RhdGE6IFsuLi5kYXRhLCBuZXdEYXRhXSxcbiAgICAgICAgICAgIHJvbGxiYWNrT25FcnJvcjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgYm90dG9tLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0sIFtkYXRhLCBtdXRhdGUsIHB1c2hlcl0pO1xuICBcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwibWVzc2FnZXMvXCIsIHtcbiAgICAgICAgICB0ZXh0OiByZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICBzZW5kZXI6IHN0YXRlLmN1cnJlbnRVc2VyPy51c2VyX2lkLFxuICAgICAgICAgIHJlY2lwaWVudDogdXJsZGF0YSxcbiAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgIGRhdGVfdGltZV9zZW50OiBEYXRlLm5vdygpLFxuICAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KFwiTU0tREQtWVlZWSBoaDptbVwiKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEsIFwiQ0hFQ0sgTUUgT1VUIEhFUkVcIik7XG4gICAgICAgICAgbXV0YXRlKFsuLi5kYXRhLCByZXNwLmRhdGFdLCB7XG4gICAgICAgICAgICBvcHRpbWlzdGljRGF0YTogWy4uLmRhdGEsIHJlc3AuZGF0YV0sXG4gICAgICAgICAgICByb2xsYmFja09uRXJyb3I6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGgtW2NhbGMoMTAwdmgtMTAuNXJlbSldXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsICBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICB7dHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gZGF0YT8ubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSBweC0xIHB0LTFcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VDb21wb25lbnQgbWVzc2FnZT17bWVzc2FnZX0gc3RhdGU9e3N0YXRlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAvLyA8ZGl2XG4gICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZS5zZW5kZXIgPT0gc3RhdGUuY3VycmVudFVzZXI/LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gXCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICA6IFwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgIC8vID5cbiAgICAgICAgICAgICAgICAgIC8vICAgPGRpdlxuICAgICAgICAgICAgICAgICAgLy8gICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBtZXNzYWdlLnNlbmRlciA9PSBzdGF0ZS5jdXJyZW50VXNlcj8udXNlcl9pZFxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA/IFwiYm9yZGVyIHB4LTQgcm91bmRlZC1mdWxsIGJvcmRlci1tdHB1cnBsZSB3LWZpdFwiXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDogXCJib3JkZXIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vICAgPlxuICAgICAgICAgICAgICAgICAgLy8gICAgIHttZXNzYWdlLnRleHR9XG4gICAgICAgICAgICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8ZGl2IHJlZj17Ym90dG9tfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLXNsYXRlLTEwMCByb3VuZGVkLWwtZnVsbCB3LWZ1bGwgcHgtNVwiXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctbXRwdXJwbGUgcC0yIHJvdW5kZWQtci1mdWxsXCIgb25DbGljaz17c2VuZH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIuLi9pbWcvc2VuZC5zdmdcIlxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZlcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Ym94O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTWVzc2FnZUNvbXBvbmVudCIsInB1c2hlciIsInVzZVNXUiIsInJlcXVlc3QiLCJJbWFnZSIsInVzZVJvdXRlciIsIkFQSV9VUkwiLCJheGlvcyIsIm1vbWVudCIsIkNoYXRib3giLCJzdGF0ZSIsInJvdXRlciIsInVybGRhdGEiLCJxdWVyeSIsImNoYXQiLCJyZWYiLCJib3R0b20iLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpc1JlYWR5IiwiY3VycmVudFVzZXIiLCJ1c2VyX2lkIiwiZXJyb3IiLCJtdXRhdGUiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsIm5ld0RhdGEiLCJvcHRpbWlzdGljRGF0YSIsInJvbGxiYWNrT25FcnJvciIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2VuZCIsInBvc3QiLCJ0ZXh0IiwidmFsdWUiLCJzZW5kZXIiLCJyZWNpcGllbnQiLCJ2aWV3ZWQiLCJkYXRlX3RpbWVfc2VudCIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJmb3JtYXQiLCJyZXNwIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatbox.js\n"));

/***/ })

});