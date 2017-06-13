'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  });
  
  User.associate = function(models){
    User.belongsToMany(models.Restaurant, {through: "User_restaurant", foreignKey: 'userId'});
  }
  
  return User;
};