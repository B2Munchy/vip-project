'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rewards', {
      id : {type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      redeems: Sequelize.INTEGER,
      points_required: Sequelize.INTEGER,
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
    return queryInterface.dropTable('rewards');
  }
};