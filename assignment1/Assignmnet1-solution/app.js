(function () {
'use strict';

angular.module("LunchCheck", [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
  $scope.data = "";
  $scope.msg = "";

  $scope.checkLunch = function () {
    if("".localeCompare($scope.data)==0){
      $scope.msg="Please enter data first";
    }
    else{
      var count=1; //As string is not empty so it will contain atleast one item for sure.
      var items=$scope.data.split(',');
      count=items.length;
      if(count<=3){
        $scope.msg="Enjoy!";
      }
      else{
        $scope.msg="Too much!";
      }
    }
    
  };
}
})();
