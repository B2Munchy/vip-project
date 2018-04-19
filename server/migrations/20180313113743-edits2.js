'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'pharmas', 'email', {type : Sequelize.STRING,
      unique : true } )
    .then(() => {    
      queryInterface.addColumn( 'pharmas', 'passhash', {type : Sequelize.TEXT,
        required : true 	
      } )
    }).then(() => {
      queryInterface.addColumn( 'Doctors', 'passhash', {type : Sequelize.TEXT,
        required : true 	
      } )
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'pharmas', 'email')
  .then(() => {    
    queryInterface.removeColumn( 'pharmas', 'passhash')
  }).then(() => {
    queryInterface.removeColumn( 'Doctors', 'passhash')
  });
  }
};
