angular.module('dinerApp')
  .controller('LoginController', LoginController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
LoginController.$inject=['$http','$routeParams', '$location'];
function LoginController($http, $routeParams, $location) {
  var vm = this;


}
