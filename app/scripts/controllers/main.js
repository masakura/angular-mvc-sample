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
      'generator-graybullet-cordova',
      'grunt-cordova-ng',
      'testmator'
    ];
  });
