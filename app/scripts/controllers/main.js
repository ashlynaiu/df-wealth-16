'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients) {
		$scope.showClientList = false;
		$scope.showWave = true;
		$scope.showFilter = false;
		$scope.showDropdown = false;

		$scope.toggleDropdown = function() {
			if($scope.showDropdown === false) {
				$scope.showDropdown = true;
			}
			else {
				$scope.showDropdown = false;
			}
		};

		$scope.toggleClientList = function() {
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

		$scope.toggleWave = function() {
			if ($scope.showWave === false) {
				$scope.showWave = true;
				$scope.showFilter = false;
			}
		};

		clients.items().success(function(data){
				$scope.clients = data;
		});
	});
