import { createLog, database } from '@ze/infrastructure'
import {
  partnerServiceFactory,
  schema
} from '@ze/core'
export const partnerMiddlewareInjector = (req, _, next) => {
  const commomInjections = {
    database,
    Logger: createLog('partner')
  }

  const {
    createPartner
  } = partnerServiceFactory({
    ...commomInjections,
    schema
  })

  const {
    findPatnerById,
    findNearestPartner
  } = partnerServiceFactory({ ...commomInjections })

  req.createPartner = createPartner
  req.findPatnerById = findPatnerById
  req.findNearestPartner = findNearestPartner

  next()
}
