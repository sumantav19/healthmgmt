'use strict';

/**
 * @ngdoc function
 * @name healthmgmtApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the healthmgmtApp
 */
angular.module('healthmgmtApp')
  .controller('AboutCtrl', function ($scope,restservice) {
    	restservice.Customers.getCustomers(function(response){
    		console.log(response);
    		$scope.customers = response;
    	},function(httpErrorResponse){

    	});

  });
