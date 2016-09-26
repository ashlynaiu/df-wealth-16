'use strict';

angular.module('DF16Wealth')
	.controller('MobileCtrl', function ($scope, $state) {
		$scope.$state = $state;

		$scope.buttonModel = [
			{
				name: 'buttonOne',
				on: false,
				text: '11:00am - 12:00pm'
			},
			{
				name: 'buttonTwo',
				on: false,
				text: '1:00pm - 2:00pm'
			},
			{
				name: 'buttonThree',
				on: false,
				text: '2:30pm - 3:30pm'
			},
			{
				name: 'buttonFour',
				on: false,
				text: '4:00pm - 5:00pm'
			}
		];

		$scope.toggleButtons = function(buttonName) {
			for (var i = 0; i < $scope.buttonModel.length; i++) {
				if ($scope.buttonModel[i].name === buttonName && $scope.buttonModel[i].on === false) {
					$scope.buttonModel[i].on = true;
				}
				else {
					$scope.buttonModel[i].on = false;
				}
			}
		};
	});
