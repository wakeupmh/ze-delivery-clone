import path from 'path'
import glob from 'glob'
import Bluebird from 'bluebird'
import Sequelize from 'sequelize'
import { dbConfig } from '@ze/config'
import { createLog } from '@ze/infrastructure/logging'

const Logger = createLog('sequelize')
const search = Bluebird.promisify(glob)
const defaults = {
  pool: {
    max: 1,
    min: 0,
    idle: 1000
  }
}

let sequelize = null
let connected = false

if (!sequelize) {
  sequelize = new Sequelize({
    ...dbConfig,
    ...defaults
  })
}

const importSequelizeModels = () => {
  const importModels = file => {
    const model = require(file)(sequelize, Sequelize.DataTypes)
    db[model.name] = model
    return model
  }

  const associateModels = model => {
    if (model.associate) {
      model.associate(db)
    }
  }

  return search(`${path.resolve('src')}/**/model.js`)
    .map(importModels)
    .each(associateModels)
}

const db = {
  Sequelize,
  sequelize,

  bootstrap () {
    if (connected) {
      return Bluebird.resolve()
    }
    return importSequelizeModels()
      .then(() => db.sequelize.authenticate())
      .tap(() => {
        connected = true
      })
      .then(() => Logger.info('setup database with sucess...'))
  }
}

export { db as database }
