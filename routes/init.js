const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://dell:12345@localhost:5432/vip-dev');
const Pharma = require('../server/models').pharma;
const Product = require('../server/models').product;
const Question = require('../server/models').question;
const Doctor = require('../server/models').doctor;
const Answer = require('../server/models').answer;
const Reward = require('../server/models').reward;
const Quiz = require('../server/models').quiz;

module.exports = {
  Sequelize,
  sequelize: sequelize,
  Pharma,
  Product,
  Question,
  Doctor,
  Answer,
  Reward,
  Quiz
}

// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, defaultValue: 0},
//   cv : Sequelize.INTEGER,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// const Quiz = sequelize.define('quiz', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   taken_no: Sequelize.INTEGER,
//   points : Sequelize.INTEGER,
//   total_time : Sequelize.INTEGER,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, defaultValue: 0},
//   cv : Sequelize.TEXT,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, defaultValue: 0},
//   cv : Sequelize.TEXT,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, defaultValue: 0},
//   cv : Sequelize.TEXT,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });

// const Doctor = sequelize.define('doctor', {
//   name : Sequelize.STRING,
//   id : {type : Sequelize.INTEGER,
//     primaryKey : true,
//     autoIncrement: true
//   },
//   job : Sequelize.STRING,
//   email: {type : Sequelize.STRING,
//   	unique : true 	
//   },
//   points :  { type: Sequelize.INTEGER, defaultValue: 0},
//   cv : Sequelize.TEXT,
//   completed: Sequelize.ARRAY(Sequelize.STRING),
//   tbd: Sequelize.ARRAY(Sequelize.STRING)

// });


