angular.module('app.dashboard',['ngMaterial'])
  .controller('dashboardController', function dashboardController($scope){
    $scope.jobs = sampleData;

    $scope.setBackgroundImg = function(job) {
      return `background-image:url("${job.imgURL}")`;
    }
  });
