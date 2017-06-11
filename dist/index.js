'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = _react2.default.createElement(
  'div',
  null,
  'Hello World!'
);
var componentAsString = _server2.default.renderToString(component);

console.log(componentAsString);