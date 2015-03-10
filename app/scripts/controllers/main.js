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
        this.repositories = getRepositories(this.userInput);
        /*
        switch (this.userInput) {
        case 'GrayBullet':
          this.repositories = [
            {name: 'generator-graybullet-cordova', stars: 6},
            {name: 'grunt-cordova-ng', stars: 2},
            {name: 'testmator', stars: 0}
          ];
          break;

        case 'masakura':
          this.repositories = [
            {name: 'sample0', stars: 1},
            {name: 'sample1'}
          ];
          break;

        default:
          this.repositories = [];
          break;
        }
         */
      }
    };
  })
  .controller('MainCtrl', function ($scope, repositoryLibrary) {
    var model = $scope.model = repositoryLibrary;

    $scope.fetch = function () { model.fetch(); };
  });
