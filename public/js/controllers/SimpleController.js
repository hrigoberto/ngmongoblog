(function() {
  angular.module('ngmongoblog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope' ]

  function SimpleController($scope){
    $scope.message = "Yeaaaahhh!!!";
  }
}());
