angular.module('app.auth', [
  'ngMaterial',
  'ngMessages'
])
.controller('authController', function($scope, $http, $location, Auth) {

  Auth.logout();

  $scope.user = {
    username: '',
    password: '',
  }

  $scope.getStarted = false;

  $scope.showSignUp = true;

  $scope.toggleAuth = () => {
    $scope.showSignUp = !$scope.showSignUp;
  }

  $scope.toggleGetStarted = () => {
    $scope.getStarted = !$scope.getStarted;
  }

  // send to correct path based on sign in or sign up
  $scope.authenticateUser = function(userData){
    if($scope.showSignUp){
      Auth.register(userData);
    } else {
      Auth.signin(userData);
    }
  }

})
