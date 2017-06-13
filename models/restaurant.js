'use strict';
module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  });
  
  Restaurant.associate = function(models){
    Restaurant.belongsToMany(models.User, {through: "User_restaurant", foreignKey: 'restaurantId'});
  }
  
  return Restaurant;
};