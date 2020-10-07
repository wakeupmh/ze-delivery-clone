/* c8 ignore next 42 */
import { format } from 'winston'

const { splat, printf, combine, colorize, timestamp } = format

const colors = () =>
  colorize({
    all: true,
    colors: Object.freeze({
      trace: 'green',
      info: 'blue',
      warn: 'yellow',
      error: 'red',
      fatal: 'red'
    })
  })

const upperCaseLevel = format((info) => {
  info.level =
    typeof info.level === 'string' ? info.level.toUpperCase() : info.level
  return info
})

const customFormat = () =>
  printf(
    ({ level, message, timestamp, projectLabel, scope }) =>
      `[${timestamp}] ${level} - [${projectLabel} - ${scope}]: ${message}`
  )

const combineLogFormats = (...formats) =>
  combine(
    upperCaseLevel(),
    timestamp(),
    splat(),
    colors(),
    customFormat(),
    ...formats
  )

export { combineLogFormats }
