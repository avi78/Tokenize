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

/***/ "./components/SwapComponent.js":
/*!*************************************!*\
  !*** ./components/SwapComponent.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"src\"\n    };\n};\n_s(SwapComponent, \"ppYxa3TNJDXWAIZzFuHzgELQmVM=\");\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlEO0FBTy9CO0FBRXdDO0FBQzlCO0FBQ2dCO0FBQ0w7QUFDTztBQUNSO0FBQ2I7O0FBRWpDLElBQU1vQixhQUFhLEdBQUcsV0FBTTs7SUFDMUIsSUFBZ0NsQixHQUFhLEdBQWJBLCtDQUFRLENBQUNjLGlEQUFHLENBQUMsRUFBdENLLFFBQVEsR0FBaUJuQixHQUFhLEdBQTlCLEVBQUVvQixXQUFXLEdBQUlwQixHQUFhLEdBQWpCO0lBQzVCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ2EsMkRBQWEsQ0FBQyxFQUFsRFEsU0FBUyxHQUFrQnJCLElBQXVCLEdBQXpDLEVBQUVzQixZQUFZLEdBQUl0QixJQUF1QixHQUEzQjtJQUU5QixJQUFvQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXZDdUIsVUFBVSxHQUFtQnZCLElBQVUsR0FBN0IsRUFBRXdCLGFBQWEsR0FBSXhCLElBQVUsR0FBZDtJQUNoQyxJQUFzQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXpDeUIsV0FBVyxHQUFvQnpCLElBQVUsR0FBOUIsRUFBRTBCLGNBQWMsR0FBSTFCLElBQVUsR0FBZDtJQUVsQyxJQUFNMkIsYUFBYSxHQUFHMUIsNkNBQU0sRUFBRTtJQUM5QixJQUFNMkIsY0FBYyxHQUFHM0IsNkNBQU0sRUFBRTtJQUUvQixJQUFNNEIsVUFBVSxHQUFHNUIsNkNBQU0sQ0FBQyxLQUFLLENBQUM7SUFFaEMsSUFBTTZCLGtCQUFrQixHQUFHLG9CQUFvQjtJQUMvQyxJQUFNQyxZQUFZLEdBQUcsaUJBQWlCO0lBQ3RDLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7SUFDdkMsSUFBTUMsSUFBSSxHQUFHLE1BQU07SUFFbkIsSUFBTUMsV0FBVyxHQUFHO1FBQ2xCQyxFQUFFLEVBQUUsS0FBSztLQUNWO0NBQ0Y7R0FwQktqQixhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUFzQm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGhhc1ZhbGlkQWxsb3dhbmNlLFxuICBpbmNyZWFzZUFsbG93YW5jZSxcbiAgc3dhcEV0aFRvVG9rZW4sXG4gIHN3YXBUb2tlblRvRXRoLFxuICBzd2FwVG9rZW5Ub1Rva2VuLFxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xuXG5pbXBvcnQge0NvZ0ljb24sIEFycm93U21Eb3duSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHRvYXN0LCB7VG9hc3Rlcn0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHtERUZBVUxUX1ZBTFVFLCBFVEh9IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcblxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3NyY1Rva2VuLCBzZXRTcmNUb2tlbl0gPSB1c2VTdGF0ZShFVEgpO1xuICBjb25zdCBbZGVzdFRva2VuLCBzZXREZXN0VG9rZW5dID0gdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIGFsbG93YW5jZVwiO1xuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIGFuIGFtb3VudFwiO1xuICBjb25zdCBDT05ORUNUX1dBTExFVCA9IFwiQ29ubmVjdCB3YWxsZXRcIjtcbiAgY29uc3QgU1dBUCA9IFwiU3dhcFwiO1xuXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xuICAgIGlkOiBcInNyY1wiXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsIlN3YXBDb21wb25lbnQiLCJzcmNUb2tlbiIsInNldFNyY1Rva2VuIiwiZGVzdFRva2VuIiwic2V0RGVzdFRva2VuIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJvdXRwdXRWYWx1ZSIsInNldE91dHB1dFZhbHVlIiwiaW5wdXRWYWx1ZVJlZiIsIm91dHB1dFZhbHVlUmVmIiwiaXNSZXZlcnNlZCIsIklOQ1JFQVNFX0FMTE9XQU5DRSIsIkVOVEVSX0FNT1VOVCIsIkNPTk5FQ1RfV0FMTEVUIiwiU1dBUCIsInNyY1Rva2VuT2JqIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});