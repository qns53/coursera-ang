(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://qns53-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
