'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMorgan = exports.logger = undefined;

var _morgan = require('./morgan');

var _winston = require('./winston');

exports.logger = _winston.logger;
exports.useMorgan = _morgan.useMorgan;

var transactionExpressLogger = { logger: _winston.logger,
  useMorgan: _morgan.useMorgan
};
exports.default = transactionExpressLogger;