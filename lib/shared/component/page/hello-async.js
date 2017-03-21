'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helloAsyncButton = require('../../container/hello-async-button');

var _helloAsyncButton2 = _interopRequireDefault(_helloAsyncButton);

var _messageAsync = require('../../container/message-async');

var _messageAsync2 = _interopRequireDefault(_messageAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloAsyncPage = function HelloAsyncPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_messageAsync2.default, null),
    _react2.default.createElement(_helloAsyncButton2.default, null)
  );
};

exports.default = HelloAsyncPage;