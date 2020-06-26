(function(){

  angular.module('data',[]);

  angular.module('data')
  .controller('CategoriesComponentController',CategoriesComponentController)
  .controller('ItemsController',ItemsController);

  CategoriesComponentController.$inject=['items']
  function CategoriesComponentController(items){
    var menuCategories=this;
    menuCategories.items=items;

  }

  ItemsController.$inject=['items']
  function ItemsController(items){
    var menuItems=this;
    menuItems.items=items['menu_items'];
    menuItems.cat=items['category']

  }
})();
