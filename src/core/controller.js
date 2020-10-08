import Bluebird from 'bluebird'
import { celebrate } from 'celebrate'
import { controller, post, get } from 'express-decorator-router'
import { partnerMiddlewareInjector } from '@ze/infrastructure/server/middlewares/middleware-container'
import { createSimpleReponse } from '@ze/infrastructure/server/response'
import { schema } from './schema'

const createPartner = ({ request, response }) => {
  const { body, createPartner } = request
  return Bluebird.resolve(body)
    .then(createPartner)
    .then(createSimpleReponse(response))
}

const findPartnerById = ({ request, response }) => {
  const { findPartnerById, params: { id } } = request
  return Bluebird.resolve(findPartnerById(id))
    .then(createSimpleReponse(response))
}

const findNearestPartner = ({ request, response }) => {
  const { body, findNearestPartner } = request
  return Bluebird.resolve(body)
    .then(findNearestPartner)
    .then(createSimpleReponse(response))
}

export default controller('/partner', partnerMiddlewareInjector)({
  createPartner,
  findPartnerById,
  findNearestPartner
}, {
  createPartner: post(celebrate(schema)),
  findPartnerById: get('/:id'),
  findNearestPartner: get()
})
