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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Modal(param) {\n    var isVisible = param.isVisible, setShowModal = param.setShowModal, modalData = param.modalData;\n    var handleClose = function handleClose() {\n        setShowModal(false);\n    };\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex z-40\",\n        // onClick={handleClose}\n        id: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed left-2 top-2 rounded-full bg-white px-3 py-1\",\n                onClick: handleClose,\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-full flex h-5/6 justify-center items-center mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"./img/chevronLeft.svg\",\n                                    height: 100,\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" h-full w-[80%] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"https://m.media-amazon.com/images/I/71gip9XT1AL.jpg\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"./img/chevronRight.svg\",\n                                    height: 100,\n                                    width: 100\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-full flex justify-center\",\n                        children: \"All Images\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute lg:right-0 w-1/4 justify-self-end h-full bg-white  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: modalData.price\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: modalData.category\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: modalData.description\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Location\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Seller Name Seller Rating Seller Message Button\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Modal.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUNMO0FBRXpCLFNBQVNFLE1BQU0sS0FBc0MsRUFBRTtRQUF0Q0MsWUFBRixNQUFFQSxXQUFXQyxlQUFiLE1BQWFBLGNBQWNDLFlBQTNCLE1BQTJCQTtRQUc3QkMsY0FBVCxTQUFTQSxjQUFjO1FBQ2ZGLGFBQWEsS0FBSztJQUMxQjtJQUpBLElBQUksQ0FBQ0QsV0FBVyxPQUFPLElBQUk7SUFNM0IscUJBQ0ksOERBQUNJO1FBQ0dDLFdBQVU7UUFDVix3QkFBd0I7UUFDeEJDLElBQUc7OzBCQUVILDhEQUFDQztnQkFBT0YsV0FBVTtnQkFBcURHLFNBQVNMOzBCQUFhOzs7Ozs7MEJBQzdGLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQU9GLFdBQVU7MENBQ2QsNEVBQUNSLG1EQUFLQTtvQ0FBQ1ksS0FBSTtvQ0FBd0JDLFFBQVE7b0NBQUtDLE9BQU87Ozs7Ozs7Ozs7OzBDQUUzRCw4REFBQ1A7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNSLG1EQUFLQTtvQ0FBQ1ksS0FBSTtvQ0FBc0RHLElBQUk7Ozs7Ozs7Ozs7OzBDQUV6RSw4REFBQ0w7Z0NBQU9GLFdBQVU7MENBQ2QsNEVBQUNSLG1EQUFLQTtvQ0FBQ1ksS0FBSTtvQ0FBeUJDLFFBQVE7b0NBQUtDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdoRSw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQWlDOzs7Ozs7Ozs7Ozs7MEJBSXBELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO2tDQUFJOzs7Ozs7a0NBR0wsOERBQUNBO2tDQUNJRixVQUFVVyxLQUFLOzs7Ozs7a0NBRXBCLDhEQUFDVDtrQ0FDSUYsVUFBVVksUUFBUTs7Ozs7O2tDQUV2Qiw4REFBQ1Y7a0NBQ0lGLFVBQVVhLFdBQVc7Ozs7OztrQ0FFMUIsOERBQUNYO2tDQUFJOzs7Ozs7a0NBR0wsOERBQUNBO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7S0F0RFNMO0FBd0RULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzP2M1ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIE1vZGFsKHsgaXNWaXNpYmxlLCBzZXRTaG93TW9kYWwsIG1vZGFsRGF0YSB9KSB7XG4gICAgaWYgKCFpc1Zpc2libGUpIHJldHVybiBudWxsO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IHotNDAnXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIGlkPSd3cmFwcGVyJ1xuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZml4ZWQgbGVmdC0yIHRvcC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBweC0zIHB5LTEnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5YPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6dy0zLzQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4tdy1mdWxsIGZsZXggaC01LzYganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTYnPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXgtYXV0byc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi9pbWcvY2hldnJvbkxlZnQuc3ZnXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGgtZnVsbCB3LVs4MCVdIHJlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS83MWdpcDlYVDFBTC5qcGdcIiBmaWxsIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXgtYXV0byc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi9pbWcvY2hldnJvblJpZ2h0LnN2Z1wiIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLXctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgQWxsIEltYWdlc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGc6cmlnaHQtMCB3LTEvNCBqdXN0aWZ5LXNlbGYtZW5kIGgtZnVsbCBiZy13aGl0ZSAgJz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHttb2RhbERhdGEucHJpY2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsRGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxEYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgU2VsbGVyIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgU2VsbGVyIFJhdGluZ1xuICAgICAgICAgICAgICAgICAgICBTZWxsZXIgTWVzc2FnZSBCdXR0b25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJNb2RhbCIsImlzVmlzaWJsZSIsInNldFNob3dNb2RhbCIsIm1vZGFsRGF0YSIsImhhbmRsZUNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxsIiwicHJpY2UiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n"));

/***/ })

});