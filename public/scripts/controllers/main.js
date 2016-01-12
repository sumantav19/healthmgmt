'use strict';

/**
 * @ngdoc function
 * @name healthmgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthmgmtApp
 */
angular.module('healthmgmtApp')
  .controller('MainCtrl', function ($scope,restservice,$routeParams) {
  	$scope.notificationModalTab = 'first';
    restservice.customer.getCustomer({'customerId':$routeParams.customerId},function success(response){
    	$scope.customer = response;
    },function error(httpErrResponse){

    })
    $scope.changeModalTab = function(tab){
    	$scope.notificationModalTab = tab;
    }
  });
