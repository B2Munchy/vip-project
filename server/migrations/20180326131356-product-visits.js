'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('products','visits',{
    type: Sequelize.INTEGER
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products','visits')
  }
};
