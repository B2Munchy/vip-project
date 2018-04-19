'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn( 'pharma', 'email', {type : Sequelize.STRING,
      unique : true } )
    .then(() => {    
      queryInterface.addColumn( 'pharma', 'passhash', {type : Sequelize.TEXT,
        required : true 	
      } )
    }).then(() => {
      queryInterface.addColumn( 'Doctor', 'passhash', {type : Sequelize.TEXT,
        required : true 	
      } )
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   queryInterface.removeColumn( 'pharma', 'email')
  .then(() => {    
    queryInterface.removeColumn( 'pharma', 'passhash')
  }).then(() => {
    queryInterface.removeColumn( 'Doctor', 'passhash')
  });
  }
};
