(function() {
    angular.module('ngmongoblog')
           .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope'];

    function SignupController($scope){
      $scope.message = "SignupController Scope Message"
    }
}());
