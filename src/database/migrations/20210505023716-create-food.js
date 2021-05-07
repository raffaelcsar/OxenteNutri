'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("food", {
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
            kcal: {
                type: Sequelize.STRING,
                allowNull: true
            },
        })

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("food");
    }
};