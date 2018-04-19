'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctors', {

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
      passhash: {type : Sequelize.TEXT,
        required : true, allowNull: false } ,
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
    return queryInterface.dropTable('doctors');
  }
};