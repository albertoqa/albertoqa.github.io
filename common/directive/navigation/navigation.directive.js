(function () {

  angular
    .module('albertoquesadaApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directive/navigation/navigation.template.html',
    };
  }

})();
