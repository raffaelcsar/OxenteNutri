module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("menu", {
        user: DataTypes.STRING,
        meal: DataTypes.STRING,
    });

    return User;

}