'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("menu", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },

            mealId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Meal',
                    key: 'id'
                }
            },
        })

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("menu");
    }
};