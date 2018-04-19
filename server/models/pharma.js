var Sequelize = require('sequelize');
'use strict';
module.exports = (sequelize, DataTypes) => {
  var pharma = sequelize.define('pharma', {
    name : Sequelize.STRING,
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    email: {type : Sequelize.STRING,
      unique : true ,
      validate: {
        isEmail: true
      }	
    },
    passhash: {type : Sequelize.TEXT,
      required : true,
      allowNull: false	
    },
    description : Sequelize.TEXT,
    location: Sequelize.TEXT     
  }, {});
  pharma.associate = function(models) {
    // associations can be defined here
  };
  return pharma;
};