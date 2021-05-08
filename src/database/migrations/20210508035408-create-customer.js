'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable("customers", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      gov_id: {
          type: Sequelize.STRING,
          allowNull: false
      },
      birthdate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      // idAntropometry: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'antropometry',
      //     key: 'id'
      //   }
      // },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable("customers");
  }
};
