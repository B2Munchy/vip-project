var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var quiz = sequelize.define('quiz', {
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    points :  { type: Sequelize.INTEGER,
       required: true},
    takes : Sequelize.INTEGER,
    total_time: Sequelize.INTEGER,
    av_time: Sequelize.INTEGER,
    av_score: Sequelize.INTEGER    
  }, {});
  quiz.associate = function(models) {
    // associations can be defined here
    quiz.belongsTo(models.product);
  };
  return quiz;
};