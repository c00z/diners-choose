angular.module('dinerApp')
  .controller('RestShowController', RestShowController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
RestShowController.$inject=['$http','$routeParams', '$location'];
function RestShowController($http, $routeParams, $location) {
  var vm = this;


}
