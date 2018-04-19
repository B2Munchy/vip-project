var express = require('express');
var router = express.Router();
var models = require('../server/models');


const Doctor = require('../server/models').doctor;

var data = {};

Doctor.findOne({where: {id:4}}).then(result =>{
  data = result;
  return data;
});

Doctor.update(
    { completed : [14,18,19,20], tbd:[22,23,24,25]},
    { where : {id: 4}}
)

router.get('/', function(req, res, next) {
	res.render('doc',{data:data});	
});

router.get('/data', function(req, res, next) {
  
  res.render('data',{data:data});	
});


module.exports = router;