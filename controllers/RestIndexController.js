angular.module('dinerApp')
  .controller('RestIndexController', RestIndexController);


RestIndexController.$inject=['$http','$routeParams', '$location'];
function RestIndexController($http, $routeParams, $location) {
  var vm = this;
  vm.newRestaurant = {};
  vm.newRestaurant = {
    name: 'Shizen',
    description: 'Vegan Sushi Bar and Izakaya',
    address: '370 14th St, San Francisco, CA 94103',
    url: 'https://www.yelp.com/biz/shizen-vegan-sushi-bar-and-izakaya-san-francisco',
    coordinates: {
      lat: 37.768576,
      lng: -122.421622
    }
}, {
    name: 'Shangri-La',
    description: 'Chinese eatery serving vegetarian, vegan & kosher dishes.',
    address: '2026 Irving St, San Francisco, CA 94122',
    url: 'http://www.shangrilavgrest.com/',
    coordinates: {
      lat: 37.763665,
      lng: -122.479805
    }
}, {
    name: 'Chipotle Mexican Grill',
    description: 'Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.',
    address: '232 O\'Farrell St, San Francisco, CA 94102',
    url: 'https://chipotle.com/allergens',
    coordinates: {
      lat: 37.786536,
      lng: -122.408587
    }
}, {
    name: 'Gracias Madre',
    description: 'Vegan Mexican Cuisine',
    address: '2211 Mission St, San Francisco, CA 94110',
    url: 'http://gracias-madre.com/',
    coordinates: {
      lat: 37.761800,
      lng: -122.419069
    }
}, {
    name: 'Cha-Ya',
    description: 'Vegan Sushi Restaurant',
    address: '762 Valencia St, San Francisco, CA 94110',
    url: 'http://www.thechaya.com/',
    coordinates: {
      lat: 37.761006,
      lng: -122.421652
    }
}

}
