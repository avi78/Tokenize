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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n            lineNumber: 79,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    use;\n};\n_s(SwapComponent, \"xSRdiWhEy5hyzgwq+/LOHemwzcM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxJQUFJLENBQUMwRCxPQUFPLEVBQUVULGNBQWMsQ0FBQ2YsY0FBYyxDQUFDLENBQUM7YUFDeEMsSUFBSSxDQUFDVCxVQUFVLElBQUksQ0FBQ0UsV0FBVyxFQUFFc0IsY0FBYyxDQUFDaEIsWUFBWSxDQUFDLENBQUM7YUFDOURnQixjQUFjLENBQUNkLElBQUksQ0FBQyxDQUFDO0tBQzNCLEVBQUU7UUFBQ1YsVUFBVTtRQUFFRSxXQUFXO1FBQUUrQixPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRXZDMUQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFDRTJELFFBQVEsQ0FBQ0MsYUFBYSxLQUFLOUIsY0FBYyxDQUFDK0IsT0FBTyxJQUNqREYsUUFBUSxDQUFDQyxhQUFhLENBQUNFLFNBQVMsS0FBSyxVQUFVLElBQy9DLENBQUMvQixVQUFVLENBQUM4QixPQUFPLEVBRW5CRSxtQkFBbUIsQ0FBQ3RDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDb0IsZUFBZSxlQUFDLDhEQUFDbkMsa0RBQVM7WUFBQ3NELEdBQUcsRUFBRTVCLFdBQVc7WUFBRTZCLEdBQUcsRUFBRXBDLGFBQWE7Ozs7O2lCQUFJLENBQUMsQ0FBQztRQUVyRSxJQUFJSixDQUFBQSxVQUFVLGFBQVZBLFVBQVUsV0FBUSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLFVBQVUsQ0FBRXlDLE1BQU0sTUFBSyxDQUFDLEVBQUV0QyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEQsRUFBRTtRQUFDSCxVQUFVO1FBQUVGLFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFNUI0QyxHQUFHO0NBQ0o7R0FsRUsvQyxhQUFhOztRQTRDQ0YsNkNBQVU7OztBQTVDeEJFLEtBQUFBLGFBQWE7QUFvRW5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGhhc1ZhbGlkQWxsb3dhbmNlLFxuICBpbmNyZWFzZUFsbG93YW5jZSxcbiAgc3dhcEV0aFRvVG9rZW4sXG4gIHN3YXBUb2tlblRvRXRoLFxuICBzd2FwVG9rZW5Ub1Rva2VuLFxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xuXG5pbXBvcnQge0NvZ0ljb24sIEFycm93U21Eb3duSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHRvYXN0LCB7VG9hc3Rlcn0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHtERUZBVUxUX1ZBTFVFLCBFVEh9IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHt1c2VBY2NvdW50fSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25zdCBTd2FwQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEVUSCk7XG4gIGNvbnN0IFtkZXN0VG9rZW4sIHNldERlc3RUb2tlbl0gPSB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgYWxsb3dhbmNlXCI7XG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgYW4gYW1vdW50XCI7XG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID0gXCJDb25uZWN0IHdhbGxldFwiO1xuICBjb25zdCBTV0FQID0gXCJTd2FwXCI7XG5cbiAgY29uc3Qgc3JjVG9rZW5PYmogPSB7XG4gICAgaWQ6IFwic3JjVG9rZW5cIixcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IHNyY1Rva2VuLFxuICAgIGlnbm9yZVZhbHVlOiBkZXN0VG9rZW4sXG4gICAgc2V0VG9rZW46IHNldFNyY1Rva2VuLFxuICB9O1xuXG4gIGNvbnN0IGRlc3RUb2tlbk9iaiA9IHtcbiAgICBpZDogXCJkZXN0VG9rZW5cIixcbiAgICB2YWx1ZTogb3V0cHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldE91dHB1dFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVzdFRva2VuLFxuICAgIGlnbm9yZVZhbHVlOiBzcmNUb2tlbixcbiAgICBzZXRUb2tlbjogc2V0RGVzdFRva2VuLFxuICB9O1xuXG4gIGNvbnN0IFtzcmNUb2tlbkNvbXAsIHNldFNyY1Rva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzdFRva2VuQ29tcCwgc2V0RGVzdFRva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtzd2FwQnRuVGV4dCwgc2V0U3dhcEJ0blRleHRdID0gdXNlU3RhdGUoRU5URVJfQU1PVU5UKTtcbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywge2R1cmF0aW9uOiA2MDAwfSk7XG4gIGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gY29tcGxldGVkXCIpO1xuXG4gIGNvbnN0IHthZGRyZXNzfSA9IHVzZUFjY291bnQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYWRkcmVzcykgc2V0U3dhcEJ0blRleHQoQ09OTkVDVF9XQUxMRVQpO1xuICAgIGVsc2UgaWYgKCFpbnB1dFZhbHVlIHx8ICFvdXRwdXRWYWx1ZSkgc2V0U3dhcEJ0blRleHQoRU5URVJfQU1PVU5UKTtcbiAgICBlbHNlIHNldFN3YXBCdG5UZXh0KFNXQVApO1xuICB9LCBbaW5wdXRWYWx1ZSwgb3V0cHV0VmFsdWUsIGFkZHJlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IG91dHB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYXJpYUxhYmVsICE9PSBcInNyY1Rva2VuXCIgJiZcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcbiAgICApXG4gICAgICBwb3B1bGF0ZU91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xuXG4gICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRPdXRwdXRWYWx1ZShcIlwiKTtcbiAgfSwgW2lucHV0VmFsdWUsIGRlc3RUb2tlbl0pO1xuXG4gIHVzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dhcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsInN3YXBFdGhUb1Rva2VuIiwic3dhcFRva2VuVG9FdGgiLCJzd2FwVG9rZW5Ub1Rva2VuIiwiQ29nSWNvbiIsIkFycm93U21Eb3duSWNvbiIsIlN3YXBGaWVsZCIsIlRyYW5zYWN0aW9uU3RhdHVzIiwidG9hc3QiLCJUb2FzdGVyIiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsInRvRXRoIiwidG9XZWkiLCJ1c2VBY2NvdW50IiwicG9wdWxhdGUiLCJTd2FwQ29tcG9uZW50Iiwic3JjVG9rZW4iLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsImlzUmV2ZXJzZWQiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsImFkZHJlc3MiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwiYXJpYUxhYmVsIiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsInVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});