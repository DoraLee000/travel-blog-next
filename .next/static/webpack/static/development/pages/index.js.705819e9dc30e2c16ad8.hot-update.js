webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

var settings = {
  headers: {
    Accept: 'application/json'
  }
};
function getPosts(page) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=".concat(page), settings);
}
;

/***/ })

})
//# sourceMappingURL=index.js.705819e9dc30e2c16ad8.hot-update.js.map