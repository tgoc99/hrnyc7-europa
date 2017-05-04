angular.module('app.calendar', ['ngMaterial', 'ngMessages'])
.component('jobCalendar', {
  templateUrl: './app/layout/jobCalendar.html',
  controller: function calendarController($scope){
    $scope.today = new Date();
    $scope.filterDates = function(date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    };
  },
  bindings: {
    userDates: '='
  }
})
