"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/pages/chat/index.js":
/*!*********************************!*\
  !*** ./src/pages/chat/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.constants */ \"./src/services/auth.constants.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction index() {\n    _s();\n    var _useGlobalState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)(), 2), state = _useGlobalState[0], dispatch = _useGlobalState[1];\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), chat = _useState[0], setChats = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_services_auth_constants__WEBPACK_IMPORTED_MODULE_2__.API_URL + \"chat_list/\".concat(state.currentUser.user_id, \"/\")).then(function(resp) {\n            setChats(resp.data);\n        });\n    }, []);\n    console.log(c);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"People that have messaged you, or you have messaged them \"\n    }, void 0, false, {\n        fileName: \"/workspace/Marketopia-Frontend/client/src/pages/chat/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"hUF+XQHkTWXTiyCQolLlJvTZWeo=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__.useGlobalState\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUI7QUFDSztBQUNJO0FBRTNELFNBQVNNLFFBQVE7O0lBRWYsSUFBMEJELGtCQUFBQSxnRkFBQUEsQ0FBQUEsb0VBQWNBLFFBQWpDRSxRQUFtQkYsb0JBQVpHLFdBQVlIO0lBQzFCLElBQXlCRixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE3Qk0sT0FBa0JOLGNBQVpPLFdBQVlQO0lBRXpCRCxnREFBU0EsQ0FBQyxXQUFNO1FBQ2RGLGlEQUFTLENBQUNJLDZEQUFPQSxHQUFHLGFBQXVDLE9BQTFCRyxNQUFNSyxXQUFXLENBQUNDLE9BQU8sRUFBQyxNQUMxREMsSUFBSSxDQUFDLFNBQUNDLE1BQVM7WUFDZEwsU0FBU0ssS0FBS0MsSUFBSTtRQUNwQjtJQUNGLEdBQUUsRUFBRTtJQUNKQyxRQUFRQyxHQUFHLENBQUNDO0lBS1oscUJBQ0UsOERBQUNDO2tCQUFJOzs7Ozs7QUFFVDtHQW5CU2Q7O1FBRW1CRCxnRUFBY0E7OztBQW1CMUMsK0RBQWVDLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvaW5kZXguanM/MTYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyBgY2hhdF9saXN0LyR7c3RhdGUuY3VycmVudFVzZXIudXNlcl9pZH0vYClcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgc2V0Q2hhdHMocmVzcC5kYXRhKVxuICAgIH0pXG4gIH0sW10pXG4gIGNvbnNvbGUubG9nKGMpXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlBlb3BsZSB0aGF0IGhhdmUgbWVzc2FnZWQgeW91LCBvciB5b3UgaGF2ZSBtZXNzYWdlZCB0aGVtIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9VUkwiLCJ1c2VHbG9iYWxTdGF0ZSIsImluZGV4Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNoYXQiLCJzZXRDaGF0cyIsImdldCIsImN1cnJlbnRVc2VyIiwidXNlcl9pZCIsInRoZW4iLCJyZXNwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/index.js\n"));

/***/ })

});