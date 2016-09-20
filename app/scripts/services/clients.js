'use strict';
angular.module('DF16Wealth').factory('clients', function($http) {
    return{
        items : function() {
            return $http({
                url: '/scripts/json/clients.json',
                method: 'GET'
            });
        }
    };
});