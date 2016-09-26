'use strict';

/**
 * @ngdoc function
 * @name angularTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('DF16Wealth')
	.controller('SuccessCtrl', function ($scope) {
		//ng-if states for calendar
		//Move calendar state management to directive
		$scope.mainCalendar = false;
		$scope.sentInvitesCalendar = false;
		$scope.successCalendar = true;
	});
