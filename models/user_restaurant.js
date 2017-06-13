'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_restaurant = sequelize.define('User_restaurant', {
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  });
  
  User_restaurant.associate = function(models){
    User_restaurant.belongsTo(models.User);
    User_restaurant.belongsTo(models.Restaurant)
  }
  
  return User_restaurant;
};