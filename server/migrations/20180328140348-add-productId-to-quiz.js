'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('quizzes','productId',{
    type: Sequelize.INTEGER,
    refrences:{model: "product",
      key: "id"}
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('quizzes','productId')
  }
};
