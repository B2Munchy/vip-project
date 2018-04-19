var express = require('express');
var router = express.Router();
var models = require('../server/models');



const Reward = require('../server/models').reward;

var data = {};

Reward.findOne().then(result =>{
  data = result;
  return data;
});
router.get('/', function(req, res, next) {
	res.render('rewards',{data:data});	
});

router.get('/data', function(req, res, next) {
  
  res.render('data',{data:data});	
});


module.exports = router;
