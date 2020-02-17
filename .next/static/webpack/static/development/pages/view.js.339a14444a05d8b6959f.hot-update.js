webpackHotUpdate("static\\development\\pages\\view.js",{

/***/ "./node_modules/antd/lib/descriptions/Col.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/descriptions/Col.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Col = function Col(props) {
  var _classNames;

  var child = props.child,
      bordered = props.bordered,
      colon = props.colon,
      type = props.type,
      layout = props.layout;
  var _child$props = child.props,
      prefixCls = _child$props.prefixCls,
      label = _child$props.label,
      className = _child$props.className,
      children = _child$props.children,
      _child$props$span = _child$props.span,
      span = _child$props$span === void 0 ? 1 : _child$props$span;
  var labelProps = {
    className: (0, _classnames["default"])("".concat(prefixCls, "-item-label"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-colon"), colon), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-label"), !label), _classNames)),
    key: 'label'
  };

  if (layout === 'vertical') {
    labelProps.colSpan = span * 2 - 1;
  }

  if (bordered) {
    if (type === 'label') {
      return React.createElement("th", labelProps, label);
    }

    return React.createElement("td", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-item-content"), className),
      key: "content",
      colSpan: span * 2 - 1
    }, children);
  }

  if (layout === 'vertical') {
    if (type === 'content') {
      return React.createElement("td", {
        colSpan: span,
        className: (0, _classnames["default"])("".concat(prefixCls, "-item"), className)
      }, React.createElement("span", {
        className: "".concat(prefixCls, "-item-content"),
        key: "content"
      }, children));
    }

    return React.createElement("td", {
      colSpan: span,
      className: (0, _classnames["default"])("".concat(prefixCls, "-item"), className)
    }, React.createElement("span", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-item-label"), _defineProperty({}, "".concat(prefixCls, "-item-colon"), colon)),
      key: "label"
    }, label));
  }

  return React.createElement("td", {
    colSpan: span,
    className: (0, _classnames["default"])("".concat(prefixCls, "-item"), className)
  }, React.createElement("span", labelProps, label), React.createElement("span", {
    className: "".concat(prefixCls, "-item-content"),
    key: "content"
  }, children));
};

var _default = Col;
exports["default"] = _default;
//# sourceMappingURL=Col.js.map


/***/ }),

/***/ "./node_modules/antd/lib/descriptions/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/descriptions/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _responsiveObserve = _interopRequireWildcard(__webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/antd/lib/descriptions/Col.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// https://github.com/smooth-code/react-flatten-children/
function flattenChildren(children) {
  if (!children) {
    return [];
  }

  return (0, _toArray["default"])(children).reduce(function (flatChildren, child) {
    if (child && child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}

var DescriptionsItem = function DescriptionsItem(_ref) {
  var children = _ref.children;
  return children;
};
/**
 * Convert children into `column` groups.
 * @param children: DescriptionsItem
 * @param column: number
 */


var generateChildrenRows = function generateChildrenRows(children, column) {
  var rows = [];
  var columns = null;
  var leftSpans;
  var itemNodes = flattenChildren(children);
  itemNodes.forEach(function (node, index) {
    var itemNode = node;

    if (!columns) {
      leftSpans = column;
      columns = [];
      rows.push(columns);
    } // Always set last span to align the end of Descriptions


    var lastItem = index === itemNodes.length - 1;
    var lastSpanSame = true;

    if (lastItem) {
      lastSpanSame = !itemNode.props.span || itemNode.props.span === leftSpans;
      itemNode = React.cloneElement(itemNode, {
        span: leftSpans
      });
    } // Calculate left fill span


    var _itemNode$props$span = itemNode.props.span,
        span = _itemNode$props$span === void 0 ? 1 : _itemNode$props$span;
    columns.push(itemNode);
    leftSpans -= span;

    if (leftSpans <= 0) {
      columns = null;
      (0, _warning["default"])(leftSpans === 0 && lastSpanSame, 'Descriptions', 'Sum of column `span` in a line exceeds `column` of Descriptions.');
    }
  });
  return rows;
};

var renderRow = function renderRow(children, index, _ref2, bordered, layout, colon) {
  var prefixCls = _ref2.prefixCls;

  var renderCol = function renderCol(colItem, type, idx) {
    return React.createElement(_Col["default"], {
      child: colItem,
      bordered: bordered,
      colon: colon,
      type: type,
      key: "".concat(type, "-").concat(colItem.key || idx),
      layout: layout
    });
  };

  var cloneChildren = [];
  var cloneContentChildren = [];
  flattenChildren(children).forEach(function (childrenItem, idx) {
    cloneChildren.push(renderCol(childrenItem, 'label', idx));

    if (layout === 'vertical') {
      cloneContentChildren.push(renderCol(childrenItem, 'content', idx));
    } else if (bordered) {
      cloneChildren.push(renderCol(childrenItem, 'content', idx));
    }
  });

  if (layout === 'vertical') {
    return [React.createElement("tr", {
      className: "".concat(prefixCls, "-row"),
      key: "label-".concat(index)
    }, cloneChildren), React.createElement("tr", {
      className: "".concat(prefixCls, "-row"),
      key: "content-".concat(index)
    }, cloneContentChildren)];
  }

  return React.createElement("tr", {
    className: "".concat(prefixCls, "-row"),
    key: index
  }, cloneChildren);
};

var defaultColumnMap = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};

var Descriptions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Descriptions, _React$Component);

  function Descriptions() {
    var _this;

    _classCallCheck(this, Descriptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Descriptions).apply(this, arguments));
    _this.state = {
      screens: {}
    };
    return _this;
  }

  _createClass(Descriptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var column = this.props.column;
      this.token = _responsiveObserve["default"].subscribe(function (screens) {
        if (_typeof(column) !== 'object') {
          return;
        }

        _this2.setState({
          screens: screens
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _responsiveObserve["default"].unsubscribe(this.token);
    }
  }, {
    key: "getColumn",
    value: function getColumn() {
      var column = this.props.column;

      if (_typeof(column) === 'object') {
        for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
          var breakpoint = _responsiveObserve.responsiveArray[i];

          if (this.state.screens[breakpoint] && column[breakpoint] !== undefined) {
            return column[breakpoint] || defaultColumnMap[breakpoint];
          }
        }
      } // If the configuration is not an object, it is a number, return number


      if (typeof column === 'number') {
        return column;
      } // If it is an object, but no response is found, this happens only in the test.
      // Maybe there are some strange environments


      return 3;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(_configProvider.ConfigConsumer, null, function (_ref3) {
        var _classNames;

        var getPrefixCls = _ref3.getPrefixCls;
        var _this3$props = _this3.props,
            className = _this3$props.className,
            customizePrefixCls = _this3$props.prefixCls,
            title = _this3$props.title,
            size = _this3$props.size,
            children = _this3$props.children,
            _this3$props$bordered = _this3$props.bordered,
            bordered = _this3$props$bordered === void 0 ? false : _this3$props$bordered,
            _this3$props$layout = _this3$props.layout,
            layout = _this3$props$layout === void 0 ? 'horizontal' : _this3$props$layout,
            _this3$props$colon = _this3$props.colon,
            colon = _this3$props$colon === void 0 ? true : _this3$props$colon,
            style = _this3$props.style;
        var prefixCls = getPrefixCls('descriptions', customizePrefixCls);

        var column = _this3.getColumn();

        var cloneChildren = flattenChildren(children).map(function (child) {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              prefixCls: prefixCls
            });
          }

          return null;
        }).filter(function (node) {
          return node;
        });
        var childrenArray = generateChildrenRows(cloneChildren, column);
        return React.createElement("div", {
          className: (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), !!bordered), _classNames)),
          style: style
        }, title && React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), React.createElement("div", {
          className: "".concat(prefixCls, "-view")
        }, React.createElement("table", null, React.createElement("tbody", null, childrenArray.map(function (child, index) {
          return renderRow(child, index, {
            prefixCls: prefixCls
          }, bordered, layout, colon);
        })))));
      });
    }
  }]);

  return Descriptions;
}(React.Component);

Descriptions.defaultProps = {
  size: 'default',
  column: defaultColumnMap
};
Descriptions.Item = DescriptionsItem;
var _default = Descriptions;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/descriptions/style/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/descriptions/style/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/descriptions/style/index.less");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/Children/toArray.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArray(children) {
  var ret = [];

  _react.default.Children.forEach(children, function (c) {
    ret.push(c);
  });

  return ret;
}

/***/ }),

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/descriptions/style */ "./node_modules/antd/lib/descriptions/style/index.js");
/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/descriptions */ "./node_modules/antd/lib/descriptions/index.js");
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content;

var PostPage = function PostPage(props) {
  var detail = props.detail,
      router = props.router;
  var viewDetail = detail.filter(function (e) {
    return e.id == router.query.id;
  })[0];
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(Content, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justify: "space-around",
    type: "flex"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    span: 20,
    className: "card mb-50"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 16
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "User Info",
    layout: "vertical"
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    label: "UserName"
  }, viewDetail.name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    label: "Telephone"
  }, viewDetail.open_time), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    label: "Live"
  }, viewDetail.name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    label: "Address",
    span: 2
  }, viewDetail.address), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    label: "Remark"
  }, viewDetail.name)))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.views.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(PostPage));

/***/ })

})
//# sourceMappingURL=view.js.339a14444a05d8b6959f.hot-update.js.map