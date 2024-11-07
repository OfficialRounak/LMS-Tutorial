"use strict";
(() => {
var exports = {};
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 57203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/uploadthing/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/uploadthing/dist/next.mjs + 7 modules
var next = __webpack_require__(42902);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 32 modules
var esm = __webpack_require__(47954);
;// CONCATENATED MODULE: ./app/api/uploadthing/core.ts


const f = (0,next/* createUploadthing */.H)();
const handleAuth = ()=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) throw new Error("Unauthorized");
    return {
        userId
    };
};
const ourFileRouter = {
    courseImage: f({
        image: {
            maxFileCount: 1,
            maxFileSize: "4MB"
        }
    }).middleware(()=>handleAuth()).onUploadComplete(()=>{}),
    courseAttachments: f([
        "text",
        "image",
        "video",
        "audio",
        "pdf"
    ]).middleware(()=>handleAuth()).onUploadComplete(()=>{}),
    chapterVideo: f({
        video: {
            maxFileCount: 1,
            maxFileSize: "128GB"
        }
    }).middleware(()=>handleAuth()).onUploadComplete(()=>{})
};

;// CONCATENATED MODULE: ./app/api/uploadthing/route.ts


const { GET, POST } = (0,next/* createNextRouteHandler */.s)({
    router: ourFileRouter
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuploadthing%2Froute&name=app%2Fapi%2Fuploadthing%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2FUsers%2Froubhatt%2FDesktop%2FLMS%20Personal%2FLMS-Tutorial%2Fapp&appPaths=%2Fapi%2Fuploadthing%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/uploadthing/route","pathname":"/api/uploadthing","filename":"route","bundlePath":"app/api/uploadthing/route"},"resolvedPagePath":"/Users/roubhatt/Desktop/LMS Personal/LMS-Tutorial/app/api/uploadthing/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/uploadthing/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [909,954,501,902], () => (__webpack_exec__(57203)));
module.exports = __webpack_exports__;

})();