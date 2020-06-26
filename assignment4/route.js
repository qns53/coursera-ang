(function(){

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'CategoriesComponentController as menuCategories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{itemType}',
      templateUrl: 'items.html',
      controller: 'ItemsController as menuItems',
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.itemType);
        }]
      }
    });
}

})();
