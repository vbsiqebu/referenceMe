'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $routeParams) {
  	
  	$scope.hipchatLinks = hipchatLinks;

  	$scope.selectedTagThroughRoute = $routeParams.selectedTagInUrl;

  });
