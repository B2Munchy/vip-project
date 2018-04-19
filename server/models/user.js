var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};