import { createLogger, transports } from 'winston'
import { combineLogFormats } from './format-levels'

const createLog = scope =>
  createLogger({
    level: 'info',
    defaultMeta: {
      scope,
      projectLabel: 'Zé Delivery 🍺'
    },
    exitOnError: false,
    transports: [
      new transports.Console({
        format: combineLogFormats()
      })
    ]
  })

export { createLog }
