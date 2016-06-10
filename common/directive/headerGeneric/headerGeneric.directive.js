(function () {

  angular
    .module('albertoquesadaApp')
    .directive('headerGeneric', headerGeneric);

  function headerGeneric () {
    return {
      restrict : 'EA',
      templateUrl: '/common/directive/headerGeneric/headerGeneric.template.html'
    };
  }

})();
