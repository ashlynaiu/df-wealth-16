'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients) {

		clients.items().success(function(data){
				$scope.clients = data;
		});

	});
