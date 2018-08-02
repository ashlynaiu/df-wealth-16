'use strict';

angular.module('DF16Wealth')
	.controller('SuccessCtrl', function ($scope) {
		//ng-if states for calendar
		//Move calendar state management to directive
		$scope.mainCalendar = false;
		$scope.sentInvitesCalendar = false;
		$scope.successCalendar = true;
		//Remove background class to html element
		var htmlDOM = angular.element( document.querySelector( 'html' ));
		htmlDOM.removeClass('mobile-background');
	});
