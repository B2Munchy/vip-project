const Sequelize = require('sequelize');

'use strict';
module.exports = (sequelize, DataTypes) => {
  var doctor = sequelize.define('doctor', {
    name : Sequelize.STRING,
    id : {type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    passhash: {type : Sequelize.TEXT,
      required : true,
      allowNull: false	
    },
    job : Sequelize.STRING,
    email: {type : Sequelize.STRING,
      unique : true ,
      validate: {
        isEmail: true
      }	
    },
    points :  { type: Sequelize.INTEGER, defaultValue: 0},
    cv : Sequelize.TEXT,
    completed: Sequelize.ARRAY(Sequelize.STRING),
    tbd: Sequelize.ARRAY(Sequelize.STRING)
  }, {});
  doctor.associate = function(models) {
    // associations can be defined here
  };
  return doctor;
};
