angular.module('app.dashboard',
  ['ngMaterial',
   'profileWidget',
   'newsWidget',
   'goalsWidget',
   'tasksWidget',
   'calendarWidget',
   'jobWidget'])
  .controller('dashboardController', function dashboardController($scope){
    $scope.jobs = sampleData;
  });
