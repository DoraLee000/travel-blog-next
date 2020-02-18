webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination/style */ "./node_modules/antd/lib/pagination/style/index.js");
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styles.less */ "./assets/styles.less");
/* harmony import */ var _assets_styles_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/layout */ "./components/Layout/layout.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/index */ "./api/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var IndexPage = function IndexPage(props) {
  console.log(props.data);
  return __jsx(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, props.data.map(function (view) {
    return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      span: 8,
      md: 8,
      sm: 12,
      xs: 24,
      className: "mb-50"
    }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: view.id,
      post: view
    }));
  }), __jsx(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_2___default.a, {
    defaultCurrent: 1,
    defaultPageSize: 30,
    total: props.data.length
  }));
};

IndexPage.getInitialProps = function _callee(_ref) {
  var store, isServer, pathname, query, page, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query;
          page = 1;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_index__WEBPACK_IMPORTED_MODULE_10__["getPosts"])(page));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          data = _context.sent;
          store.dispatch({
            type: "GETDATA",
            payload: {
              data: data
            }
          });
          return _context.abrupt("return", data);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])()(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.f6515a840cda25cdfa7f.hot-update.js.map