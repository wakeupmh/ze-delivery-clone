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
        type: Sequelize.STRING,
        allowNull: false
      },
      ownerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coverageArea: {
        type: Sequelize.GEOMETRY,
        allowNull: false
      },
      address: {
        type: Sequelize.GEOMETRY,
        allowNull: false
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
