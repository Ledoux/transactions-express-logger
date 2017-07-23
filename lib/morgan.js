'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;
exports.useMorgan = useMorgan;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

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

function useMorgan(app, config) {
  var isProd = config.isProd;

  var morganLogFormat = isProd ? 'short' : 'dev';
  app.use((0, _morgan2.default)(morganLogFormat,
  // log them in our winston logstream
  {
    stream: {
      write: logger.info
    }
  }));
}