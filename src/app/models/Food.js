const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const Food = sequelize.define("food", {
    name: DataTypes.STRING,
    kcal: DataTypes.STRING,
});

module.exports = Food