angular.module('app',[
  'ngRoute',
  'ngMaterial',
  'app.input',
  'app.dashboard',
  'app.auth',
  'app.calendar',
  'app.services'
  'app.services.t'
])
.config(function($locationProvider, $routeProvider, $mdThemingProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('blue');
  $routeProvider
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
.run((Auth) => Auth.status)

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
