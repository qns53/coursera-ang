(function () {
"use strict";

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject=['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath){
  var myInfoCtrl=this;
  myInfoCtrl.basePath=ApiPath;
  myInfoCtrl.flag=true;
  myInfoCtrl.list=MenuService.getFavItems();
  if(myInfoCtrl.list.length!=0){

    myInfoCtrl.flag=false;
  }

}



})();
