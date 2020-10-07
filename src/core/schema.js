/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'
const { setLocale } = yup

setLocale({
  mixed: {
    notType: 'o ${path} é obrigatório',
    required: 'o campo ${path} é obrigatório'
  }
})

const geometryShape = {
  type: yup.string()
    .required(),

  coordinates: yup.array()
    .required()
}

const coverageArea = yup.object().shape(geometryShape).required()

const address = yup.object().shape(geometryShape).required()

export const schema = yup.object().shape({
  tradingName: yup.string().required(),
  ownerName: yup.string().required(),
  document: yup.string().required(),
  coverageArea,
  address
}).required()
