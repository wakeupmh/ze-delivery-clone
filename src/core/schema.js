import { Joi } from 'celebrate'

const geometryShape = {
  type: Joi.string()
    .required(),

  coordinates: Joi.array()
    .items()
    .required()
}

const coverageArea = Joi.object().keys(geometryShape).required()

const address = Joi.object().keys(geometryShape).required()

export const schema = {
  body: {
    tradingName: Joi.string().required(),
    ownerName: Joi.string().required(),
    document: Joi.string().required(),
    coverageArea,
    address
  }
}
