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
exports.id = "pages/api/random";
exports.ids = ["pages/api/random"];
exports.modules = {

/***/ "(api-node)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBU0MsT0FBT0MsUUFBUSxJQUFJLElBQUlILHdEQUFZQTtBQUNsRCxJQUFJSSxLQUFxQyxFQUFFRixFQUF5QkQ7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXN6d2luZ2VyL0RvY3VtZW50cy9Ecm9wY3ljbGUvZ2l0aHViL1RoZUNvbW11bml0eS9mcm9udGVuZC9uZXRmbGl4Y2xvbmUvbGliL3ByaXNtYWRiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsLnByaXNtYWRiIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWwucHJpc21hZGIgPSBjbGllbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudCJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWwiLCJwcmlzbWFkYiIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api-node)/./lib/serverAuth.ts":
/*!***************************!*\
  !*** ./lib/serverAuth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prismadb */ \"(api-node)/./lib/prismadb.ts\");\n\n\nconst serverAuth = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session?.user?.email) {\n        throw new Error('Not signed in');\n    }\n    const currentUser = await _prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error('Not signed in');\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9zZXJ2ZXJBdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNkM7QUFFWDtBQUVsQyxNQUFNRSxhQUFhLE9BQU9DO0lBQ3RCLE1BQU1DLFVBQVUsTUFBTUosMkRBQVVBLENBQUU7UUFBQ0c7SUFBRztJQUV0QyxJQUFJLENBQUNDLFNBQVNDLE1BQU1DLE9BQU87UUFDdkIsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBRUEsTUFBTUMsY0FBYyxNQUFNUCxzREFBYSxDQUFDUSxVQUFVLENBQUM7UUFDL0NDLE9BQU87WUFDSEosT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQzdCO0lBQ0o7SUFFQSxJQUFJLENBQUNFLGFBQWE7UUFDZCxNQUFNLElBQUlELE1BQU07SUFDcEI7SUFFQSxPQUFPO1FBQUNDO0lBQVc7QUFDdkI7QUFFQSxpRUFBZU4sVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3Rob21hc3p3aW5nZXIvRG9jdW1lbnRzL0Ryb3BjeWNsZS9naXRodWIvVGhlQ29tbXVuaXR5L2Zyb250ZW5kL25ldGZsaXhjbG9uZS9saWIvc2VydmVyQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmltcG9ydCBwcmlzbWFkYiBmcm9tICcuL3ByaXNtYWRiJztcblxuY29uc3Qgc2VydmVyQXV0aCA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0KSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oIHtyZXF9ICk7XG5cbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHNpZ25lZCBpbicpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzaWduZWQgaW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2N1cnJlbnRVc2VyfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXJBdXRoIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWFkYiIsInNlcnZlckF1dGgiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiRXJyb3IiLCJjdXJyZW50VXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/serverAuth.ts\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frandom&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frandom.tsx&middlewareConfigBase64=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frandom&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frandom.tsx&middlewareConfigBase64=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_random_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/random.tsx */ \"(api-node)/./pages/api/random.tsx\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_random_tsx__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_random_tsx__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/random\",\n        pathname: \"/api/random\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_random_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGcmFuZG9tJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZyYW5kb20udHN4Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQ21EO0FBQ25EO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxrREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsa0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvcmFuZG9tLnRzeFwiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmFuZG9tXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmFuZG9tXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frandom&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frandom.tsx&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/random.tsx":
/*!******************************!*\
  !*** ./pages/api/random.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prismadb */ \"(api-node)/./lib/prismadb.ts\");\n/* harmony import */ var _lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/serverAuth */ \"(api-node)/./lib/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== 'GET') {\n        return res.status(405).end();\n    }\n    try {\n        await (0,_lib_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        const movieCount = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.count();\n        const randomIndex = Math.floor(Math.random() * movieCount);\n        const randomMovies = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movie.findMany({\n            take: 1,\n            skip: randomIndex\n        });\n        return res.status(200).json(randomMovies[0]);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9yYW5kb20udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQztBQUNJO0FBRS9CLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzlCO0lBRUEsSUFBRztRQUNDLE1BQU1OLDJEQUFVQSxDQUFDRTtRQUVqQixNQUFNSyxhQUFhLE1BQU1SLDJEQUFjLENBQUNVLEtBQUs7UUFDN0MsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUdOO1FBQzdDLE1BQU1PLGVBQWUsTUFBTWYsMkRBQWMsQ0FBQ2dCLFFBQVEsQ0FBQztZQUMvQ0MsTUFBTTtZQUNOQyxNQUFNUDtRQUNWO1FBRUEsT0FBT1AsSUFBSUUsTUFBTSxDQUFDLEtBQUthLElBQUksQ0FBQ0osWUFBWSxDQUFDLEVBQUU7SUFDL0MsRUFBRSxPQUFPSyxPQUFNO1FBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPaEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUI7QUFDSiIsInNvdXJjZXMiOlsiL1VzZXJzL3Rob21hc3p3aW5nZXIvRG9jdW1lbnRzL0Ryb3BjeWNsZS9naXRodWIvVGhlQ29tbXVuaXR5L2Zyb250ZW5kL25ldGZsaXhjbG9uZS9wYWdlcy9hcGkvcmFuZG9tLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnLi4vLi4vbGliL3ByaXNtYWRiJztcbmltcG9ydCBzZXJ2ZXJBdXRoIGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJBdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgIH1cblxuICAgIHRyeXtcbiAgICAgICAgYXdhaXQgc2VydmVyQXV0aChyZXEpO1xuXG4gICAgICAgIGNvbnN0IG1vdmllQ291bnQgPSBhd2FpdCBwcmlzbWFkYi5tb3ZpZS5jb3VudCgpO1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSptb3ZpZUNvdW50KTtcbiAgICAgICAgY29uc3QgcmFuZG9tTW92aWVzID0gYXdhaXQgcHJpc21hZGIubW92aWUuZmluZE1hbnkoe1xuICAgICAgICAgICAgdGFrZTogMSxcbiAgICAgICAgICAgIHNraXA6IHJhbmRvbUluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyYW5kb21Nb3ZpZXNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hZGIiLCJzZXJ2ZXJBdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsIm1vdmllQ291bnQiLCJtb3ZpZSIsImNvdW50IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Nb3ZpZXMiLCJmaW5kTWFueSIsInRha2UiLCJza2lwIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/random.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frandom&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frandom.tsx&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();