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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListingCard */ \"./src/components/ListingCard.js\");\n\n\n\nfunction Browse(param) {\n    var listings = param.listings, setShowModal = param.setShowModal, setModalData = param.setModalData, filter = param.filter, showFilter = param.showFilter, setShowFilter = param.setShowFilter;\n    var filtered = function filtered() {\n        var _this = this;\n        // Define filter functions for each active filter\n        var filterFunctions = [];\n        if (filter.type === \"category\") {\n            filterFunctions.push(function(listing) {\n                return listing.category[0].id == filter.filterBy;\n            });\n        }\n        if (filter.type === \"search\") {\n            filterFunctions.push(function(listing) {\n                return listing.title.toLowerCase().includes(filter.filterBy.toLowerCase()) || listing.description.toLowerCase().includes(filter.filterBy.toLowerCase());\n            });\n        }\n        if (filter.type === \"Location\") {\n            var cityArray = filter.filterBy.map(function(city) {\n                return \"\".concat(city.city, \", \").concat(city.state);\n            });\n            filterFunctions.push(function(listing) {\n                return cityArray.includes(listing.location);\n            });\n        }\n        // Apply all filter functions to the listings\n        var filteredListings = filterFunctions.reduce(function(listings, filterFunction) {\n            return listings.filter(filterFunction);\n        }, listings);\n        // Map the filtered listings to ListingCard components\n        return filteredListings.map(function(listing) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListingCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                listing: listing,\n                setShowModal: setShowModal,\n                setModalData: setModalData,\n                page: \"browse\"\n            }, listing.id, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-xl font-bold my-2\",\n                children: \"Today's picks\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btn absolute bottom-5 right-5 lg:hidden\",\n                onClick: function() {\n                    setShowFilter(!showFilter);\n                },\n                children: [\n                    \"Options\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                children: filtered()\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c = Browse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLFNBQVNFLE9BQU8sS0FPZixFQUFFO1FBTkRDLFdBRGMsTUFDZEEsVUFDQUMsZUFGYyxNQUVkQSxjQUNBQyxlQUhjLE1BR2RBLGNBQ0FDLFNBSmMsTUFJZEEsUUFDQUMsYUFMYyxNQUtkQSxZQUNBQyxnQkFOYyxNQU1kQTtRQUVTQyxXQUFULFNBQVNBLFdBQVc7O1FBQ2xCLGlEQUFpRDtRQUNqRCxJQUFNQyxrQkFBa0IsRUFBRTtRQUMxQixJQUFJSixPQUFPSyxJQUFJLEtBQUssWUFBWTtZQUM5QkQsZ0JBQWdCRSxJQUFJLENBQ2xCLFNBQUNDO3VCQUFZQSxRQUFRQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxFQUFFLElBQUlULE9BQU9VLFFBQVE7O1FBRTFELENBQUM7UUFDRCxJQUFJVixPQUFPSyxJQUFJLEtBQUssVUFBVTtZQUM1QkQsZ0JBQWdCRSxJQUFJLENBQ2xCLFNBQUNDO3VCQUNDQSxRQUFRSSxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDYixPQUFPVSxRQUFRLENBQUNFLFdBQVcsT0FDaEVMLFFBQVFPLFdBQVcsQ0FDaEJGLFdBQVcsR0FDWEMsUUFBUSxDQUFDYixPQUFPVSxRQUFRLENBQUNFLFdBQVc7O1FBRTdDLENBQUM7UUFDRCxJQUFJWixPQUFPSyxJQUFJLEtBQUssWUFBWTtZQUM5QixJQUFNVSxZQUFZZixPQUFPVSxRQUFRLENBQUNNLEdBQUcsQ0FDbkMsU0FBQ0M7dUJBQVMsR0FBaUJBLE9BQWRBLEtBQUtBLElBQUksRUFBQyxNQUFlLE9BQVhBLEtBQUtDLEtBQUs7O1lBRXZDZCxnQkFBZ0JFLElBQUksQ0FBQyxTQUFDQzt1QkFBWVEsVUFBVUYsUUFBUSxDQUFDTixRQUFRWSxRQUFROztRQUN2RSxDQUFDO1FBRUQsNkNBQTZDO1FBQzdDLElBQU1DLG1CQUFtQmhCLGdCQUFnQmlCLE1BQU0sQ0FDN0MsU0FBQ3hCLFVBQVV5QixnQkFBbUI7WUFDNUIsT0FBT3pCLFNBQVNHLE1BQU0sQ0FBQ3NCO1FBQ3pCLEdBQ0F6QjtRQUdGLHNEQUFzRDtRQUN0RCxPQUFPdUIsaUJBQWlCSixHQUFHLENBQUMsU0FBQ1Q7aUNBQzNCLDhEQUFDWixvREFBV0E7Z0JBRVZZLFNBQVNBO2dCQUNUVCxjQUFjQTtnQkFDZEMsY0FBY0E7Z0JBQ2R3QixNQUFLO2VBSkFoQixRQUFRRSxFQUFFOzs7Ozs7SUFPckI7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFxQzs7Ozs7OzBCQUNwRCw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVMsV0FBTTtvQkFDYnhCLGNBQWMsQ0FBQ0Q7Z0JBQ2pCOztvQkFDRDtvQkFDUzs7Ozs7OzswQkFFViw4REFBQ3VCO2dCQUFJQyxXQUFVOzBCQUNadEI7Ozs7Ozs7Ozs7OztBQUlUO0tBcEVTUDtBQXNFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanM/MzM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdGluZ0NhcmQgZnJvbSBcIi4vTGlzdGluZ0NhcmRcIjtcblxuZnVuY3Rpb24gQnJvd3NlKHtcbiAgbGlzdGluZ3MsXG4gIHNldFNob3dNb2RhbCxcbiAgc2V0TW9kYWxEYXRhLFxuICBmaWx0ZXIsXG4gIHNob3dGaWx0ZXIsXG4gIHNldFNob3dGaWx0ZXIsXG59KSB7XG4gIGZ1bmN0aW9uIGZpbHRlcmVkKCkge1xuICAgIC8vIERlZmluZSBmaWx0ZXIgZnVuY3Rpb25zIGZvciBlYWNoIGFjdGl2ZSBmaWx0ZXJcbiAgICBjb25zdCBmaWx0ZXJGdW5jdGlvbnMgPSBbXTtcbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09IFwiY2F0ZWdvcnlcIikge1xuICAgICAgZmlsdGVyRnVuY3Rpb25zLnB1c2goXG4gICAgICAgIChsaXN0aW5nKSA9PiBsaXN0aW5nLmNhdGVnb3J5WzBdLmlkID09IGZpbHRlci5maWx0ZXJCeVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci50eXBlID09PSBcInNlYXJjaFwiKSB7XG4gICAgICBmaWx0ZXJGdW5jdGlvbnMucHVzaChcbiAgICAgICAgKGxpc3RpbmcpID0+XG4gICAgICAgICAgbGlzdGluZy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci5maWx0ZXJCeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGxpc3RpbmcuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoZmlsdGVyLmZpbHRlckJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09IFwiTG9jYXRpb25cIikge1xuICAgICAgY29uc3QgY2l0eUFycmF5ID0gZmlsdGVyLmZpbHRlckJ5Lm1hcChcbiAgICAgICAgKGNpdHkpID0+IGAke2NpdHkuY2l0eX0sICR7Y2l0eS5zdGF0ZX1gXG4gICAgICApO1xuICAgICAgZmlsdGVyRnVuY3Rpb25zLnB1c2goKGxpc3RpbmcpID0+IGNpdHlBcnJheS5pbmNsdWRlcyhsaXN0aW5nLmxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgYWxsIGZpbHRlciBmdW5jdGlvbnMgdG8gdGhlIGxpc3RpbmdzXG4gICAgY29uc3QgZmlsdGVyZWRMaXN0aW5ncyA9IGZpbHRlckZ1bmN0aW9ucy5yZWR1Y2UoXG4gICAgICAobGlzdGluZ3MsIGZpbHRlckZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0aW5ncy5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIGxpc3RpbmdzXG4gICAgKTtcblxuICAgIC8vIE1hcCB0aGUgZmlsdGVyZWQgbGlzdGluZ3MgdG8gTGlzdGluZ0NhcmQgY29tcG9uZW50c1xuICAgIHJldHVybiBmaWx0ZXJlZExpc3RpbmdzLm1hcCgobGlzdGluZykgPT4gKFxuICAgICAgPExpc3RpbmdDYXJkXG4gICAgICAgIGtleT17bGlzdGluZy5pZH1cbiAgICAgICAgbGlzdGluZz17bGlzdGluZ31cbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIHNldE1vZGFsRGF0YT17c2V0TW9kYWxEYXRhfVxuICAgICAgICBwYWdlPVwiYnJvd3NlXCJcbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgZm9udC1ib2xkIG15LTJcIj5Ub2RheSdzIHBpY2tzPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBhYnNvbHV0ZSBib3R0b20tNSByaWdodC01IGxnOmhpZGRlblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93RmlsdGVyKCFzaG93RmlsdGVyKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgT3B0aW9uc3tcIiBcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVtjYWxjKDEwMHZoLTYuNHJlbSldIGdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge2ZpbHRlcmVkKCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlzdGluZ0NhcmQiLCJCcm93c2UiLCJsaXN0aW5ncyIsInNldFNob3dNb2RhbCIsInNldE1vZGFsRGF0YSIsImZpbHRlciIsInNob3dGaWx0ZXIiLCJzZXRTaG93RmlsdGVyIiwiZmlsdGVyZWQiLCJmaWx0ZXJGdW5jdGlvbnMiLCJ0eXBlIiwicHVzaCIsImxpc3RpbmciLCJjYXRlZ29yeSIsImlkIiwiZmlsdGVyQnkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjcmlwdGlvbiIsImNpdHlBcnJheSIsIm1hcCIsImNpdHkiLCJzdGF0ZSIsImxvY2F0aW9uIiwiZmlsdGVyZWRMaXN0aW5ncyIsInJlZHVjZSIsImZpbHRlckZ1bmN0aW9uIiwicGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});