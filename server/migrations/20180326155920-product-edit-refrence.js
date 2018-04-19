'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.changeColumn('products','pharmaId',{
    type: Sequelize.INTEGER,
    refrences:{model: "pharma",
      key: "id"}
   }
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products','pharmaId')
  }
};