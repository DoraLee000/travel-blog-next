webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/descriptions/style */ "./node_modules/antd/lib/descriptions/style/index.js");
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/descriptions */ "./node_modules/antd/lib/descriptions/index.js");
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layout_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/Main */ "./layout/Main.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var PostPage = function PostPage(props) {
  var defultData = props.defultData,
      router = props.router;
  var viewDetail = defultData.filter(function (e) {
    return e.id == router.query.id;
  })[0];
  return __jsx(_layout_Main__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 24,
    className: "w-100 mb-50"
  }, __jsx("img", {
    src: viewDetail.images[0].src
  })), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "\u666F\u9EDE\u8CC7\u8A0A",
    layout: "vertical",
    bordered: true
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: "\u666F\u9EDE\u540D\u7A31"
  }, viewDetail.name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: "\u71DF\u696D\u6642\u9593"
  }, viewDetail.open_time ? viewDetail.open_time : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: "\u7DB2\u7AD9"
  }, viewDetail.url ? viewDetail.url : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: "\u4F4F\u5740"
  }, viewDetail.address ? viewDetail.address : '--'), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: "\u666F\u9EDE\u7C21\u4ECB"
  }, viewDetail.introduction ? viewDetail.introduction : '--')));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])()(PostPage));

/***/ })

})
//# sourceMappingURL=view.js.74a3e8a407a48084482d.hot-update.js.map