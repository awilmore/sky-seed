'use strict';

angular.module('skySeedProject').controller('HomeCtrl', function($scope, $state) {

  $scope.tabs = [
    { state: 'home.gulp', title: 'gulp'},
    { state: 'home.api', title: 'api'},
    { state: 'home.auth', title: 'auth'},
    { state: 'home.es6', title: 'es6'}
  ];

  $scope.isActive = function(tab) {
    return $state.current.name === tab.state;
  };

  $state.go('home.gulp');
});
