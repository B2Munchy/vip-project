var express = require('express');
var router = express.Router();
var models = require('../server/models');

const Pharma = require('../server/models').pharma;
const Product = require('../server/models').product;
const Question = require('../server/models').question;
const Doctor = require('../server/models').doctor;
const Answer = require('../server/models').answer;
const Reward = require('../server/models').reward;
const Quiz = require('../server/models').quiz;
var data = {};

router.get('/', function(req, res, next) {
	res.render('main',{data:data});	
});

module.exports = router;

