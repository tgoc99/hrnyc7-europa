angular.module('app.input', [
  'ngMaterial',
  'ngMessages'
])
.controller('inputController', function($scope, $http, $location) {
  var today = new Date();
  var nextStepDate = new Date();
  nextStepDate.setDate(nextStepDate.getDate() + 14);

  $scope.job = {
    applicationDate: today,
    companyName: '',
    position: '',
    salary: '',
    contacts: {name: '',
              phoneNumber:'',
              email:''},
    nextStep: {name: 'Send Follow-up E-mail',
               comments:'(Two weeks from now)',
               date:nextStepDate},
    currentStatus: 'Application Sent',
    comments: ''
  };

  $scope.statuses = ['Application Sent', 'Phone Screen', 'On-Site Interview', 'Offer Received', 'Other']
  $scope.steps = ['Send Follow-up E-mail', 'Send Thank You E-mail', 'Schedule Next Interaction', 'Respond to Request', 'Other']

  // UNCOMMENT LINES FOR POST REQUEST ONCE SERVER SETUP
  $scope.submitJob = function(data){
    console.log('here')
    // $http.post('/api/users', $scope.job)
    // .then(function(data){
      $location.path('/dashboard')
    // })
  }

})