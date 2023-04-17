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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Modal(param) {\n    var isVisible = param.isVisible, setShowModal = param.setShowModal, children = param.children, modalData = param.modalData;\n    var handleClose = // if (!isVisible) return null;\n    function handleClose(e) {\n        if (e.target.id == \"wrapper\") {\n            setShowModal(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center\",\n        onClick: handleClose,\n        id: \"wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" md:w-[600px] flex flex-col bg-white rounded-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-black items-center justify-between m-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg font-bold\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-black text-xl place-self-end \",\n                            onClick: function() {\n                                return setShowModal(false);\n                            },\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-2 rounded text-black border-y-2 text-center\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white m-2 flex justify-end space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: modalData.githubLink,\n                            className: \"py-2 px-4 bg-mediumnavy rounded-lg\",\n                            children: \"Project Repo\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: modalData.projectLink,\n                            className: \"py-2 px-4 bg-mediumnavy rounded-lg\",\n                            children: \"Check it out!\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFekIsU0FBU0MsTUFBTSxLQUFnRCxFQUFFO1FBQWhEQyxZQUFGLE1BQUVBLFdBQVdDLGVBQWIsTUFBYUEsY0FBY0MsV0FBM0IsTUFBMkJBLFVBQVVDLFlBQXJDLE1BQXFDQTtRQUd2Q0MsY0FGVCwrQkFBK0I7SUFFL0IsU0FBU0EsWUFBWUMsQ0FBQyxFQUFFO1FBQ3BCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxJQUFJLFdBQVc7WUFDMUJOLGFBQWEsS0FBSztRQUN0QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ087UUFDR0MsV0FBVTtRQUNWQyxTQUFTTjtRQUNURyxJQUFHO2tCQUVILDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUdmLDhEQUFDRTs0QkFDR0YsV0FBVTs0QkFDVkMsU0FBUzt1Q0FBTVQsYUFBYSxLQUFLOztzQ0FDcEM7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ087b0JBQUlDLFdBQVU7Ozs7Ozs4QkFHZiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBRUMsTUFBTVYsVUFBVVcsVUFBVTs0QkFBRUwsV0FBVTtzQ0FBcUM7Ozs7OztzQ0FHOUUsOERBQUNHOzRCQUFFQyxNQUFNVixVQUFVWSxXQUFXOzRCQUFFTixXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkc7S0F6Q1NWO0FBMkNULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzP2M1ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBNb2RhbCh7IGlzVmlzaWJsZSwgc2V0U2hvd01vZGFsLCBjaGlsZHJlbiwgbW9kYWxEYXRhIH0pIHtcbiAgICAvLyBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAnd3JhcHBlcicpIHtcbiAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGJhY2tkcm9wLWJsdXItc20gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIGlkPSd3cmFwcGVyJ1xuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG1kOnctWzYwMHB4XSBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIHJvdW5kZWQteGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtYmxhY2sgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtLTQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHttb2RhbERhdGEudGl0bGV9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIHRleHQteGwgcGxhY2Utc2VsZi1lbmQgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcC0yIHJvdW5kZWQgdGV4dC1ibGFjayBib3JkZXIteS0yIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgey8qIHttb2RhbERhdGEubW9kYWx9ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG0tMiBmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21vZGFsRGF0YS5naXRodWJMaW5rfSBjbGFzc05hbWU9J3B5LTIgcHgtNCBiZy1tZWRpdW1uYXZ5IHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBSZXBvXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bW9kYWxEYXRhLnByb2plY3RMaW5rfSBjbGFzc05hbWU9J3B5LTIgcHgtNCBiZy1tZWRpdW1uYXZ5IHJvdW5kZWQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdLCJuYW1lcyI6WyJSZWFjdCIsIk1vZGFsIiwiaXNWaXNpYmxlIiwic2V0U2hvd01vZGFsIiwiY2hpbGRyZW4iLCJtb2RhbERhdGEiLCJoYW5kbGVDbG9zZSIsImUiLCJ0YXJnZXQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJidXR0b24iLCJhIiwiaHJlZiIsImdpdGh1YkxpbmsiLCJwcm9qZWN0TGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n"));

/***/ })

});