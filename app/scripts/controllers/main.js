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
    $scope.userInput = '';
    $scope.repositories = [];

    $scope.fetch = function () {
      switch ($scope.userInput) {
      case 'GrayBullet':
        $scope.repositories = [
          {name: 'generator-graybullet-cordova', stars: 6},
          {name: 'grunt-cordova-ng', stars: 2},
          {name: 'testmator', stars: 0}
        ];
        break;

      case 'masakura':
        $scope.repositories = [
          {name: 'sample0', stars: 1},
          {name: 'sample1'}
        ];
        break;

      default:
        $scope.repositories = [];
        break;
      }
    };
  });
