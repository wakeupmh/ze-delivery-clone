'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tradingName: {
        type: Sequelize.STRING
      },
      ownerName: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.STRING
      },
      coverageArea: {
        type: Sequelize.GEOMETRY
      },
      address: {
        type: Sequelize.GEOMETRY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Partners')
  }
}
