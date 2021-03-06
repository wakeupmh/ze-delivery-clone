import http from 'http'
import { createTerminus } from '@godaddy/terminus'
import { apiConfig } from '@ze/config'
import { createLog, app } from '@ze/infrastructure'

const server = http.createServer(app)
const Logger = createLog('bootstrap')

const onSignal = () => {
  Logger.info('server is starting cleanup')
  return Promise.resolve()
}

const onShutdown = () => {
  Logger.info('cleanup finished, server is shutting down')
}

const onHealthCheck = () => {
  return Promise.resolve('UP')
}

const terminusConfiguration = Object.freeze({
  logger: Logger.info,
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': onHealthCheck
  },
  onSignal,
  onShutdown
})

createTerminus(server, terminusConfiguration)

server.listen(apiConfig.port, () => Logger.info(`Magic happens on port ${apiConfig.port} ✨`))
