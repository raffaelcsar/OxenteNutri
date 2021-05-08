'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("antropometry", {
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
                },
            },
            weight: {
                type: Sequelize.STRING,
                allowNull: false
            },
            height: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bodyFatPercent: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bodyMusclePercent: {
                type: Sequelize.STRING,
                allowNull: false
            },
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

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("antropometry");
    }
};