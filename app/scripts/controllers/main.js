'use strict';

/**
 * @ngdoc function
 * @name angularMvcSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMvcSampleApp
 */
angular.module('angularMvcSampleApp')
  .factory('DirectRepositoryService', function ($http) {
    var DirectRepositoryService = function () {};

    DirectRepositoryService.prototype.fetch = function (user) {
      return $http.get('https://api.github.com/users/' + user + '/repos')
        .then(function (data) { return data.data; });
    };

    return DirectRepositoryService;
  })
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
    };

    return DummyRepositoryService;
  })
  .factory('repositoryLibrary', function (DirectRepositoryService) {
    var repositoryService = new DirectRepositoryService();

    return {
      userInput: '',
      repositories: [],
      fetch: function () {
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
