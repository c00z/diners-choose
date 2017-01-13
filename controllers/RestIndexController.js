angular.module('dinerApp')
  .controller('RestIndexController', RestIndexController);


RestIndexController.$inject=['$http','$routeParams', '$location'];
function RestIndexController($http, $routeParams, $location) {
  var vm = this;
  vm.newRestaurant = {};
  vm.newRestaurant = {
    name: 'HARD CODED in App.js',
    description: 'OUT',
    location: '370 14th St, San Francisco, CA 94103',
    url: 'https://www.yelp.com/biz/shizen-vegan-sushi-bar-and-izakaya-san-francisco',
    coordinates: {
      lat: 37.768576,
      lng: -122.421622
      }
    };

}
