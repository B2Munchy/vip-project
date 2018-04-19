var express = require('express');
var router = express.Router();
var models = require('../server/models');

const Product = require('../server/models').product;

var data = {};

Product.findOne().then(result =>{
  data = result;
  return data;
});

router.get('/', function(req, res, next) {
	res.render('products',{data:data});	
});

router.get('/data', function(req, res, next) {
  
  res.render('data',{data:data});	
});


module.exports = router;
