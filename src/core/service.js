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
      .tap(partner => {
        if (partner) {
          Logger.info('Finded register')
        }

        Logger.warn('Not found register')
      })
  }

  const findNearestPartner = ({ long, lat }) => {
    return Bluebird.resolve(database.bootstrap())
      .then(() => {
        const geomFromText = `ST_GeomFromText('POINT(${long} ${lat})')`

        return database.sequelize.query(`
          SELECT * 
          FROM "Partners"
          WHERE ST_DWithin("coverageArea", 
            ST_Buffer(${geomFromText}, 20), 1000)
          ORDER BY ST_Distance("coverageArea",${geomFromText}) 
          LIMIT 1;`)
      })
      .tap(partner => {
        if (partner) {
          Logger.info('Finded register')
        }

        Logger.warn('Not found register')
      })
  }

  return {
    createPartner,
    findPartnerById,
    findNearestPartner
  }
}
