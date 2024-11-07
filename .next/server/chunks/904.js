"use strict";
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 76124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ FileUpload)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@uploadthing/react/dist/index.mjs + 6 modules
var dist = __webpack_require__(16844);
;// CONCATENATED MODULE: ./lib/uploadthing.ts

const { UploadDropzone, UploadButton, Uploader } = (0,dist/* generateComponents */.jp)();

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(10345);
;// CONCATENATED MODULE: ./components/fileUpload.tsx
/* __next_internal_client_entry_do_not_use__ FileUpload auto */ 


const FileUpload = ({ onChange, endpoint })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(UploadDropzone, {
        endpoint: endpoint,
        onClientUploadComplete: (res)=>{
            onChange(res?.[0].url);
        },
        onUploadError: (error)=>{
            react_hot_toast_dist["default"].error(`${error?.message}`);
        }
    });
};


/***/ }),

/***/ 72559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ IconBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85839);



const backgroundVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("rounded-full flex items-center justify-center", {
    variants: {
        variant: {
            default: "bg-sky-100",
            success: "bg-emerald-100"
        },
        size: {
            default: "p-2 h-10 w-10",
            sm: "p-1 h-5 w-5"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const iconVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("", {
    variants: {
        variant: {
            default: "text-sky-700",
            success: "text-emerald-700"
        },
        size: {
            default: "h-8 w-8",
            sm: "h-4 w-4"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const IconBadge = ({ icon: Icon, variant, size })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(backgroundVariants({
            variant,
            size
        })),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(iconVariants({
                variant,
                size
            }))
        })
    });
};


/***/ }),

/***/ 93302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ }),

/***/ 85839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95182);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12794);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ })

};
;