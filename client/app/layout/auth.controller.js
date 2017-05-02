angular.module('app.auth', [
  'ngMaterial',
  'ngMessages'
])
.controller('authController', function($scope, $http, $location) {

  $scope.user = {
    user: '',
    password: '',
    email: ''
  }
  $scope.showSignUp = true;
  $scope.toggleAuth = () => {
    $scope.showSignUp = !$scope.showSignUp;
    console.log($scope.showSignUp)
  }


  // UNCOMMENT LINES FOR POST REQUEST ONCE SERVER SETUP
  $scope.signUp = function(data){
    console.log('here')
    // $http.post('/api/users', $scope.user)
    // .then(function(data){
    //   $location.path('/dashboard')
    // })
  }

  $scope.signIn = function(data){
    console.log('here')
    // $http.post('/api/users', $scope.user)
    // .then(function(data){
    //   $location.path('/dashboard')
    // })
  }

})