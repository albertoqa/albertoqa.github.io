(function () {

  angular
  .module('albertoquesadaApp')
  .controller('chatbotCtrl', chatbotCtrl);

  chatbotCtrl.$inject = ['$scope'];
  function chatbotCtrl ($scope) {
    var vm = this;

    vm.messages = [];
    vm.messages.push({text:"Hello, my name is Alberto Quesada.", from:true});
    vm.messages.push({text:"What would you like to know?", from:true});

    vm.getTotalMessages = function () {
      return vm.messages.length;
    };

    $('#messageIn').submit(function(event){
      event.preventDefault();
      vm.messages.push({text:$scope.newMessage, from:false});
      $scope.newMessage = "";
    });


  }

})();
