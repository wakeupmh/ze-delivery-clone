import boom from '@hapi/boom'
import { createLog } from '@ze/infrastructure'

const Logger = createLog('error-handler')

const notFoundHandler = (req, _, next) => {
  next(boom.notFound(`O recurso ${req.path} não foi encontrado!`))
}

const validationErrorHandler = (error, _, res, next) => {
  const possibleErrors = ['BadRequestError', 'Bad Request', 'MulterError']

  if (possibleErrors.includes(error.name)) {
    return res.status(400).json({
      statusCode: 400,
      errors:
        error.errors || 'O tamanho do arquivo deve ser menor ou igual a 5MB!'
    })
  }

  next(error)
}

const errorHandler = (error, _, res, next) => {
  const statusCode = boom.isBoom(error) ? error.output.statusCode : 500

  if (!boom.isBoom(error)) {
    Logger.error(error.message, error.stack)
  }
  return res.status(statusCode).json({
    message: boom.isBoom(error)
      ? error.message
      : 'Ocorreu um erro genérico, por favor tente mais tarde!',
    statusCode
  })
}

export { errorHandler, notFoundHandler, validationErrorHandler }
