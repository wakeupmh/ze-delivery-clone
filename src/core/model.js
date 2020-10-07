/* eslint-disable no-secrets/no-secrets */
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define('Partner', {
    tradingName: DataTypes.STRING,
    ownerName: DataTypes.STRING,
    document: DataTypes.STRING,
    coverageArea: DataTypes.GEOMETRY('POLYGON'),
    address: DataTypes.GEOMETRY('POINT')
  }, {
    sequelize,
    modelName: 'Partner'
  })

  Partner.associate = function (models) {}

  return Partner
}
