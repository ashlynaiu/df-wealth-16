'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients) {
		$scope.showClientList = false;
		$scope.showWave = true;
		$scope.showFiler = false;

		$scope.toogleClientList = function() {
			if ($scope.showClientList === false) {
				$scope.showClientList = true;
			}
			else {
				$scope.showClientList = false;
			}
		};

		clients.items().success(function(data){
				$scope.clients = data;
		});

	});
