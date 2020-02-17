webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/styles.less */ "./assets/styles.less");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Content;

var PostPage = function PostPage(props) {
  var detail = props.detail,
      router = props.router;
  console.log(props);

  var filterData = function filterData(view) {
    return view.filter(function (e) {
      return e.id == router.query.id;
    });
  };

  console.log(filterData);
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(Content, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    justify: "space-around",
    type: "flex"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 20,
    className: "card mb-50"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    gutter: 16
  }, __jsx("div", null, "store.value is ".concat(filterData(detail))))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.views.data
  };
}; // PostPage.getInitialProps = async ({ store }) => {
//   const data = '88888'
//   store.dispatch({ type: "GETDATA", payload: {...data} }); // component will be able to read from store's state when rendered
//   return data
// }


PostPage.getInitialProps = function _callee(props) {
  var _props$ctx, store, isServer, userData;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _props$ctx = props.ctx, store = _props$ctx.store, isServer = _props$ctx.isServer;
          console.log(store.getState()); // if (store.getState().user.list.list.length === 0) {
          //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
          //   userData = await res.json();
          //   store.dispatch(fetchUserListDataSuccess(userData));
          // }
          // return { isServer };

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(PostPage));

/***/ })

})
//# sourceMappingURL=view.js.3847e805e16e26edfeb7.hot-update.js.map