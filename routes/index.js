var express = require('express');
var router = express.Router();
var models = require('../server/models');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://dell:12345@localhost:5432/vip-dev');
const Pharma = require('../server/models').pharma;
const Product = require('../server/models').product;
const Question = require('../server/models').question;
const Doctor = require('../server/models').doctor;
const Answer = require('../server/models').answer;
const Reward = require('../server/models').reward;
const Quiz = require('../server/models').quiz;
var data = {};

// var init = require('../routes/init.js');
// var sequelize = init.sequelize;

/* GET home page. */

sequelize
  .authenticate()
  .then(() => {
		console.log('Connection has been established successfully.');

  })
  
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// router.get('/', function(req, res, next) {
// 	res.render('main',{});	
// });
// router.get('/rewards', function(req, res, next) {
// 	res.render('rewards',{});	
// });
// router.get('/pharma', function(req, res, next) {
// 	res.render('pharma',{});	
// });
// router.get('/doc', function(req, res, next) {
// 	res.render('doc',{});	
// });
// router.get('/products', function(req, res, next) {
// 	res.render('products',{});	
// });
// router.get('/test', function(req, res, next) {
// 	res.render('test',{});	
// });

// router.get('/quiz', function(req, res, next) {
// 	res.render('quiz',{});
// });


module.exports = router;
