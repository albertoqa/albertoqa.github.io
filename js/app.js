(function () {

  angular.module('albertoquesadaApp', ['ngRoute']);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : '/home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl : '/about/about.view.html',
      controller : 'aboutCtrl',
      controllerAs : 'vm'
    })
    .when('/chatbot', {
      templateUrl : '/chatbot/chatbot.view.html',
      controller : 'chatbotCtrl',
      controllerAs : 'vm'
    })
    .otherwise({redirectTo: '/'});
  }

  angular
    .module('albertoquesadaApp')
    .config(['$routeProvider', config]);

})();
