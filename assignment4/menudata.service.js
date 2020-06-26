(function(){
  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject=['$http'];
  function MenuDataService($http){
    var service=this;
    service.getAllCategories=function(){
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function(result){
        return result.data;
      });
    }

    service.getItemsForCategory=function(itemType){
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+itemType)
      }).then(function(result){
        return result.data;
      });
    }
  }

})();
