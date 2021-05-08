const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    crn: DataTypes.STRING,
});

module.exports.User = User