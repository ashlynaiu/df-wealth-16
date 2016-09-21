'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients) {
		$scope.showClientList = false;
		$scope.showWave = true;
		$scope.showFilter = false;

		$scope.toogleClientList = function() {
			if ($scope.showClientList === false) {
				$scope.showClientList = true;
			}
			else {
				$scope.showClientList = false;
			}
		};

		$scope.toogleFilter = function() {
			if ($scope.showFilter === false) {
				$scope.showFilter = true;
				$scope.showWave = false;
			}
		};

		$scope.toogleWave = function() {
			if ($scope.showWave === false) {
				$scope.showWave = true;
				$scope.showFilter = false;
			}
		};

		clients.items().success(function(data){
				$scope.clients = data;
		});
	});
