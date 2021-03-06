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
        .then(function (data) {
          return data.data
            .map(function (repository) {
              return {
                name: repository.name,
                stars: repository.stargazers_count // jshint ignore:line
              };
            });
        });
    };

    return DirectRepositoryService;
  })
  .factory('CachedRepositoryService', function ($q) {
    var CachedRepositoryService = function (repositoryService) {
      this.service_ = repositoryService;
      this.store_ = {};
    };

    CachedRepositoryService.prototype.fetch = function (user) {
      var store = this.store_;
      var repositories = store[user];

      if (repositories) {
        console.log('Cache Hit!');

        var deferred = $q.defer();
        deferred.resolve(repositories);
        return deferred.promise;
      }

      return this.service_.fetch(user)
        .then(function (repositories) {
          store[user] = repositories;
          return repositories;
        });
    };

    return CachedRepositoryService;
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
  .factory('repositoryLibrary', function (DirectRepositoryService, CachedRepositoryService) {
    var repositoryService = new CachedRepositoryService(new DirectRepositoryService());

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
