/* eslint-disable no-undef */
import { handleResponse } from '@ze/infrastructure/server/response'
describe('[Ze] - Response Middleware - Unit Tests', () => {
  context('Register Response Tests', () => {
    it('should create 200 response', () => {
      const response = {
        status: sinon.stub(),
        json: sinon.spy()
      }
      const handleFn = handleResponse(response)({})
      console.log(handleFn)
    })
  })
})
