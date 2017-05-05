angular.module('app.dashboard',['ngMaterial', 'profileWidget', 'newsWidget', 'newsWidget', 'goalsWidget', 'calendarWidget', 'jobWidget', 'tasksWidget', 'app.services'])
  .controller('dashboardController', function dashboardController($scope, Companies, User, Jobs, Tasks){
    
    $scope.getJobs = function() {

      Jobs.get()
      .then(function(data) {
        $scope.jobs = data
      })
      .catch(function(err) {
        console.log(err)
      })
    }
    $scope.getJobs()  

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

    $scope.test = function() {
      Companies.getNews('amazon')
      .then(function(res) {
        console.log(res)
      })
    }
  });
