angular.module('app.auth', [
  'ngMaterial',
  'ngMessages'
])
.controller('authController', function($scope, $http, $location) {

  $http.get('/api/logout');

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
      $http.post('/api/register', JSON.stringify($scope.user))
      .then(function(data){
        $location.path('/dashboard')
      })
    } else {
      $http.post('/api/login', JSON.stringify($scope.user))
      .then(function(data){
        $location.path('/dashboard')
      })
    }
  }

})