const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const Customer = sequelize.define("Customer", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    govId: DataTypes.STRING,
    birthdate: DataTypes.DATE,
});

module.exports.Customer = Customer