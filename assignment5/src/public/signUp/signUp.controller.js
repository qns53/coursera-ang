(function () {
"use strict";

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject=['MenuService'];
function SignUpController(MenuService){
  var signUpCtrl=this;

  signUpCtrl.firstName="";
  signUpCtrl.lastName="";
  signUpCtrl.email="";
  signUpCtrl.phone="";
  signUpCtrl.fav_food="";
  signUpCtrl.display=false;
  signUpCtrl.submit=function(){
    MenuService.storeData(signUpCtrl.firstName,signUpCtrl.lastName,signUpCtrl.email,signUpCtrl.phone,signUpCtrl.fav_food);


  };
}



})();
