(function () {

  angular
  .module('albertoquesadaApp')
  .controller('chatbotCtrl', chatbotCtrl);

  chatbotCtrl.$inject = ['$scope'];
  function chatbotCtrl ($scope) {
    var vm = this;
    var answers = [
      {q:"How old are you?", a:"24 years old"},
      {q:"What do you like to do?", a:"I love sports and computers! I'm a freak in the shadows... :D"},
      {q:"Where would you like to live?", a:"I'm planning to move to Chile, but I'm open to any other location. I'm a free soul."},
      {q:"Do you have a girlfriend?", a:"Yes, but not A girlfriend. I've the best girlfriend of the world! Her name is Isa, you should meet her someday!"},
      {q:"Do you think ", a:"The oracle says: the future is uncertain."},
      {q:"How long will it take to drive to Asturias from Granada?", a:"8 ours my friend!"}
    ];

    vm.messages = [];
    vm.messages.push({text:"Hello, my name is Alberto Quesada.", from:true});
    vm.messages.push({text:"What would you like to know?", from:true});

    vm.getTotalMessages = function () {
      return vm.messages.length;
    };

    $('#messageIn').submit(function(event){
      event.preventDefault();
      vm.messages.push({text:$scope.newMessage, from:false});
      vm.answerToUser($scope.newMessage);
      $scope.newMessage = "";
    });

    var found = false;
    vm.answerToUser = function(message) {
      angular.forEach(answers, function(value, key) {
        if (value.q === message) {
          vm.messages.push({text:value.a, from:true});
          found = true;
        }
    });
      if(!found) {
        vm.messages.push({text:"Sorry, I don't know how to answer that yet...", from:true});
        found = false;
      }
    }


  }

})();
