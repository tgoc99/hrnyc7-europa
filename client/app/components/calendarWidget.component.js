angular.module('calendarWidget', [])
.component('calendarWidget', {
  templateUrl: './app/layout/jobCalendar.html',
  controller: function calendarController($scope, $http){
    $scope.date;
    $scope.today = new Date();
    $scope.dates = [];

    //LATER SET MAXDATE AS LATEST DATE FROM API
    $scope.maxDate = new Date();
    $scope.maxDate.setDate($scope.today.getDate() + 21);

    $http.get('/api/dates')
    .then(data => {
      var jsDates = data.map(date => new Date(date));
      $scope.dates = jsDates.map(date=> {
        return [date.getFullYear(), date.getMonth(), date.getDate()]
      });
    });

    console.log('dates:', $scope.dates)

    $scope.filterDates = date => {
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();

      return $scope.dates.reduce((acc, date)=>{
        if(year===date[0] && month === date[1] && day === date[2]){
          return true;
        }
        return acc;
      }, false)
    };
  },
})
