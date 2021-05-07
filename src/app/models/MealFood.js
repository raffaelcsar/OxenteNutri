module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("meal-food", {
        meal: DataTypes.STRING,
        food: DataTypes.STRING,
    });

    return User;

}