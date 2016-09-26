'use strict';

angular.module('DF16Wealth')
	.controller('MainCtrl', function ($scope, clients, $timeout, $state) {
		//Get Client Items
		$scope.$state = $state;
		clients.items().success(function(data){
				$scope.clients = data;
		});

		//ng-if states for calendar
		//Move calendar state management to directive
		$scope.mainCalendar = true;
		$scope.sentInvitesCalendar = false;
		$scope.successCalendar = false;

		//ng-if states for scheduler
		$scope.successCalendar = false;
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

		//Send client invites
		$scope.toggleSchedulerComplete = function() {
			$scope.showScheduler = false;
			//show new calendar view
			$scope.mainCalendar = false;
			$scope.sentInvitesCalendar = true;

			//Show success toast and then fade it away
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

		//Filter the list
		$scope.checkboxModel = {
			platinum : false,
			gold: false
		};

		$scope.updateClient = function() {
			if($scope.checkboxModel.platinum && $scope.checkboxModel.gold) {
				for (var i = 0; i < $scope.clients.length; i++) {
					if($scope.clients[i].tier === 'Bronze' || $scope.clients[i].tier === 'Silver') {
						$scope.clients.splice(i, 1);
					}
				}
			}
		};

		//Toggle the slider with the chart
		$scope.toggleWave = function() {
			if ($scope.showWave === false) {
				$scope.showWave = true;
				$scope.showFilter = false;
			}
		};
	});
