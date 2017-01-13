angular.module('dinerApp')
  .controller('HomeController', HomeController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
HomeController.$inject=['$http','$routeParams', '$location'];
function HomeController($http, $routeParams, $location) {
  var vm = this;


}
