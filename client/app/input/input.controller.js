angular.module('app.input', [
  'ngMaterial',
  'ngMessages'
])
.controller('inputController', function($scope, $http, $location) {
  var today = new Date();
  var nextStepDate = new Date();
  nextStepDate.setDate(nextStepDate.getDate() + 14);

  $scope.job = {
    appDate: today,
    companyName: '',
    position: '',
    salary: '',
    contact: {name: '',
              phone:'',
              email:''},
    nextStep: {name: 'Send follow-up E-mail',
               comments:'(Two weeks from now)',
               date:nextStepDate},
    currentStatus: 'Application Sent',
    comments: ''
  };

  $scope.submitJob = function(data){
    console.log('here')
    $http.post('/jobs', $scope.job)
    .then(function(data){
      $location.path('/dashboard')
    })
  }

})