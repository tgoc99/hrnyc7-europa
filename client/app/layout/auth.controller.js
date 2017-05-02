angular.module('app.auth', [
  'ngMaterial',
  'ngMessages'
])
.controller('authController', function($scope, $http, $location) {

  $scope.user = {
    username: '',
    password: '',
  }

  $scope.showSignUp = true;
  $scope.toggleAuth = () => {
    $scope.showSignUp = !$scope.showSignUp;
    console.log($scope.showSignUp)
  }
  
  // send to correct path based on sign in or sign up NEED TO ADD CATCH
  $scope.authenticateUser = function(data){
    if($scope.showSignUp){
      $http.post('/api/register', $scope.user)
      .then(function(data){
        $location.path('/dashboard')
      })
    } else {
      $http.post('/api/login', $scope.user)
      .then(function(data){
        $location.path('/dashboard')
      })
    }
  }

})