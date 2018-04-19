'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('questions','quizId',{
    type: Sequelize.INTEGER,
    refrences:{model: "quiz",
      key: "id"}
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('questions','quizId')
  }
};
