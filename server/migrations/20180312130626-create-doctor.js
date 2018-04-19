'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doctors', {

      name : Sequelize.STRING,
      id : {type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      job : Sequelize.STRING,
      email: {type : Sequelize.STRING,
        unique : true 	
      },
      points :  { type: Sequelize.INTEGER, required: false, defaultValue: 0},
      cv : Sequelize.TEXT,
      completed: Sequelize.ARRAY(Sequelize.STRING),
      tbd: Sequelize.ARRAY(Sequelize.STRING),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Doctors');
  }
};