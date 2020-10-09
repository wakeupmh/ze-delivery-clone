/* eslint-disable no-undef */
import { partnerMock, queryParamsMock } from './mock'
import { partnerServiceFactory } from '@ze/core'

describe('[Zé Delivery 🍺] - Service Unit Tests', () => {
  let Logger
  let database

  beforeEach(() => {
    Logger = {
      info: global.sinon.spy(),
      warn: global.sinon.spy()
    }

    database = {
      bootstrap: global.sinon.stub().resolves(),
      Partner: {
        findOrCreate: global.sinon.stub(),
        findOne: global.sinon.stub()
      },
      sequelize: {
        query: global.sinon.stub()
      }
    }
  })

  context('Create Partner Tests', () => {
    it('should create a partner', async () => {
      database.Partner.findOrCreate.resolves([partnerMock, true])
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.createPartner(partnerMock)

      global.expect(serviceFn).to.be.eql(partnerMock)
      global.sinon.assert.calledOnce(database.Partner.findOrCreate)
      global.sinon.assert.calledOnce(Logger.info)
    })

    it('should not create a partner', async () => {
      database.Partner.findOrCreate.resolves([partnerMock, false])
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.createPartner(partnerMock)

      global.expect(serviceFn).to.be.eql(false)
      global.sinon.assert.calledOnce(database.Partner.findOrCreate)
      global.sinon.assert.notCalled(Logger.info)
    })
  })

  context('Find Partner Tests', () => {
    it('should find a partner by Id', async () => {
      database.Partner.findOne.resolves(partnerMock)
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.findPartnerById(1)

      global.expect(serviceFn).to.be.eql(partnerMock)
      global.sinon.assert.calledOnce(database.Partner.findOne)
      global.sinon.assert.calledOnce(Logger.info)
      global.sinon.assert.notCalled(Logger.warn)
    })

    it('should not find a partner by Id', async () => {
      database.Partner.findOne.resolves(null)
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.findPartnerById(99)

      global.expect(serviceFn).to.be.eql(null)
      global.sinon.assert.calledOnce(database.Partner.findOne)
      global.sinon.assert.notCalled(Logger.info)
      global.sinon.assert.calledOnce(Logger.warn)
    })

    it('should find a partner by lat and long', async () => {
      database.sequelize.query.resolves(partnerMock)
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.findNearestPartner(queryParamsMock)

      global.expect(serviceFn).to.be.eql(partnerMock)
      global.sinon.assert.calledOnce(database.sequelize.query)
      global.sinon.assert.calledOnce(Logger.info)
      global.sinon.assert.notCalled(Logger.warn)
    })

    it('should not find a partner by lat and long', async () => {
      database.sequelize.query.resolves(null)
      const factoryServiceFn = partnerServiceFactory({ database, Logger })
      const serviceFn = await factoryServiceFn.findNearestPartner(queryParamsMock)

      global.expect(serviceFn).to.be.eql(null)
      global.sinon.assert.calledOnce(database.sequelize.query)
      global.sinon.assert.notCalled(Logger.info)
      global.sinon.assert.calledOnce(Logger.warn)
    })
  })
})
