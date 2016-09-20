'use strict';

/**
 * @ngdoc overview
 * @name DF16Wealth
 * @description
 * # DF16Wealth
 *
 * Main module of the application.
 */
angular
  .module('DF16Wealth', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        templateUrl: 'views/frame.html'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('success', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl'
      })
      .state('mobile', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/mobile.html',
        controller: 'MobileCtrl'
      })
      .state('activity', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
