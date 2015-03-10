'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .factory('DummyRepositoryService', function () {
    var getRepositories = function (user) {
      switch (user) {
      case 'GrayBullet':
        return [
          {name: 'generator-graybullet-cordova', stars: 6},
          {name: 'grunt-cordova-ng', stars: 2},
          {name: 'testmator', stars: 0}
        ];

      case 'masakura':
        return [
          {name: 'sample0', stars: 1},
          {name: 'sample1'}
        ];

      default:
        return [];
      }
    };

    var DummyRepositoryService = function () {};

    DummyRepositoryService.prototype.fetch = function (user) {
      return getRepositories(user);
    };

    return DummyRepositoryService;
  })
  .factory('repositoryLibrary', function (DummyRepositoryService) {
    var repositoryService = new DummyRepositoryService();

    var getRepositories = function (user) {
      switch (user) {
      case 'GrayBullet':
        return [
          {name: 'generator-graybullet-cordova', stars: 6},
          {name: 'grunt-cordova-ng', stars: 2},
          {name: 'testmator', stars: 0}
        ];

      case 'masakura':
        return [
          {name: 'sample0', stars: 1},
          {name: 'sample1'}
        ];

      default:
        return [];
      }
    };

    return {
      userInput: '',
      repositories: [],
      fetch: function () {
        this.repositories = repositoryService.fetch(this.userInput);
        // this.repositories = getRepositories(this.userInput);
      }
    };
  })
  .controller('MainCtrl', function ($scope, repositoryLibrary) {
    var model = $scope.model = repositoryLibrary;

    $scope.fetch = function () { model.fetch(); };
  });
