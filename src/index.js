import { useMorgan } from './morgan'
import { logger } from './winston'

export { logger,
  useMorgan
}
const transactionExpressLogger = { logger,
  useMorgan
}
export default transactionExpressLogger
