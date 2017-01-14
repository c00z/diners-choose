console.log('Sanity Check');

//Materialze!
// var app = angular.module('materializeApp', ['ui.materialize'])
//     .controller('BodyController', ["$scope", function ($scope) {
//         $scope.select = {
//             value: "Option1",
//             choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
//         };
//     }]);


angular.module('dinerApp', ['ngRoute', 'ui.materialize'])
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
    .when('/dashboard', {
      templateUrl: 'templates/restdash.html',
      // controller: 'RestDashController',
      // controllerAs: 'restDashCtrl'
    })
    .when('/rest_add', {
      templateUrl: 'templates/restadd.html',
      controller: 'RestAddController',
      controllerAs: 'restAddCtrl'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      // controller: 'RestAddController',
      // controllerAs: 'restAddCtrl'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      // controller: 'RestAddController',
      // controllerAs: 'restAddCtrl'
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
