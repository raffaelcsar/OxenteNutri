module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("food", {
        name: DataTypes.STRING,
        kcal: DataTypes.STRING,
    });

    return User;

}