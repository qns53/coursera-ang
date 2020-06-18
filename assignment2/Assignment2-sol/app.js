(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;



  list1.items = ShoppingListCheckOffService.getToBuyItems();


  list1.buyItem = function (index) {
    ShoppingListCheckOffService.addItem(index);
  }
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;



  list2.items = ShoppingListCheckOffService.getBoughtItems();

}



function ShoppingListCheckOffService() {
  var service = this;


  var toBuyItems = [{
    name:"Cookie",
    quantity:10
  },
{
  name:"Dark Choclate",
  quantity:20
},
{
  name:"Burgers",
  quantity:5
},
{
  name:"Handwash Refill",
  quantity:100
},
{
  name:"N-95 Masks",
  quantity:5
}
];
  var boughtItems=[];

  service.addItem = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index,1);

  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
  service.getToBuyItems = function () {
    return toBuyItems;
  };
}


})();
