angular.module('app.dashboard',['ngMaterial', 'profileInfoWidget', 'newsWidget', 'goalsWidget', 'tasksWidget', 'calendarWidget', 'jobWidget'])
  .controller('dashboardController', function dashboardController($scope){
    $scope.jobs = sampleData;
  });
