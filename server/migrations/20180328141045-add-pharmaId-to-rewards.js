'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addColumn('rewards','pharmaId',{
    type: Sequelize.INTEGER,
    refrences:{model: "pharma",
      key: "id"}
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('rewards','pharmaId')
  }
};
