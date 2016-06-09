(function () {

  angular.module('albertoquesadaApp', ['ngRoute']);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});
  }

  angular
    .module('albertoquesadaApp')
    .config(['$routeProvider', config]);

})();
