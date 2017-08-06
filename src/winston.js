import winston from 'winston'

winston.emitErrs = true

let winstonTransports = [
  new (winston.transports.Console)({
    level: 'debug',
    colorize: true
  })
]

export const logger = new (winston.Logger)({
  transports: winstonTransports,
  exitOnError: false
})
