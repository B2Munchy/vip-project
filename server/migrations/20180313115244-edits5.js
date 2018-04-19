'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'Doctors', 'passhash', {type : Sequelize.TEXT,
      required : true, allowNull: false } )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'Doctors', 'passhash')

  }
};
