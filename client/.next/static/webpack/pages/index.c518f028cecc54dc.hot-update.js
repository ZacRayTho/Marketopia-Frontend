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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Browse */ \"./src/components/Browse.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n// import Filters from \"../components/Filters\";\n\n\n\n\nvar Filters = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_Filters_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Filters */ \"./src/components/Filters.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Filters\"\n        ]\n    },\n    ssr: false\n});\n_c = Filters;\nfunction Home() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showModal = _useState1[0], setShowModal = _useState1[1];\n    var _useState2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), modalData = _useState2[0], setModalData = _useState2[1];\n    var _useState3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        type: \"\",\n        filterBy: \"\"\n    }), 2), filter = _useState3[0], setFilter = _useState3[1];\n    var BASE_URL = \"https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us94.gitpod.io/api/listings/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(BASE_URL).then(function(response) {\n            setListings(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setShowModal: setShowModal,\n                modalData: modalData,\n                isVisible: showModal\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex  h-4 max-h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-[19%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Filters, {\n                            setFilter: setFilter\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 bg-mtgray overflow-scroll\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Browse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            listings: listings,\n                            setShowModal: setShowModal,\n                            setModalData: setModalData,\n                            filter: filter\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 13\n    }, this);\n}\n_s(Home, \"erYfML3v386OaGAXgSBgLGElXn4=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFDMUMsK0NBQStDO0FBRVM7QUFDOUI7QUFDYztBQUNMO0FBRW5DLElBQU1PLFVBQVVELG1EQUFPQSxDQUFDO1dBQU0sa0xBQStCOzs7Ozs7O0lBQUlFLEtBQUssS0FBSzs7S0FBckVEO0FBR04sU0FBU0UsT0FBTzs7SUFDWixJQUFnQ1IsWUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBcENTLFdBQXlCVCxjQUFmVSxjQUFlVjtJQUNoQyxJQUFrQ0EsYUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEtBQUssT0FBekNXLFlBQTJCWCxlQUFoQlksZUFBZ0JaO0lBQ2xDLElBQWtDQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsSUFBSSxPQUF4Q2EsWUFBMkJiLGVBQWhCYyxlQUFnQmQ7SUFDbEMsSUFBNEJBLGFBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQztRQUNqQ2UsTUFBTTtRQUNOQyxVQUFVO0lBQ2QsUUFIT0MsU0FBcUJqQixlQUFia0IsWUFBYWxCO0lBSzVCLElBQU1tQixXQUFXO0lBRWpCcEIsZ0RBQVNBLENBQUMsV0FBTTtRQUNaSSxpREFBUyxDQUFDZ0IsVUFDVEUsSUFBSSxDQUFDLFNBQUNDLFVBQWE7WUFDaEJaLFlBQVlZLFNBQVNDLElBQUk7UUFDN0I7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFFUSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNyQix5REFBS0E7Z0JBQUNRLGNBQWNBO2dCQUFjQyxXQUFXQTtnQkFBV2EsV0FBV2Y7Ozs7OzswQkFDcEUsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNuQjs0QkFBUVksV0FBV0E7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ007d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUN4QiwwREFBTUE7NEJBQUNRLFVBQVVBOzRCQUFVRyxjQUFjQTs0QkFBY0UsY0FBY0E7NEJBQWNHLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wSDtHQWpDU1Q7TUFBQUE7QUFtQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJyb3dzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ccm93c2VcIjtcbi8vIGltcG9ydCBGaWx0ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlcnNcIjtcblxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEZpbHRlcnMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvRmlsdGVyc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2xpc3RpbmdzLCBzZXRMaXN0aW5nc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW21vZGFsRGF0YSwgc2V0TW9kYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdHlwZTogXCJcIixcbiAgICAgICAgZmlsdGVyQnk6IFwiXCJcbiAgICB9KVxuXG4gICAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vODAwMC16YWNyYXl0aG8tbWFya2V0b3BpYWJhYy1mNzJzOXBtY3l6Zy53cy11czk0LmdpdHBvZC5pby9hcGkvbGlzdGluZ3MvXCJcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KEJBU0VfVVJMKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHNldExpc3RpbmdzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWwgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9IG1vZGFsRGF0YT17bW9kYWxEYXRhfSBpc1Zpc2libGU9e3Nob3dNb2RhbH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggIGgtNCBtYXgtaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LVsxOSVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVycyBzZXRGaWx0ZXI9e3NldEZpbHRlcn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctbXRncmF5IG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyb3dzZSBsaXN0aW5ncz17bGlzdGluZ3N9IHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfSBzZXRNb2RhbERhdGE9e3NldE1vZGFsRGF0YX0gZmlsdGVyPXtmaWx0ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJyb3dzZSIsIkdsb2JhbFByb3ZpZGVyIiwiYXhpb3MiLCJNb2RhbCIsImR5bmFtaWMiLCJGaWx0ZXJzIiwic3NyIiwiSG9tZSIsImxpc3RpbmdzIiwic2V0TGlzdGluZ3MiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb2RhbERhdGEiLCJzZXRNb2RhbERhdGEiLCJ0eXBlIiwiZmlsdGVyQnkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJCQVNFX1VSTCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJpc1Zpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});