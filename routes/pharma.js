var express = require('express');
var router = express.Router();
var models = require('../server/models');


const Pharma = require('../server/models').pharma;

var data = {};

Pharma.findOne().then(result =>{
  data = result;
  return data;
});

router.get('/', function(req, res, next) {
	res.render('pharma',{data:data});	
});

router.get('/data', function(req, res, next) {
  
  res.render('data',{data:data});	
});


module.exports = router;
