'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("Meal", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            time: {
                type: Sequelize.STRING,
                allowNull: false
            },
            quantity: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
        })

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("Meal");
    }
};