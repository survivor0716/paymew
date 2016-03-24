'use strict';

/**
 * @ngdoc function
 * @name paymewApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paymewApp
 */
angular.module('paymewApp')
  .controller('LoginCtrl', function ($log, $scope) {
    $scope.loginSubmit = function () {
      $log.debug('test');
    };
  });
