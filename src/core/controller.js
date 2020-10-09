import celebrate from 'celebrate'
import { controller, post, get } from 'express-decorator-router'
import { partnerMiddlewareInjector } from '@ze/infrastructure/server/middlewares/middleware-container'
import { handleResponse, handleCreatedResponse } from '@ze/infrastructure/server/response'
import { createPartnerSchema, findNearestPartnerSchema } from './schema'

const { celebrate: schemaValidation } = celebrate

const createPartner = ({ request, response }) => {
  const { body, createPartner } = request

  return Promise.resolve(body)
    .then(createPartner)
    .then(handleCreatedResponse(response))
}

const findPartnerById = ({ request, response }) => {
  const { findPartnerById, params: { id } } = request

  return Promise.resolve(findPartnerById(id))
    .then(handleResponse(response))
}

const findNearestPartner = ({ request, response }) => {
  const { query: { lat, long }, findNearestPartner } = request

  return Promise.resolve(findNearestPartner({ long, lat }))
    .then(handleResponse(response))
}

export default controller('/partner', partnerMiddlewareInjector)({
  createPartner,
  findPartnerById,
  findNearestPartner
}, {
  createPartner: post(schemaValidation(createPartnerSchema)),
  findPartnerById: get('/:id'),
  findNearestPartner: get(schemaValidation(findNearestPartnerSchema))
})
