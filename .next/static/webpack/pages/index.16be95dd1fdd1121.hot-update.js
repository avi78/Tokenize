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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue;\n    });\n};\n_s(SwapComponent, \"xSRdiWhEy5hyzgwq+/LOHemwzcM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMEQsT0FBTyxFQUFFVCxjQUFjLENBQUNmLGNBQWMsQ0FBQyxDQUFDO2FBQ3hDLElBQUksQ0FBQ1QsVUFBVSxJQUFJLENBQUNFLFdBQVcsRUFBRXNCLGNBQWMsQ0FBQ2hCLFlBQVksQ0FBQyxDQUFDO2FBQzlEZ0IsY0FBYyxDQUFDZCxJQUFJLENBQUMsQ0FBQztLQUMzQixFQUFFO1FBQUNWLFVBQVU7UUFBRUUsV0FBVztRQUFFK0IsT0FBTztLQUFDLENBQUMsQ0FBQztJQUV2QzFELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0UyRCxRQUFRLENBQUNDLGFBQWEsS0FBSzlCLGNBQWMsQ0FBQytCLE9BQU8sSUFDakRGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDRSxTQUFTLEtBQUssVUFBVSxJQUMvQyxDQUFDL0IsVUFBVSxDQUFDOEIsT0FBTyxFQUVuQkUsbUJBQW1CO0tBQ3RCLENBQUM7Q0FDSDtHQTVESzNDLGFBQWE7O1FBNENDRiw2Q0FBVTs7O0FBNUN4QkUsS0FBQUEsYUFBYTtBQThEbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanM/OTJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxuICBzd2FwRXRoVG9Ub2tlbixcbiAgc3dhcFRva2VuVG9FdGgsXG4gIHN3YXBUb2tlblRvVG9rZW4sXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5cbmltcG9ydCB7Q29nSWNvbiwgQXJyb3dTbURvd25JY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgdG9hc3QsIHtUb2FzdGVyfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQge0RFRkFVTFRfVkFMVUUsIEVUSH0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQge3VzZUFjY291bnR9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9IHVzZVN0YXRlKERFRkFVTFRfVkFMVUUpO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvdXRwdXRWYWx1ZSwgc2V0T3V0cHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBpbnB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG91dHB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3QgSU5DUkVBU0VfQUxMT1dBTkNFID0gXCJJbmNyZWFzZSBhbGxvd2FuY2VcIjtcbiAgY29uc3QgRU5URVJfQU1PVU5UID0gXCJFbnRlciBhbiBhbW91bnRcIjtcbiAgY29uc3QgQ09OTkVDVF9XQUxMRVQgPSBcIkNvbm5lY3Qgd2FsbGV0XCI7XG4gIGNvbnN0IFNXQVAgPSBcIlN3YXBcIjtcblxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcbiAgICBpZDogXCJzcmNUb2tlblwiLFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogc3JjVG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IGRlc3RUb2tlbixcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXG4gIH07XG5cbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xuICAgIGlkOiBcImRlc3RUb2tlblwiLFxuICAgIHZhbHVlOiBvdXRwdXRWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBkZXN0VG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IHNyY1Rva2VuLFxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXG4gIH07XG5cbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkZXN0VG9rZW5Db21wLCBzZXREZXN0VG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7ZHVyYXRpb246IDYwMDB9KTtcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XG5cbiAgY29uc3Qge2FkZHJlc3N9ID0gdXNlQWNjb3VudCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzKSBzZXRTd2FwQnRuVGV4dChDT05ORUNUX1dBTExFVCk7XG4gICAgZWxzZSBpZiAoIWlucHV0VmFsdWUgfHwgIW91dHB1dFZhbHVlKSBzZXRTd2FwQnRuVGV4dChFTlRFUl9BTU9VTlQpO1xuICAgIGVsc2Ugc2V0U3dhcEJ0blRleHQoU1dBUCk7XG4gIH0sIFtpbnB1dFZhbHVlLCBvdXRwdXRWYWx1ZSwgYWRkcmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gb3V0cHV0VmFsdWVSZWYuY3VycmVudCAmJlxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwic3JjVG9rZW5cIiAmJlxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxuICAgIClcbiAgICAgIHBvcHVsYXRlT3V0cHV0VmFsdWVcbiAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJhZGRyZXNzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3VycmVudCIsImFyaWFMYWJlbCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});