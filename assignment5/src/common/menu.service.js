(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$rootScope'];
function MenuService($http, ApiPath,$rootScope) {
  var service = this;
  var data=[];
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.storeData = function (firstName,lastName,email,phone,fav_food) {
    return $http.get(ApiPath + '/menu_items/'+fav_food+'.json').then(function (response) {
      var obj={
        first_name:firstName,
        last_name:lastName,
        email_id:email,
        phone_no:phone,
        favFood:response.data
      };
    data.push(obj);
    console.log(obj);
    $rootScope.$broadcast('fav_food:processing', {on: false});

  },
  function(error){
    $rootScope.$broadcast('fav_food:processing', {on: true});

  });
  };
  service.getFavItems=function(){
    //var list=[]
    //for(var i=0;i<data.length;i++){
    //  list.push(data[i].favFood);
    //}
    return data;
  }

}



})();
