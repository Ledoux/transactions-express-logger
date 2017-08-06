'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston2.default.emitErrs = true;

var winstonTransports = [new _winston2.default.transports.Console({
  level: 'debug',
  colorize: true
})];

var logger = exports.logger = new _winston2.default.Logger({
  transports: winstonTransports,
  exitOnError: false
});