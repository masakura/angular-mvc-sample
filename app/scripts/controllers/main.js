'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .factory('DummyRepositoryService', function ($q) {
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
      var deferred = $q.defer();
      deferred.resolve(getRepositories(user));
      return deferred.promise;
      // return getRepositories(user);
    };

    return DummyRepositoryService;
  })
  .factory('repositoryLibrary', function (DummyRepositoryService) {
    var repositoryService = new DummyRepositoryService();

    return {
      userInput: '',
      repositories: [],
      fetch: function () {
        // this.repositories = repositoryService.fetch(this.userInput);
        var that = this;
        repositoryService.fetch(this.userInput)
          .then(function (repositories) { that.repositories = repositories; });
      }
    };
  })
  .controller('MainCtrl', function ($scope, repositoryLibrary) {
    var model = $scope.model = repositoryLibrary;

    $scope.fetch = function () { model.fetch(); };
  });
