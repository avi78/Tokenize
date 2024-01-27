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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n            lineNumber: 79,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n            lineNumber: 92,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between py-4 px-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Swap\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__.CogIcon, {\n                    className: \"h-6\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Tokenize/components/SwapComponent.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, _this);\n};\n_s(SwapComponent, \"uvxRLClHTMudAQIDXUF0H5MyDt4=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0QsR0FBRyxFQUFHckIsWUFBWTtZQUFFc0IsR0FBRyxFQUFJbkMsY0FBYzs7Ozs7aUJBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUlILENBQUFBLFdBQVcsYUFBWEEsV0FBVyxXQUFRLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsV0FBVyxDQUFFdUMsTUFBTSxNQUFLLENBQUMsRUFBRXhDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqRCxJQUFJSyxVQUFVLENBQUM4QixPQUFPLEVBQUU5QixVQUFVLENBQUM4QixPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3BELEVBQUU7UUFBQ2xDLFdBQVc7UUFBRU4sUUFBUTtLQUFDLENBQUMsQ0FBQztJQUU1QixxQkFDRSw4REFBQytDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1GQUFtRjtrQkFDaEcsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7OEJBQzFELDhEQUFDQyxHQUFDOzhCQUFDLE1BQUk7Ozs7O3lCQUFJOzhCQUNYLDhEQUFDOUQsOERBQU87b0JBQUM2RCxTQUFTLEVBQUMsS0FBSzs7Ozs7eUJBQUc7Ozs7OztpQkFDdkI7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBeEZLakQsYUFBYTs7UUE0Q0NGLDZDQUFVOzs7QUE1Q3hCRSxLQUFBQSxhQUFhO0FBMEZuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcENvbXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBoYXNWYWxpZEFsbG93YW5jZSxcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXG4gIHN3YXBFdGhUb1Rva2VuLFxuICBzd2FwVG9rZW5Ub0V0aCxcbiAgc3dhcFRva2VuVG9Ub2tlbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcblxuaW1wb3J0IHtDb2dJY29uLCBBcnJvd1NtRG93bkljb259IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB0b2FzdCwge1RvYXN0ZXJ9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCB7REVGQVVMVF9WQUxVRSwgRVRIfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XG5pbXBvcnQgeyB0b0V0aCwgdG9XZWkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7dXNlQWNjb3VudH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZSB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3NyY1Rva2VuLCBzZXRTcmNUb2tlbl0gPSB1c2VTdGF0ZShFVEgpO1xuICBjb25zdCBbZGVzdFRva2VuLCBzZXREZXN0VG9rZW5dID0gdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIGFsbG93YW5jZVwiO1xuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIGFuIGFtb3VudFwiO1xuICBjb25zdCBDT05ORUNUX1dBTExFVCA9IFwiQ29ubmVjdCB3YWxsZXRcIjtcbiAgY29uc3QgU1dBUCA9IFwiU3dhcFwiO1xuXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xuICAgIGlkOiBcInNyY1Rva2VuXCIsXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcbiAgfTtcblxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcbiAgfTtcblxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHtkdXJhdGlvbjogNjAwMH0pO1xuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZFwiKTtcblxuICBjb25zdCB7YWRkcmVzc30gPSB1c2VBY2NvdW50KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWFkZHJlc3MpIHNldFN3YXBCdG5UZXh0KENPTk5FQ1RfV0FMTEVUKTtcbiAgICBlbHNlIGlmICghaW5wdXRWYWx1ZSB8fCAhb3V0cHV0VmFsdWUpIHNldFN3YXBCdG5UZXh0KEVOVEVSX0FNT1VOVCk7XG4gICAgZWxzZSBzZXRTd2FwQnRuVGV4dChTV0FQKTtcbiAgfSwgW2lucHV0VmFsdWUsIG91dHB1dFZhbHVlLCBhZGRyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBvdXRwdXRWYWx1ZVJlZi5jdXJyZW50ICYmXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJzcmNUb2tlblwiICYmXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XG4gICAgKVxuICAgICAgcG9wdWxhdGVPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcblxuICAgIHNldFNyY1Rva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17c3JjVG9rZW5PYmp9IHJlZj17aW5wdXRWYWx1ZVJlZn0gLz4pO1xuXG4gICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0T3V0cHV0VmFsdWUoXCJcIik7XG4gIH0sIFtpbnB1dFZhbHVlLCBkZXN0VG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0VmFsdWVSZWYuY3VycmVudCAmJlxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwiZGVzdFRva2VuXCIgJiZcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcbiAgICApXG4gICAgICBwb3B1bGF0ZUlucHV0VmFsdWUob3V0cHV0VmFsdWUpO1xuXG4gICAgc2V0RGVzdFRva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj0ge2Rlc3RUb2tlbk9ian0gcmVmID0ge291dHB1dFZhbHVlUmVmfSAvPik7XG5cbiAgICBpZiAob3V0cHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0SW5wdXRWYWx1ZShcIlwiKTtcblxuICAgIGlmIChpc1JldmVyc2VkLmN1cnJlbnQpIGlzUmV2ZXJzZWQuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbb3V0cHV0VmFsdWUsIHNyY1Rva2VuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLWwgYm9yZGVyLVsjNzc2NUYzXSBiZy1bIzc3NjVGM10gdy1bMTAwJV0gcC00IHB4LTYgcm91bmRlZC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNCBweC0xXCI+XG4gICAgICAgIDxwPlN3YXA8L3A+XG4gICAgICAgIDxDb2dJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dhcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsInN3YXBFdGhUb1Rva2VuIiwic3dhcFRva2VuVG9FdGgiLCJzd2FwVG9rZW5Ub1Rva2VuIiwiQ29nSWNvbiIsIkFycm93U21Eb3duSWNvbiIsIlN3YXBGaWVsZCIsIlRyYW5zYWN0aW9uU3RhdHVzIiwidG9hc3QiLCJUb2FzdGVyIiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsInRvRXRoIiwidG9XZWkiLCJ1c2VBY2NvdW50IiwicG9wdWxhdGUiLCJTd2FwQ29tcG9uZW50Iiwic3JjVG9rZW4iLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsImlzUmV2ZXJzZWQiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsImFkZHJlc3MiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwiYXJpYUxhYmVsIiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsInBvcHVsYXRlSW5wdXRWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});