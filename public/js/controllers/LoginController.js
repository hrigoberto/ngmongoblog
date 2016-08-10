(function() {
    angular.module('ngmongoblog')
           .controller('LoginController', LoginController );

    LoginController.$inject = ['$scope'];

    function LoginController($scope){
      $scope.message = "Login Controller Scope Message"
    }
}());
