'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Doctors', null, {})

    // queryInterface.addColumn( 'Doctors', 'passhash', {type : Sequelize.TEXT,
    //   required : true, allowNull: false } )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Doctors', null, {})
    //queryInterface.removeColumn( 'Doctors', 'passhash')

  }
};
