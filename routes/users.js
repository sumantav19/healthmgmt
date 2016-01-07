var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to the api Zone');
});

router.get('/users',function(request,response){
	return User.find(function(err,pages){
		if(!err){
			return response.status(200).send(pages);
		}
		return response.status(500).send(err);
	})	
})
module.exports = router;
