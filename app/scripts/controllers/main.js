'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.repositories = [
      {name: 'generator-graybullet-cordova', stars: 6},
      {name: 'grunt-cordova-ng', stars: 2},
      {name: 'testmator', stars: 0}
    ];
  });
