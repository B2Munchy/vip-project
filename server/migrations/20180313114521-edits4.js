'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'pharmas', 'passhash', {type : Sequelize.TEXT,
      required : true 	
    } )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'pharmas', 'passhash')

  }
};
