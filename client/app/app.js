angular.module('app',[
  'ngRoute',
  'ngMaterial',
  'app.input',
  'app.dashboard',
  'app.auth'
])
.config(function($locationProvider, $routeProvider, $mdThemingProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('blue');
  $routeProvider
    // I think this should just be '/'
    .when('/', {
      templateUrl: './app/layout/landing.html',
      controller: 'authController'
    })
    .when('/input', {
      templateUrl: './app/input/input.html',
      controller: 'inputController'
    })
    .when('/dashboard', {
      templateUrl: './app/dashboard/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/logout', {
      redirectTo: '/'
    })

})
.run(function ($rootScope, $location, $http) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    $http.get('api/status').then(function(data){
      if(next.$$route && !data.data.status){
        $location.path('/');
      }
    })
  })
});

// .     .       .  .   . .   .   . .    +  .
//   .     .  :     .    .. :. .___---------___.
//        .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .
//     .  :       .  .  .:../:            . .^  :.:\.
//         .   . :: +. :.:/: .   .    .        . . .:\
//  .  :    .     . _ :::/:               .  ^ .  . .:\
//   .. . .   . - : :.:./.                        .  .:\
//   .      .     . :..|:                    .  .  ^. .:|
//     .       . : : ..||        .                . . !:|
//   .     . . . ::. ::\(                           . :)/
//  .   .     : . : .:.|. ######              .#######::|
//   :.. .  :-  : .:  ::|.#######           ..########:|
//  .  .  .  ..  .  .. :\ ########          :######## :/
//   .        .+ :: : -.:\ ########       . ########.:/
//     .  .+   . . . . :.:\. #######       #######..:/
//       :: . . . . ::.:..:.\           .   .   ..:/
//    .   .   .  .. :  -::::.\.       | |     . .:/
//       .  :  .  .  .-:.":.::.\             ..:/
//  .      -.   . . . .: .:::.:.\.           .:/
// .   .   .  :      : ....::_:..:\   ___.  :/
//    .   .  .   .:. .. .  .: :.:.:\       :/
//      +   .   .   : . ::. :.:. .:.|\  .:/|
//      .         +   .  .  ...:: ..|  --.:|
// .      . . .   .  .  . ... :..:.."(  ..)"
//  .   .       .      :  .   .: ::/  .  .::\
