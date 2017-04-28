angular.module('app',[
  'ngRoute',
  'ngMaterial',
  'app.input',
  'app.dashboard',
])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    // I think this should just be '/'
    .when('/landing', {
      templateUrl: './app/layout/landing.html'
    })
    .when('/input', {
      templateUrl: './app/input/input.html',
      controller: 'inputController'
    })
    .when('/dashboard', {
      templateUrl: './app/dashboard/dashboard.html',
      controller: 'dashboardController'
    })
})
