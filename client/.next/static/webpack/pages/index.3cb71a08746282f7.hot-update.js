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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Modal(param) {\n    var isVisible = param.isVisible, setShowModal = param.setShowModal, children = param.children, modalData = param.modalData;\n    // if (!isVisible) return null;\n    // function handleClose(e) {\n    //     if (e.target.id == 'wrapper') {\n    //         setShowModal(false)\n    //     }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex\",\n        // onClick={handleClose}\n        id: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-full flex h-5/6 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \" < \"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            }, this),\n                            \"div\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://m.media-amazon.com/images/I/71gip9XT1AL.jpg\",\n                                fill: true,\n                                className: \"h-fit w-fit\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \" > \"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-full flex justify-center\",\n                        children: \"All Images\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute lg:right-0 w-1/4 justify-self-end h-full bg-white  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Category\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Description\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Location\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Seller Name Seller Rating Seller Message Button\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUNMO0FBRXpCLFNBQVNFLE1BQU0sS0FBZ0QsRUFBRTtRQUFoREMsWUFBRixNQUFFQSxXQUFXQyxlQUFiLE1BQWFBLGNBQWNDLFdBQTNCLE1BQTJCQSxVQUFVQyxZQUFyQyxNQUFxQ0E7SUFDaEQsK0JBQStCO0lBRS9CLDRCQUE0QjtJQUM1QixzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixJQUFJO0lBRUoscUJBQ0ksOERBQUNDO1FBQ0dDLFdBQVU7UUFDVix3QkFBd0I7UUFDeEJDLElBQUc7OzBCQUVILDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7MENBQU87Ozs7Ozs0QkFBZTswQ0FFbkIsOERBQUNWLG1EQUFLQTtnQ0FBQ1csS0FBSTtnQ0FBc0RDLElBQUk7Z0NBQUNKLFdBQVU7Ozs7OzswQ0FFcEYsOERBQUNFOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBRVosOERBQUNIO3dCQUFJQyxXQUFVO2tDQUFpQzs7Ozs7Ozs7Ozs7OzBCQUlwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDtrQ0FBSTs7Ozs7O2tDQUdMLDhEQUFDQTtrQ0FBSTs7Ozs7O2tDQUdMLDhEQUFDQTtrQ0FBSTs7Ozs7O2tDQUdMLDhEQUFDQTtrQ0FBSTs7Ozs7O2tDQUdMLDhEQUFDQTtrQ0FBSTs7Ozs7O2tDQUdMLDhEQUFDQTtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJCO0tBbkRTTDtBQXFEVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcz9jNWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBNb2RhbCh7IGlzVmlzaWJsZSwgc2V0U2hvd01vZGFsLCBjaGlsZHJlbiwgbW9kYWxEYXRhIH0pIHtcbiAgICAvLyBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBmdW5jdGlvbiBoYW5kbGVDbG9zZShlKSB7XG4gICAgLy8gICAgIGlmIChlLnRhcmdldC5pZCA9PSAnd3JhcHBlcicpIHtcbiAgICAvLyAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGJhY2tkcm9wLWJsdXItc20gZmxleCdcbiAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgaWQ9J3dyYXBwZXInXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTMvNCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi13LWZ1bGwgZmxleCBoLTUvNiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPiAmbHQ7IDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS83MWdpcDlYVDFBTC5qcGdcIiBmaWxsIGNsYXNzTmFtZT0naC1maXQgdy1maXQnIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPiAmZ3Q7IDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4tdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICBBbGwgSW1hZ2VzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZzpyaWdodC0wIHctMS80IGp1c3RpZnktc2VsZi1lbmQgaC1mdWxsIGJnLXdoaXRlICAnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBTZWxsZXIgTmFtZVxuICAgICAgICAgICAgICAgICAgICBTZWxsZXIgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgIFNlbGxlciBNZXNzYWdlIEJ1dHRvblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIk1vZGFsIiwiaXNWaXNpYmxlIiwic2V0U2hvd01vZGFsIiwiY2hpbGRyZW4iLCJtb2RhbERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImJ1dHRvbiIsInNyYyIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n"));

/***/ })

});