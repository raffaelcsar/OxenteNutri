const { DataTypes } = require('sequelize')
const sequelize = require('./index')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        crn: DataTypes.STRING,
    });

    // User.prototype.checkPassword = function(password){
    //     return bcrypt.compare(password, this.password_hash);
    // }

    // User.prototype.generateToken = function(){
    //     return jwt.sign({ id: this.id }, process.env.APP_SECRET);
    // }

    // User.prototype.teste = function () {
    //     console.log("teste");
    // }

    module.exports.User = User;

