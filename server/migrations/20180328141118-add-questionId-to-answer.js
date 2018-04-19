'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('answers','questionId',{
    type: Sequelize.INTEGER,
    refrences:{model: "question",
      key: "id"}
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('answers','questionId')
  }
};
