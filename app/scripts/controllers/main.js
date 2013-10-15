'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    
  	$scope.hipchatLinks = hipchatLinks;
  	$rootScope.tags = ["Javascript", "HTML", "CSS", "Ruby"];

  	$scope.clickLink = function(tag) {
  		$location.path("/categories"); 
   		$rootScope.selection = tag;
  }
  });
