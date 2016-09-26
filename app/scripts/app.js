'use strict';

/**
 * @ngdoc overview
 * @name DF16Wealth
 * @description
 * # DF16Wealth
 *
 * Main module of the application.
 */

//TO DO Transitions between states
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
      .state('mobile', {
        url: 'mobile',
        parent: 'frame',
        templateUrl: 'views/mobile.html',
        controller: 'MobileCtrl'
      })
      .state('success', {
        url: 'success',
        parent: 'frame',
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl'
      });
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
