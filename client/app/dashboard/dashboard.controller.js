angular.module('app.dashboard',['ngMaterial', 'profileWidget', 'newsWidget', 'goalsWidget', 'calendarWidget', 'jobWidget', 'tasksWidget'])
  .controller('dashboardController', function dashboardController($scope, Companies, User, Jobs, Tasks){
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

    $scope.newsArticle = {number:0};

    $scope.test = function() {
      Companies.getNews('amazon')
      .then(function(res) {
        console.log(res)
      })
    }
  });
