'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reward_lists', {
      id : {type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      rewards: Sequelize.ARRAY(Sequelize.INTEGER),
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
    return queryInterface.dropTable('reward_lists');
  }
};