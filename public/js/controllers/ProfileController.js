(function() {
    angular.module('ngmongoblog')
           .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope'];

    function ProfileController($scope){
      $scope.message = "ProfileController Scope Message"
    }
}());
