import Bluebird from 'bluebird'
import { controller, post, get } from 'express-decorator-router'
import { partnerMiddlewareInjector } from '@ze/infrastructure/server/middlewares/middleware-container'
import { createSimpleReponse } from '@ze/infrastructure/server/response'

const createPartner = ({ request, response }) => {
  const { body, createPartner } = request
  return Bluebird.resolve(body)
    .then(createPartner)
    .then(createSimpleReponse(response))
}

const findPartnerById = ({ request, response }) => {
  const { body, findPartnerById } = request
  return Bluebird.resolve(body)
    .then(findPartnerById)
    .then(createSimpleReponse(response))
}

const findNearestPartner = ({ request, response }) => {
  const { body, findNearestPartner } = request
  return Bluebird.resolve(body)
    .then(findNearestPartner)
    .then(createSimpleReponse(response))
}

export default controller('/partner')({
  createPartner,
  findPartnerById,
  findNearestPartner
}, {
  createPartner: post(partnerMiddlewareInjector),
  findPartnerById: get('/:id', partnerMiddlewareInjector),
  findNearestPartner: get(partnerMiddlewareInjector)
})
