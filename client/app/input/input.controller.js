angular.module('app.input', [
  'ngMaterial',
  'ngMessages'
])
.controller('inputController', function($scope, $http, $location, News, Companies, Jobs) {
  
  $scope.job = {
    company: undefined,
    salary: undefined,
    dateCreated: new Date(),
    position: undefined,
    contacts: [{name: undefined,
              phoneNumber: undefined,
              email: undefined}],
    link: undefined,
    website: undefined,
    description: undefined,
    imageUrl: undefined,
    currentStep: {name: undefined,
              comments:[],
              dueDate: null}, 
    nextStep: {name: undefined,
              comments:[],
              dueDate: null}
  };

  $scope.submitJob = function(data){
    console.log($scope.job);

    if($scope.job.nextStep.name === undefined) {
      $scope.job.nextStep = null;
    }

    if($scope.job.contacts[0].name === undefined) {
      $scope.job.contacts = [];
    }

    Companies.getInfo($scope.job.website).then((data)=> {
      console.log(data);

      if(data === undefined) return;

      $scope.job.imageUrl = data.logo;
      $scope.job.description = data.organization.overview;

      Jobs.create($scope.job);
    });
  }

})