import morgan from 'morgan'

import { logger } from './winston'

export function useMorgan (app, config) {
  const { isProd } = config
  const morganLogFormat = isProd ? 'short' : 'dev'
  app.use(morgan(morganLogFormat,
    // log them in our winston logstream
    {
      stream: {
        write: logger.info
      }
    }))
}
