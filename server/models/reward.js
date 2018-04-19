var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var reward = sequelize.define('reward', {
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    redeems: Sequelize.INTEGER,
    points_required: Sequelize.INTEGER
  }, {});
  reward.associate = function(models) {
    // associations can be defined here
    reward.belongsTo(models.pharma);

  };
  return reward;
};