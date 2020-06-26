(function(){

  angular.module('data').
  component('categories',{
    templateUrl: 'categories.template.html',

    bindings: {
      items: '<'

  }

  });

  angular.module('data').
  component('items',{
    templateUrl: 'items.template.html',

    bindings: {
      items: '<',
      cat:'<'
  }

  });
})();
