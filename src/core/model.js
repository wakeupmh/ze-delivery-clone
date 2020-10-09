/* eslint-disable no-secrets/no-secrets */
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define('Partner', {
    tradingName: DataTypes.STRING,
    ownerName: DataTypes.STRING,
    document: DataTypes.STRING,
    coverageArea: DataTypes.GEOMETRY('MULTIPOLYGON', 4326),
    address: DataTypes.GEOMETRY('POINT', 4326)
  }, {
    sequelize,
    modelName: 'Partner'
  })

  Partner.associate = function (models) {}

  return Partner
}
