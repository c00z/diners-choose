console.log("restaurant add is connected");
angular.module('dinerApp')
  .controller('RestAddController', RestAddController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
RestAddController.$inject=['$http','$routeParams', '$location'];
function RestAddController($http, $routeParams, $location) {
  var vm = this;
  vm.newRestaurant = {};


  vm.createRestaurant = function () {
    $http({
      method: 'POST',
      url: '/restaurants',
      data: vm.newRestaurant,
    }).then(function successCallback(response) {
      console.log("HAIII", response);
      vm.restaurants.push(response.data);

    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }



}
