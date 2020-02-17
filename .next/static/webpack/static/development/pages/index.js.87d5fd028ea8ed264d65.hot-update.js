webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styles.less */ "./assets/styles.less");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_less__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var cardModule = function cardModule(_ref) {
  var post = _ref.post;
  var images = post.images;
  var pic = images[0].src;
  return __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    route: "view",
    params: {
      id: post.id
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    hoverable: true,
    key: post.id,
    title: post.name,
    cover: __jsx("img", {
      alt: post.name,
      src: pic
    }),
    className: "card mb-50"
  }, __jsx("ul", null, __jsx("li", null, __jsx("span", {
    className: "content-p"
  }, "\u666F\u9EDE\u5730\u5740:"), post.address), __jsx("li", null, __jsx("span", {
    className: "content-p"
  }, "\u71DF\u696D\u6642\u9593:"), post.open_time ? post.open_time : '無'), __jsx("li", null, __jsx("span", {
    className: "content-p"
  }, "\u666F\u9EDE\u5206\u985E:"), post.category.map(function (e) {
    return __jsx(antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "magenta"
    }, e.name);
  })))));
}; // cardModule.getInitialProps = async () => {
//   const settings = {
//     headers: {
//         Accept: 'application/json',
//     }
// };
//   const res = await fetch('https://www.travel.taipei/open-api/zh-tw/Attractions/All',settings);
//   const data = await res.json();
//   return data;
// };


/* harmony default export */ __webpack_exports__["default"] = (cardModule);

/***/ })

})
//# sourceMappingURL=index.js.87d5fd028ea8ed264d65.hot-update.js.map