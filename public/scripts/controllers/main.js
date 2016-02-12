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

    $('#card-content .panel').click(
      function(){
        $('#card-content').removeClass('col-lg-8');
        $('#card-content').addClass('col-lg-3');
        $('#detail').removeClass('collapse'); 
        $('#detail').addClass('col-lg-5'); 
      })    
    $('#detail').click(function(){ 
      $('#card-content').removeClass('col-lg-3');
      $('#card-content').addClass('col-lg-8');
      $('#detail').removeClass('col-lg-5'); 
      $('#detail').addClass('collapse'); 
    })  
  });
