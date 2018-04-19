'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pharmas',
      'productId',
      {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        refrences: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',

      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'pharmas',
      'productId'
    )
  }
};
