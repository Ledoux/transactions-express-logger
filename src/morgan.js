import morgan from 'morgan'
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

export function useMorgan (app, config) {
  const { isProd } = config
  const morganLogFormat = isProd
      ? 'short'
      : 'dev'
  app.use(morgan(morganLogFormat,
    // log them in our winston logstream
    {
      stream: {
        write: logger.info
      }
    }))
}
