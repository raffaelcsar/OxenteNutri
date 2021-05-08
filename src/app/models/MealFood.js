const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const MealFood = sequelize.define("meal-food", {
    meal: DataTypes.STRING,
    food: DataTypes.STRING,
});

module.exports.MealFood = MealFood