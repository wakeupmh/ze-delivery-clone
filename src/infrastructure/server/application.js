import { apm } from '@ze/infrastructure'
import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import { errors } from 'celebrate'
import { resolve } from 'path'
import { useControllers } from 'express-decorator-router'
import {
  errorHandler,
  notFoundHandler,
  validationErrorHandler
} from './middlewares'

const app = express()
const router = express.Router()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use('/v1/api', useControllers({
  router,
  controllerExpression: `${resolve('src')}/**/controller.js`
}))

app.use(errors())
app.use(notFoundHandler)
app.use(validationErrorHandler)

app.use(apm.middleware.connect())

app.use(errorHandler)

export { app }
