webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/saga.js":
/*!***********************!*\
  !*** ./store/saga.js ***!
  \***********************/
/*! exports provided: getProject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/index */ "./api/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./store/actions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




var getProject = function getProject(state) {
  return state.count;
};

function loadDataSaga() {
  var project, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getProject);

        case 3:
          project = _context.sent;
          console.log('project', project);
          _context.next = 7;
          return Object(_api_index__WEBPACK_IMPORTED_MODULE_2__["getPosts"])();

        case 7:
          res = _context.sent;
          _context.next = 10;
          return res.json();

        case 10:
          data = _context.sent;
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadDataSuccess"])(data.data));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          _context.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["failure"])(_context.t0));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 15]]);
} // function* updateDataSaga() {
//   console.log('Test Result:');
//   try {
//     const res = yield getPosts()
//     // const res = yield fetch('https://jsonplaceholder.typicode.com/users')
//     const data = yield res.json()
//     console.log('data',data)
//     // yield put(loadDataSuccess(data.data))
//   } catch (err) {
//     yield put(failure(err))
//   }
// }


function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LOAD_DATA, loadDataSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].UPDATE_DATA, loadDataSaga)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ })

})
//# sourceMappingURL=_app.js.2d3def0f4abf1c26eb0b.hot-update.js.map