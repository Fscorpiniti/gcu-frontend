'use strict';

/**
 * @ngdoc function
 * @name gcuFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gcuFrontendApp
 */
angular.module('gcuFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
