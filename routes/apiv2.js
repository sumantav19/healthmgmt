var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = require('../models/customer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to the apiV2 Zone');
});

router.get('/customers',function(request,response){
	return Customer.find(function(err,Customer){
		if(!err){
			return response.status(200).send(Customer);
		}
		return response.status(500).send(err);
	})	
})

router.get('/customer/:id',function(request,response){
	var custId = request.params.id;
	Customer.findOne({
		CustomerId : custId
	},function(err,Customer){
		if(!err){
			console.log(Customer);
			return response.status(200).send(Customer);
		}
		return response.status(500).send(err);
	})
})
module.exports = router;
