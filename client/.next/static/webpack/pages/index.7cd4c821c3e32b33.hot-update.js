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

/***/ "./src/components/Browse.js":
/*!**********************************!*\
  !*** ./src/components/Browse.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListingCard */ \"./src/components/ListingCard.js\");\n\n\n\nfunction Browse(param) {\n    var listings = param.listings, setShowModal = param.setShowModal, setModalData = param.setModalData, filter = param.filter;\n    var filtered = function filtered() {\n        var _this = this;\n        switch(filter.type){\n            case \"\":\n                return listings.map(function(listing) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListingCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        listing: listing,\n                        setShowModal: setShowModal,\n                        setModalData: setModalData\n                    }, listing.id, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, _this);\n                });\n            case \"category\":\n                return listings.filter(function(listing) {\n                    return listing.category[0].id == filter.filterBy;\n                }).map(function(listing) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListingCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        listing: listing,\n                        setShowModal: setShowModal,\n                        setModalData: setModalData\n                    }, listing.id, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, _this);\n                });\n            case \"search\":\n                return listings.filter(function(listing) {\n                    return listing.title.toLowerCase().includes(filter.filterBy.toLowerCase()) || listing.description.toLowerCase().includes(filter.filterBy.toLowerCase());\n                }).map(function(listing) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListingCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        listing: listing,\n                        setShowModal: setShowModal,\n                        setModalData: setModalData\n                    }, listing.id, false, {\n                        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this);\n                });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-xl font-bold my-2\",\n                children: \"Today's picks\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                children: filtered()\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_c = Browse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLFNBQVNFLE9BQU8sS0FBZ0QsRUFBRTtRQUFoREMsV0FBRixNQUFFQSxVQUFVQyxlQUFaLE1BQVlBLGNBQWNDLGVBQTFCLE1BQTBCQSxjQUFjQyxTQUF4QyxNQUF3Q0E7UUFDN0NDLFdBQVQsU0FBU0EsV0FBVzs7UUFDbEIsT0FBUUQsT0FBT0UsSUFBSTtZQUNqQixLQUFLO2dCQUNILE9BQU9MLFNBQVNNLEdBQUcsQ0FBQyxTQUFDQzt5Q0FDbkIsOERBQUNULG9EQUFXQTt3QkFFVlMsU0FBU0E7d0JBQ1ROLGNBQWNBO3dCQUNkQyxjQUFjQTt1QkFIVEssUUFBUUMsRUFBRTs7Ozs7O1lBTXJCLEtBQUs7Z0JBQ0gsT0FBT1IsU0FDSkcsTUFBTSxDQUFDLFNBQUNJOzJCQUFZQSxRQUFRRSxRQUFRLENBQUMsRUFBRSxDQUFDRCxFQUFFLElBQUlMLE9BQU9PLFFBQVE7bUJBQzdESixHQUFHLENBQUMsU0FBQ0M7eUNBQ0osOERBQUNULG9EQUFXQTt3QkFFVlMsU0FBU0E7d0JBQ1ROLGNBQWNBO3dCQUNkQyxjQUFjQTt1QkFIVEssUUFBUUMsRUFBRTs7Ozs7O1lBTXZCLEtBQUs7Z0JBQ0gsT0FBT1IsU0FDSkcsTUFBTSxDQUNMLFNBQUNJOzJCQUNDQSxRQUFRSSxLQUFLLENBQ1ZDLFdBQVcsR0FDWEMsUUFBUSxDQUFDVixPQUFPTyxRQUFRLENBQUNFLFdBQVcsT0FDdkNMLFFBQVFPLFdBQVcsQ0FDaEJGLFdBQVcsR0FDWEMsUUFBUSxDQUFDVixPQUFPTyxRQUFRLENBQUNFLFdBQVc7bUJBRTFDTixHQUFHLENBQUMsU0FBQ0M7eUNBQ0osOERBQUNULG9EQUFXQTt3QkFFVlMsU0FBU0E7d0JBQ1ROLGNBQWNBO3dCQUNkQyxjQUFjQTt1QkFIVEssUUFBUUMsRUFBRTs7Ozs7O1FBTXpCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFxQzs7Ozs7OzBCQUNwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1paOzs7Ozs7Ozs7Ozs7QUFJVDtLQXJEU0w7QUF1RFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnJvd3NlLmpzPzMzNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RpbmdDYXJkIGZyb20gXCIuL0xpc3RpbmdDYXJkXCI7XG5cbmZ1bmN0aW9uIEJyb3dzZSh7IGxpc3RpbmdzLCBzZXRTaG93TW9kYWwsIHNldE1vZGFsRGF0YSwgZmlsdGVyIH0pIHtcbiAgZnVuY3Rpb24gZmlsdGVyZWQoKSB7XG4gICAgc3dpdGNoIChmaWx0ZXIudHlwZSkge1xuICAgICAgY2FzZSBcIlwiOlxuICAgICAgICByZXR1cm4gbGlzdGluZ3MubWFwKChsaXN0aW5nKSA9PiAoXG4gICAgICAgICAgPExpc3RpbmdDYXJkXG4gICAgICAgICAgICBrZXk9e2xpc3RpbmcuaWR9XG4gICAgICAgICAgICBsaXN0aW5nPXtsaXN0aW5nfVxuICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgICAgICBzZXRNb2RhbERhdGE9e3NldE1vZGFsRGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICApKTtcbiAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxuICAgICAgICByZXR1cm4gbGlzdGluZ3NcbiAgICAgICAgICAuZmlsdGVyKChsaXN0aW5nKSA9PiBsaXN0aW5nLmNhdGVnb3J5WzBdLmlkID09IGZpbHRlci5maWx0ZXJCeSlcbiAgICAgICAgICAubWFwKChsaXN0aW5nKSA9PiAoXG4gICAgICAgICAgICA8TGlzdGluZ0NhcmRcbiAgICAgICAgICAgICAga2V5PXtsaXN0aW5nLmlkfVxuICAgICAgICAgICAgICBsaXN0aW5nPXtsaXN0aW5nfVxuICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgICAgICAgc2V0TW9kYWxEYXRhPXtzZXRNb2RhbERhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpO1xuICAgICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgICByZXR1cm4gbGlzdGluZ3NcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgKGxpc3RpbmcpID0+XG4gICAgICAgICAgICAgIGxpc3RpbmcudGl0bGVcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhmaWx0ZXIuZmlsdGVyQnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgbGlzdGluZy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLmluY2x1ZGVzKGZpbHRlci5maWx0ZXJCeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgIClcbiAgICAgICAgICAubWFwKChsaXN0aW5nKSA9PiAoXG4gICAgICAgICAgICA8TGlzdGluZ0NhcmRcbiAgICAgICAgICAgICAga2V5PXtsaXN0aW5nLmlkfVxuICAgICAgICAgICAgICBsaXN0aW5nPXtsaXN0aW5nfVxuICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgICAgICAgc2V0TW9kYWxEYXRhPXtzZXRNb2RhbERhdGF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgbXktMlwiPlRvZGF5J3MgcGlja3M8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC02LjRyZW0pXSBncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgIHtmaWx0ZXJlZCgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpc3RpbmdDYXJkIiwiQnJvd3NlIiwibGlzdGluZ3MiLCJzZXRTaG93TW9kYWwiLCJzZXRNb2RhbERhdGEiLCJmaWx0ZXIiLCJmaWx0ZXJlZCIsInR5cGUiLCJtYXAiLCJsaXN0aW5nIiwiaWQiLCJjYXRlZ29yeSIsImZpbHRlckJ5IiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});