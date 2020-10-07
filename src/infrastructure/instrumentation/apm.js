import { apiConfig } from '@ze/config'
import elasticApm from 'elastic-apm-node'

export const apm = elasticApm.start({
  active: apiConfig.apmActive,
  serverUrl: apiConfig.apmServerUrl,
  serviceName: apiConfig.apmServiceName,
  secretToken: apiConfig.apmSecretToken,
  verifyServerCert: true,
  environment: apiConfig.environment,
  ignoreUrls: ['/healthcheck']
})
