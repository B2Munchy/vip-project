var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    name: Sequelize.TEXT
  }, {});
  question.associate = function(models) {
    // associations can be defined here
    question.belongsTo(models.quiz);

  };
  return question;
};