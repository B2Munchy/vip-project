'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('reward_lists','rewards',{
    type: Sequelize.ARRAY(Sequelize.INTEGER)
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('reward_lists','rewards')
  }
};
