'use strict';

angular.module('skySeedProject').controller('HeaderCtrl', function($scope, clientConfig) {

  clientConfig.then(function(config) {
    $scope.env = config.env;
  });

});
