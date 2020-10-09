import { createLog, database } from '@ze/infrastructure'
import {
  partnerServiceFactory
} from '@ze/core'

export const partnerMiddlewareInjector = (req, _, next) => {
  const {
    findPartnerById,
    findNearestPartner,
    createPartner
  } = partnerServiceFactory({
    database,
    Logger: createLog('partner')
  })

  req.createPartner = createPartner
  req.findPartnerById = findPartnerById
  req.findNearestPartner = findNearestPartner

  next()
}
