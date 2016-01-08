'use strict';

/**
 * @ngdoc service
 * @name tcsInternalApp.restservice
 * @description
 * # restservice
 * Service in the tcsInternalApp.
 */
angular.module('healthmgmtApp')
  .factory('restservice', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = '/apiV2';
    
    var restEndPoint = this;
    restEndPoint.customer = $resource(baseUrl+'/customer/:customerId',{},{
            getCustomer : {
                method : 'GET',
                isArray : false
            }
        })
    
    /*restEndPoint = {Customer :  $resource(baseUrl+'/customer/:customerId',{
    		getCustomer : {
    			method : 'GET',
    			isArray : false    
    		}
    	})}*/
   restEndPoint.Customers = $resource(baseUrl+'/customers',{},{
        getCustomers : {
            method : 'GET',
            isArray : true
        }
    })
    return restEndPoint;
  });
