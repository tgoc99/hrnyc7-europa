angular.module('app',[
  'ngRoute',
  'ngMaterial',
  'app.input',
  'app.dashboard',
])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/landing', {
      templateUrl: './layout/landing.html'
    })
    .when('/input', {
      templateUrl: './input/input.html',
      controller: 'inputController'

    })
    .when('/dashboard', {
      templateUrl: './dashboard/dashboard.html',
      controller: 'dashboardController'
    })
})
