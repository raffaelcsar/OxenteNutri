const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    crn: DataTypes.STRING,
});

module.exports.User = User

// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define("User", {
//         name: DataTypes.STRING,
//         email: DataTypes.STRING,
//         password_hash: DataTypes.STRING,
//         crn: DataTypes.STRING,
//     });

//     return User;

// }


// module.exports = class User {

//     constructor(name, email, govId, birth) {
//         this._name = name
//         this._email = email
//         this._govId = govId
//         this._birth = birth
//     }

//     getName() {
//         return this._name
//     }
//     setName(name) {
//         this._name = name
//     }
//     getEmail() {
//         return this._email
//     }
//     setEmail(email) {
//         this._email = email
//     }
//     getGovId() {
//         return this._govId
//     }
//     setGovId(govId) {
//         this._govId = govId
//     }
//     getBirth() {
//         return this._birth
//     }
//     setBirth(birth) {
//         this._birth = birth
//     }
// }