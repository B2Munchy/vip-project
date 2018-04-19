'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('quizzes', {
      id : {type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      points :  { type: Sequelize.INTEGER
        , required: true},
      takes : Sequelize.INTEGER,
      total_time: Sequelize.INTEGER,
      av_time: Sequelize.INTEGER,
      av_score: Sequelize.INTEGER ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('quizzes');
  }
};