var albertoquesadaApp = angular.module('albertoquesadaApp', ['ngRoute']);

albertoquesadaApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: '/common/views/genericText.view.html',
      controller: 'aboutCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});

})

angular
  .module('albertoquesadaApp')
  .config(['$routeProvider', config]);
