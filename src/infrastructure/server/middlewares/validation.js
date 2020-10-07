import createError from 'http-errors'

export const schemaValidation = ({ schema }) => ({
  before (req, _, next) {
    const throwBadRequest = ({ errors }) => {
      throw createError(400, { message: 'ocorreu um erro na validação dos dados', errors })
    }

    return schema.validate(req.body, { abortEarly: false })
      .then(() => next())
      .catch(throwBadRequest)
  }
})
