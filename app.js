console.log('Sanity Check');
angular.module('dinerApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

//injecting two different providers
config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider //below is dot chaining
    .when('/', {  //when on this url go to the below url and use these controllers
      templateUrl: 'templates/home.html',  // this "partial" html file
      controller: 'HomeController',         // uses this controller
      controllerAs: 'homeCtrl'              // with this name
    })
    .when('/rest_signup', {
      templateUrl: 'templates/restlogin.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })
    .when('/user_signup', {
      templateUrl: 'templates/userlogin.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })
    .when('/restaurants', {
      templateUrl: 'templates/restindex.html',
      controller: 'RestIndexController',
      controllerAs: 'restIndexCtrl'
    })
    .when('/restaurants/:id', {
      templateUrl: 'templates/restshow.html',
      controller: 'RestShowController',
      controllerAs: 'restShowCtrl'
    })
    .otherwise({  //if unrecoginized URL, set back to index
      redirectTo: '/'
    });

  $locationProvider //deals w/ urls, telling location provider it should be using HTML5 mode.
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
