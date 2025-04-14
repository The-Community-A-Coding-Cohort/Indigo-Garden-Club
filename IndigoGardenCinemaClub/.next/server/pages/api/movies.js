"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "(api-node)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBU0MsT0FBT0MsUUFBUSxJQUFJLElBQUlILHdEQUFZQTtBQUNsRCxJQUFJSSxLQUFxQyxFQUFFRixFQUF5QkQ7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXN6d2luZ2VyL0RvY3VtZW50cy9Ecm9wY3ljbGUvZ2l0aHViL1RoZUNvbW11bml0eS9JbmRpZ28tR2FyZGVuLUNsdWIvSW5kaWdvR2FyZGVuQ2luZW1hQ2x1Yi9saWIvcHJpc21hZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api-node)/./lib/serverAuth.ts":
/*!***************************!*\
  !*** ./lib/serverAuth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/api/auth/[...nextauth] */ \"(api-node)/./pages/api/auth/[...nextauth].ts\");\n\n\nconst serverAuth = async (req, res)=>{\n    // console.log(`in serverAuth requests begin`)\n    // if(req.method == 'POST'){\n    //     console.log(req);\n    // }\n    // console.log(`in serverAuth requests end`)\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    console.log(session?.user?.name);\n    console.log(`serverAuth.ts call from ${req.url} : ${req.method} : throw error?: ${!session?.user?.email}`);\n    // console.log(`in serverAuth throw error?: ${!session?.user?.email}`);\n    // console.log(session);\n    // if (!session?.user?.email) {\n    //     throw new Error(`User session is missing. Session data: ${JSON.stringify(session)}`);\n    // }\n    //   const currentUser = await prismadb.user.findUnique({\n    //     where: {\n    //       email: session.user.email,\n    //     },\n    //   });\n    //   if (!currentUser) {\n    //     throw new Error(\"Not signed in\");\n    //   }\n    return {};\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zZXJ2ZXJBdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDa0Q7QUFDWTtBQUk5RCxNQUFNRSxhQUFhLE9BQU9DLEtBQXFCQztJQUM3Qyw4Q0FBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixJQUFJO0lBQ0osNENBQTRDO0lBQzVDLE1BQU1DLFVBQVUsTUFBTUwsZ0VBQWdCQSxDQUFDRyxLQUFLQyxLQUFLSCxrRUFBV0E7SUFDNURLLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csTUFBTUM7SUFDM0JILFFBQVFDLEdBQUcsQ0FDVCxDQUFDLHdCQUF3QixFQUFFSixJQUFJTyxHQUFHLENBQUMsR0FBRyxFQUNwQ1AsSUFBSVEsTUFBTSxDQUNYLGlCQUFpQixFQUFFLENBQUNOLFNBQVNHLE1BQU1JLE9BQU87SUFFN0MsdUVBQXVFO0lBQ3ZFLHdCQUF3QjtJQUV4QiwrQkFBK0I7SUFDL0IsNEZBQTRGO0lBQzVGLElBQUk7SUFFSix5REFBeUQ7SUFDekQsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsUUFBUTtJQUVSLHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsTUFBTTtJQUVOLE9BQU8sQ0FBQztBQUNWO0FBRUEsaUVBQWVWLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXN6d2luZ2VyL0RvY3VtZW50cy9Ecm9wY3ljbGUvZ2l0aHViL1RoZUNvbW11bml0eS9JbmRpZ28tR2FyZGVuLUNsdWIvSW5kaWdvR2FyZGVuQ2luZW1hQ2x1Yi9saWIvc2VydmVyQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIjtcblxuaW1wb3J0IHByaXNtYWRiIGZyb20gXCIuL3ByaXNtYWRiXCI7XG5cbmNvbnN0IHNlcnZlckF1dGggPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgLy8gY29uc29sZS5sb2coYGluIHNlcnZlckF1dGggcmVxdWVzdHMgYmVnaW5gKVxuICAvLyBpZihyZXEubWV0aG9kID09ICdQT1NUJyl7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXEpO1xuICAvLyB9XG4gIC8vIGNvbnNvbGUubG9nKGBpbiBzZXJ2ZXJBdXRoIHJlcXVlc3RzIGVuZGApXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XG4gIGNvbnNvbGUubG9nKHNlc3Npb24/LnVzZXI/Lm5hbWUpO1xuICBjb25zb2xlLmxvZyhcbiAgICBgc2VydmVyQXV0aC50cyBjYWxsIGZyb20gJHtyZXEudXJsfSA6ICR7XG4gICAgICByZXEubWV0aG9kXG4gICAgfSA6IHRocm93IGVycm9yPzogJHshc2Vzc2lvbj8udXNlcj8uZW1haWx9YFxuICApO1xuICAvLyBjb25zb2xlLmxvZyhgaW4gc2VydmVyQXV0aCB0aHJvdyBlcnJvcj86ICR7IXNlc3Npb24/LnVzZXI/LmVtYWlsfWApO1xuICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblxuICAvLyBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgc2Vzc2lvbiBpcyBtaXNzaW5nLiBTZXNzaW9uIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoc2Vzc2lvbil9YCk7XG4gIC8vIH1cblxuICAvLyAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcbiAgLy8gICAgIHdoZXJlOiB7XG4gIC8vICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuXG4gIC8vICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHNpZ25lZCBpblwiKTtcbiAgLy8gICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDtcbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJzZXJ2ZXJBdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibmFtZSIsInVybCIsIm1ldGhvZCIsImVtYWlsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./lib/serverAuth.ts\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fmovies%2Findex.ts&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fmovies%2Findex.ts&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_movies_index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/movies/index.ts */ \"(api-node)/./pages/api/movies/index.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_movies_index_ts__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_movies_index_ts__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/movies\",\n        pathname: \"/api/movies\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_movies_index_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGbW92aWVzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZtb3ZpZXMlMkZpbmRleC50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsdURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHVEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL21vdmllcy9pbmRleC50c1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbW92aWVzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbW92aWVzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fmovies%2Findex.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/prismadb */ \"(api-node)/./lib/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GIT_CLIENT_ID || '',\n            clientSecret: process.env.GIT_CLIENT_SECRET || ''\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || '',\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            id: 'credentials',\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'text'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error('Email and password required');\n                }\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error('Email does not exist');\n                }\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error('Incorrect Password');\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: '/auth'\n    },\n    debug: \"development\" === 'development',\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: 'jwt'\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_SECRET\n    },\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                secure: \"development\" === \"production\",\n                sameSite: \"lax\",\n                path: \"/\"\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1E7QUFDekI7QUFFdUI7QUFDQTtBQUVFO0FBRWI7QUFFdEMsTUFBTU8sY0FBMkI7SUFDcENDLFdBQVc7UUFDUEwsaUVBQWNBLENBQUM7WUFDWE0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhLElBQUk7WUFDdkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCLElBQUk7UUFDbkQ7UUFDQVYsaUVBQWNBLENBQUM7WUFDWEssVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0IsSUFBSTtZQUMxQ0YsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxvQkFBb0IsSUFBSTtRQUN0RDtRQUNBZixzRUFBV0EsQ0FBQztZQUNSZ0IsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLE9BQU87b0JBQ0hDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1Y7Z0JBQ0FDLFVBQVU7b0JBQ05GLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1Y7WUFDSjtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3ZCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUMvQyxNQUFNLElBQUlFLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLDBEQUFhLENBQUNxQixVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNIUixPQUFPRCxZQUFZQyxLQUFLO29CQUM1QjtnQkFDSjtnQkFFQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0EsS0FBS0csY0FBYyxFQUFFO29CQUMvQixNQUFNLElBQUlKLE1BQU07Z0JBQ3BCO2dCQUVBLE1BQU1LLG9CQUFvQixNQUFNNUIsK0NBQU9BLENBQUNpQixZQUFZSSxRQUFRLEVBQUVHLEtBQUtHLGNBQWM7Z0JBRWpGLElBQUksQ0FBQ0MsbUJBQW1CO29CQUNwQixNQUFNLElBQUlMLE1BQU07Z0JBQ3BCO2dCQUVBLE9BQU9DO1lBQ1g7UUFDSjtLQUNIO0lBQ0RLLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLE9BQU92QixrQkFBeUI7SUFDaEN3QixTQUFTN0Isd0VBQWFBLENBQUNDLHFEQUFRQTtJQUMvQjZCLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLEtBQUs7UUFDREMsUUFBUTVCLFFBQVFDLEdBQUcsQ0FBQzRCLGVBQWU7SUFDdkM7SUFDQUMsU0FBUztRQUNMQyxjQUFjO1lBQ1p2QixNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDL0J3QixTQUFTO2dCQUNQQyxVQUFVO2dCQUNWQyxRQUFRbEMsa0JBQXlCO2dCQUNqQ21DLFVBQVU7Z0JBQ1ZDLE1BQU07WUFDUjtRQUNGO0lBQ0Y7QUFDTixFQUFFO0FBRUYsaUVBQWU5QyxnREFBUUEsQ0FBQ08sWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3Rob21hc3p3aW5nZXIvRG9jdW1lbnRzL0Ryb3BjeWNsZS9naXRodWIvVGhlQ29tbXVuaXR5L0luZGlnby1HYXJkZW4tQ2x1Yi9JbmRpZ29HYXJkZW5DaW5lbWFDbHViL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnO1xuXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcblxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYWRiJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVF9DTElFTlRfSUQgfHwgJycsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVF9DTElFTlRfU0VDUkVUIHx8ICcnXG4gICAgICAgIH0pLFxuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCAnJyxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgfHwgJydcbiAgICAgICAgfSksXG4gICAgICAgIENyZWRlbnRpYWxzKHtcbiAgICAgICAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5oYXNoZWRQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGRvZXMgbm90IGV4aXN0JylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIuaGFzaGVkUGFzc3dvcmQpXG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IFBhc3N3b3JkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogJy9hdXRoJyxcbiAgICB9LFxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcbiAgICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYWRiKSxcbiAgICBzZXNzaW9uOiB7XG4gICAgICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxuICAgIH0sXG4gICAgY29va2llczoge1xuICAgICAgICBzZXNzaW9uVG9rZW46IHtcbiAgICAgICAgICBuYW1lOiBgbmV4dC1hdXRoLnNlc3Npb24tdG9rZW5gLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJjb21wYXJlIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWFkYiIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVF9DTElFTlRfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsInBhZ2VzIiwic2lnbkluIiwiZGVidWciLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwiand0Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY29va2llcyIsInNlc3Npb25Ub2tlbiIsIm9wdGlvbnMiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api-node)/./pages/api/movies/index.ts":
/*!***********************************!*\
  !*** ./pages/api/movies/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prismadb */ \"(api-node)/./lib/prismadb.ts\");\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/serverAuth */ \"(api-node)/./lib/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== 'GET') {\n        return res.status(405).end();\n    }\n    try {\n        await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        const movies = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findMany();\n        return res.status(200).json(movies);\n    } catch (error) {\n        console.log(error);\n        res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9tb3ZpZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTZDO0FBQ0k7QUFFbEMsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDM0UsSUFBR0QsSUFBSUUsTUFBTSxLQUFLLE9BQU07UUFDcEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUI7SUFFQSxJQUFJO1FBQ0EsTUFBTU4sMkRBQVVBLENBQUNFLEtBQUtDO1FBRXRCLE1BQU1JLFNBQVMsTUFBTVIsMkRBQWMsQ0FBQ1UsUUFBUTtRQUU1QyxPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDSDtJQUNoQyxFQUFFLE9BQU1JLE9BQU07UUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaUixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUN2QjtBQUNKIiwic291cmNlcyI6WyIvVXNlcnMvdGhvbWFzendpbmdlci9Eb2N1bWVudHMvRHJvcGN5Y2xlL2dpdGh1Yi9UaGVDb21tdW5pdHkvSW5kaWdvLUdhcmRlbi1DbHViL0luZGlnb0dhcmRlbkNpbmVtYUNsdWIvcGFnZXMvYXBpL21vdmllcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYWRiJztcbmltcG9ydCBzZXJ2ZXJBdXRoIGZyb20gJy4uLy4uLy4uL2xpYi9zZXJ2ZXJBdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSl7XG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ0dFVCcpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNlcnZlckF1dGgocmVxLCByZXMpO1xuXG4gICAgICAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IHByaXNtYWRiLm1vdmllLmZpbmRNYW55KCk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1vdmllcyk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWFkYiIsInNlcnZlckF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwibW92aWVzIiwibW92aWUiLCJmaW5kTWFueSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/movies/index.ts\n");

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fmovies&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fmovies%2Findex.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();