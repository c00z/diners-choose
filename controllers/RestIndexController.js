angular.module('dinerApp')
  .controller('RestIndexController', RestIndexController);


RestIndexController.$inject=['$http','$routeParams', '$location'];
function RestIndexController($http, $routeParams, $location) {
  var vm = this;
  vm.newRestaurant = {};
  vm.newRestaurant = [{
    name: 'Shizen',
    description: 'Vegan Sushi Bar and Izakaya',
    address: '370 14th St, San Francisco, CA 94103',
    url: 'https://www.yelp.com/biz/shizen-vegan-sushi-bar-and-izakaya-san-francisco',
    image: 'http://www.grillingcompanion.com/wp-content/uploads/2008/11/pizzacooked640.jpg',
    coordinates: {
      lat: 37.768576,
      lng: -122.421622
    }
}, {
    name: 'Shangri-La',
    description: 'Chinese eatery serving vegetarian, vegan & kosher dishes.',
    address: '2026 Irving St, San Francisco, CA 94122',
    url: 'http://www.shangrilavgrest.com/',
    image: 'http://media.npr.org/assets/img/2010/08/22/foodtruck2_wide-6f9e9521d675047a1eacf347f3d3d46fa6fc71b5-s900-c85.jpg',
    coordinates: {
      lat: 37.763665,
      lng: -122.479805
    }
}, {
    name: 'Chipotle Mexican Grill',
    description: 'Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.',
    address: '232 O\'Farrell St, San Francisco, CA 94102',
    url: 'https://chipotle.com/allergens',
    image: 'https://www.gha.com/var/ezwebin_site/storage/images/files/gha-images/brands/rydges-hotels/rydges-camperdown-sydney/greek-gourmet-food-safari-of-marrickville/rydges_camperdown_greek-gourmet-safari/5034889-1-eng-GB/Rydges_Camperdown_Greek-Gourmet-Safari_le_page.jpg',
    coordinates: {
      lat: 37.786536,
      lng: -122.408587
    }
}, {
    name: 'Gracias Madre',
    description: 'Vegan Mexican Cuisine',
    address: '2211 Mission St, San Francisco, CA 94110',
    url: 'http://gracias-madre.com/',
    image:'https://pantograph0.goldbely.com/uploads/merchant/main_image/309/lindas-gourmet-latkes.fc2feb2122f135440188dd1fca2f740e.jpg',
    coordinates: {
      lat: 37.761800,
      lng: -122.419069
    }
}, {
    name: 'Cha-Ya',
    description: 'Vegan Sushi Restaurant',
    address: '762 Valencia St, San Francisco, CA 94110',
    url: 'http://www.thechaya.com/',
    image: 'http://www.gourmetfoodsltd.com/~gourmet/dynimage/galleria/450/image.png',
    coordinates: {
      lat: 37.761006,
      lng: -122.421652
    }
}

]}
