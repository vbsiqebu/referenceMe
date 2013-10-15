'use strict';

angular.module('referenceMeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // .when('/categories', {
      //   templateUrl: 'views/categories.html',
      //   controller: 'CategoriesCtrl'
      // })
      .when('/categories/:selectedTagInUrl', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
