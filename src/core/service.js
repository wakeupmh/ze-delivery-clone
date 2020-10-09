import Bluebird from 'bluebird'

const logIfExists = (partner, Logger) => {
  if (partner) {
    Logger.info('Found register')
  } else {
    Logger.warn('Not found register')
  }
}

export default ({
  database,
  Logger
}) => {
  const createPartner = body => {
    return Bluebird.resolve(database.bootstrap())
      .then(() => database.Partner.findOrCreate({
        where: { document: body.document },
        defaults: { ...body }
      }))
      .then(response => {
        const [model, register] = response
        if (register) {
          Logger.info(`Created register with ${response}`)
          return model
        }
        return false
      })
  }

  const findPartnerById = id => {
    return Bluebird.resolve(database.bootstrap())
      .then(() => database.Partner.findOne({ where: { id } }))
      .tap(partner => {
        logIfExists(partner, Logger)
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
        logIfExists(partner, Logger)
      })
  }

  return {
    createPartner,
    findPartnerById,
    findNearestPartner
  }
}
