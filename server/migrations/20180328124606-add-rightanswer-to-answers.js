'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('answers','right',{
    type: Sequelize.BOOLEAN
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('answers','right')
  }
};
