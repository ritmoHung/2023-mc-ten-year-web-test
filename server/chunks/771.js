exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 8332:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 9799:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1663))

/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(5724);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/app/navbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

// import ThemeSwitch from "./components/themeSwitch";
function Navbar() {
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "flex fixed w-max left-1/2 -translate-x-1/2 md:translate-x-0   md:left-0 md:ml-20 lg:ml-32 xl:ml-40 top-6 tall:top-24 px-10 py-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar-nav flex p-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "nav-link tracking-[0.2em]",
                    onClick: ()=>router.push("/"),
                    children: "首頁"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "nav-link tracking-[0.2em]",
                    onClick: ()=>router.push("/memory"),
                    children: "紀念與感謝"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "nav-link tracking-[0.2em]",
                    onClick: ()=>router.push("/team"),
                    children: "參賽隊伍"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "nav-link tracking-[0.2em]",
                    onClick: ()=>router.push("/qna"),
                    children: "Q & A"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/components/footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {});
}

;// CONCATENATED MODULE: ./src/app/layout.js
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 



// import { Theme } from "./theme";
// import { Space_Grotesk, Noto_Sans_TC } from "next/font/google";
// const spaceGrotesk = Space_Grotesk({
// 	weight: ["300", "400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-space-grotesk",
// });
// const notoSansTC = Noto_Sans_TC({
// 	weight: ["400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-noto-sans-tc",
// });
const metadata = {
    title: "梅竹黑客松十週年召集令",
    description: "Meichu Hackathon 10y Anniversary Web",
    image: ""
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: ` text-sm sm:text-base xl:text-lg`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "metadata": () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\GitHub\2023-mc-ten-year-web\src\app\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);

const e0 = proxy["metadata"];


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5724:
/***/ (() => {



/***/ })

};
;