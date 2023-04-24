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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListingCard */ \"./src/components/ListingCard.js\");\n\n\n\n\nfunction Browse(param) {\n    var listings = param.listings, setShowModal = param.setShowModal, setModalData = param.setModalData, filter = param.filter, showFilter = param.showFilter, setShowFilter = param.setShowFilter;\n    var filtered = function filtered() {\n        var _this = this;\n        // Define filter functions for each active filter\n        var filterFunctions = [];\n        if (filter.type === \"category\") {\n            filterFunctions.push(function(listing) {\n                return listing.category[0].id == filter.filterBy;\n            });\n        }\n        if (filter.type === \"search\") {\n            filterFunctions.push(function(listing) {\n                return listing.title.toLowerCase().includes(filter.filterBy.toLowerCase()) || listing.description.toLowerCase().includes(filter.filterBy.toLowerCase());\n            });\n        }\n        if (filter.type === \"Location\") {\n            var cityArray = filter.filterBy.map(function(city) {\n                return \"\".concat(city.city, \", \").concat(city.state);\n            });\n            filterFunctions.push(function(listing) {\n                return cityArray.includes(listing.location);\n            });\n        }\n        // Apply all filter functions to the listings\n        var filteredListings = filterFunctions.reduce(function(listings, filterFunction) {\n            return listings.filter(filterFunction);\n        }, listings);\n        var sortedListing = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(filteredListing);\n        switch(sort){\n            case pricea:\n                sortedListings = sortedListings.sort(function(a, b) {\n                    return a.price - b.price;\n                });\n                break;\n            case priced:\n                sortedListings = sortedListings.sort(function(a, b) {\n                    return b.price - a.price;\n                });\n                break;\n        }\n        // Map the filtered listings to ListingCard components\n        return filteredListings.map(function(listing) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListingCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                listing: listing,\n                setShowModal: setShowModal,\n                setModalData: setModalData,\n                page: \"browse\"\n            }, listing.id, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-xl font-bold my-2\",\n                children: \"Today's picks\"\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btn absolute bottom-5 right-5 lg:hidden\",\n                onClick: function() {\n                    setShowFilter(!showFilter);\n                },\n                children: [\n                    \"Options\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                children: filtered()\n            }, void 0, false, {\n                fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/components/Browse.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_c = Browse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFFeEMsU0FBU0UsT0FBTyxLQU9mLEVBQUU7UUFOREMsV0FEYyxNQUNkQSxVQUNBQyxlQUZjLE1BRWRBLGNBQ0FDLGVBSGMsTUFHZEEsY0FDQUMsU0FKYyxNQUlkQSxRQUNBQyxhQUxjLE1BS2RBLFlBQ0FDLGdCQU5jLE1BTWRBO1FBRVNDLFdBQVQsU0FBU0EsV0FBVzs7UUFDbEIsaURBQWlEO1FBQ2pELElBQU1DLGtCQUFrQixFQUFFO1FBQzFCLElBQUlKLE9BQU9LLElBQUksS0FBSyxZQUFZO1lBQzlCRCxnQkFBZ0JFLElBQUksQ0FDbEIsU0FBQ0M7dUJBQVlBLFFBQVFDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLEVBQUUsSUFBSVQsT0FBT1UsUUFBUTs7UUFFMUQsQ0FBQztRQUNELElBQUlWLE9BQU9LLElBQUksS0FBSyxVQUFVO1lBQzVCRCxnQkFBZ0JFLElBQUksQ0FDbEIsU0FBQ0M7dUJBQ0NBLFFBQVFJLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNiLE9BQU9VLFFBQVEsQ0FBQ0UsV0FBVyxPQUNoRUwsUUFBUU8sV0FBVyxDQUNoQkYsV0FBVyxHQUNYQyxRQUFRLENBQUNiLE9BQU9VLFFBQVEsQ0FBQ0UsV0FBVzs7UUFFN0MsQ0FBQztRQUNELElBQUlaLE9BQU9LLElBQUksS0FBSyxZQUFZO1lBQzlCLElBQU1VLFlBQVlmLE9BQU9VLFFBQVEsQ0FBQ00sR0FBRyxDQUNuQyxTQUFDQzt1QkFBUyxHQUFpQkEsT0FBZEEsS0FBS0EsSUFBSSxFQUFDLE1BQWUsT0FBWEEsS0FBS0MsS0FBSzs7WUFFdkNkLGdCQUFnQkUsSUFBSSxDQUFDLFNBQUNDO3VCQUFZUSxVQUFVRixRQUFRLENBQUNOLFFBQVFZLFFBQVE7O1FBQ3ZFLENBQUM7UUFFRCw2Q0FBNkM7UUFDN0MsSUFBTUMsbUJBQW1CaEIsZ0JBQWdCaUIsTUFBTSxDQUM3QyxTQUFDeEIsVUFBVXlCLGdCQUFtQjtZQUM1QixPQUFPekIsU0FBU0csTUFBTSxDQUFDc0I7UUFDekIsR0FDQXpCO1FBR0YsSUFBSTBCLGdCQUFpQixxRkFBR0M7UUFDeEIsT0FBUUM7WUFDTixLQUFLQztnQkFDSEMsaUJBQWlCQSxlQUFlRixJQUFJLENBQUMsU0FBQ0csR0FBR0M7MkJBQU1ELEVBQUVFLEtBQUssR0FBR0QsRUFBRUMsS0FBSzs7Z0JBQ2hFLEtBQU07WUFDUixLQUFLQztnQkFDSEosaUJBQWlCQSxlQUFlRixJQUFJLENBQUMsU0FBQ0csR0FBR0M7MkJBQU1BLEVBQUVDLEtBQUssR0FBR0YsRUFBRUUsS0FBSzs7Z0JBQ2hFLEtBQU07UUFDVjtRQUVBLHNEQUFzRDtRQUN0RCxPQUFPVixpQkFBaUJKLEdBQUcsQ0FBQyxTQUFDVDtpQ0FDM0IsOERBQUNaLG9EQUFXQTtnQkFFVlksU0FBU0E7Z0JBQ1RULGNBQWNBO2dCQUNkQyxjQUFjQTtnQkFDZGlDLE1BQUs7ZUFKQXpCLFFBQVFFLEVBQUU7Ozs7OztJQU9yQjtJQUVBLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFxQzs7Ozs7OzBCQUNwRCw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVMsV0FBTTtvQkFDYmpDLGNBQWMsQ0FBQ0Q7Z0JBQ2pCOztvQkFDRDtvQkFDUzs7Ozs7OzswQkFFViw4REFBQ2dDO2dCQUFJQyxXQUFVOzBCQUNaL0I7Ozs7Ozs7Ozs7OztBQUlUO0tBOUVTUDtBQWdGVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ccm93c2UuanM/MzM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdGluZ0NhcmQgZnJvbSBcIi4vTGlzdGluZ0NhcmRcIjtcblxuZnVuY3Rpb24gQnJvd3NlKHtcbiAgbGlzdGluZ3MsXG4gIHNldFNob3dNb2RhbCxcbiAgc2V0TW9kYWxEYXRhLFxuICBmaWx0ZXIsXG4gIHNob3dGaWx0ZXIsXG4gIHNldFNob3dGaWx0ZXIsXG59KSB7XG4gIGZ1bmN0aW9uIGZpbHRlcmVkKCkge1xuICAgIC8vIERlZmluZSBmaWx0ZXIgZnVuY3Rpb25zIGZvciBlYWNoIGFjdGl2ZSBmaWx0ZXJcbiAgICBjb25zdCBmaWx0ZXJGdW5jdGlvbnMgPSBbXTtcbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09IFwiY2F0ZWdvcnlcIikge1xuICAgICAgZmlsdGVyRnVuY3Rpb25zLnB1c2goXG4gICAgICAgIChsaXN0aW5nKSA9PiBsaXN0aW5nLmNhdGVnb3J5WzBdLmlkID09IGZpbHRlci5maWx0ZXJCeVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci50eXBlID09PSBcInNlYXJjaFwiKSB7XG4gICAgICBmaWx0ZXJGdW5jdGlvbnMucHVzaChcbiAgICAgICAgKGxpc3RpbmcpID0+XG4gICAgICAgICAgbGlzdGluZy50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci5maWx0ZXJCeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGxpc3RpbmcuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoZmlsdGVyLmZpbHRlckJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09IFwiTG9jYXRpb25cIikge1xuICAgICAgY29uc3QgY2l0eUFycmF5ID0gZmlsdGVyLmZpbHRlckJ5Lm1hcChcbiAgICAgICAgKGNpdHkpID0+IGAke2NpdHkuY2l0eX0sICR7Y2l0eS5zdGF0ZX1gXG4gICAgICApO1xuICAgICAgZmlsdGVyRnVuY3Rpb25zLnB1c2goKGxpc3RpbmcpID0+IGNpdHlBcnJheS5pbmNsdWRlcyhsaXN0aW5nLmxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgYWxsIGZpbHRlciBmdW5jdGlvbnMgdG8gdGhlIGxpc3RpbmdzXG4gICAgY29uc3QgZmlsdGVyZWRMaXN0aW5ncyA9IGZpbHRlckZ1bmN0aW9ucy5yZWR1Y2UoXG4gICAgICAobGlzdGluZ3MsIGZpbHRlckZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0aW5ncy5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIGxpc3RpbmdzXG4gICAgKTtcblxuICAgIGxldCBzb3J0ZWRMaXN0aW5nID0gWy4uLmZpbHRlcmVkTGlzdGluZ107XG4gICAgc3dpdGNoIChzb3J0KSB7XG4gICAgICBjYXNlIHByaWNlYTpcbiAgICAgICAgc29ydGVkTGlzdGluZ3MgPSBzb3J0ZWRMaXN0aW5ncy5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwcmljZWQ6XG4gICAgICAgIHNvcnRlZExpc3RpbmdzID0gc29ydGVkTGlzdGluZ3Muc29ydCgoYSwgYikgPT4gYi5wcmljZSAtIGEucHJpY2UpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBNYXAgdGhlIGZpbHRlcmVkIGxpc3RpbmdzIHRvIExpc3RpbmdDYXJkIGNvbXBvbmVudHNcbiAgICByZXR1cm4gZmlsdGVyZWRMaXN0aW5ncy5tYXAoKGxpc3RpbmcpID0+IChcbiAgICAgIDxMaXN0aW5nQ2FyZFxuICAgICAgICBrZXk9e2xpc3RpbmcuaWR9XG4gICAgICAgIGxpc3Rpbmc9e2xpc3Rpbmd9XG4gICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgICBzZXRNb2RhbERhdGE9e3NldE1vZGFsRGF0YX1cbiAgICAgICAgcGFnZT1cImJyb3dzZVwiXG4gICAgICAvPlxuICAgICkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBteS0yXCI+VG9kYXkncyBwaWNrczwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYWJzb2x1dGUgYm90dG9tLTUgcmlnaHQtNSBsZzpoaWRkZW5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0ZpbHRlcighc2hvd0ZpbHRlcik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIE9wdGlvbnN7XCIgXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC02LjRyZW0pXSBncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgIHtmaWx0ZXJlZCgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpc3RpbmdDYXJkIiwiQnJvd3NlIiwibGlzdGluZ3MiLCJzZXRTaG93TW9kYWwiLCJzZXRNb2RhbERhdGEiLCJmaWx0ZXIiLCJzaG93RmlsdGVyIiwic2V0U2hvd0ZpbHRlciIsImZpbHRlcmVkIiwiZmlsdGVyRnVuY3Rpb25zIiwidHlwZSIsInB1c2giLCJsaXN0aW5nIiwiY2F0ZWdvcnkiLCJpZCIsImZpbHRlckJ5IiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJjaXR5QXJyYXkiLCJtYXAiLCJjaXR5Iiwic3RhdGUiLCJsb2NhdGlvbiIsImZpbHRlcmVkTGlzdGluZ3MiLCJyZWR1Y2UiLCJmaWx0ZXJGdW5jdGlvbiIsInNvcnRlZExpc3RpbmciLCJmaWx0ZXJlZExpc3RpbmciLCJzb3J0IiwicHJpY2VhIiwic29ydGVkTGlzdGluZ3MiLCJhIiwiYiIsInByaWNlIiwicHJpY2VkIiwicGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Browse.js\n"));

/***/ })

});