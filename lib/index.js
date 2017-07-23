'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMorgan = undefined;

var _morgan = require('./morgan');

exports.useMorgan = _morgan.useMorgan;

var transactionExpressLogger = {
  useMorgan: _morgan.useMorgan
};
exports.default = transactionExpressLogger;