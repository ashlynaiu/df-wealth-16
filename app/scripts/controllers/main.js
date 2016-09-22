'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients, $timeout) {
		//Get Client Items
		clients.items().success(function(data){
				$scope.clients = data;
		});

		//ng-if states
		$scope.showClientList = false;
		$scope.showWave = true;
		$scope.showFilter = false;
		$scope.showDropdown = false;
		$scope.newSegment = false;
		$scope.showScheduler = false;
		$scope.showSuccess = false;

		//Open Main Scheduler
		$scope.toggleScheduler = function() {
			if($scope.showScheduler === false) {
				$scope.showScheduler = true;
			}
			else {
				$scope.showScheduler = false;
			}
		};

		//On click for connect to clients
		$scope.toggleSchedulerComplete = function() {
			$scope.showScheduler = false;
			$timeout(function() {
				$scope.showSuccess = true;
			}, 1000);
			$timeout(function() {
				$scope.showSuccess = false;
			}, 5000);
		};

		//Close the success notification
		$scope.closeNotification = function() {
			$scope.showSuccess = false;
		};

		//Toggle the dropdown segment menu
		$scope.toggleDropdown = function() {
			if($scope.showDropdown === false) {
				$scope.showDropdown = true;
			}
			else {
				$scope.showDropdown = false;
			}
		};

		//Show new segment box
		$scope.updateSegment = function() {
			$scope.newSegment = true;
			$scope.showDropdown = false;
		};

		//Toggle the client list component
		$scope.toggleClientList = function() {
			if ($scope.showClientList === false) {
				$scope.showClientList = true;
			}
			else {
				$scope.showClientList = false;
			}
		};

		//Toogle the slider with the filter
		$scope.toggleFilter = function() {
			if ($scope.showFilter === false) {
				$scope.showFilter = true;
				$scope.showWave = false;
			}
		};

		//Filter Client List
		// $scope.filteredClients = [];
		// $scope.includeTier = function(tier) {
		// 	var i = $.inArray(tier, $scope.filteredClients);
		// 	if (i > -1) {
		// 			$scope.filteredClients.splice(i, 1);
		// 	} else {
		// 			$scope.filteredClients.push(tier);
		// 	}
		// };

		// $scope.clientFilter = function(client) {
		// 	if ($scope.filteredClients.length > 0) {
		// 			if ($.inArray(client.tier, $scope.filteredClients) < 0)
		// 					return;
		// 	}
		// 	return client;
		// };

		$scope.checkboxModel = {
			platinum : true,
			gold: false
		};

		$scope.updateClient = function() {
			console.log($scope.clients.length);
			if($scope.checkboxModel.platinum) {
				for (var i = 0; i < $scope.clients.length; i++) {
					if($scope.clients[i].tier === 'Platinum') {
						$scope.clients.splice(i, 1);
					}
				}
			}
		};

		$scope.test = function() {
			console.log('hack this shit');
		};

		//Toggle the slider with the chart
		$scope.toggleWave = function() {
			if ($scope.showWave === false) {
				$scope.showWave = true;
				$scope.showFilter = false;
			}
		};
	});
