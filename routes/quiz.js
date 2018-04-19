var express = require('express');
var router = express.Router();
var models = require('../server/models');


const Pharma = require('../server/models').pharma;
const Product = require('../server/models').product;
const Question = require('../server/models').question;
const Answer = require('../server/models').answer;
const Reward = require('../server/models').reward;
const Quiz = require('../server/models').quiz;
var data = {};

Quiz.findOne({where: {id:4}}).then(result =>{
  data = result;
  return data;
});

router.get('/', function(req, res, next) {
	res.render('quiz',{data:data});	
});

router.get('/data', function(req, res, next) {
  
  res.render('data',{data:data});	
});


module.exports = router;
