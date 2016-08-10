(function() {
    angular.module('ngmongoblog')
           .controller('HomeController', HomeController);

  HomeController.$inject = [
    '$scope'
  ]

  function HomeController($scope){
    $scope.message = "HomeController Scope Message";
  }
}());
