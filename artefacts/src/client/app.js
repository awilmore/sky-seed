'use strict';

angular.module('skySeedProject', [
  'satellizer',
  'ui.router'

]).config(function($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(false);
});
