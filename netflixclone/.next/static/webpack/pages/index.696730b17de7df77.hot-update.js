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

/***/ "(pages-dir-browser)/./components/PlayButton.tsx":
/*!***********************************!*\
  !*** ./components/PlayButton.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BsFillPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillPlayFill!=!react-icons/bs */ \"(pages-dir-browser)/__barrel_optimize__?names=BsFillPlayFill!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PlayButton = (props)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>router.push('/watch/${movieId}'),\n        className: \"bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 hover:bg-neutral-500 transition\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFillPlayFill, {\n                size: 16,\n                className: \"mr-1\"\n            }, void 0, false, {\n                fileName: \"/Users/thomaszwinger/Documents/Dropcycle/github/TheCommunity/frontend/netflixclone/components/PlayButton.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            \"Play\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomaszwinger/Documents/Dropcycle/github/TheCommunity/frontend/netflixclone/components/PlayButton.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlayButton, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlayButton;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayButton);\nvar _c;\n$RefreshReg$(_c, \"PlayButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheUJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNzQjtBQUNSO0FBS3hDLE1BQU1HLGFBQXdDLENBQUNDOztJQUMzQyxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIscUJBQ0ksOERBQUNJO1FBQ0RDLFNBQVMsSUFBTUYsT0FBT0csSUFBSSxDQUFDO1FBQzNCQyxXQUFVOzswQkFDTiw4REFBQ1IsZ0dBQWNBO2dCQUFDUyxNQUFNO2dCQUFJRCxXQUFVOzs7Ozs7WUFBUTs7Ozs7OztBQUl4RDtHQVZNTjs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBV04saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXN6d2luZ2VyL0RvY3VtZW50cy9Ecm9wY3ljbGUvZ2l0aHViL1RoZUNvbW11bml0eS9mcm9udGVuZC9uZXRmbGl4Y2xvbmUvY29tcG9uZW50cy9QbGF5QnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnNGaWxsUGxheUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmludGVyZmFjZSBQbGF5QnV0dG9uUHJvcHMge1xuICAgIG1vdmllSWQ6IHN0cmluZ1xufVxuY29uc3QgUGxheUJ1dHRvbjogUmVhY3QuRkM8UGxheUJ1dHRvblByb3BzPiA9IChwcm9wczogUGxheUJ1dHRvblByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3dhdGNoLyR7bW92aWVJZH0nKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUvMzAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB5LTEgbWQ6cHktMiBweC0yIG1kOnB4LTQgdy1hdXRvIHRleHQteHMgbGc6dGV4dC1sZyBmb250LXNlbWlib2xkIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGhvdmVyOmJnLW9wYWNpdHktMjAgaG92ZXI6YmctbmV1dHJhbC01MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgPEJzRmlsbFBsYXlGaWxsIHNpemU9ezE2fSBjbGFzc05hbWU9J21yLTEnLz5cbiAgICAgICAgICAgIFBsYXlcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJCc0ZpbGxQbGF5RmlsbCIsInVzZVJvdXRlciIsIlBsYXlCdXR0b24iLCJwcm9wcyIsInJvdXRlciIsImRpdiIsIm9uQ2xpY2siLCJwdXNoIiwiY2xhc3NOYW1lIiwic2l6ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./components/PlayButton.tsx\n"));

/***/ })

});