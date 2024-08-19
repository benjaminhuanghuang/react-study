module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
    },{});

    User.associate = function(models) {
        // User.hasMany(models.Task, {
        //     foreignKey: 'userId',
        //     as: 'tasks',
        // });
    };
    return User;
}