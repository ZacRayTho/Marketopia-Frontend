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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Browse */ \"./src/components/Browse.js\");\n/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Filters */ \"./src/components/Filters.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showModal = _useState1[0], setShowModal = _useState1[1];\n    var _useState2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), modalData = _useState2[0], setModalData = _useState2[1];\n    var BASE_URL = \"https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us94.gitpod.io/api/listings/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(BASE_URL).then(function(response) {\n            setListings(response.data);\n        });\n    }, []);\n    console.log(listings);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setShowModal: setShowModal,\n                modalData: modalData,\n                isVisible: showModal\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex  h-4 max-h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-[19%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 bg-mtgray overflow-scroll\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Browse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            listings: listings,\n                            setShowModal: setShowModal,\n                            setModalData: setModalData\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, this);\n}\n_s(Home, \"114alVclbVedS1vKwUA+YKF6my4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFDRTtBQUNGO0FBQ2M7QUFDOUI7QUFDYztBQUV4QyxTQUFTUSxPQUFPOztJQUNaLElBQWdDUCxZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUFwQ1EsV0FBeUJSLGNBQWZTLGNBQWVUO0lBQ2hDLElBQWtDQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsS0FBSyxPQUF6Q1UsWUFBMkJWLGVBQWhCVyxlQUFnQlg7SUFDbEMsSUFBa0NBLGFBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQXhDWSxZQUEyQlosZUFBaEJhLGVBQWdCYjtJQUVsQyxJQUFNYyxXQUFXO0lBRWpCZixnREFBU0EsQ0FBQyxXQUFNO1FBQ1pNLGlEQUFTLENBQUNTLFVBQ1RFLElBQUksQ0FBQyxTQUFDQyxVQUFhO1lBQ2hCUixZQUFZUSxTQUFTQyxJQUFJO1FBQzdCO0lBQ0osR0FBRyxFQUFFO0lBRUxDLFFBQVFDLEdBQUcsQ0FBQ1o7SUFDWixxQkFFUSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNuQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRyx5REFBS0E7Z0JBQUNLLGNBQWNBO2dCQUFjQyxXQUFXQTtnQkFBV1csV0FBV2I7Ozs7OzswQkFDcEUsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNwQiwyREFBT0E7Ozs7Ozs7Ozs7a0NBRVosOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3JCLDBEQUFNQTs0QkFBQ08sVUFBVUE7NEJBQVVHLGNBQWNBOzRCQUFjRSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUY7R0EvQlNOO0tBQUFBO0FBaUNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCcm93c2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnJvd3NlXCI7XG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2xpc3RpbmdzLCBzZXRMaXN0aW5nc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW21vZGFsRGF0YSwgc2V0TW9kYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuICAgIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovLzgwMDAtemFjcmF5dGhvLW1hcmtldG9waWFiYWMtZjcyczlwbWN5emcud3MtdXM5NC5naXRwb2QuaW8vYXBpL2xpc3RpbmdzL1wiXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChCQVNFX1VSTClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzZXRMaXN0aW5ncyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgY29uc29sZS5sb2cobGlzdGluZ3MpXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxNb2RhbCBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gbW9kYWxEYXRhPXttb2RhbERhdGF9IGlzVmlzaWJsZT17c2hvd01vZGFsfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCAgaC00IG1heC1oLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzE5JV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJzIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1tdGdyYXkgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJvd3NlIGxpc3RpbmdzPXtsaXN0aW5nc30gc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9IHNldE1vZGFsRGF0YT17c2V0TW9kYWxEYXRhfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCcm93c2UiLCJGaWx0ZXJzIiwiSGVhZGVyIiwiR2xvYmFsUHJvdmlkZXIiLCJheGlvcyIsIk1vZGFsIiwiSG9tZSIsImxpc3RpbmdzIiwic2V0TGlzdGluZ3MiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb2RhbERhdGEiLCJzZXRNb2RhbERhdGEiLCJCQVNFX1VSTCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNWaXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});