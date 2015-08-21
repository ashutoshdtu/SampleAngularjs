'use strict';

/**
 * @ngdoc function
 * @name nlpsentimentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nlpsentimentApp
 */
angular.module('nlpsentimentApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    var pendingTask;

    $scope.searchHistory = [];
    $scope.searchTopic = function() {
    	$scope.searchHistory.push($scope.query);
    	//$scope.query = '';
    	if (pendingTask) {
    		clearTimeout(pendingTask);
    	}
    	pendingTask = setTimeout(fetch, 800);
    	$scope.firstSearch = 'true';
    };

    function fetch() {
      $http.get("http://www.omdbapi.com/?t=" + $scope.query + "&tomatoes=true&plot=full")
        .success(function(response) {
          $scope.details = response;
        });
    }
  }).directive('ashExtrainfo', function() {
  return {
  	restrict: 'EA',
    template: '<div><span class="label label-primary">Directors :</span> {{ details.Director }}</div><div><span class="label label-primary">Actors :</span> {{ details.Actors }}</div><div><span class="label label-primary">Genre :</span> {{ details.Genre }}</div>'
  };
});
