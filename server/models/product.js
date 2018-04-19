var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', { 
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    // pharmaId: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "pharma",
    //     key: "id"
    //   }
    // },
    name: Sequelize.STRING,
    presentation: Sequelize.TEXT,
    visits: Sequelize.INTEGER
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.pharma);
  };
  return product;
};

