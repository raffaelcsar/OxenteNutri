module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Meal", {
        time: DataTypes.STRING,
        quanty: DataTypes.STRING,
        type: DataTypes.STRING,
    });

    return User;

}