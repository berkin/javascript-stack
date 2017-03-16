'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _hello = require('./reducer/hello');

var _hello2 = _interopRequireDefault(_hello);

var _config = require('../shared/config');

var _util = require('../shared/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-underscore-dangle
var composeEnhancers = (_util.isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _redux.compose;

var store = (0, _redux.createStore)((0, _redux.combineReducers)({ hello: _hello2.default }), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

var wrapApp = function wrapApp(AppComponent, reduxStore) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: reduxStore },
    _react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(AppComponent, null)
    )
  );
};

_reactDom2.default.render(wrapApp(_App2.default, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', function () {
    // eslint-disable-next-line global-require
    var NextApp = require('./App').default;
    _reactDom2.default.render(wrapApp(NextApp, store), rootEl);
  });
}