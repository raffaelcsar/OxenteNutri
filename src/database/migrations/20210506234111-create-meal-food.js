'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("meal-food", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            mealId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'meal',
                    key: 'id'
                }
            },

            foodId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'food',
                    key: 'id'
                }
            },
        })

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("meal-food");
    }
};