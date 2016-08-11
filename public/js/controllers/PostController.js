(function() {
    angular.module('ngmongoblog')
           .controller('PostController', PostController);

    PostController.$inject = ['$scope'];

    function PostController($scope){
      $scope.message = "PostController Scope Message"
    }
}());
