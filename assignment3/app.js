(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    templateUrl: 'menuList.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    link: FoundItemsLink,
    transclude: true
  };

  return ddo;
}

function FoundItemsLink(scope, element, attrs, controller){
  scope.$watch('items.length', function (newValue, oldValue) {
  console.log("Old value: ", oldValue);
  console.log("New value: ", newValue);

  if (newValue === 0) {
    displayWarning();
  }
  else {
    removeWarning();
  }
  function displayWarning() {
  // Using Angular jqLite
  var warningElem = element.find("div");
  warningElem.css('display', 'block');

  // If jQuery included before Angular
  //var warningElem = element.find("div.error");
  //warningElem.slideDown(900);
}

function removeWarning() {
  // Using Angular jqLite
  var warningElem = element.find('div');
  warningElem.css('display', 'none');

  // If jQuery included before Angular
  //var warningElem = element.find('div.error');
//  warningElem.slideUp(900);
}
});
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list=this;
  list.searchItem="";
  list.getSearchedItems=function(){

    var promise=MenuSearchService.getMatchedMenuItems(list.searchItem);
    promise.then(function(result){
      list.found=result;
    },function(error){
      console.log(error);
    })
  };
  list.remove=function(index){
    list.found.splice(index,1);
  };
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service=this;
  service.getMatchedMenuItems=function (searchTerm){

    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
    // process result and only keep items that match
    var foundItems=[];
    var menuItems=result.data["menu_items"];
    if(searchTerm!=""){
    for(var i=0;i<menuItems.length;i++){
      if(menuItems[i]['description'].indexOf(searchTerm)!=-1){
        var obj={
          'short_name':menuItems[i]['short_name'],
          'name':menuItems[i]['name'],
          'description':menuItems[i]['description']
        };
        foundItems.push(obj);

    }
    }
  }
    // return processed items
    return foundItems;
});

  };

}

})();
