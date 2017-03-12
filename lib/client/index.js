'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

var wrapApp = function wrapApp(AppComponent) {
  return _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(AppComponent, null)
  );
};

_reactDom2.default.render(wrapApp(_App2.default), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', function () {
    // eslint-disable-next-line global-require
    var NextApp = require('./App').default;
    _reactDom2.default.render(wrapApp(NextApp), rootEl);
  });
}