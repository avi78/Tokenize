"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/NFTs",{

/***/ "./pages/NFTs.js":
/*!***********************!*\
  !*** ./pages/NFTs.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index */ \"./components/index.js\");\n/* harmony import */ var _components_NFTCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NFTCard */ \"./components/NFTCard.js\");\nvar _this = undefined;\n\n\n\n // Import the NFTCard component\nvar _s = $RefreshSig$();\nvar NFTs = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), nfts = ref[0], setNFTs = ref[1];\n    // Mock data for NFTs\n    var mockNFTs = [\n        {\n            id: 1,\n            image: \"https://cdn.dribbble.com/userupload/2900197/file/original-81fba7956878a5a1e2d27594bb4e6ec0.png?resize=1024x768\",\n            name: \"Cool NFT\",\n            description: \"This is an awesome NFT.\",\n            owner: \"John Doe\",\n            price: 4.5\n        },\n        {\n            id: 2,\n            image: \"https://placekitten.com/401/300\",\n            name: \"Amazing NFT\",\n            description: \"Another fantastic NFT.\",\n            owner: \"Jane Doe\",\n            price: 2.0\n        },\n        {\n            id: 3,\n            image: \"https://placekitten.com/400/300\",\n            name: \"Cool NFT\",\n            description: \"This is an awesome NFT.\",\n            owner: \"John Doe\",\n            price: 1.5\n        },\n        {\n            id: 4,\n            image: \"https://placekitten.com/401/300\",\n            name: \"Amazing NFT\",\n            description: \"Another fantastic NFT.\",\n            owner: \"Jane Doe\",\n            price: 2.0\n        },\n        {\n            id: 5,\n            image: \"https://placekitten.com/400/300\",\n            name: \"Cool NFT\",\n            description: \"This is an awesome NFT.\",\n            owner: \"John Doe\",\n            price: 1.5\n        },\n        {\n            id: 6,\n            image: \"https://placekitten.com/401/300\",\n            name: \"Amazing NFT\",\n            description: \"Another fantastic NFT.\",\n            owner: \"Jane Doe\",\n            price: 2.0\n        }, \n    ];\n    var loadNFTs = function() {\n        setNFTs(mockNFTs.reverse());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1A1A1A]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[80px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                    children: nfts.map(function(nft) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            nft: nft\n                        }, nft.id, false, {\n                            fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Tokenize/pages/NFTs.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this);\n};\n_s(NFTs, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = NFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTs);\nvar _c;\n$RefreshReg$(_c, \"NFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ORlRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDRTtBQUNULENBQUMsK0JBQStCOztBQUU1RSxJQUFNTSxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBd0JKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JLLElBQUksR0FBYUwsR0FBWSxHQUF6QixFQUFFTSxPQUFPLEdBQUlOLEdBQVksR0FBaEI7SUFFcEIscUJBQXFCO0lBQ3JCLElBQU1PLFFBQVEsR0FBRztRQUNmO1lBQ0VDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxnSEFBZ0g7WUFDdkhDLElBQUksRUFBRSxVQUFVO1lBQ2hCQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLElBQUksRUFBRSxhQUFhO1lBQ25CQyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLElBQUksRUFBRSxVQUFVO1lBQ2hCQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLElBQUksRUFBRSxhQUFhO1lBQ25CQyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLElBQUksRUFBRSxVQUFVO1lBQ2hCQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLElBQUksRUFBRSxhQUFhO1lBQ25CQyxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUVGO0lBRUQsSUFBTUMsUUFBUSxHQUFHLFdBQU07UUFDckJSLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDUSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQzdCO0lBRURoQixnREFBUyxDQUFDLFdBQU07UUFDZGUsUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGNBQWM7OzBCQUMzQiw4REFBQ2YscURBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNjLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUN2Qiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNEQUFzRDs4QkFDbEVaLElBQUksQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLEdBQUc7NkNBQ1osOERBQUNoQiwyREFBTzs0QkFBY2dCLEdBQUcsRUFBRUEsR0FBRzsyQkFBaEJBLEdBQUcsQ0FBQ1gsRUFBRTs7OztpQ0FBYztxQkFDbkMsQ0FBQzs7Ozs7eUJBQ0U7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDUCxxREFBTTs7OztxQkFBRzs7Ozs7O2FBQ04sQ0FDTjtDQUNIO0dBN0VLRyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUErRVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ORlRzLmpzPzkxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvb3RlciwgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhcIjtcbmltcG9ydCBORlRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL05GVENhcmRcIjsgLy8gSW1wb3J0IHRoZSBORlRDYXJkIGNvbXBvbmVudFxuXG5jb25zdCBORlRzID0gKCkgPT4ge1xuICBjb25zdCBbbmZ0cywgc2V0TkZUc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gTW9jayBkYXRhIGZvciBORlRzXG4gIGNvbnN0IG1vY2tORlRzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJ1cGxvYWQvMjkwMDE5Ny9maWxlL29yaWdpbmFsLTgxZmJhNzk1Njg3OGE1YTFlMmQyNzU5NGJiNGU2ZWMwLnBuZz9yZXNpemU9MTAyNHg3NjhcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBVUkxzXG4gICAgICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGFuIGF3ZXNvbWUgTkZULlwiLFxuICAgICAgb3duZXI6IFwiSm9obiBEb2VcIixcbiAgICAgIHByaWNlOiA0LjUsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMS8zMDBcIixcbiAgICAgIG5hbWU6IFwiQW1hemluZyBORlRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFub3RoZXIgZmFudGFzdGljIE5GVC5cIixcbiAgICAgIG93bmVyOiBcIkphbmUgRG9lXCIsXG4gICAgICBwcmljZTogMi4wLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDAvMzAwXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgVVJMc1xuICAgICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhbiBhd2Vzb21lIE5GVC5cIixcbiAgICAgIG93bmVyOiBcIkpvaG4gRG9lXCIsXG4gICAgICBwcmljZTogMS41LFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDEvMzAwXCIsXG4gICAgICBuYW1lOiBcIkFtYXppbmcgTkZUXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbm90aGVyIGZhbnRhc3RpYyBORlQuXCIsXG4gICAgICBvd25lcjogXCJKYW5lIERvZVwiLFxuICAgICAgcHJpY2U6IDIuMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAwLzMwMFwiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIFVSTHNcbiAgICAgIG5hbWU6IFwiQ29vbCBORlRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYW4gYXdlc29tZSBORlQuXCIsXG4gICAgICBvd25lcjogXCJKb2huIERvZVwiLFxuICAgICAgcHJpY2U6IDEuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAxLzMwMFwiLFxuICAgICAgbmFtZTogXCJBbWF6aW5nIE5GVFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQW5vdGhlciBmYW50YXN0aWMgTkZULlwiLFxuICAgICAgb3duZXI6IFwiSmFuZSBEb2VcIixcbiAgICAgIHByaWNlOiAyLjAsXG4gICAgfSxcbiAgICBcbiAgXTtcblxuICBjb25zdCBsb2FkTkZUcyA9ICgpID0+IHtcbiAgICBzZXRORlRzKG1vY2tORlRzLnJldmVyc2UoKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTkZUcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMUExQTFBXVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLVs4MHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4gKFxuICAgICAgICAgICAgPE5GVENhcmQga2V5PXtuZnQuaWR9IG5mdD17bmZ0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTkZUcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9vdGVyIiwiSGVhZGVyIiwiTkZUQ2FyZCIsIk5GVHMiLCJuZnRzIiwic2V0TkZUcyIsIm1vY2tORlRzIiwiaWQiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwicHJpY2UiLCJsb2FkTkZUcyIsInJldmVyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJuZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/NFTs.js\n"));

/***/ })

});