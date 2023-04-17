"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Modal(param) {\n    var isVisible = param.isVisible, setShowModal = param.setShowModal, children = param.children, modalData = param.modalData;\n    var handleClose = // if (!isVisible) return null;\n    function handleClose(e) {\n        if (e.target.id == \"wrapper\") {\n            setShowModal(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center\",\n        onClick: handleClose,\n        id: \"wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" md:w-[600px] flex flex-col bg-white rounded-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-black items-center justify-between m-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg font-bold\",\n                            children: modalData.title\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-black text-xl place-self-end \",\n                            onClick: function() {\n                                return setShowModal(false);\n                            },\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-2 rounded text-black border-y-2 text-center\",\n                    children: modalData.modal\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white m-2 flex justify-end space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: modalData.githubLink,\n                            className: \"py-2 px-4 bg-mediumnavy rounded-lg\",\n                            children: \"Project Repo\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: modalData.projectLink,\n                            className: \"py-2 px-4 bg-mediumnavy rounded-lg\",\n                            children: \"Check it out!\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFekIsU0FBU0MsTUFBTSxLQUFnRCxFQUFFO1FBQWhEQyxZQUFGLE1BQUVBLFdBQVdDLGVBQWIsTUFBYUEsY0FBY0MsV0FBM0IsTUFBMkJBLFVBQVVDLFlBQXJDLE1BQXFDQTtRQUd2Q0MsY0FGVCwrQkFBK0I7SUFFL0IsU0FBU0EsWUFBWUMsQ0FBQyxFQUFFO1FBQ3BCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxJQUFJLFdBQVc7WUFDMUJOLGFBQWEsS0FBSztRQUN0QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ087UUFDR0MsV0FBVTtRQUNWQyxTQUFTTjtRQUNURyxJQUFHO2tCQUVILDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVk4sVUFBVVEsS0FBSzs7Ozs7O3NDQUVwQiw4REFBQ0M7NEJBQ0dILFdBQVU7NEJBQ1ZDLFNBQVM7dUNBQU1ULGFBQWEsS0FBSzs7c0NBQ3BDOzs7Ozs7Ozs7Ozs7OEJBSUwsOERBQUNPO29CQUFJQyxXQUFVOzhCQUNWTixVQUFVVSxLQUFLOzs7Ozs7OEJBRXBCLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNLOzRCQUFFQyxNQUFNWixVQUFVYSxVQUFVOzRCQUFFUCxXQUFVO3NDQUFxQzs7Ozs7O3NDQUc5RSw4REFBQ0s7NEJBQUVDLE1BQU1aLFVBQVVjLFdBQVc7NEJBQUVSLFdBQVU7c0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRztLQXpDU1Y7QUEyQ1QsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwuanM/YzVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaXNWaXNpYmxlLCBzZXRTaG93TW9kYWwsIGNoaWxkcmVuLCBtb2RhbERhdGEgfSkge1xuICAgIC8vIGlmICghaXNWaXNpYmxlKSByZXR1cm4gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICd3cmFwcGVyJykge1xuICAgICAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgaWQ9J3dyYXBwZXInXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWQ6dy1bNjAwcHhdIGZsZXggZmxleC1jb2wgYmctd2hpdGUgcm91bmRlZC14bCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC1ibGFjayBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG0tNCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxEYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIHRleHQteGwgcGxhY2Utc2VsZi1lbmQgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcC0yIHJvdW5kZWQgdGV4dC1ibGFjayBib3JkZXIteS0yIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsRGF0YS5tb2RhbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtLTIgZmxleCBqdXN0aWZ5LWVuZCBzcGFjZS14LTInPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttb2RhbERhdGEuZ2l0aHViTGlua30gY2xhc3NOYW1lPSdweS0yIHB4LTQgYmctbWVkaXVtbmF2eSByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgUmVwb1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21vZGFsRGF0YS5wcm9qZWN0TGlua30gY2xhc3NOYW1lPSdweS0yIHB4LTQgYmctbWVkaXVtbmF2eSByb3VuZGVkLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIGl0IG91dCFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsImlzVmlzaWJsZSIsInNldFNob3dNb2RhbCIsImNoaWxkcmVuIiwibW9kYWxEYXRhIiwiaGFuZGxlQ2xvc2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidGl0bGUiLCJidXR0b24iLCJtb2RhbCIsImEiLCJocmVmIiwiZ2l0aHViTGluayIsInByb2plY3RMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n"));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Browse */ \"./src/components/Browse.js\");\n/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Filters */ \"./src/components/Filters.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    var BASE_URL = \"https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us94.gitpod.io/api/listings/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(BASE_URL).then(function(response) {\n            setListings(response.data);\n        });\n    }, []);\n    console.log(listings);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_5__.GlobalProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex  h-4 max-h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-[19%]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 bg-red-200 overflow-scroll\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Browse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                listings: listings\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"z9BV6DnffbB5IKTzJloxfuIWwk4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFDRTtBQUNGO0FBQ2M7QUFDOUI7QUFDYztBQUV4QyxTQUFTUSxPQUFPOztJQUNaLElBQWdDUCxZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUFwQ1EsV0FBeUJSLGNBQWZTLGNBQWVUO0lBRWhDLElBQU1VLFdBQVc7SUFFakJYLGdEQUFTQSxDQUFDLFdBQU07UUFDWk0saURBQVMsQ0FBQ0ssVUFDVEUsSUFBSSxDQUFDLFNBQUNDLFVBQWE7WUFDaEJKLFlBQVlJLFNBQVNDLElBQUk7UUFDN0I7SUFDSixHQUFHLEVBQUU7SUFFTEMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLHFCQUNJLDhEQUFDSixnRUFBY0E7a0JBQ1gsNEVBQUNhO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDZiwwREFBTUE7Ozs7OzhCQUNQLDhEQUFDYztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDaEIsMkRBQU9BOzs7Ozs7Ozs7O3NDQUVaLDhEQUFDZTs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ2pCLDBEQUFNQTtnQ0FBQ08sVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUcxQiw4REFBQ0YseURBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCO0dBN0JTQztLQUFBQTtBQStCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJvd3NlIGZyb20gXCIuLi9jb21wb25lbnRzL0Jyb3dzZVwiO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdGVyc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsU3RhdGVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtsaXN0aW5ncywgc2V0TGlzdGluZ3NdID0gdXNlU3RhdGUoW10pXG4gIFxuICAgIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovLzgwMDAtemFjcmF5dGhvLW1hcmtldG9waWFiYWMtZjcyczlwbWN5emcud3MtdXM5NC5naXRwb2QuaW8vYXBpL2xpc3RpbmdzL1wiXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChCQVNFX1VSTClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzZXRMaXN0aW5ncyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgY29uc29sZS5sb2cobGlzdGluZ3MpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4ICBoLTQgbWF4LWgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bMTklXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlcnMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXJlZC0yMDAgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJvd3NlIGxpc3RpbmdzPXtsaXN0aW5nc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HbG9iYWxQcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnJvd3NlIiwiRmlsdGVycyIsIkhlYWRlciIsIkdsb2JhbFByb3ZpZGVyIiwiYXhpb3MiLCJNb2RhbCIsIkhvbWUiLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwiQkFTRV9VUkwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});