angular.module('dinerApp')
  .controller('RestIndexController', RestIndexController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
RestIndexController.$inject=['$http','$routeParams', '$location'];
function RestIndexController($http, $routeParams, $location) {
  var vm = this;


}
