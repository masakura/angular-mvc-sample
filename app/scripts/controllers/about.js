'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
