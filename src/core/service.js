import Bluebird from 'bluebird'

export default ({
  database,
  Logger
}) => {
  const createPartner = body => {
    return Bluebird.resolve(database.bootstrap())
      .then(() => database.Partner.create({ ...body }))
      .tap(response => {
        Logger.info(`Created register with ${response}`)
      })
  }

  const findPartnerById = id => {
    return Bluebird.resolve(database.bootstrap())
      .then(() => database.Partner.findOne({ where: { id } }))
      .tap(() => {
        Logger.info('Finded register')
      })
  }

  const findNearestPartner = event => {

  }

  return {
    createPartner,
    findPartnerById,
    findNearestPartner
  }
}
