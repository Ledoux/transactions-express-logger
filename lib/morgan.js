'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMorgan = useMorgan;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _winston = require('./winston');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useMorgan(app, config) {
  var isProd = config.isProd;

  var morganLogFormat = isProd ? 'short' : 'dev';
  app.use((0, _morgan2.default)(morganLogFormat,
  // log them in our winston logstream
  {
    stream: {
      write: _winston.logger.info
    }
  }));
}