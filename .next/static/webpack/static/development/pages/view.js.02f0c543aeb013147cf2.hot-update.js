webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./components/carousel.js":
false,

/***/ "./node_modules/antd/lib/carousel/index.js":
false,

/***/ "./node_modules/antd/lib/carousel/style/index.js":
false,

/***/ "./node_modules/json2mq/index.js":
false,

/***/ "./node_modules/lodash.debounce/index.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/react-slick/lib/arrows.js":
false,

/***/ "./node_modules/react-slick/lib/default-props.js":
false,

/***/ "./node_modules/react-slick/lib/dots.js":
false,

/***/ "./node_modules/react-slick/lib/index.js":
false,

/***/ "./node_modules/react-slick/lib/initial-state.js":
false,

/***/ "./node_modules/react-slick/lib/inner-slider.js":
false,

/***/ "./node_modules/react-slick/lib/slider.js":
false,

/***/ "./node_modules/react-slick/lib/track.js":
false,

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/string-convert/camel2hyphen.js":
false,

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/descriptions/style */ "./node_modules/antd/lib/descriptions/style/index.js");
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/descriptions */ "./node_modules/antd/lib/descriptions/index.js");
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/styles.less */ "./assets/styles.less");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content;

var PostPage = function PostPage(props) {
  var detail = props.detail,
      router = props.router;
  var viewDetail = detail.filter(function (e) {
    return e.id == router.query.id;
  })[0];
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(Content, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    justify: "space-around",
    type: "flex"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 20,
    className: "card mb-50"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: 16
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 24,
    className: "w-100 mb-50"
  }, __jsx("img", {
    src: viewDetail.images[0].src
  })), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "\u666F\u9EDE\u8CC7\u8A0A",
    layout: "vertical",
    bordered: true
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u666F\u9EDE\u540D\u7A31"
  }, viewDetail.name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u71DF\u696D\u6642\u9593"
  }, viewDetail.open_time ? viewDetail.open_time : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u7DB2\u7AD9"
  }, viewDetail.url ? viewDetail.url : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u4F4F\u5740"
  }, viewDetail.address ? viewDetail.address : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u666F\u9EDE\u7C21\u4ECB"
  }, viewDetail.introduction ? viewDetail.introduction : '--')))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.views.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(PostPage));

/***/ })

})
//# sourceMappingURL=view.js.02f0c543aeb013147cf2.hot-update.js.map