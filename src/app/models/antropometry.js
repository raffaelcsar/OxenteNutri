const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const Antropometry = sequelize.define("antropometry", {
    weight: DataTypes.STRING,
    height: DataTypes.STRING,
    bodyFatPercent: DataTypes.STRING,
    bodyMusclePercent: DataTypes.STRING,
});

module.exports.Antropometry = Antropometry