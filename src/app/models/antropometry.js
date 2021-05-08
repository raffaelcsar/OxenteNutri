module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("antropometry", {
        weight: DataTypes.STRING,
        height: DataTypes.STRING,
        bodyFatPercent: DataTypes.STRING,
        bodyMusclePercent: DataTypes.STRING,
    });

    return User;

}