angular.module('app',[
  'ngRoute',
  'ngMaterial',
  'app.input',
  'app.dashboard',
])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('./app/landing', {
      templateUrl: './layout/landing.html'
    })
    .when('./app/input', {
      templateUrl: './input/input.html',
      controller: 'inputController'
    })
    .when('./app/dashboard', {
      templateUrl: './dashboard/dashboard.html',
      controller: 'dashboardController'
    })
})
