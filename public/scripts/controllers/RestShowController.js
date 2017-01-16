angular.module('dinerApp')
  .controller('RestShowController', RestShowController);


// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
RestShowController.$inject=['$http','$routeParams', '$location'];
function RestShowController($http, $routeParams, $location) {
  var vm = this;
  var name = $routeParams.name; // used to grab book ID
    console.log(name)
    $http({
      method: 'GET',
      url: '/restaurants'+ name
    }).then(function successCallback(response) {
      // console.log("Hitting Get Success on BooksShowController", response.data);
      vm.restaurant = response.data;
    }, function errorCallback(response) {
      // console.log('There was an error getting the data', response);

    });

}
