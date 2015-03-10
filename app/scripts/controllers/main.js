'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .factory('repositoryLibrary', function () {
    var library = {};

    library.userInput = '';
    library.repositories = [];

    library.fetch = function () {
      switch (library.userInput) {
      case 'GrayBullet':
        library.repositories = [
          {name: 'generator-graybullet-cordova', stars: 6},
          {name: 'grunt-cordova-ng', stars: 2},
          {name: 'testmator', stars: 0}
        ];
        break;

      case 'masakura':
        library.repositories = [
          {name: 'sample0', stars: 1},
          {name: 'sample1'}
        ];
        break;

      default:
        library.repositories = [];
        break;
      }
    };

    return library;
  })
  .controller('MainCtrl', function ($scope, repositoryLibrary) {
    var model = $scope.model = repositoryLibrary;

    $scope.fetch = function () { model.fetch(); };
  });
