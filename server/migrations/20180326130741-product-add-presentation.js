'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('products','presentation',{
    type: Sequelize.TEXT
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products','presentation')
  }
};
