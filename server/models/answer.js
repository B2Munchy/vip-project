var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    name : Sequelize.TEXT,
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    right : Sequelize.BOOLEAN
  }, {});
  answer.associate = function(models) {
    // associations can be defined here
    answer.belongsTo(models.question);

  };
  return answer;
};
