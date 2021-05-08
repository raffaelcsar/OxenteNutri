const { DataTypes } = require('sequelize')
const sequelize = require('./index')


const Meal = sequelize.define("Meal", {
    time: DataTypes.STRING,
    quanty: DataTypes.STRING,
    type: DataTypes.STRING,
});

module.exports.Meal = Meal