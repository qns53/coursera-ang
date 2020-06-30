(function () {
"use strict";

angular.module('public')
.component('signupForm', {
  templateUrl: 'src/public/signUp/signUpForm.html',
  bindings: {
    firstName:'=f',
    lastName:'=l',
    email:'=e',
    phone:'=p',
    fav_food:'=fa',
    submit:'&s',
    display:'=d'
  },
  controller:SignUpComponentController
});
SignUpComponentController.$inject=['$rootScope']
function SignUpComponentController($rootScope){
  var $ctrl=this;
  var cancelListener = $rootScope.$on('fav_food:processing', function (event, data) {


    if (data.on) {
      $ctrl.display = true;
    }
    else{
      $ctrl.display=false;
    }
  });

  $ctrl.$onDestroy = function () {
    cancelListener();
  };

}


})();
