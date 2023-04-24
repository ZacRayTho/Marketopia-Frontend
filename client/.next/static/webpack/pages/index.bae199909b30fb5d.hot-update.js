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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Browse */ \"./src/components/Browse.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.constants */ \"./src/services/auth.constants.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n// import Filters from \"../components/Filters\";\n\n\n\n\n\nvar Filters = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_Filters_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Filters */ \"./src/components/Filters.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Filters\"\n        ]\n    },\n    ssr: false\n});\n_c = Filters;\nfunction Home() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), listings = _useState[0], setListings = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showModal = _useState1[0], setShowModal = _useState1[1];\n    var _useState2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), modalData = _useState2[0], setModalData = _useState2[1];\n    var _useState3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showFilter = _useState3[0], setShowFilter = _useState3[1];\n    var _useState4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        type: \"\",\n        filterBy: \"\"\n    }), 2), filter = _useState4[0], setFilter = _useState4[1];\n    var BASE_URL = \"https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us95.gitpod.io/api/listings/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_6__.API_URL + \"listings/\").then(function(response) {\n            setListings(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setShowModal: setShowModal,\n                modalData: modalData,\n                isVisible: showModal\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex  h-4 max-h-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: showFilter ? \"w-full lg:flex lg:w-[19%]\" : \"hidden w-full lg:flex lg:w-[19%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Filters, {\n                            setFilter: setFilter,\n                            filter: filter,\n                            showFilter: showFilter,\n                            setShowFilter: setShowFilter\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 bg-mtgray overflow-scroll\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Browse__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            listings: listings,\n                            setShowModal: setShowModal,\n                            setModalData: setModalData,\n                            filter: filter,\n                            showFilter: showFilter,\n                            setShowFilter: setShowFilter\n                        }, void 0, false, {\n                            fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EmRmTRN1bOGzseIHQTHGGUG/gr0=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNGO0FBQzFDLCtDQUErQztBQUVTO0FBQzlCO0FBQ2M7QUFDTDtBQUNrQjtBQUVyRCxJQUFNUSxVQUFVRixtREFBT0EsQ0FBQztXQUFNLGtMQUErQjs7Ozs7OztJQUFJRyxLQUFLLEtBQUs7O0tBQXJFRDtBQUVOLFNBQVNFLE9BQU87O0lBQ2QsSUFBZ0NULFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXBDVSxXQUF5QlYsY0FBZlcsY0FBZVg7SUFDaEMsSUFBa0NBLGFBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQXpDWSxZQUEyQlosZUFBaEJhLGVBQWdCYjtJQUNsQyxJQUFrQ0EsYUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBeENjLFlBQTJCZCxlQUFoQmUsZUFBZ0JmO0lBQ2xDLElBQW9DQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsS0FBSyxPQUEzQ2dCLGFBQTZCaEIsZUFBakJpQixnQkFBaUJqQjtJQUNwQyxJQUE0QkEsYUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDO1FBQ25Da0IsTUFBTTtRQUNOQyxVQUFVO0lBQ1osUUFIT0MsU0FBcUJwQixlQUFicUIsWUFBYXJCO0lBSzVCLElBQU1zQixXQUNKO0lBRUZ2QixnREFBU0EsQ0FBQyxXQUFNO1FBQ2RJLGlEQUFTLENBQUNHLDZEQUFPQSxHQUFHLGFBQWFrQixJQUFJLENBQUMsU0FBQ0MsVUFBYTtZQUNsRGQsWUFBWWMsU0FBU0MsSUFBSTtRQUMzQjtJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3hCLHlEQUFLQTtnQkFDSlMsY0FBY0E7Z0JBQ2RDLFdBQVdBO2dCQUNYZSxXQUFXakI7Ozs7OzswQkFFYiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBWVosYUFBYSw4QkFBOEIsa0NBQWtDO2tDQUM1Riw0RUFBQ1Q7NEJBQ0NjLFdBQVdBOzRCQUNYRCxRQUFRQTs0QkFDUkosWUFBWUE7NEJBQ1pDLGVBQWVBOzs7Ozs7Ozs7OztrQ0FHbkIsOERBQUNVO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDM0IsMERBQU1BOzRCQUNMUyxVQUFVQTs0QkFDVkcsY0FBY0E7NEJBQ2RFLGNBQWNBOzRCQUNkSyxRQUFRQTs0QkFDUkosWUFBWUE7NEJBQ1pDLGVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQjtHQWpEU1I7TUFBQUE7QUFtRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJyb3dzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ccm93c2VcIjtcbi8vIGltcG9ydCBGaWx0ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlcnNcIjtcblxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZpbHRlcnMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvRmlsdGVyc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbGlzdGluZ3MsIHNldExpc3RpbmdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vZGFsRGF0YSwgc2V0TW9kYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSh7XG4gICAgdHlwZTogXCJcIixcbiAgICBmaWx0ZXJCeTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgQkFTRV9VUkwgPVxuICAgIFwiaHR0cHM6Ly84MDAwLXphY3JheXRoby1tYXJrZXRvcGlhYmFjLWY3MnM5cG1jeXpnLndzLXVzOTUuZ2l0cG9kLmlvL2FwaS9saXN0aW5ncy9cIjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChBUElfVVJMICsgXCJsaXN0aW5ncy9cIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldExpc3RpbmdzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgbW9kYWxEYXRhPXttb2RhbERhdGF9XG4gICAgICAgIGlzVmlzaWJsZT17c2hvd01vZGFsfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggIGgtNCBtYXgtaC1mdWxsIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHNob3dGaWx0ZXIgPyBcInctZnVsbCBsZzpmbGV4IGxnOnctWzE5JV1cIiA6IFwiaGlkZGVuIHctZnVsbCBsZzpmbGV4IGxnOnctWzE5JV1cIn0+XG4gICAgICAgICAgPEZpbHRlcnNcbiAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICBzaG93RmlsdGVyPXtzaG93RmlsdGVyfVxuICAgICAgICAgICAgc2V0U2hvd0ZpbHRlcj17c2V0U2hvd0ZpbHRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctbXRncmF5IG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgICAgIDxCcm93c2VcbiAgICAgICAgICAgIGxpc3RpbmdzPXtsaXN0aW5nc31cbiAgICAgICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgICAgICAgc2V0TW9kYWxEYXRhPXtzZXRNb2RhbERhdGF9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIHNob3dGaWx0ZXI9e3Nob3dGaWx0ZXJ9XG4gICAgICAgICAgICBzZXRTaG93RmlsdGVyPXtzZXRTaG93RmlsdGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCcm93c2UiLCJHbG9iYWxQcm92aWRlciIsImF4aW9zIiwiTW9kYWwiLCJkeW5hbWljIiwiQVBJX1VSTCIsIkZpbHRlcnMiLCJzc3IiLCJIb21lIiwibGlzdGluZ3MiLCJzZXRMaXN0aW5ncyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIm1vZGFsRGF0YSIsInNldE1vZGFsRGF0YSIsInNob3dGaWx0ZXIiLCJzZXRTaG93RmlsdGVyIiwidHlwZSIsImZpbHRlckJ5IiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiQkFTRV9VUkwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNWaXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});