angular.module('app.dashboard',['ngMaterial'])
  .controller('dashboardController', function dashboardController($scope){
    $scope.jobs = sampleData;
    $scope.message = 'Hello, world!';
  });
