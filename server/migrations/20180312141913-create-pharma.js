'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pharmas', {
      name : Sequelize.STRING,
      id : {type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      description : Sequelize.TEXT,
      location: Sequelize.TEXT,
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
    return queryInterface.dropTable('pharmas');
  }
};