angular.module('app.dashboard',['ngMaterial', 'profileInfoWidget', 'newsWidget', 'goalsWidget', 'tasksWidget', 'calendarWidget'])
  .controller('dashboardController', function dashboardController($scope){
    $scope.jobs = sampleData;

    $scope.setBackgroundImg = function(job) {
      return `background-image:url("${job.imgURL}")`;
    }

    $scope.getDate = function(job) {
      var dateStr = job.applicationDate;
      var date = new Date(dateStr);
      var dateFormat = moment(date).format("MMM Do YY");
      var fromNow = moment(date).fromNow();
      return `${dateFormat}  |  ${fromNow}`
    }
  });
